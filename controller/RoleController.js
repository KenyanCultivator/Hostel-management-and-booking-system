const { RoleModel } = require('../model');
const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

const index = async (req, res) => {
    try {
        const roles = await RoleModel.findAll();
        res.send({
            message: roles
        });
    } catch (error) {
        throw error;
    }
};

const store = async (req, res) => {
    try {
        const { name } = req.body;
        const store = await RoleModel.create({
            name: name,
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
        const show = await RoleModel.findAll({where: {id: req.params.id}}, );
        res.send({
            message: show
        });
    } catch (error) {
        throw error;
    }
};

const single = async (req, res) => {
    try {
        const single = await RoleModel.findOne({ attributes: ['name' ], where: {id: req.params.id}});
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
        await RoleModel.update({ email },{ where: {id: req.params.id} });
        const show = await RoleModel.findAll({where: {id: req.params.id}});
        res.send({
            message: show
        });
    } catch (error) {
        throw error;
    }
};

const destroy = async (req, res) => {
    try {
        const destroy = await RoleModel.destroy({ where: {id: req.params.id} });
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