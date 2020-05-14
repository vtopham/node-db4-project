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

//A list of all ingredients and quantities for a single recipe
router.get('/:id/shoppingList', (req, res) => {
    Recipes.getShoppingList(req.params.id)
        .then(ingredients => {
            res.status(200).json({data: ingredients})
        })
        .catch(err => {
            res.status(500).json({message: "Error retrieving ingredients", error: err})
        })
    
})

//add a recipe ingredient by recipe id
router.post('/:id/ingredients', (req, res) => {
    Recipes.addRecipeIngredient(req.params.id, req.body)
    .then(returned => {
        res.status(200).json({data: returned})
    })
    .catch(err => {
        res.status(500).json({message: "Error adding ingredient", error: err})
    })

})


//A correctly ordered list of how to prepare a single recipe
router.get('/:id/instructions', (req, res) => {

})

//All recipes in the system that utilize a single ingredient
router.get('/:id/recipes', (req, res) => {

})

module.exports = router;