const { Password_ResetModel } = require('../model');
const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

const home = ((req, res) => {
    try {
        console.log('user');
        res.send({
            message: "user controller connected"
        })
    } catch (error) {
        console.log(error);
    }
});

const index = async (req, res) => {
    try {
        const users = await Password_ResetModel.findAll();
        res.send({
            message: users
        });
    } catch (error) {
        throw error;
    }
};

const store = async (req, res) => {
    try {
        const { email, name, password } = req.body;
        const store = await Password_ResetModel.create({
            name: name,
            email: email,
            password: password
        });
        res.send({
            message: store
        });
    } catch (error) {
        throw error;
    }
};

const show = async (req, res) => {
    try {
        const show = await Password_ResetModel.findAll({where: {id: req.params.id}}, );
        res.send({
            message: show
        });
    } catch (error) {
        throw error;
    }
};

const single = async (req, res) => {
    try {
        const single = await Password_ResetModel.findOne({ attributes: ['name' ], where: {id: req.params.id}});
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
        await Password_ResetModel.update({ name, email, password},{ where: {id: req.params.id} });
        const show = await Password_ResetModel.findAll({where: {id: req.params.id}});
        res.send({
            message: show
        });
    } catch (error) {
        throw error;
    }
};

const destroy = async (req, res) => {
    try {
        const destroy = await Password_ResetModel.destroy({ where: {id: req.params.id} });
        res.send({
            message: "Data has been destroyed..."
        });
    } catch (error) {
        throw error;
    }
};

module.exports = {
    home, store,index, show, update, destroy, single
}