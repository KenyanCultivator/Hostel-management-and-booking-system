const express = require('express');
const { TestController, UserController } = require('../controller');

const router = express.Router();


try {
    router.post('/', [TestController.test]);


    // user router
    router.get('/user/home', [UserController.home]);

    router.get('/user', [UserController.index]);

    router.post('/user/store', [UserController.store]);

    router.get('/user/show/:id', [UserController.show]);

    router.get('/user/single/:id', [UserController.single]);

    router.patch('/user/update/:id', [UserController.update]);

    router.delete('/user/destroy/:id', [UserController.destroy]);
    
} catch (error) {
    throw error
}

module.exports = router;