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

config.errors = {
    400: 'Bad Request!',
    200: 'Success!',
    201: 'Success!',
    404: 'Not Found!'
}

module.exports = config;