const UserService = require ('../services/user.services.js');

const UserController = {
    getUsers: (req, res) => {
        UserService.getDBUsers().then(
            resultado =>{
                res.json({success: true, users: resultado});
            }
        ).catch(error => {
            res.status(500).json({
                success: false,
                error: `Internal server error${error.message}`
            })
        })
    },
    getUserById(id) {
       
    }
}

server.get('/user', (req, res) => {
    db.query('SELECT * FROM user', (err, results) => {
        res.json({ success: true, user: results });
    });
});