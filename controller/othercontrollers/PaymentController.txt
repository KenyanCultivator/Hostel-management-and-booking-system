const { PaymentModel } = require('../model');
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
        const users = await PaymentModel.findAll();
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
        const store = await PaymentModel.create({
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
        const show = await PaymentModel.findAll({where: {id: req.params.id}}, );
        res.send({
            message: show
        });
    } catch (error) {
        throw error;
    }
};

const single = async (req, res) => {
    try {
        const single = await PaymentModel.findOne({ attributes: ['name' ], where: {id: req.params.id}});
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
        await PaymentModel.update({ name, email, password},{ where: {id: req.params.id} });
        const show = await PaymentModel.findAll({where: {id: req.params.id}});
        res.send({
            message: show
        });
    } catch (error) {
        throw error;
    }
};

const destroy = async (req, res) => {
    try {
        const destroy = await PaymentModel.destroy({ where: {id: req.params.id} });
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