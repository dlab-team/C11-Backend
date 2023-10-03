import express from "express";
import {
    load
} from "./src/middleware/index.js";
import sequelize from "./src/database/connection.js";
import {
    load as routerLoad
} from "./src/router/routesLoad.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3500;
const app = express();

load(app);
routerLoad(app);
app.listen(PORT, () => console.log(`puerto 🟢 📤 http://localhost:${PORT}`));