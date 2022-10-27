
import db from '../models/index';
import bcrypt from 'bcryptjs';

let handleUserLogin = (username, password) => {
    return new Promise(async(resolve, reject) => {
        try {
            let userData = {};

            let isExist = await checkUser(username);
            if (isExist) {
                let user = await db.User.findOne({
                    attributes: ['username', 'password'],
                    where: { username: username },
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

let checkUser = (username) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { username: username},
            })
            resolve(user);
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = {
    handleUserLogin: handleUserLogin,
}