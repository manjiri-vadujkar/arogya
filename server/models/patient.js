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

const getDetails = (email, callback) => {
    let sql = `SELECT * FROM user WHERE email="${email}";`
    connection.query(sql, (err, result) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, result);
    });
};

const addPatient = (name, email, password, age, gender, height, weight, hdiseases, callback) => {
    let sql =`INSERT INTO user (name, email, password, age, gender, height, weight, hdiseases)
    VALUES ('${name}', '${email}', '${password}', '${age}', '${gender}','${height}','${weight}','${hdiseases}');`
    connection.query(sql, (err, result) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, result);
    });
}

module.exports = {
    get, getDetails, addPatient
};