const express = require('express');

const flightMiddleware = require('../../middlewares/index.js');

const cityController = require('../../controllers/city-controller.js');
const flightController = require('../../controllers/flight-controller.js');
const airportController = require('../../controllers/airport-contoller.js');

const router = express.Router();

router.post('/city', cityController.create);
router.delete('/city/:id', cityController.destroy);
router.patch('/city/:id', cityController.update);
router.get('/city', cityController.getAll);
router.get('/city/:id', cityController.get);

router.post(
    '/flights', 
    flightMiddleware.validateCreateFlight, 
    flightController.create
);
router.get('/flights', flightController.getAll);

router.post('/airport', airportController.create);

module.exports = router;  