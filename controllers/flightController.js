// controllers/flightController.js

const flightSchema = require("../models/Flight");

// Get all flights
exports.getFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.status(200).json(flights);
  } catch (error) {
    res.status(500).json({ message: 'Server error, please try again later' });
  }
};

// Get a single flight by ID
exports.getFlightById = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) return res.status(404).json({ message: 'Flight not found' });
    res.status(200).json(flight);
  } catch (error) {
    res.status(500).json({ message: 'Server error, please try again later' });
  }
};

// Create a new flight
exports.createFlight = async (req, res) => {
  try {
    const newFlight = new flightSchema(req.body);
    await newFlight.save();
    res.status(201).json(newFlight);
  } catch (error) {
    res.status(500).json({ message: 'Server error, please try again later' });
  }
};

// Update a flight by ID
exports.updateFlight = async (req, res) => {
  try {
    const updatedFlight = await Flight.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedFlight) return res.status(404).json({ message: 'Flight not found' });
    res.status(200).json(updatedFlight);
  } catch (error) {
    res.status(500).json({ message: 'Server error, please try again later' });
  }
};

// Delete a flight by ID
exports.deleteFlight = async (req, res) => {
  try {
    const deletedFlight = await Flight.findByIdAndDelete(req.params.id);
    if (!deletedFlight) return res.status(404).json({ message: 'Flight not found' });
    res.status(200).json({ message: 'Flight deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error, please try again later' });
  }
};
