
import usersService from '../services/userService';

let handleLogin = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let user = {};
    console.log('username: ', username, 'password: ', password);

    if (!username || !password) {
        return res.status(500).json({
            errorCode: 1,
            message: 'Missing username or password'
        })
    }

    let userData = await usersService.handleUserLogin(username, password);

    return res.status(200).json({
        errorCode: userData.errorCode,
        message: userData.message,
        user: userData.user ? userData.user : {}
    })
}

let handleGetAllAccount = async (req, res) => {
    let id = req.body.id; //ALL, ID
    let users = await usersService.GetAllAccount(id);
    return res.status(200).json({
        errorCode: 0,
        message: 'Ok',
        users
    })
}

module.exports = {
    handleLogin: handleLogin,
    handleGetAllAccount: handleGetAllAccount
}