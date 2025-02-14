const mongoose = require('../database/index');

const ingredientSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  src: String,
  type: {
    type: String,
    enum: [
      "Grãos", "Ingredientes", "Pesca", "Frutas e Verduras"
    ]
  },
},
  {
    versionKey: false
  })

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient

