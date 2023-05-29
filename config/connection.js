// Import Sequelize from library
const Sequelize = require("sequelize");

require("dotenv").config();

// Create connection to database
let sequelize;

// If deployed, use JAWSDB
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);

  // Otherwise, use local database
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: "127.0.0.1",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;
