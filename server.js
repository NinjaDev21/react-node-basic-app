const express = require('express');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());
const mongoose = require('mongoose');
const BusinessListing = require('./model/BusinessListing');
mongoose.connect('mongodb://localhost:27017/datahub');
mongoose.Promise = global.Promise;

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
    {id: 4, firstName: 'Rary', lastName: 'Awanson'},
    {id: 5, firstName: 'Wrad', lastName: 'Jraversy'},
    {id: 6, firstName: 'Qrad', lastName: 'Vraversy'},
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);

app.get('/api/business-listings', (req, res, next) => {
  BusinessListing.find().limit( 5000 )
      .exec()
      .then((BusinessListing) => res.json(BusinessListing))
      .catch((err) => next(err));
});



