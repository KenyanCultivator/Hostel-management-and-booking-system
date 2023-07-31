const Sequelize = require('sequelize');


module.exports = () => {
  try {
    const connection = new Sequelize('hostels_raw', 'root', '', {
      host: 'localhost',
      dialect: 'mysql',
      logging: false
    });

    connection.authenticate().then(() => {
      console.log('Connection has been established successfully.');
    });
    return connection;

  } catch (error) {
    console.error('Unable to connect to the database: ', error);
  }
}