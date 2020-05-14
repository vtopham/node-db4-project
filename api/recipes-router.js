const express = require('express');

const Recipes = require('./recipes-model')
const router = express.Router();

//list of all recipes without details about ingredients or steps
router.get('/', (req, res) => {
    res.status(200).json({message: "You have reached the receipe router"})
})

//A list of all ingrediens and quantities for a single recipe
router.get('/:id/shoppingList', (req, res) => {

})

//A correctly ordered list of how to prepare a single recipe
router.get('/:id/instructions', (req, res) => {

})

//All recipes in the system that utilize a single ingredient
router.get('/:id/recipes', (req, res) => {

})

module.exports = router;