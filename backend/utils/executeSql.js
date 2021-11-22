import db from '../config/database.js';

const executeSql = (q, result, data1=undefined, data2=undefined) => {
    db.query(q, [data1, data2], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
};

export default executeSql;