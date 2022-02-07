
require('dotenv/config');

const env = process.env;

const db = {
  uri : `mongodb+srv://${env.DATABASE_USERNAME}:${env.DATABASE_PASSWORD}@sandbox.7kbv8.mongodb.net/spiritfarerRecipes?retryWrites=true&w=majority`
}

module.exports = db