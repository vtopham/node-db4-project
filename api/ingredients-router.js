const express = require('express');

const Recipes = require('./ingredients-model')
const router = express.Router();

//get a list of all ingredients
router.get('/', (req, res) => {
    Recipes.getIngredients()
        .then(ingredients => {
            res.status(200).json({data: ingredients})
        })
        .catch(err => {
            res.status(500).json({message: "Error retrieving ingredients list", error: err})
        })
})

//get an ingredient by id
router.get('/:id', (req, res) => {
    Recipes.getIngredientById(req.params.id)
        .then(ingredient => {
            res.status(200).json({data: ingredient})
        })
        .catch(err => {
            res.status(500).json({message: "Error retrieving ingredients list", error: err})
        })
})

//All recipes in the system that utilize a single ingredient
router.get('/:id/recipes', (req, res) => {
    Recipes.getRecipesByIngredient(req.params.id)
    .then(recipes=> {
        res.status(200).json({data: recipes})
    })
    .catch(err => {
        res.status(500).json({message: "Error retrieving recipes that use that ingredient", error: err})
    })
})


module.exports = router;