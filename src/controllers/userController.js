import sequelize from "../database/connection.js";
import initModels from "../models/init-models.js";
import admin from "firebase-admin";
import credential from "../../credenciales.js";
import dotenv from "dotenv";

const models = initModels(sequelize);
dotenv.config();

admin.initializeApp({
  credential: admin.credential.cert(credential),
});

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

      try {
        // Verificar si el usuario ya existe en Firebase Authentication
        existingUser = await admin.auth().getUserByEmail(req.body.email);
      } catch (error) {
        // Si el usuario no existe, el error se manejará aquí
      }

      if (existingUser) {
        return res.status(409).json({ error: "El usuario ya existe" });
      }
      //FIREBASE
      const userResponse = await admin.auth().createUser({
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
  recoverPassword: async (req, res) => {
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
};
export default userController;
