const { EcomLoginPage } = require('../pages/EcomLoginPage');
const { GooglePage } = require('../pages/GooglePage');

const createPageObjects = (page) => ({
  ecomLoginPage: new EcomLoginPage(page),
  googlePage: new GooglePage(page),
  
});


module.exports = { createPageObjects };