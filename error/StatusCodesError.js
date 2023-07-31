const { Errors } = require('./Errors');
const { statuscodes } = require('./ErrorCodes');

class StatusCodesError extends Errors{
    constructor(statuscode = 500, description){
        super(statuscode)

        const errorCodes = Object.entries(statuscodes).filter((v) => v[0] == statuscode)[0];
        this.description = description || errorCodes[1];
    }
}

module.exports = {
    StatusCodesError
}