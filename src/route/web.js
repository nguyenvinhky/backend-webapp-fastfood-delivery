import express from 'express';
import homeControllers from '../controllers/homeControllers';
import userControllers from '../controllers/userControllers';

let router = express.Router();

let initWebRouters = (app) =>{
    router.get('/', homeControllers.homeControllers);
    router.get('/crud', homeControllers.getCRUD);
    router.post('/post-crud', homeControllers.postCRUD);
    router.get('/get-crud', homeControllers.displayCRUD);
    router.get('/edit-crud', homeControllers.editCRUD);
    router.post('/put-crud', homeControllers.putCRUD);
    router.get('/delete-crud', homeControllers.deleteCRUD);

    router.post('/api/login', userControllers.handleLogin);
    router.get('/api/get-all-account', userControllers.handleGetAllAccount);
    
    return app.use("/", router);
}

module.exports = initWebRouters;