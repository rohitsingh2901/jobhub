const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  "fname": String,
  "lname": String,
  "email": String,
  "phone": String,
  "coverletter": String,
  "resume": String,
  "document": String,
  "companyID" : Number,
  "companyName" : String
});

module.exports = mongoose.model('ApplyForm_data', dataSchema);



  

