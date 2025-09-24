const { CityService } = require('../services/index.js');
const { ServerErrorCodes, SuccessCodes } = require('../utils/error-codes.js');

const cityService = new CityService();

const create = async(req, res) => {
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        };

        const city = await cityService.createCity(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data: city,
            success: true,
            message: "Successfully created a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a city",
            err: error
        });
    }
}

const destroy = async(req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to destroy a city",
            err: error
        });
    }
}

const update = async(req, res) => {
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(202).json({
            data: city,
            success: true,
            message: "Successfully updated a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update the city",
            err: error
        });
    }
}

const get = async(req, res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: city,
            success: true,
            message: "Successfully read the city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to read the city",
            err: error
        });
    }
}

const getAll = async(req, res) => {
    try {
        console.log("req.params: ", req.query);
        const cities = await cityService.getAll(req.query);
        res.status(SuccessCodes.OK).json({
            data: cities,
            success: true,
            message: "Successfully fetches all the cities",
            err: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch all cities",
            err: error
        });
    }
}

module.exports = {
    create,
    destroy,
    update, 
    get,
    getAll
};