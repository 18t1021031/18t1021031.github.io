
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
var mongooseDelete = require('mongoose-delete');


const Schema = mongoose.Schema;

const Shoe = new Schema({
    name: {type: String, required: true},
    description: {type: String, maxLeng: 255},
    image: {type: String, maxLeng: 255},
    material: {type: String,},
    color: {type: String,},
    gender: {type: String,},
    discount: {type: Number,},
    cost: {type: Number,},
    brand: {type: String,},
    slug: { type: String, slug: 'name', unique: true}
  }, {
    
    timestamps: true,
  });

  mongoose.plugin(slug);
  Shoe.plugin(mongooseDelete, { 
    deletedAt: true,
    overrideMethods: 'all' 
  });

module.exports = mongoose.model('Shoe', Shoe)