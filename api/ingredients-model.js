const db = require('../db-config.js')

module.exports = {
    getIngredients,
    getIngredientById,
    addIngredient,
    getRecipesByIngredient
}

//returns all ingredients in the database
function getIngredients() {
    return db.select('*')
        .from('IngredientsList')
}

//returns an ingredient by Id
function getIngredientById(id) {
    return db.select('*')
        .from('IngredientsList')
        .where({id})

}

function getRecipesByIngredient(ingredient_id) {
    return db.select('RecipeIngredients.recipeId', 'Recipes.RecipeName')
        .from('RecipeIngredients')
        .where({
            IngredientId: ingredient_id
        })
        .join('Recipes', 'Recipes.Id', '=', 'RecipeIngredients.RecipeId')
}
//allows you to add an ingredient
function addIngredient(ingredient_name) {

}