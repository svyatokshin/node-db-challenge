
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'project 1', description: "cook a meal"},
        {name: 'project 2', description: 'teach knex to students'},
        {name: 'project 3', description: 'learn to fly a plane'}
      ]);
    });
};
