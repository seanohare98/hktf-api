EVENTS = ['*', 'decathlon', 'heptathlon',
    'menshighjump', 'menspolevault', 'menslongjump', 'menstriplejump',
    'mensdiscusthrow', 'menshammerthrow', 'mensshotput', 'mensjavelinthrow',
    'mens100m', 'mens200m', 'mens400m', 'mens800m', 'mens1500m', 'mens3000m', 'mens5000m', 'mens10000m',
    'mens110mh', 'mens400mh', 'mens3000msc', 'mens2000msc', 'mens5000mrw',
    'womenshighjump', 'womenspolevault', 'womenslongjump', 'womenstriplejump',
    'womensdiscusthrow', 'womenshammerthrow', 'womensshotput', 'womensjavelinthrow',
    'womens100m', 'womens200m', 'womens400m', 'womens800m', 'womens1500m', 'womens3000m', 'womens5000m', 'womens10000m',
    'womens100mh', 'womens400mh', 'womens3000msc', 'womens2000msc', 'womens5000mrw'];

FIELD_EVENTS = ['decathlon', 'heptathlon',
    'menshighjump', 'menspolevault', 'menslongjump', 'menstriplejump',
    'mensdiscusthrow', 'menshammerthrow', 'mensshotput', 'mensjavelinthrow', 'womenshighjump', 'womenspolevault',
    'womenslongjump', 'womenstriplejump', 'womensdiscusthrow', 'womenshammerthrow', 'womensshotput',
    'womensjavelinthrow',];

TRACK_EVENTS = ['mens100m', 'mens200m', 'mens400m', 'mens800m', 'mens1500m', 'mens3000m', 'mens5000m', 'mens10000m',
    'mens110mh', 'mens400mh', 'mens3000msc', 'mens2000msc', 'mens5000mrw', 'womens100m', 'womens200m', 'womens400m',
    'womens800m', 'womens1500m', 'womens3000m', 'womens5000m', 'womens10000m', 'womens100mh', 'womens400mh',
    'womens3000msc', 'womens2000msc', 'womens5000mrw'];

DATES = {
    2019: {
        start: '\'2018-09-01\'',    //2018-2019 season start date
        end: '\'2019-08-01\''       //2018-2019 season end date
    },
    2020: {
        start: '\'2019-09-01\'',
        end: '\'2020-08-01\''
    }
};

exports.dates = DATES;
exports.events = EVENTS;
exports.field_events = FIELD_EVENTS;
exports.track_events = TRACK_EVENTS;