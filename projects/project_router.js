const express = require('express');

const Projects = require('./project_model');

const router = express.Router();

// get Projects

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            console.log('working');
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to retrieve Projects"})
        })
})

// post Projects

router.post('/', (req, res) => {
    const projectData = req.body
    Projects.addProject(projectData)
        .then(proj => {
            res.status(200).json(proj)
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to Add Project"})
        })
})

// get Tasks

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;
    Projects.getTasks(id)
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to retrieve tasks"})
        })
})

// post Tasks

router.post('/:id/tasks', (req, res) => {
    const { id } = req.params;
    const taskData = req.body;
    Projects.addTask(taskData, id)
        .then(task => {
            console.log('id', id);
            console.log('task', taskData);
            res.status(201).json({"task": taskData})
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to Add Task'})
        })

})


// get Resources

router.get('/resources', (req, res) => {
    Projects.getResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to retrieve Resources"})
        })
})

// post Resources

router.post('/resources', (req, res) => {
    const resourceData = req.body;
    
    Projects.addResource(resourceData)
        .then(resource => {
            res.status(201).json({"new resource added": resourceData});
        })
        .catch(err => {
            res.status(500).json({message: "Failed to Add Resource"})
        })
})


module.exports = router;