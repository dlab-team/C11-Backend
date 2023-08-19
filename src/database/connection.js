import { Sequelize } from "sequelize";

const sequelize = new Sequelize("incubadora_c11", "devsafio", "root", {
  host: "localhost",
  dialect: "mysql",
  port: 3306 || process.env.PORTDB,
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Conección Exitosa 🟢");
  } catch (error) {
    console.error("Error al conectar 🔴 :", error);
  }
}

testConnection();

export default sequelize;
