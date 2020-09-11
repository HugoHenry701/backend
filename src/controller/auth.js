const authService = require('../services/auth')
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
            status:0,
            message:'dang nhap that bai'
        })
    }
}
module.exports={
    login
}
