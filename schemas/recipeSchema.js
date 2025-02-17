const mongoose = require('../database/index');

const recipeSchema = new mongoose.Schema({
  bookId: Number,
  name: String,
  description: String,
  src: String,
  size: {
    type: String,
    enum: ["Lanchinho", "Pequeno", "Médio", "Grande"]
  },
  type: {
    type: String,
    enum: [
      "Gosto Adquirido", "Café da Manhã", "Cozinha Afetiva", "Sobremesa", "Exótico",
      "Refinado", "Saudável", "Tradicional", "Simples", "De Bar", "Salada",
      "Sopa", "Estimulante", "Outro"
    ]
  },
  ingredients: [{
    _id: false,
    name: String,
    src: String,
    ids: [Number],
  }],
},
  {
    versionKey: false
  })

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe

