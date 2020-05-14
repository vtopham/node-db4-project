const db = require('../db-config.js')

module.exports = {
    getRecipes,
    getRecipesById,
    getIngredients,
    getIngredientById,
    getShoppingList,
    getInstructions,
    addRecipe,
    addIngredient,
    addRecipeIngredient,
    addInstruction,
}

//returns all recipes in the database
function getRecipes() {
    return db.select('*')
        .from('Recipes')
}

//returns a recipe by id
function getRecipesById(id) {
    return db.select('*')
        .from('Recipes')
        .where({id})
}

//returns all ingredients in the database
function getIngredients() {

}

//returns an ingredient by Id
function getIngredientById(id) {

}

//returns a list of all ingredients and quantities for a given recipe
function getShoppingList(recipe_id) {

}

//returns an ORDERED list of step by step instructions for preparing a recipe
function getInstructions(recipe_id) {

}

//allows you to add a recipe
function addRecipe(recipe_data) {

}


//allows you to add an ingredient
function addIngredient(ingredient_name) {

}

//allows you to add an ingredient to a recipe
function addRecipeIngredient(recipe_id, ingredient_info) {

}

//allows you to add an instruction to a recipe
function addInstruction(recipe_id, instructions_info) {

}
