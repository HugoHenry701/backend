const Route = require('express').Router();
const accountController = require('../controller/account')

Route.get('/', accountController.getAllAccount)
Route.get('/:id', accountController.getAccountbyId)
Route.post('/', async (req, res, next) => {
    const newAccount = {
        username: req.body.username,
        password: req.body.password
        // 123456 => hash => encrypt => result => save to db
    }
    const result = await accountController.creatAccount(newAccount)
    res.send(result)
})
Route.put('/:id', accountController.updateAccount)
Route.delete('/:id', accountController.deleteAccount)

module.exports = Route