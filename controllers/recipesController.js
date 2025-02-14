const Recipe = require('../schemas/recipeSchema')

async function getAll(req, res) {
  try {
    const recipes = await Recipe.find().sort({'bookId': 1})
    return res.status(200).json(recipes);
  } catch (err) {
    return res.status(400).json({ error: "Bad Request" });
  }
}

async function getOne(req, res) {

  const bookId = req.params.id;

  try {
    const recipe = await Recipe.findById(bookId)
    if(!recipe){
      throw Error()
    }
    return res.status(200).json(recipe);
  } catch (err) {
    return res.status(400).json({ error: "Bad Request" });
  }
}

async function update(req, res) {
  const { apikey } = req.headers;
  const bookId = req.params.bookId;
  const { body } = req

  if(!apikey)
    return res.status(400).json({msg: "header 'apikey' required"});

  if(bookId != body.bookId)
    return res.status(400).json({msg: "property 'bookId' on 'body' should be the same as 'bookId' param"});

  if (apikey === process.env.API_KEY) {
    try {
      const data = await Recipe.updateOne({'bookId' : bookId}, body)
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
      await Recipe.create(body)
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