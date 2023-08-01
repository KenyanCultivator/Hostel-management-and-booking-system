const { TenantModel } = require('../model');
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
        const users = await TenantModel.findAll();
        res.send({
            message: users
        });
    } catch (error) {
        throw error;
    }
};

const store = async (req, res) => {
    try {
        const { first_name, last_name, other_names, date_of_birth, cell_no, health_conditions, national_id, passport, tax_pin, total_evictions, date_in, date_out, delete_reason } = req.body;
        const store = await TenantModel.create({
            first_name, 
            last_name, 
            other_names, 
            date_of_birth, 
            cell_no, 
            health_conditions, 
            national_id, 
            passport, 
            tax_pin, 
            total_evictions,
            date_in,
            date_out,
            delete_reason,
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
        const show = await TenantModel.findAll({where: {id: req.params.id}}, );
        res.send({
            message: show
        });
    } catch (error) {
        throw error;
    }
};

const single = async (req, res) => {
    try {
        const single = await TenantModel.findOne({ attributes: ['name' ], where: {id: req.params.id}});
        res.send({
            message: single
        });
    } catch (error) {
        throw error;
    }
};

const update = async (req, res) => {
    try {
        const { first_name, last_name, other_names, date_of_birth, cell_no, health_conditions, national_id, passport, tax_pin, total_evictions, date_in, date_out, delete_reason } = req.body;
        await TenantModel.update({ first_name, last_name, other_names, date_of_birth, cell_no, health_conditions, national_id, passport, tax_pin, total_evictions, date_in, date_out, delete_reason },{ where: {id: req.params.id} });
        const show = await TenantModel.findAll({where: {id: req.params.id}});
        res.send({
            message: show
        });
    } catch (error) {
        throw error;
    }
};

const destroy = async (req, res) => {
    try {
        const destroy = await TenantModel.destroy({ where: {id: req.params.id} });
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