
import usersService from '../services/userService';

let handleLogin = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let user = {};
    console.log('username: ', username, 'password: ', password);

    if (!username || !password) {
        return res.status(500).json({
            is_active: 1,
            error: 'Missing username or password'
        })
    }

    let userData = await usersService.handleUserLogin(username, password);

    return res.status(200).json({
        errorCode: userData.errorCode,
        Message: userData.Message,
        user: userData.user ? userData.user : {}
    })
}

module.exports = {
    handleLogin: handleLogin
}