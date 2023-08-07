const express = require('express');
const router = require('./router/router');
const { HttpException } = require('./error');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

try {
    app.use(router);

    app.use('*', (req, res) => {
        res.status(404).send('404');
    });

    app.use((err, req, res, next) => {
        if (err instanceof HttpException.HttpException) {
            res.status(err.statuscode).json({ ...err });
            return;
        }

        res.status(404).json({ message: err.description || 'Something Wrong'});
    });

    app.use((err, req, res, next) => {
        if (err instanceof HttpException.HttpException) {
            res.status(err.statuscode).json({ ...err });
            return;
        }

        res.status(err[0] || 500).send( err || 'Something Wrong');
    });

    app.listen(3000, () => {
        console.log('server connection established...');
    })

} catch (error) {
    console.log('app errors: ', error)
}