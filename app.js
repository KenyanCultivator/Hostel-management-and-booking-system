const express = require('express');
const router = require('./router/router');

const app = express();

try {

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    app.use(router);
        
    app.listen(3000, () => {
        console.log('server connection established...');
    })

    app.use('*',(req, res) => {
        res.status(404).send('404');
    });

    // app.use((err, req, res, next) => {
    //     console.log(res);
    //     if (err instanceof Errors) {
    //         res.status(err.statuscode).json({ ...err });
    //         return;
    //     }
    //     res.status(500).json({ message: err.description || 'Something Wrong'})
    // });

    

} catch (error) {
    console.log('app errors: ', error)
}