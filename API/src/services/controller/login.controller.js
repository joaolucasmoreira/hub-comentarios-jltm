const jwt = require('jsonwebtoken')

const LoginController = {
    login:(req, res) => {
        const { username, password } = req.body
        LoginService(usename, password).then((token) => {
            res.cookie('token', token, { http})
        })
    }
}