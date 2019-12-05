let data = require('./athletesData');
const {sort_by_mark, get_event_type} = require('../commonFunctions');

exports.get_name = async function (name) {
    let raw_data = await data.get_name(name);
    raw_data = raw_data.rows;
    let sorted_data = raw_data.sort((a, b) => a.event.toLowerCase().localeCompare(b.event.toLowerCase()));
    sorted_data = sorted_data.sort((a, b) => {
        if (a.event.toLowerCase() === b.event.toLowerCase())
            return sort_by_mark(a.result, b.result, get_event_type(a.event));
        else
            return 0;
    });
    return sorted_data;
};
