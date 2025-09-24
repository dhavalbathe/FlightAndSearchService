const { Airplane } = require('../models/index.js');

class AirplaneRepository {
    async getAirplane(id) {
        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("Something went wrong at Repository layer of Airplane");
            throw { error };
        }
    }
}

module.exports = AirplaneRepository;