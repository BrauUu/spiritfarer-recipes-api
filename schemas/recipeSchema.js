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
      "Gosto Adquirido", "Café da Manhã", "Afetivo", "Sobremesa", "Exótico",
      "Requintado", "Saúdavel", "Antiquado", "Simples", "De Bar", "Salada",
      "Sopa", "Estimulante", "Outro"
    ]
  },
  ingredients: [{
    name: String,
    src: String
  }],
},
  {
    versionKey: false
  })

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe

