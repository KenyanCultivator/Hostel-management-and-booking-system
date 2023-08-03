const { statuscodes } = require("./StatusCodes");

function ExceptionChecker(name) {
    let statuscode = 500;
    let statusExceptions = "Unknown";
    
    if(name == 'SequelizeUniqueConstraintError'){
        statuscode = 708
    }
    if(name == 'empty db'){
        statuscode = 612
    }
    
    statusExceptions = Object.entries(statuscodes).filter((v) => v[0] == statuscode)[0];
    console.log(statusExceptions);

    return statusExceptions;
}

module.exports = {
    ExceptionChecker
}