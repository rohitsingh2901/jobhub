
const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const Cred = require('./models/Credentials'); 
const Contact_Us = require('./models/ContactUs'); 
const Apply = require('./models/ApplyForm')
const JobsData = require('./models/FetchJobs')
var cors = require('cors')
const fs = require('fs');

require('./db');


const app = express();

app.use(cors())
app.use(fileUpload());
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



app.post('/apply', (req, res) => {
  const {email,companyID} = req.body;

  Cred.findOne({ email })
    .then((result) => {
      if (result) {
        Apply.findOne({email,companyID})
        .then((result) => {
          if (result) {
            return res.status(404).json({error :'Already Applied'});   
          } else {
            const newData = new Apply(req.body);
            newData.save()
              .then(() => {
                res.status(201).json({ success: 'Application submitted successfully' });
              })
              .catch((error) => {
                res.status(500).json({ error: 'Failed to save application' });
                console.log(error)
              });
          }

        })
        .catch((error) => {
          console.error('Error:', error);
          res.status(500).json({error:'Error inserting data'});
        });
      } else {
        return res.status(404).json({error:'Please login first'});
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      return res.status(500).json({error:'Error verifying data'});
    });


});



app.get('/jobs', async (req, res) => {
  try {
    const users = await JobsData.find();
    const jsonData = JSON.stringify(users);
    fs.writeFile('src/Jobs.json', jsonData, (err) => {
      if (err) {
        console.log('Error writing data to file', err);
      }
      console.log('Data written to file successfully');
    });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});











  app.listen(5000, () => {
    console.log('Server listening on port 5000');
  });
