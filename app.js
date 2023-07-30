const express = require('express');
const router = require('./router/router');
const initDatabase = require("./database/database");

const app = express();

app.use(router);
try {
    initDatabase();
    app.listen(3000, () => {
        console.log('server connection established...');
    })
    
} catch (error) {
    console.log('error')
}