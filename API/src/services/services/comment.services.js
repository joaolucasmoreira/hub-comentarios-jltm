const db = require('../db_connect')
const CommentService = {
    getDBComment: () => {
        return new Promise((resolve, reject) => {
            const query = `SELECT commennt.id,
                                user.username as author,
                                comment.comment_text,
                                comment.created_at,
                                comment.updated_at
                            FROM comment
                        INNER JOIN user ON comment.userId = user.id
                        ORDER BY comment.updated_at DESC;`
            db.query(query, (error, result) => {
                if (error) {
                    reject(error.message)
                } else {
                    resolve(result)
                }
            })
        })
    }
}

module.exports = CommentService;