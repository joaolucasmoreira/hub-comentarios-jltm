const db = require("../db_connect");

const UserService = {
  getDBUsers: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM user", (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },
  getDBUserById(id) {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM user WHERE id =?", [id], (error, result) => {
        if (error) {
          reject(error.message);
        }
        if (result.length > 0) {
          resolve(result);
        }
      });
    });
  },
  updateDBUser: ({ id, firstname, lastname, username, password }) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE user SET firstname =?, lastname =?, username =?, password =? WHERE id =?",
        [firstname, lastname, username, password, id],
        (err, result) => {
          if (err) {
            reject("Error updating user data");
          }
          resolve();
        }
      );
    });
  },
};

module.exports = UserService;
