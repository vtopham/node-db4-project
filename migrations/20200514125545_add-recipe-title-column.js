
exports.up = function(knex) {
  return knex.schema.table('Recipes', table => {
      table.string('RecipeName');
  })
};

exports.down = function(knex) {
  
};
