
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('IngredientsList').del()
    .then(function () {
      // Inserts seed entries
      return knex('IngredientsList').insert([
        {IngredientName: "Blood of my enemies"},
        {IngredientName: "A plum floating in perfume served in a man's hat"},
        {IngredientName: "Diamonds"},
        {IngredientName: "DVD box set of star trek: the next generation"},
        {IngredientName: "The diary of a little girl"},
        {IngredientName: "Dualshock controller"},
        {IngredientName: "Crushed doritos from the couch cushions"},
        {IngredientName: "A scream in the distance"},
        {IngredientName: "Raised Eyebrows"}
      ]);
    });
};
