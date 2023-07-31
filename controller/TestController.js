// const initDatabase = require("../database/database");

const { Tester } = require("../model/index");
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const test = async (req, res) => {
    try {
        console.log(res.statusCode);
        const { firstname: firstname, lastname: lastname } = req.body;
        const test = await Tester.create({
            firstname: firstname,
            lastname: lastname
        });
        res.send({
            message: test
        });
        
    } catch (error) {
        throw error;
    }
};

module.exports = {
    test
}