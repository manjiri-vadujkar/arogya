const connection = require('../db/connect');

const getDL = (username, password, callback) => {
    let sql = `SELECT username,password FROM doctor_login WHERE username="${username}" AND password="${password}"`
    connection.query(sql, (err, result) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, result);
    });
};

module.exports = {
    getDL
};