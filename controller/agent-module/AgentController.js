const { AgentModel } = require('../../model');
const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

const index = async (req, res) => {
    try {
        const users = await AgentModel.findAll();
        res.send({
            message: users
        });
    } catch (error) {
        throw error;
    }
};

const store = async (req, res) => {
    try {
        const { first_name, last_name, other_names, date_of_birth, cell_no, health_conditions, national_id, passport, tax_pin, delete_reason } = req.body;
        const store = await AgentModel.create({
            first_name, 
            last_name, 
            other_names, 
            date_of_birth, 
            cell_no, 
            health_conditions, 
            national_id, 
            passport, 
            tax_pin, 
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
        const show = await AgentModel.findAll({where: {id: req.params.id}}, );
        res.send({
            message: show
        });
    } catch (error) {
        throw error;
    }
};

const single = async (req, res) => {
    try {
        const single = await AgentModel.findOne({ attributes: ['name' ], where: {id: req.params.id}});
        res.send({
            message: single
        });
    } catch (error) {
        throw error;
    }
};

const update = async (req, res) => {
    try {
        const { first_name, last_name, other_names, date_of_birth, cell_no, health_conditions, national_id, status, passport, tax_pin, delete_reason } = req.body;
        await AgentModel.update({ first_name, last_name, other_names, date_of_birth, cell_no, health_conditions, national_id, status, passport, tax_pin, delete_reason },{ where: {id: req.params.id} });
        const show = await AgentModel.findAll({where: {id: req.params.id}});
        res.send({
            message: show
        });
    } catch (error) {
        throw error;
    }
};

const destroy = async (req, res) => {
    try {
        const destroy = await AgentModel.destroy({ where: {id: req.params.id} });
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