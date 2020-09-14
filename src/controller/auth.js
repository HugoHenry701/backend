const authService = require('../services/auth')
const accountService = require('../services/account')
const login = async (req, res, next) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    }

    const result = await authService.login(user);
    // const result = 've xem phim'
    if (result) {
        res.send({
            status: 1,
            token: result
        })
    } else {
        res.send({
            status: 0,
            message: 'dang nhap that bai'
        })
    }
}
const getMe = async (req, res, next) => {
    console.log("Me");
    const user = await accountService.getAccountbyId(req.username)
    console.log(user);
    res.send(user)
}
module.exports = {
    login,
    getMe
}
