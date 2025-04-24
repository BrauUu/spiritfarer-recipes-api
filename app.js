const express = require('express')
var cors = require('cors')

const ingredients = require('./routes/ingredientsRoutes')
const recipes = require('./routes/recipesRoutes')

const server = express()

server.use(express.json())
server.use(cors())

const port = 4001

server.listen(port, () => {
  console.log(`running on http://localhost:${port}`)
});

server.use('/ingredients', ingredients)
server.use('/recipes', recipes)
