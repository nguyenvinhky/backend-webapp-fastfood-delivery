
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
                        userData.errorCode = 3;
                        userData.Message = 'ok';
                        delete user.password;
                        userData.user = user;
                    } else {
                        userData.errorCode = 4;
                        userData.Message = 'not ok';
                    }
                } else {
                    userData.errorCode = 2;
                    userData.Message = 'User false username or password';
                }
            }
            else{
                userData.errorCode = 1;
                userData.Message = 'Username or password not found';
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