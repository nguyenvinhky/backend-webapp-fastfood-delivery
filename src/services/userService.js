
import database from '../models/index'
import bcrypt from 'bcryptjs';

let handleUserLogin = (email, password) => {
    return new Promise(async(resolve, reject) => {
        try {
            let userData = {};

            let isExist = await checkUser(email);
            if (isExist) {
                let user = await database.Account.findOne({
                    attributes: ['email', 'password'],
                    where: { email: email },
                    raw: true
                })

                if (user) {
                    let check = await bcrypt.compareSync(password, user.password); // true
                    
                    if (check) {
                        userData.errorCode = 0;
                        userData.message = 'Logged in successfully';
                        delete user.password;
                        userData.user = user;
                    } else {
                        userData.errorCode = 2;
                        userData.message = 'Wrong account or password';
                    }
                } else {
                    userData.errorCode = 3;
                    userData.message = 'This account does not exist';
                }
            }
            else{
                userData.errorCode = 3;
                userData.message = 'This account does not exist';
            }
            resolve(userData);
        } catch (error) {
            reject(error);
        }
    })
}

let checkUser = (email) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await database.Account.findOne({
                where: { email: email},
            })
            resolve(user);
        } catch (error) {
            reject(error);
        }
    })
}

let GetAllAccount = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = '';
            if(id === 'all'){
                users = await database.Account.findAll({ 
                    attributes: {exclude: 'password'},
                    raw: true
                });
            }

            if(id !== 'all'){
                users = await database.Account.findAll({
                    attributes: {exclude: 'password'},
                    where: { id: id },
                    raw: true,
                });
            }
            resolve(users);
        } catch (error) {
            reject(e);
        }
    })
}

module.exports = {
    handleUserLogin: handleUserLogin,
    GetAllAccount: GetAllAccount,
}