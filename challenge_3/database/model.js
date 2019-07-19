const Sequelize = require('sequelize');
const db = require('./index');

const BillingInfoModel = db.define('BillingInfo', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncremet: true },
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  address1: {
    type: Sequelize.STRING
  },
  address2: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  zipCode: {
    type: Sequelize.STRING
  },
  cc: {
    type: Sequelize.STRING
  },
  expiryData: {
    type: Sequelize.STRING
  },
  cvv: {
    type: Sequelize.STRING
  },
  billingZip: {
    type: Sequelize.STRING
  }
});

db.sync()
  .then(() => console.log('synced with mysql database'))
  .catch(err => console.log(err));

module.exports = BillingInfoModel;
