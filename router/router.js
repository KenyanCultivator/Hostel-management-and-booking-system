const express = require('express');
const { TestController, UserController, AdminController, AgentController, TenantController, LandlordController, HouseController } = require('../controller');

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
    

    // admin routes
    router.get('/admin', [AdminController.index]);

    router.post('/admin/store', [AdminController.store]);

    router.get('/admin/show/:id', [AdminController.show]);

    router.get('/admin/single/:id', [AdminController.single]);

    router.patch('/admin/update/:id', [AdminController.update]);

    router.delete('/admin/destory/:id', [AdminController.destroy]);

    // agent routes
    router.get('/agent', [AgentController.index]);

    router.post('/agent/store', [AgentController.store]);

    router.get('/agent/show/:id', [AgentController.show]);

    router.get('/agent/single/:id', [AgentController.single]);

    router.patch('/agent/update/:id', [AgentController.update]);

    router.delete('/agent/destory/:id', [AgentController.destroy]);
    
    // tenant routes
    router.get('/tenant', [TenantController.index]);

    router.post('/tenant/store', [TenantController.store]);

    router.get('/tenant/show/:id', [TenantController.show]);

    router.get('/tenant/single/:id', [TenantController.single]);

    router.patch('/tenant/update/:id', [TenantController.update]);

    router.delete('/tenant/destory/:id', [TenantController.destroy]);
    
    // landlord routes
    router.get('/landlord', [LandlordController.index]);

    router.post('/landlord/store', [LandlordController.store]);

    router.get('/landlord/show/:id', [LandlordController.show]);

    router.get('/landlord/single/:id', [LandlordController.single]);

    router.patch('/landlord/update/:id', [LandlordController.update]);

    router.delete('/landlord/destory/:id', [LandlordController.destroy]);
    
    // house routes
    router.get('/house', [HouseController.index]);

    router.post('/house/store', [HouseController.store]);

    router.get('/house/show/:id', [HouseController.show]);

    router.get('/house/single/:id', [HouseController.single]);

    router.patch('/house/update/:id', [HouseController.update]);

    router.delete('/house/destory/:id', [HouseController.destroy]);
} catch (error) {
    throw error
}

module.exports = router;