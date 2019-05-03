const express = require('express');
const server = express();

const projectsRouter = require('./data/projectsRouter');
const actionsRouter = require('./data/actionsRouter');


server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);


server.get('/', (req, res) => {
  res.send(`<h2>Lambda hubs API</h2>`);
})


module.exports = server;