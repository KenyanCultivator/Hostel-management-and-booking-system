const { ExceptionChecker } = require("../error");
const { UserModel } = require("../model");
const { Joi } = require('express-validation');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const verifyUserData = (req, res, next) =>{
    try{
        const validationSchema = Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).max(15).required(),
        });

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

const checkDataExists = async (req, res, next) => {
    try {
        const { email, name, password } = req.body;
        const user = await UserModel.findOne({attributes: ['password'], where: { email: email }});
        if (!user) {
            return next(ExceptionChecker.ExceptionChecker(614));
        }
        bcrypt.compare(password, user.password, function(err, result) {   
            if (!result){
                return next(ExceptionChecker.ExceptionChecker(614))
            }
            
            next();
        });
    } catch ({message}) {
        return next(ExceptionChecker.ExceptionChecker(message))
    }
}

const assignToken = async (req, res, next) => {
    try {
        const { name, email, password } = req.body
        const { id } = await UserModel.findOne({attributes: ["id"], where: { email: email }});
    
        const token = jwt.sign({ id }, config.secret, 
            {
                algorithm: 'HS256',
                allowInsecureKeySizes: true,
                expiresIn: 50, // 24 hours
            }
        );
        req.user = token;
        next();
    } catch ({message}) {
        return next(ExceptionChecker.ExceptionChecker(message))
    }
}

const verifyToken = async (res, req, next) => {
    try {
        const { token } = req.user.token
        if (token == null) return next(ExceptionChecker.ExceptionChecker(401));
        
        jwt.verify(token, config.secret, (err, user) => {        
            if (err) return next(ExceptionChecker.ExceptionChecker(err))
            next();
        });
    } catch ({message}) {
        return next(ExceptionChecker.ExceptionChecker(message))
    }
}

module.exports = {
    verifyUserData, checkDuplicateUserData, checkDataExists, assignToken
}