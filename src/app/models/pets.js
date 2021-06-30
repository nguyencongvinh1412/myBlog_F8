const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const Pets = new Schema({
    index: Number,
    name: String,
    description: String,
    image: String,
  },
  {
    timestamps: true,
  }
  );

Pets.plugin(AutoIncrement, {inc_field: 'index'});  

Pets.plugin(mongoose_delete,
  {
    deletedAt : true,
    overrideMethods: 'all', 
  }
);

module.exports = mongoose.model('pets', Pets);