
exports.up = function(knex) {
  return knex.schema

    // PROJECTS TABLE

    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
        tbl.string('description', 255);
        tbl.boolean('completed').notNullable().defaultTo(false);
    })

    // TASKS TABLE

    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('description', 255).notNullable();
        tbl.string('notes', 255)
        tbl.boolean('completed').notNullable().defaultTo(false);
        // foreign key
        tbl
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
            
    })

    // RESOURCES TABLE

    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('resource_name', 255).notNullable();
        tbl.string('resource_description', 255);
    })

    // PROJECT AND RESOURCES FOREIGN KEY TABLE

    .createTable('project_resources', tbl => {
        // composite key
        tbl.primary(['project_id', 'resource_id']);
        // foreign key
        tbl
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        // foreign key
        tbl
            .integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects')
};
