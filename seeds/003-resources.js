
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'pan', resource_description: 'used to cook things'},
        {resource_name: 'internet', resource_description: 'used to teach things'},
        {resource_name: 'airstrip', resource_description: 'used to fly off of'}
      ]);
    });
};
