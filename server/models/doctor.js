const connection = require('../db/connect');

const getDL = (email, password, callback) => {
    let sql = `SELECT email,password FROM doctor_login WHERE email="${email}" AND password="${password}"`
    connection.query(sql, (err, result) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, result);
    });
};

const getPatients = (email, callback) => {
    let sql = `SELECT name, age, gender, hdiseases, result FROM user;`
    connection.query(sql, (err, result) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, result);
    });
}

const getAppointments = (email, callback) => {
    let sql = `SELECT * FROM appointments;`
    connection.query(sql, (err, result) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, result);
    });
}

module.exports = {
    getDL, getPatients, getAppointments
};