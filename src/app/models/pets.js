const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Pets = new Schema({
    name: String,
    description: String,
    image: String,
  });

module.exports = mongoose.model('pets', Pets);