const { AirportService } = require('../services/index');

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const response = await airportService.create(req.body);
        res.status(201).json({
            data: response,
            success: true,
            message: "Successfully created the airport",
            err: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create the airport",
            err: error
        });
    }
}

module.exports = {
    create,
}