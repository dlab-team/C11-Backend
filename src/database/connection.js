import {
  Sequelize
} from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE ||
  process.env.NAMEDB,
  process.env.MYSQL_USER ||
  process.env.USERDB,
  process.env.MYSQL_PASS ||
  process.env.PASSDB, {
    host: process.env.MYSQL_HOST || process.env.HOSTDB,
    dialect: process.env.DIALECTDB,
    port: process.env.PORTDB || 3306,
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Conexión Exitosa 🟢");
  } catch (error) {
    console.error("Error al conectar 🔴 :", error);
  }
}

testConnection();

export default sequelize;