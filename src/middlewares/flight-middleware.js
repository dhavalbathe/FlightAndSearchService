const { StatusCodes } = require("http-status-codes");
const {ValidationError} = require('../utils/errors/errors.js');

const validateCreateFlight = (req, res, next) => {
    const { flightNumber, airplaneId, departureAirportId, arrivalAirportId, arrivalTime, departureTime, price } = req.body;

    if(
        !flightNumber ||
        !airplaneId ||
        !departureAirportId ||
        !arrivalAirportId ||
        !arrivalTime ||
        !departureTime ||
        !price
    ) {
        // return res.status(StatusCodes.BAD_REQUEST).json({
        //     data: {},
        //     success: false,
        //     message: "Invalid request body for create flight",
        //     err: "Missing mandatory properties to create a flight",
        // });
        next(new ValidationError('ValidationError', 'Invalid request body for create flight', 'Missing mendatory properties to create a flight'));
    }

    next();
}

const validateFlightId = (req, res, next) => {
    console.log('in the validate flight id middleware');
    const { id } = req.params;
    if(!id || isNaN(id)) {
        next(new ValidationError('FlightIdValidation','flight id must be integer', 'Please provide the valid Flight Id'));
    }
    next();
}

module.exports = {
    validateCreateFlight,
    validateFlightId
}