
const express = require('express');const { Joi } = require('express-validation');
const { StatusCodesError, ExceptionChecker } = require('../../error');
const { UserModel } = require('../../model');

const app = express();
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

const store = async (req, res) => {
    try {
        const validationSchema = Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).max(15).required(),
        });

        const { error, value } = validationSchema.validate(req.body);
        
        if(error){
            return res.send('invalid details');
        }

        const { email, name, password } = value;

        const user = await UserModel.create({
            email, name, password
        });
        
        res.send(user);

    } catch ({ name }) {
        return next(new ExceptionChecker.ExceptionChecker(name))
    }
};

module.exports = {
    store
}