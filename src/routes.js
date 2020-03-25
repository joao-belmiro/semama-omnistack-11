const express = require('express');
const ongController =require('./controllers/ongController.js')
const incidentController =require('./controllers/incidentController.js')
const profileController =require('./controllers/profileController.js')
const sessionController =require('./controllers/sessionController.js')



const routes = express();

routes.get('/ongs',ongController.findAll);
routes.post('/ongs' ,ongController.save);
routes.post('/incidents',incidentController.save)
routes.get('/incidents',incidentController.findAll)
routes.delete('/incidents/:id',incidentController.deleteById)

routes.get('/profile',profileController.findIncidentsByOngId)
routes.post('/session',sessionController.create)



module.exports = routes;