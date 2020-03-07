const connection = require('../db/connect');

const get = (email, password, callback) => {
    let sql = `SELECT email,password FROM user WHERE email="${email}" AND password="${password}"`
    connection.query(sql, (err, result) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, result);
    });
};

module.exports = {
    get
};