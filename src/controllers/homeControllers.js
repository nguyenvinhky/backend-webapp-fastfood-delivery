
import db from '../models/index';
import CRUDService from '../services/CRUDService';
let homeControllers = async (req, res) => {
    try {
        let data = await db.Account.findAll();
        
        return res.render('demo.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }
    
}

let getCRUD = async (req, res) => {
    return res.render('crud.ejs');
}

let postCRUD = async (req, res) => {
    let mess = await CRUDService.createNewAccount(req.body);
    let data = await CRUDService.getAllUser();
    return res.render('displayCRUD.ejs', {
        dataTable: data
    });
}

let displayCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    return res.render('displayCRUD.ejs', {
        dataTable: data
    });
}

let editCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        console.log('-------------------------------------------');
        console.log(userData);
        console.log('-------------------------------------------');
        return res.render('editCRUD.ejs', {
            user: userData
        });
    }
    else{
        return res.send(`User not found!!!`);
    }

    
}

let putCRUD = async (req, res) => {
    let data = req.body;
    let allUser = await CRUDService.updateCRUD(data);
    return res.render('displayCRUD.ejs', {
        dataTable: allUser
    });
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    let allUser = await CRUDService.deleteCRUDfromService(id);
    return res.render('displayCRUD.ejs', {
        dataTable: allUser
    });
}

module.exports = {
    homeControllers: homeControllers,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayCRUD: displayCRUD,
    editCRUD: editCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
}