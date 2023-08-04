const { ErroNames } = require("./ErrorNames");
const { HttpException } = require("./HttpException");
const { statuscodes } = require("./StatusCodes");

function ExceptionChecker(name) {
    if(name.substring){
        if(Object.entries(ErroNames).filter((v) => v[1] == name)[0]){
            statusExceptions = Object.entries(ErroNames).filter((v) => v[1] == name)[0];
            return new HttpException(statusExceptions[0]);
        }

    }
    if(parseInt(name)) {
        console.log(name);
        return new HttpException(name);
    }
    
    return new HttpException(500, name);
}

module.exports = {
    ExceptionChecker
}