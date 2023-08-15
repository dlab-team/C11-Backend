import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'mysql', // El dialecto de la base de datos que estás utilizando
  host: 'localhost',
  username: 'devsafio', // Nombre de usuario de la base de datos
  password: 'root',    // Contraseña de la base de datos
  database: 'incubadora_c11', // Nombre de la base de datos
});

export default sequelize;