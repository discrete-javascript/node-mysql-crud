//Initiallising node modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const services = require('./services');

// Body Parser Middleware
app.use(bodyParser.json());

//CORS Middleware
// app.use(function (req, res, next) {
//   //Enabling CORS
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization'
//   );
//   next();
// });

// Handling Error API Calls
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(error);
  next();
});
//Setting up server
const server = app.listen(process.env.PORT || 4000, function () {
  const port = server.address().port;
  console.log('App now running on port', port);
});

// API Calls
// Get call for all the data
app.get('/api/data', services.getData);
// insert record
app.post('/api/insert', services.insertData);
// update the address
app.patch('/api/update', services.updateData);
// delete the record based on address
app.delete('/api/delete', services.deleteData);
