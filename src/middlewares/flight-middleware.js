const { ClientErrorCodes } = require('../utils/error-codes.js');

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
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: "Invalid request body for create flight",
            err: "Missing mandatory properties to create a flight",
        })
    }

    next();
}

module.exports = {
    validateCreateFlight,
}