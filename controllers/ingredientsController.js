const Ingredient = require('../schemas/ingredientSchema')

async function getAll(req, res) {
  try {
    const ingredients = await Ingredient.find().sort({'id': 1})
    return res.status(200).json(ingredients);
  } catch (err) {
    return res.status(400).json({ error: "Bad Request" });
  }
}

async function getOne(req, res) {

  const id = req.params.id;

  try {
    const ingredient = await Ingredient.findOne({'id': id})
    if(!ingredient){
      throw Error()
    }
    return res.status(200).json(ingredient);
  } catch (err) {
    return res.status(400).json({ error: "Bad Request" });
  }
}

async function update(req, res) {
  const { apikey } = req.headers;
  const id = req.params.id;
  const { body } = req

  if(!apikey)
    return res.status(400).json({msg: "header 'apikey' required"});

  if (apikey === process.env.API_KEY) {
    try {
      await Ingredient.updateOne({'id' : id}, body)
      return res.status(200).json({msg: 'sucess'});
    } catch (err) {
      return res.status(400).json({ error: "Bad Request"});
    }

  }
  return res.status(401).json({msg: "header 'apikey' invalid'"});
}

async function create(req, res) {

  const { apikey } = req.headers;
  const { body } = req

  if(!apikey)
    return res.status(400).json({msg: "header 'apikey' required"});

  if (apikey === process.env.API_KEY) {
    try {
      await Ingredient.create(body)
      return res.status(200).json({msg: 'sucess'});
    } catch (err) {

      return res.status(400).json({ error: "Bad Request" });
    }

  }
  return res.status(401).json({msg: "header 'apikey' invalid'"});
}

module.exports = {
  getAll,
  getOne,
  update,
  create
}