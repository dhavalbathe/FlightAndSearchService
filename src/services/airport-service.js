const { AirportRepository } = require("../repository/index");
const CrudService = require('./crud-service.js');

class AirportService extends CrudService {
    constructor() {
        super(AirportRepository);
    }
}

module.exports = AirportService;