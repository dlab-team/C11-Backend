import sequelize from "../database/connection.js";
import initModels from "../models/init-models.js";
import dotenv from "dotenv";
import jwt from 'jsonwebtoken';

dotenv.config();

const models = initModels(sequelize);
dotenv.config();

const socialLoginController = {
    // CREACION DE USUARIO
    createUser: async (req, res) => {
        try {

            const secreta = process.env.SECRETA;
            const token = req.body.token;
            const decodedToken = jwt.decode(token, secreta);
            console.log("🚀 ~ file: socialLoginController.js:27 ~ createUser: ~ decodedToken:", decodedToken.name)
            // Guardar el usuario en la base de datos

            /*             const newUser = await models.user.create({
                            id: userCredential.user.uid,
                            first_name: req.body.first_name.trim(),
                            last_name: req.body.last_name.trim(),
                            email: req.body.email.trim(),
                            statuses_id: status,
                        }); */
            res.json({
                user: decodedToken
            })
            // Verificar si el usuario ya existe en la base de datos
            /*  const existingUserDB = await models.user.findOne({
                 where: {
                     email: req.body.email,
                 },
             });

             if (existingUserDB) {
                 return res.status(409).json({
                     error: "El usuario ya existe"
                 });
             }

             // Guardar el usuario en la base de datos
             const newUser = await models.user.create({
                 id: userCredential.user.uid,
                 first_name: req.body.first_name.trim(),
                 last_name: req.body.last_name.trim(),
                 email: req.body.email.trim(),
                 statuses_id: status,
             }); */

        } catch (error) {
            console.error("Error al crear el usuario:", error);
            res.status(500).json({
                error: "Error al crear el usuario"
            });
        }
    }
};
export default socialLoginController;