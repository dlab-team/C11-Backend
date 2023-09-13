import sequelize from "../database/connection.js";
import initModels from "../models/init-models.js";
// import admin from "firebase-admin";
import credential from "../../credenciales.js";
import dotenv from "dotenv";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDrPv7PzEiVw3t9vI81BGUgP1lFUBTIJM",
  authDomain: "devsafio-us.firebaseapp.com",
  projectId: "devsafio-us",
  storageBucket: "devsafio-us.appspot.com",
  messagingSenderId: "377347257592",
  appId: "1:377347257592:web:45a81af40226f97f58b70d",
  measurementId: "G-1VR36EJYBJ",
};

initializeApp(firebaseConfig);

const auth = getAuth();

const models = initModels(sequelize);
dotenv.config();
/*
admin.initializeApp({
  credential: admin.credential.cert(credential),
});
*/

const userController = {
  // CREACION DE USUARIO
  createUser: async (req, res) => {
    try {
      // Verificar si el usuario ya existe en la base de datos
      const existingUserDB = await models.user.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (existingUserDB) {
        return res.status(409).json({ error: "El usuario ya existe" });
      }

      //variable para saber si existe o no usuario con el email ingresado en FIREBASE
      let existingUser = null;
      // GFleming: Eliminar un try dentro de otro try, es muy mala práctica
      try {
        // Verificar si el usuario ya existe en Firebase Authentication
        // GFleming: Si el usuario existe o no existe eso se maneja en el login: signInWithEmailAndPassword el error
        // de este método indica que el usuario no existe o que su contraseña está mal.
        // existingUser = await admin.auth().getUserByEmail(req.body.email);
      } catch (error) {
        // Si el usuario no existe, el error se manejará aquí
      }

      if (existingUser) {
        return res.status(409).json({ error: "El usuario ya existe" });
      }
      //FIREBASE
      const userResponse = await createUserWithEmailAndPassword({
        email: req.body.email,
        password: req.body.password,
        emailVerified: false,
        disabled: false,
      });

      //revisar si existe un usuario, en caso de que no lo haya hacerlo administrador
      const usersCount = await models.user.count();

      let status = 2; // Valor por defecto (no administrador)

      if (usersCount == 0) {
        status = 1; //Hacer admin
      }

      //Base de datos
      const newUser = await models.user.create({
        first_name: req.body.first_name.trim(),
        last_name: req.body.last_name.trim(),
        email: req.body.email.trim(),
        statuses_id: status,
      });

      res.json(userResponse);
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      res.status(500).json({ error: "Error al crear el usuario" });
    }
  },
  //RECOVERPASSWORD
  /*recoverPassword: async (req, res) => {
    try {
      // Buscar el usuario por su correo electrónico en la base de datos
      const user = await models.user.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }

      // Generar un token de restablecimiento de contraseña en Firebase
      const userRecord = await admin.auth().getUserByEmail(req.body.email);
      const resetToken = await admin
        .auth()
        .generatePasswordResetLink(req.body.email);

      // Aquí puedes mostrar el enlace de restablecimiento en la respuesta
      res.json({
        message:
          "Se ha enviado el enlace de restablecimiento de contraseña al correo electrónico proporcionado.",
        resetToken,
      });
    } catch (error) {
      console.error("Error al recuperar la contraseña:", error);
      res.status(500).json({ error: "Error al recuperar la contraseña" });
    }
  },
*/
  login: async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;

      // Utiliza la función signInWithEmailAndPassword para iniciar sesión
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // El usuario ha iniciado sesión exitosamente
      const user = userCredential.user;
      console.log("Usuario autenticado:", user.getIdTokenResult());

      // Aquí puedes guardar el token en una variable
      const token = await user.getIdToken();

      // Puedes enviar el token como parte de la respuesta JSON
      res.status(200).json({ token });
      // Aquí puedes redirigir al usuario a la página principal de la aplicación o realizar otras acciones necesarias.
    } catch (error) {
      // Maneja los errores de inicio de sesión
      console.error("Error de inicio de sesión:", error);
    }
  },

  getUser: async (req, res) => {
    try {
      const userEmail = req.user.email; // Obtiene el ID del usuario autenticado desde la solicitud

      // Realiza una consulta en tu base de datos para obtener el usuario vinculado por su ID
      const user = await models.user.findOne({ where: { email: userEmail } });

      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      // Devuelve los detalles del usuario vinculado como respuesta
      res.status(200).json({ user });
    } catch (error) {
      console.error("Error al obtener el perfil del usuario:", error);
      res.status(500).json({ error: "Error al obtener el perfil del usuario" });
    }
  },
};
export default userController;
