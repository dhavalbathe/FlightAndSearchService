const { Op } = require('sequelize');

const { City } = require('../models/index.js');

class CityRepository {

    async createCity(data) {
        try {
            const city = await City.create(data);
            return city;
        } catch (error) {
            console.log("Something went wrong at Repository Layer");
            throw { error };
        }
    }

    async updateCity(cityId, data) {
        try {
            // const city = await City.update(data, { 
            //     where: { 
            //         id : cityId 
            //     },
            //     returning: true,
            //     plain: true
            //     });

            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Something went wrong at Repository Layer");
            throw { error };
        }
    }

    async deleteCity(cityId) {
        try {
            const city = await City.destroy({ where: { id: cityId }});
            return true;
        } catch (error) {
            console.log("Something went wrong at Repository Layer");
            throw { error };
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findOne({where: {id: cityId}});
            return city;
        } catch (error) {
            console.log("Something went wrong at Repository Layer");
            throw { error };
        }
    }

    async getAllCities(filter) {
        try {
            if(filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name,
                        }
                    }
                });
                return cities;
            }

            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong at Repository layer");
            throw { error };
        }
    }
}

module.exports = CityRepository;