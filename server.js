const express = require('express');

const ProjectsRouter = require('./projects/project_router.js');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectsRouter);

module.exports = server;