const { Tester, UserModel } = require("../model/index");
const { HttpException, ExceptionChecker } = require("../error");
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const testHttpExeptionClass = ((req, res, next) => {
    try {
        return next(new HttpException.HttpException(req.params.number));

    } catch (error) {
        throw error;
    }
});

const testHttpExeptionFunction = async (req, res, next) => {
    try {
        const users = await Tester.findAll();
        if (users) {
            return next(ExceptionChecker.ExceptionChecker(req.body.number));
        }

    } catch ({name}) {
        return next(ExceptionChecker.ExceptionChecker(name));
    }
}

const testMiddlware = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const store = await UserModel.create({
            name, email, password
        });
        res.send({
            message: store
        });
    } catch (message) {
        return next(ExceptionChecker.ExceptionChecker(message));
    }
}
 
module.exports = {
    testHttpExeptionFunction, testHttpExeptionClass, testMiddlware
}