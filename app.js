const express = require('express')

const server = express()
server.use(express.json())

const port = 3001

server.listen(port, () => {
  console.log(`running on port ${port}`)
});

require('./routes/route') (server)