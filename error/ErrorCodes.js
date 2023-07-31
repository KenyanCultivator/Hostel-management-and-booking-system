const statuscodes = {
    200: 'okay',
    201: 'created',
    204: 'empty response',
    302: 'requested URL has been redirected to another website',
    400: 'bad request',
    401: 'unauthorized',
    403: 'forbidden',
    404: 'not found',
    406: 'Not Acceptable',
    408: 'Request Timeout',
    500: 'internal server error',
    502: 'bad gateway',
    503: 'service unavailable',
    504: 'gateway timeout'
}

module.exports = {
    statuscodes
}

