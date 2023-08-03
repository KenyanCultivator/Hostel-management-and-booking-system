
const express = require('express');const { Joi } = require('express-validation');
const { StatusCodesError } = require('../../error');
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
            console.log(error);
            return res.send('invalid details');
            // throw new StatusCodesError.StatusCodesError(706);
        }

        const { email, name, password } = value;

        const user = await UserModel.create({
            email, name, password
        });
        
        res.send(user);

    } catch (error) {
        throw error;
    }
};

module.exports = {
    store
}