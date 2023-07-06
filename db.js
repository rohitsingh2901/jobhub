const mongoose = require('mongoose');

const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect('mongodb+srv://JobHub:u48Np3yU6raR3PsF@jobhubdatabase.e93wilw.mongodb.net/JobHub?retryWrites=true&w=majority', connectionOptions)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });
  

module.exports = mongoose.connection;
