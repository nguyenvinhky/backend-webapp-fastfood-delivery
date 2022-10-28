import db from '../models/index';

import bcrypt from 'bcryptjs';
import { resolveInclude } from 'ejs';
const salt = bcrypt.genSaltSync(10);

let createNewAccount = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let letHashPass = await hassAccountPassWord(data.pass);
            await db.Account.create({
                email: data.user,
                password: letHashPass,
                isActive: data.active,
                storeId: data.idshop,
                accountType: data.idtypeaccount,
            },);
            let allUser = await db.Account.findAll({
                raw: true
            })
            resolve(allUser);
        } catch (e) {
            reject(e);
        }
    })
}

let hassAccountPassWord = (password) =>{
    return new Promise(async(resolve, reject) => {
        try {
            let hashpass = await bcrypt.hashSync(password, salt);
            resolve(hashpass);
        } catch (e) {
            reject(e);
        }
    })
}

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = db.Account.findAll({
                raw: true,
            });
            resolve(user);
        } catch (error) {
            
        }
    })
}

let getUserInfoById = async (userId) => {
    return new Promise(async (resolve, reject) =>{
        try {
            let user = await db.Account.findOne({
                where: {id: userId},
                raw: true
            })

            if (user) {
                resolve(user);
            }
            else{
                resolve([]);
            }
        } catch (e) {
            reject(e);
        }
    })
}

let updateCRUD = (data) => {
    return new Promise(async(resolve, reject)=>{
        try {
            let user = await db.Account.findOne({
                where: {id: data.id}
            })
            if (user) {
                user.email = data.email;
                await Account.save();

                let allUser = await db.Account.findAll();
                resolve(allUser);
            }
            else{
                resolve();
            }
        } catch (error) {
            reject(error);
        }
    })
}

let deleteCRUDfromService = (userId) =>{
    return new Promise(async(resolve, reject)=>{
        try {
            let user = await db.Account.findOne({
                where: {id: userId}
            })

            if (user) {
                await user.destroy();
            }
            
            let allUser = await db.Account.findAll({
                raw: true
            })
            resolve(allUser);
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = {
    createNewAccount: createNewAccount,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
    updateCRUD: updateCRUD,
    deleteCRUDfromService: deleteCRUDfromService,
}