import sequelize from "../database/connection.js";
import initModels from "../models/init-models.js";
import admin from "firebase-admin";
import credential from "../../credenciales.js";
const models = initModels(sequelize);
import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";
admin.initializeApp({
  credential: admin.credential.cert(credential),
});
const valid = process.env.SECRET;
const userController = {
  createUser: async (req, res) => {
    try {
      let existingUser = null;

      try {
        // Verificar si el usuario ya existe en Firebase Authentication
        existingUser = await admin.auth().getUserByEmail(req.body.email);
      } catch (error) {
        // Si el usuario no existe, el error se manejará aquí
      }

      if (existingUser) {
        return res.status(409).json({ error: "El usuario ya existe" });
      } else {
        // Crear el usuario en Firebase Authentication
        const userResponse = await admin.auth().createUser({
          email: req.body.email,
          password: req.body.password,
          emailVerified: false,
          disabled: false,
        });

        // Generar el token JWT
        const token = jwt.sign(
          {
            username: req.body.email,
            role: req.body.password,
          },
          valid,
          {
            expiresIn: "1h",
          }
        );

        res.json(userResponse);
      }
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      res.status(500).json({ error: "Error al crear el usuario" });
    }
  },
};
export default userController;
