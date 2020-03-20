const db = require('../data/db-config');

module.exports = {
    getProjects,
    getResources,
    getTasks,
    addProject,
    addResource,
    addTask,
    findById
};
// retrieving a list of projects
function getProjects() {
    return db('projects')
}

// retrieving a list of resources
function getResources() {
    return db('resources')
}

// retrieving a list of tasks, should include the project name and project description.
function getTasks(id) {
    return db('tasks')
    .select(
            'tasks.description as Task',
            'tasks.notes as Notes',
            'projects.name as Project Name',
            'projects.description as Project Description'
    )
    .join('projects', 'projects.id', 'tasks.project_id')
    .where('projects.id', id);
}


// adding projects
function addProject(project) {
    return db('projects')
        .insert(project, 'project')
        .then(ids => {
            return findById(ids[0]);
        });
}
// adding tasks

function addTask(task, project_id) {
    const newTask = {
        
        description: task.description,
        notes: task.notes,
        completed: false,
        project_id: project_id
    };
    return db('tasks').insert(newTask);
}

function addResource(resource) {
    return db('resources')
        .insert(resource, 'resource')
}

function findById(id) {
    return db('projects')
        .where({ id })
        .first();   
}