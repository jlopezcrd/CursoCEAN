var config = {};

config.express = {
    'PORT': 80,
    'HOST': 'localhost'
}

config.db = {
    'TYPE': 'couchbase:',
    'HOST'  : 'localhost',
    'BUCKET': 'example',
}

module.exports = config;