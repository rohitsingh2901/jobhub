
const express = require('express');
const bodyParser = require('body-parser');
const Cred = require('./models/Credentials'); 
const Contact_Us = require('./models/ContactUs'); 
var cors = require('cors')
require('./db');


const app = express();

app.use(cors())

app.use(bodyParser.json());


app.post('/register', (req, res) => {

  const {email} = req.body;
  Cred.findOne({email})
  .then((result) => {
    if (result) {
      return res.status(404).json({error :'Email already exists'});   
    } else {
      const newData = new Cred(req.body);
      newData.save()
        .then(() => {
          res.status(201).json({ message: 'Data saved successfully' });
        })
        .catch((error) => {
          res.status(500).json({ error: 'Failed to save data' });
          console.log(error)
        });
    }

  })
  .catch((error) => {
    console.error('Error:', error);
    res.status(500).json({error:'Error inserting data'});
  });

});

app.post('/verify', (req, res) => {
  const { email, password } = req.body;

  Cred.findOne({ email, password })
    .then((result) => {
      if (result) {
        res.status(200).json({success : 'Data exists'});
      } else {
        res.status(404).json({error:'Data not found'});
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      res.status(500).json({error:'Error verifying data'});
    });
  
});


app.post('/contactus', (req, res) => {
  const newData = new Contact_Us(req.body);
  newData.save()
    .then(() => {
      res.status(201).json({ success: 'Data saved successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to save data' });
      console.log(error)
    });
  
});












  app.listen(5000, () => {
    console.log('Server listening on port 5000');
  });
