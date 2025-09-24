const { Op } = require('sequelize');

const { Flights } = require('../models/index.js');

class FlightRepository {

    #createFilter(data) {
        let filter = {};

        if(data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }

        if(data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }

        if(data.minPrice && data.maxPrice) {
            Object.assign(filter, { price: { [Op.between] : [data.minPrice, data.maxPrice] }});
        } else if(data.minPrice) {
            Object.assign(filter, { price: { [Op.gte] : data.minPrice }});
        } else if(data.maxPrice) {
            Object.assign(filter, { price: { [Op.lte] : data.maxPrice }});
        }

        return filter;
    }

    async createFlight(data) {
        try {
            console.log('in the createflight of repository');
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log('Something went wrong at Repository layer of flight');
            throw { error };
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("something went wrong at repository layer of flight");
            throw { error };
        }
    }

    async getAllFlights(filter) {
        try {
            console.log(filter);
            const filterObject = this.#createFilter(filter);
            const flights = await Flights.findAll({
                where: filterObject
            });
            return flights;
        } catch (error) {
            console.log("Something went wrong at repository layer of flight");
            throw { error };
        }
    }
}

module.exports = FlightRepository;