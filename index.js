import express from 'express';
import { Sequelize } from 'sequelize'; // Importa Sequelize
// Importa sequelize desde sequelize.js
import sequelize from './sequelize.js';
const app = express();



app.get('/', async (req, res) => {
  try {
    // Realiza la consulta de todos los usuarios
    const users = await User.findAll();

    // Envía la lista de usuarios como respuesta
    res.json(users);
  } catch (error) {
    // Manejo de errores
    res.status(500).json({ error: 'Error fetching users' });
  }
});

app.listen(3000, async () => {
  try {
    // Verifica la conexión a la base de datos al iniciar el servidor
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
    
    // Sincroniza los modelos con la base de datos
    await sequelize.sync();
    console.log('All models were synchronized successfully.');

    // Inicia el servidor
    console.log('Server started on port 3000');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
