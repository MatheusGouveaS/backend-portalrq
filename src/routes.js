const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const SectorController = require('./controllers/SectorController');
const FileController = require('./controllers/FileController');

routes.post('/setores', SectorController.store);
routes.get('/setores/:id', SectorController.show);


routes.post('/setores/:id/files', multer(multerConfig).single('file'), FileController.store);

module.exports = routes;