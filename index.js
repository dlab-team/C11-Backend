import express from "express";
import { load } from "./src/middleware/index.js";
import sequelize from "./src/database/connection.js";

const PORT = process.env.PORT || 3500;
const app = express();

load(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => console.log(`puerto 🟢 📤 http://localhost:${PORT}`));
