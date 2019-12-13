const constants = require('./constants');

exports.validate_fields = (field) => {
    let allowedFields = constants.events;
    return allowedFields.includes(field);
};

exports.get_event_type = event => {
    event = event.toLowerCase();
    if (constants.field_events.includes(event))
        return 'field';
    if (constants.track_events.includes(event))
        return 'track';
};

exports.sort_by_mark = (mark1, mark2, type) => {
    let nomark1 = false, nomark2 = false;
    if (mark1 === 'DNS' || mark1 === 'DNF' || mark1 === 'DQ' || mark1 === 'NM') nomark1 = true;
    if (mark2 === 'DNS' || mark2 === 'DNF' || mark2 === 'DQ' || mark2 === 'NM') nomark2 = true;
    if (nomark1 && nomark2) return 0;
    if (nomark1 && !nomark2) return 1;
    if (nomark2 && !nomark1) return -1;

    if (type === 'track')
        return mark1 - mark2;

    if (type === 'field')
        return mark2 - mark1;

};

exports.asyncFetchGet = async (url, params, headers = {credentials: 'include'}) => {
    let data;
    console.log(`${url}?${stringify(params)}`);
    let response = await fetch(`${url}?${stringify(params)}`, headers);
    let contentType = response.headers.get('content-type');
    if (contentType.startsWith('application/json;'))
        data = await response.json();
    return data;
};

function stringify(obj) {
    let queryString = '';
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            queryString += `${key}=${obj[key]}&`;
        }
    }
    return queryString;
}

