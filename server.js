
const express = require('express');

const server = express();

const RecipesRouter = require('./api/recipes-router');
const IngredientsRouter = require('./api/ingredients-router')


server.use(express.json());
server.use('/api/recipes', RecipesRouter)
server.use('/api/ingredients', IngredientsRouter)

module.exports = server;