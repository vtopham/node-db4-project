const db = require('../db-config.js')

module.exports = {
    getRecipes,
    getRecipesById,
    getShoppingList,
    getInstructions,
    addRecipe,
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


//returns a list of all ingredients and quantities for a given recipe
function getShoppingList(recipe_id) {
    return db.select('*')
        .from('RecipeIngredients')
        .where({
            RecipeId: recipe_id
        })

}

//returns an ORDERED list of step by step instructions for preparing a recipe
function getInstructions(recipe_id) {
    return db.select('*')
        .from('Instructions')
        .where({
            RecipeId: recipe_id
        })
        .orderBy('StepNumber')
}

//allows you to add a recipe
function addRecipe(recipe_data) {

}




//allows you to add an ingredient to a recipe
function addRecipeIngredient(recipe_id, ingredient_info) {
    return db('RecipeIngredients')
        .insert({...ingredient_info, RecipeId: recipe_id})
}

//allows you to add an instruction to a recipe
function addInstruction(recipe_id, instructions_info) {
    return db('Instructions')
        .insert({...instructions_info, RecipeId: recipe_id})
}
