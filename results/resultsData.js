const {pool} = require('../config');
const constants = require('../constants');

exports.get_year = async (year, event, top) => {
    let startDate = constants.dates[year].start, endDate = constants.dates[year].end;
    let sql_main_statement = 'SELECT * FROM results WHERE date BETWEEN ' + startDate + ' AND ' + endDate + ';';
    console.log(sql_main_statement, 'Selected Event(s): ' + event, 'Top: ' + top);
    return pool.query(sql_main_statement);
};
