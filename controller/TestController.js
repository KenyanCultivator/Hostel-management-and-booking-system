const { Tester } = require("../model/index");
const { HttpException } = require("../error");
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const test = ((req, res) => {
    try {
        throw new HttpException.HttpException(req.params.number);

    } catch (error) {
        throw error;
    }
});

module.exports = {
    test
}