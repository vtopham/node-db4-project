
const express = require('express');

const server = express();

const RecipesRouter = require('./api/recipes-router');

server.use(express.json());
server.use('/api/recipes', RecipesRouter)


module.exports = server;