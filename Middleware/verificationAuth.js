const { ExceptionChecker, HttpException } = require("../error");
const { Tester, UserModel } = require("../model");
const { Joi } = require('express-validation');


const verifyUserData = (req, res, next) =>{
    try{
        const validationSchema = Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).max(15).required(),
        });
        console.log(req.body);

        const { error, value } = validationSchema.validate(req.body);

        if(error){
            return next(ExceptionChecker.ExceptionChecker(error));
        }
        next();

    } catch ({message}){
        return next(ExceptionChecker.ExceptionChecker(message))
    }
}

const checkDuplicateUserData = async (req, res, next) => {
    try{
        const name = await UserModel.findOne({where: {name: req.body.name} })
        if (name){
            return next(ExceptionChecker.ExceptionChecker(708));
        }
        
        const email = await UserModel.findOne({where: {email: req.body.email} })
        if (email){
            return next(ExceptionChecker.ExceptionChecker(709));
        }

        next();
    } catch ({message}) {
        return next(ExceptionChecker.ExceptionChecker(message))
    }
}

// const checkRole = (req, res, next) => {
//     if (req.body.role){

//     }
// }

module.exports = {
    verifyUserData, checkDuplicateUserData
}