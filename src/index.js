const express = require('express');

const { PORT } = require('./config/serverConfig.js');
const ApiRoutes = require('./routes/index.js');
const { City, Airport, Airplane } = require('./models/index.js');
const db = require('./models/index.js');

async function setUpAndStartServer() {
    //create express object
    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use('/api', ApiRoutes);
    
    app.listen(PORT, async () => {
        console.log(`Server is running on PORT : ${PORT}`);
        if(process.env.sync_DB) {
            db.sequelize.sync({ alter: true });
        }
    });
}

setUpAndStartServer();