const mongoose = require('../database/index');

const recipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  size: String,
  type: String
},
{
  versionKey: false
})

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe

