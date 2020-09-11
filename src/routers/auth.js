//authentication
const R = require('express').Router()
const authController = require('../controller/auth')
const login = 1
R.post('/login',authController.login)

// const logout =2
const changePassword = 3
const accessToken = 4
module.exports =  R
