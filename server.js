const express = require('express');
const server = express();
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const projectsRouter = require('./data/projectsRouter');
const actionsRouter = require('./data/actionsRouter');

server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());
server.use(cors());

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);


server.get('/', (req, res) => {
  res.send(`<h2>Lambda hubs API</h2>`);
})


module.exports = server;