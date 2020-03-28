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
        return callback(null, JSON.stringify(result));
    });
}

const addTestResult = (ans, email, callback) => {
    let a=0;
    let b=0;
    let c=0;
    let result = Object.values(ans);

    console.log(result);

    for (const item of result){
        switch (item) {
            case "v": a++
                    break;
            case "p": b++
                    break;
            case "k": c++
                    break; 
        }
    }

    console.log(a, b, c);

    if (a>=7){
        res="Vatta";
    }
    else if (b>=7){
        res="Pitta"
    }
    else if (c>=7){
        res="Kaffa"
    }
    else if (a==6 && b==4 || a==4 && b==6) { 
        res="Vatta-Pitta"
    }
    else if (a==6 && c==4 || a==4 && c==6) {
        res="Vatta-Kaffa"
    }
    else if (c==6 && b==4 || c==4 && b==6) {
        res="Kaffa-Pitta"
    }
    else {
        res="Vatta-Pitta-Kaffa"
    }

    console.log(res);

    let sql = `UPDATE user SET result = "${res}" WHERE email="${email}";`
    console.log(sql)
    connection.query(sql, (err, result) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, JSON.stringify(result));
    });
}

module.exports = {
    get, getDetails, addPatient, addTestResult
};