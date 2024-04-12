const db = require("../db_connect");

const UserService = {
  getDBUsers: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM users", (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
  getDBUserById(id) {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM users WHERE id =?", [id], (error, result) => {
        if (error) {
          reject(error.message);
        }
        if (result.length > 0) {
            resolve(result)
        } else {
            reject("Usuário não encontrado");
        }
      });
    });
  },
};
