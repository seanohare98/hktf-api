const {pool} = require('../config');
const constants = require('../constants');

exports.get_name = async (name) => {
    let sql_main_statement = 'SELECT * FROM results WHERE name = \'' + name + '\';';
    console.log(sql_main_statement);
    return pool.query(sql_main_statement);
};
