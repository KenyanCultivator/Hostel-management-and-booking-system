const { statuscodes } = require('./StatusCodes');
const express = require('express');
const app = express();

class HttpException{
    constructor(statuscode = 500, description){
        const errorCodes = Object.entries(statuscodes).filter((v) => v[0] == statuscode)[0];
        this.statuscode = parseInt(errorCodes[0]);
        this.description = errorCodes[1];
        
        console.log(errorCodes);
    }
}

module.exports = {
    HttpException
}