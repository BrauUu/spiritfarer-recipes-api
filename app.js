const express = require('express')

var cors = require('cors')

const server = express()

server.use(express.json())
server.use(cors())

const port = 4001

server.listen(port, () => {
  console.log(`running on port ${port}`)
});

require('./routes/route') (server)