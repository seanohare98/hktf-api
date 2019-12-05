let data = require('./resultsData');
const {sort_by_mark, get_event_type} = require('../commonFunctions');

exports.get_year = async function (year, event, top) {
    let raw_data = await data.get_year(year, event, top);
    raw_data = raw_data.rows;
    if (!(event.includes('*'))) {
        raw_data = raw_data.filter(result => {
            return event.some(selected_event => selected_event === result.event.toLowerCase())
        });
    }
    let sorted_data = raw_data.sort((a, b) => a.event.toLowerCase().localeCompare(b.event.toLowerCase()));
    sorted_data = sorted_data.sort((a, b) => {
        if (a.event.toLowerCase() === b.event.toLowerCase())
            return sort_by_mark(a.result, b.result, get_event_type(a.event));
        else
            return 0;
    });
    if(top === 'all')
        return sorted_data;
    else
        return sorted_data.slice(0, parseInt(top));
};
