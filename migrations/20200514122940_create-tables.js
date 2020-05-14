
exports.up = function(knex) {
  return knex.schema.createTable('IngredientsList', tbl => {
    tbl.increments('Id');
    tbl.string('IngredientName',100)
        .notNullable()
        .unique();
  })
  .createTable('Recipes', tbl => {
      tbl.increments('Id');
      tbl.string('Author',100);
  })
  .createTable('RecipeIngredients', tbl => {
      tbl.increments('Id');
      tbl.integer('IngredientId')
        .notNullable()
        .references('IngredientsList.Id');
      tbl.integer('RecipeId')
        .notNullable()
        .references('Recipes.Id');
      tbl.float('Quantity')
        .notNullable();
      tbl.string('UoM',100)
        .notNullable();
  })
  .createTable('Instructions', tbl => {
      tbl.increments('Id');
      tbl.integer('RecipeId')
        .notNullable()
        .references('Recipes.Id');
      tbl.integer('StepNumber')
        .notNullable();
      tbl.string('StepInstructions', 300)
        .notNullable();
  })
};

exports.down = function(knex) {
  
};
