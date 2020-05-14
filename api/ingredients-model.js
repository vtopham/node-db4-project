const db = require('../db-config.js')

module.exports = {
    getIngredients,
    getIngredientById,
    addIngredient,
    
}

//returns all ingredients in the database
function getIngredients() {
    return db.select('*')
        .from('IngredientsList')
}

//returns an ingredient by Id
function getIngredientById(id) {

}

//allows you to add an ingredient
function addIngredient(ingredient_name) {

}