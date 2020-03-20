
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'grab the meal and cook it', notes: 'first task', project_id: '1'},
        {description: 'teach the students how to use vsCode first', notes: 'knex does not come easy', project_id: '2'},
        {description: 'puchase the plane first', notes: 'learn to fly it after purchase', project_id: '3'}
      ]);
    });
};
