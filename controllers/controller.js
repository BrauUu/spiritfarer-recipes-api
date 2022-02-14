const Recipe = require('../schemas/recipeSchema')

async function getAll (req, res) {
  try {
    const recipes = await Recipe.find()
    return res.status(200).json(recipes);
  } catch (err) {
    return res.status(400).json({ error: "Bad Request" });
  }
}

async function getOne (req, res) {

  const id = req.params.id;
  
  try {
    const recipe = await Recipe.findById(id)
    return res.status(200).json(recipe);
  } catch (err) {
    return res.status(400).json({ error: "Bad Request" });
  }
}

module.exports = {
  getAll,
  getOne
}