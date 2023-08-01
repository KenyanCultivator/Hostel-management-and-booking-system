const { Tenant_HistoryModel } = require('../model');
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
        const users = await Tenant_HistoryModel.findAll();
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
        const store = await Tenant_HistoryModel.create({
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
        const show = await Tenant_HistoryModel.findAll({where: {id: req.params.id}}, );
        res.send({
            message: show
        });
    } catch (error) {
        throw error;
    }
};

const single = async (req, res) => {
    try {
        const single = await Tenant_HistoryModel.findOne({ attributes: ['name' ], where: {id: req.params.id}});
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
        await Tenant_HistoryModel.update({ name, email, password},{ where: {id: req.params.id} });
        const show = await Tenant_HistoryModel.findAll({where: {id: req.params.id}});
        res.send({
            message: show
        });
    } catch (error) {
        throw error;
    }
};

const destroy = async (req, res) => {
    try {
        const destroy = await Tenant_HistoryModel.destroy({ where: {id: req.params.id} });
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