const { HouseModel } = require('../../model');
const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

const index = async (req, res) => {
    try {
        const users = await HouseModel.findAll();
        res.send({
            message: users
        });
    } catch (error) {
        throw error;
    }
};

const store = async (req, res) => {
    try {
        const { name, description, total_rooms, total_rent, total_deposit, status, payment_method, price, features, rating, confirmation, total_houses, delete_reason } = req.body;
        const store = await HouseModel.create({
            name, 
            description, 
            total_rooms, 
            total_rent, 
            total_deposit, 
            status, 
            payment_method, 
            price, features, 
            rating, 
            confirmation, 
            total_houses, 
            delete_reason
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
        const show = await HouseModel.findAll({where: {id: req.params.id}}, );
        res.send({
            message: show
        });
    } catch (error) {
        throw error;
    }
};

const single = async (req, res) => {
    try {
        const single = await HouseModel.findOne({ attributes: ['name' ], where: {id: req.params.id}});
        res.send({
            message: single
        });
    } catch (error) {
        throw error;
    }
};

const update = async (req, res) => {
    try {
        const { name, description, total_rooms, total_rent, total_deposit, status, payment_method, price, features, rating, confirmation, total_houses, delete_reason } = req.body;
        await HouseModel.update({ name, description, total_rooms, total_rent, total_deposit, status, payment_method, price, features, rating, confirmation, total_houses, delete_reason },{ where: {id: req.params.id} });
        const show = await HouseModel.findAll({where: {id: req.params.id}});
        res.send({
            message: show
        });
    } catch (error) {
        throw error;
    }
};

const destroy = async (req, res) => {
    try {
        const destroy = await HouseModel.destroy({ where: {id: req.params.id} });
        res.send({
            message: "Data has been destroyed..."
        });
    } catch (error) {
        throw error;
    }
};

module.exports = {
    store ,index, show, update, destroy, single
}