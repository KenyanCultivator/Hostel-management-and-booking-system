const express = require('express');
const router = require('./router/router');
const { HttpException } = require('./error');

const app = express();

try {

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    app.use(router);

    app.use('*',(req, res) => {
        res.status(404).send('404');
    });

    app.use((err, req, res, next) => {
        if (err instanceof HttpException.HttpException) {
            res.status(err.statuscode).json({ ...err });
            return;
        }
        console.error(err)
        res.status(500).json({ message: err.description || 'Something Wrong'});
    });
        


    app.listen(3000, () => {
        console.log('server connection established...');
    })

} catch (error) {
    console.log('app errors: ', error)
}