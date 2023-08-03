const { AdminModel } = require('../model');
const index = async (req, res) => {
    try {
        const users = await AdminModel.findAll();
        res.send({
            message: users
        });
    } catch (error) {
        console.log(error)
    }
};

const store = async (req, res) => {
    try {
        const { first_name, last_name, other_names, date_of_birth, cell_no, health_conditions, national_id, passport, tax_pin, delete_reason } = req.body;
        const store = await AdminModel.create({
            first_name,
            last_name,
            other_names,
            date_of_birth,
            cell_no,
            health_conditions,
            national_id,
            tax_pin,
            passport,
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
        const show = await AdminModel.findAll({where: {id: req.params.id}}, );
        res.send({
            message: show
        });
    } catch (error) {
        throw error;
    }
};

const single = async (req, res) => {
    try {
        const single = await AdminModel.findOne({ attributes: ['first_name' ], where: {id: req.params.id}});
        res.send({
            message: single
        });
    } catch (error) {
        throw error;
    }
};

const update = async (req, res) => {
    try {
        const { first_name, last_name, other_names, date_of_birth, cell_no, health_conditions, national_id, passport, tax_pin, delete_reason } = req.body;
        await AdminModel.update({ first_name, last_name, other_names, date_of_birth, cell_no, health_conditions, national_id, passport, tax_pin, delete_reason },{ where: {id: req.params.id} });
        const show = await AdminModel.findAll({where: {id: req.params.id}});
        res.send({
            message: show
        });
    } catch (error) {
        throw error;
    }
};

const destroy = async (req, res) => {
    try {
        const destroy = await AdminModel.destroy({ where: {id: req.params.id} });
        res.send({
            message: "Data has been destroyed..."
        });
    } catch (error) {
        throw error;
    }
};

module.exports = {
    store,index, show, update, destroy, single
}