const express = require('express');

const Recipes = require('./ingredients-model')
const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getIngredients()
        .then(ingredients => {
            res.status(200).json({data: ingredients})
        })
        .catch(err => {
            res.status(500).json({message: "Error retrieving ingredients list", error: err})
        })
})

router.get('/:id', (req, res) => {
    Recipes.getIngredientById(req.params.id)
        .then(ingredient => {
            res.status(200).json({data: ingredient})
        })
        .catch(err => {
            res.status(500).json({message: "Error retrieving ingredients list", error: err})
        })
})

module.exports = router;