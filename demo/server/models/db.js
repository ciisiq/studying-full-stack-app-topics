const Sequelize = require('sequelize');

// Change for your account
const sequelize = new Sequelize('demoDB', 'postgres', 'senhaboba', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  logging: false, // For the terminal not log a big error message
});

// (async function checkConnection() {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// })();

module.exports = sequelize;
