
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('Recipes').insert([
        {Author: "Your husband who you thought was dead", RecipeName: "A dream you can't remember"},
        {Author: "A shadow, too blurry to make out", RecipeName: "Something soothing"},
        {Author: "To your best recollection, nobody", RecipeName: "Your worst fears"},
      ]);
    });
};
