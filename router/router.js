console.log('router connection...');
const express = require('express');
const { TestController } = require('../controller/index');

const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: false }));

try {
    router.get('/', [TestController.test]);
    
} catch (error) {
    throw error
}

module.exports = router;