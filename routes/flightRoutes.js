// routes/flightRoutes.js
const express = require('express');
const { getFlights, getFlightById, createFlight, updateFlight, deleteFlight } = require('../controllers/flightController');
const router = express.Router();

router.get('/', getFlights);
router.get('/:id', getFlightById);
router.post('/', createFlight);
router.put('/:id', updateFlight);
router.delete('/:id', deleteFlight);

module.exports = router;
