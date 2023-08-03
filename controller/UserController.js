const { RSC } = require('next/dist/client/components/app-router-headers');
const { HttpException, ExceptionChecker } = require('../error');
const { UserModel } = require('../model');
const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

const index = async (req, res) => {
    try {
        const users = await UserModel.findAll();
        if (!users) {
            throw new Error('empty db')
        }
        
        res.send({
            users
        });

    } catch ({name, message}) {
        res.send(ExceptionChecker.ExceptionChecker(message));
    }
};

const store = async (req, res) => {
    try {
        const { email, name, password } = req.body;        
        const store = await UserModel.create({
            name: name,
            email: email,
            password: password
        });
        res.send({
            message: store
        });
    } catch ({name, message}) {
        res.send(ExceptionChecker.ExceptionChecker(name));
    }
};

const show = async (req, res) => {
    try {
        const show = await UserModel.findAll({where: {id: req.params.id}}, );
        res.send({
            message: show
        });
    } catch (error) {
        console.log(error); 
        // throw error;
    }
};

const single = async (req, res) => {
    try {
        const attributes = Object.keys(req.body);

        const single = await UserModel.findOne({ attributes: attribute, where: {id: req.params.id}});
        res.send({
            message: single
        });
    } catch (error) {
        throw error;
    }
};

const update = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await UserModel.update({ name, email, password},{ where: {id: req.params.id} });
        const show = await UserModel.findAll({where: {id: req.params.id}});
        res.send({
            message: show
        });
    } catch (error) {
        throw error;
    }
};

const destroy = async (req, res) => {
    try {
        const destroy = await UserModel.destroy({ where: {id: req.params.id} });
        res.send({
            message: "Data has been destroyed..."
        });
    } catch (error) {
        throw error;
    }
};

module.exports = {
    store, index, show, update, destroy, single
}