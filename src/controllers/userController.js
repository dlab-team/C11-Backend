import sequelize from "../database/connection.js";
import initModels from "../models/init-models.js";
import dotenv from "dotenv";

dotenv.config();

import {
  initializeApp
} from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID,
};

initializeApp(firebaseConfig);

const auth = getAuth();

const models = initModels(sequelize);
dotenv.config();

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
        return res.status(409).json({
          error: "El usuario ya existe"
        });
      }

      // Crear usuario en Firebase
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        req.body.email,
        req.body.password
      );

      // Verificar si se creó el usuario en Firebase correctamente
      if (userCredential.user) {
        //revisar si existe un usuario, en caso de que no lo haya hacerlo administrador
        const usersCount = await models.user.count();
        let status = 2; // Valor por defecto (no administrador)

        if (usersCount === 0) {
          status = 1; // Hacer admin
        }

        // Guardar el usuario en la base de datos
        const newUser = await models.user.create({
          id: userCredential.user.uid,
          first_name: req.body.first_name.trim(),
          last_name: req.body.last_name.trim(),
          email: req.body.email.trim(),
          statuses_id: status,
        });

        res
          .status(201)
          .json({
            message: "Usuario creado exitosamente",
            userCredential
          });
      } else {
        res
          .status(500)
          .json({
            error: "Error al crear el usuario en Firebase"
          });
      }
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      res.status(500).json({
        error: "Error al crear el usuario"
      });
    }
  },
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
      const id = user.uid;
      const token = await user.getIdToken();

      // Puedes enviar el token como parte de la respuesta JSON
      res.status(200).json({
        tk: token,
        uid: id,
      });
    } catch (error) {
      // Maneja los errores de inicio de sesión
      console.error("Error de inicio de sesión:", error);
      res.status(500).json({
        error: "Error de inicio de sesión"
      });
    }
  },
  getUser: async (req, res) => {
    try {
      const user = getAuth().currentUser;
      if (user) {
        const uid = user.uid;
        const usuario = await models.user.findOne({
          where: {
            id: uid,
          },
        });
        console.log(
          "🚀 ~ file: userController.js:131 ~ getUser: ~ user:",
          usuario.dataValues
        );

        res.json(usuario);
      } else {
        res.status(404).json({
          message: "Usuario no encontrado"
        });
      }
    } catch (error) {
      console.error("Error al obtener el perfil del usuario:", error);
      res.status(500).json({
        error: "Error al obtener el perfil del usuario"
      });
    }
  },
  recoverPassword: async (req, res) => {
    try {
      const email = req.body.email;

      // Envía el correo de restablecimiento de contraseña
      await sendPasswordResetEmail(auth, email);

      // Envía una respuesta exitosa
      res.status(200).json({
        message: "Se ha enviado el correo de restablecimiento de contraseña.",
      });
    } catch (error) {
      console.error("Error al recuperar la contraseña:", error);
      res.status(500).json({
        error: "Error al recuperar la contraseña, inténtalo de nuevo más tarde",
      });
    }
  },
  //RECOVERPASSWORD
  // recoverPassword: async (req, res) => {
  //   // try {
  //   //   // Buscar el usuario por su correo electrónico en la base de datos
  //   //   const user = await models.user.findOne({
  //   //     where: {
  //   //       email: req.body.email,
  //   //     },
  //   //   });
  //   //   if (!user) {
  //   //     return res.status(404).json({ error: "Usuario no encontrado" });
  //   //   }
  //   //   // Generar un token de restablecimiento de contraseña en Firebase
  //   //   const userRecord = await admin.auth().getUserByEmail(req.body.email);
  //   //   const resetToken = await admin
  //   //     .auth()
  //   //     .generatePasswordResetLink(req.body.email);
  //   //   // Aquí puedes mostrar el enlace de restablecimiento en la respuesta
  //   //   res.json({
  //   //     message:
  //   //       "Se ha enviado el enlace de restablecimiento de contraseña al correo electrónico proporcionado.",
  //   //     resetToken,
  //   //   });
  //   // } catch (error) {
  //   //   console.error("Error al recuperar la contraseña:", error);
  //   //   res.status(500).json({ error: "Error al recuperar la contraseña" });
  //   // }
  //   sendPasswordResetEmail(auth, email)
  //     .then(() => {
  //       // Password reset email sent!
  //       // ..
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //       res.json({ errorCode, errorMessage });
  //     });
  // },
  recoverPassword: async (req, res) => {
    try {
      const email = req.body.email;

      // Envía el correo de restablecimiento de contraseña
      await sendPasswordResetEmail(auth, email);

      // Envía una respuesta exitosa
      res.status(200).json({
        message: "Se ha enviado el correo de restablecimiento de contraseña.",
      });
    } catch (error) {
      console.error("Error al recuperar la contraseña:", error);
      res.status(500).json({
        error: "Error al recuperar la contraseña, inténtalo de nuevo más tarde",
      });
    }
  },
};
export default userController;