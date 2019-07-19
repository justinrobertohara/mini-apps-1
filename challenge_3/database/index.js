const mysql = require('mysql');
const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const db = new Sequelize('multistep', 'root', 'justinrobertohara', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = db;
