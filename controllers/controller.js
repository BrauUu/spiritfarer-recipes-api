const Recipe = require('../schemas/recipeSchema')

async function getAll (req, res) {
  try {
    const recipes = await Recipe.find()
    return res.send(recipes)
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getAll
}