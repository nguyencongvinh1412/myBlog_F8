const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Pets = new Schema({
    name: String,
    description: String,
    image: String,
  });

Pets.plugin(mongoose_delete,
  {
    deletedAt : true,
    overrideMethods: 'all', 
  }
);

module.exports = mongoose.model('pets', Pets);