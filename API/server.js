const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2')
const cors = require('cors')
require('dotenv').config()

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(bodyParser.json());

const CommentRouter = require('./src/services/routes/comment.route.js')
server.use('/comment', CommentRouter);

const UserRouter = require('./src/services/routes/comment.route.js')
server.use('/user', UserRouter);

const PORT = 7000;

server.get('/', (req, res) => {
    res.send(`
    <h1> API do Sistema HUB-Comentários</h1>
    <ul>
    <li> <a href="http://localhost:7000/comment">Get de comentários</a></li>
    </ul>
    `)
})

server.get('/', (req, res) => {
    res.send(`
    <h1> API do Sistema HUB-Comentários</h1>
    <ul>
    <li> <a href="http://">Get de comentários</a></li>
    </ul>
    `)
})

server.get('/', (req, res) => {
    res.send(`
    <h1> API do Sistema HUB-Comentários</h1>
    <ul>
    <li> <a href="http://localhost:7000/comment">Get de comentários</a></li>
    </ul>
    `)
})

server.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.query('SELECT * FROM user WHERE username = ? AND password = ?',
        [username, password], (err, results) => {
            if (err) {
                res.status(500).json({ success: false, error: 'Internal server error' });
                return;
            }
            if (results.length > 0) {
                const { id, username, firstname, lastname } = results[0];
                res.json({ success: true, user: { id, username, firstname, lastname } });
            } else {
                res.json({ success: false, error: 'Usuário ou senha inválidos' });
            }
        })
})



// LISTAR COMENTÁRIOS
server.get('/comment', (req, res) => {
    const queryByUser = `SELECT comment.id,
                            user.username as author,
                            comment.comment_text,
                            comment.created_at,
                            comment.updated_at
                        FROM comment
                    INNER JOIN user ON comment.userId = user.id
                    ORDER BY comment.updated_at DESC;`
    // const queryList = `SELECT * FROM comment`
    db.query(queryByUser, (err, results) => {
        if (err) {
            return res.status(500).json({ success: false, error: 'Internal server error' });
        }
        res.json({ success: true, comment: results });
    });
});

// ADICIONAR COMMENT

server.post('/comment', (req, res) => {
    const { userId, comment_text } = req.body;
    db.query('INSERT INTO comment (userId, comment_text) VALUES (?, ?)', [userId, comment_text], (err, result) => {
        if (err) {
            return res.status(500).json({ success: false, error: 'Internal server error' });
        }
        res.json({ success: true });
    })
})

server.listen(PORT, () => {
    console.log(`O server está rodando em http://localhost:${PORT}`)
})
