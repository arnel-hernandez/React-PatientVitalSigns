const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define collection and schema for post

let Patients = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
})

module.exports = mongoose.model('Patients', Patients);