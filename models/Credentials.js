const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  "email": String,
  "password": String,
  "fname": String,
  "lname": String,
});

module.exports = mongoose.model('Credentials', dataSchema);
