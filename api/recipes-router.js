const express = require('express');

const Recipes = require('./recipes-model')
const router = express.Router();

//list of all recipes without details about ingredients or steps
router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.status(200).json({data: recipes})
        })
        .catch(err => {
            res.status(500).json({message: "Error retrieving recipe list", error: err})
        })
    
})

//get a recipe by id
router.get('/:id', (req, res) => {
    Recipes.getRecipesById(req.params.id)
        .then(recipe => {
            res.status(200).json({data: recipe})
        })
        .catch(err => {
            res.status(500).json({message: "Error retrieving recipe", error: err})
        })
    
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