const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  "name": String,
  "email": String,
  "message": String,
});

module.exports = mongoose.model('contact_us', dataSchema);