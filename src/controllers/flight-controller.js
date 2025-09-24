const { FlightService } = require('../services/index.js');

const flightService = new FlightService();

const create = async(req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            message: "Successfully created a flight",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a flight",
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const flights = await flightService.getFlightData(req.query);
        console.log("res.params", req.params);
        res.status(200).json({
            data: flights,
            success: true,
            message: "Successfully get all the flights",
            err: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get all flights",
            err: error
        });
    }
}

module.exports = {
    create,
    getAll,
}