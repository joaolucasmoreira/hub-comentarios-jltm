const express = require('express')
const LoginController = require('../controller/login.controller')

const LoginRouter = express.Router()

LoginRouter.post('/login', LoginController.login)

LoginRouter.post('/logout', LoginController.logout)

LoginRouter.put('/update', LoginController.isAuthenticated, LoginController.updateUserSession)

module.exports = LoginRouter;