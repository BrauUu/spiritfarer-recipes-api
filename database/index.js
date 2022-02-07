const db = require('./config')
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(db.uri, { useNewUrlParser: true, useUnifiedTopology: true});
}

module.exports = mongoose