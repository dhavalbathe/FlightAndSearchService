const { FlightRepository, AirplaneRepository} = require("../repository/index.js");
const { compareTime } = require('../utils/helper.js');

class FlightService {

    constructor() {
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data) {
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)) {
                throw { error : "Arrival time cannot be less than departure time"};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({...data, totalSeats:airplane.capacity});
            return flight;
        } catch (error) {
            console.log("Something went wrong at Service layer of Flight");
            throw { error };
        }
    }

    async getFlightData(filters) {
        try {
            const flights = await this.flightRepository.getAllFlights(filters);
            return flights;
        } catch (error) {
            console.log("Something went wrong at service layer of flight");
            throw { error };
        }
    }
}

/**
 * {
 *      flightNumber,
 *      airplaneId,
 *      departureAirportId,
 *      arrivalAirportId,
 *      arrivalTime,
 *      departureTime,
 *      price,
 *      totalSeats -> airplane
 * }
 */



module.exports = FlightService;