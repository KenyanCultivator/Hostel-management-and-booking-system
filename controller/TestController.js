const { Tester } = require("../model/index");
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
};

module.exports = {
    testHttpExeptionFunction, testHttpExeptionClass
}