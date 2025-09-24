class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong at crud repository");
            throw { error };
        }
    }

    async destroy(modelId) {
        try {
            await this.model.destroy({where: {id : modelId}});
            return true;
        } catch (error) {
            console.log("Something went wrong at crud repository");
            throw { error };
        }
    }

    async get(id) {
        try {
            const result = await this.model.findByPk(id);
            return result;
        } catch (error) {
            console.log("Something went wrong at crud repository");
            throw { error };
        }
    }

    async getAll() {
        try {
            const result = await this.model.find();
            return result;
        } catch (error) {
            console.log("Something went wrong at crud repository");
            throw { error };
        }
    }

    async update(modelId, data) {
        try {
            const result = await this.model.update(data, {
                where: {
                    id: modelId
                }
            });
            return result;
        } catch (error) {
            console.log("Something went wrong at curd repository");
            throw { error };
        }
    }
}

module.exports = CrudRepository;