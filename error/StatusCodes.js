const statuscodes = {
    100: 'continue', // continue with the request or ignore the the response
    101: 'switching protocols', // response to an update
    102: 'processing', // server has recieved and is processing
    103: 'Early hint', // used in the link header letting the user agent start preloading resources
    200: 'okay', // request success
    201: 'created', // resource created as a result of a successful request
    202: 'accepted', // request has been recieved but not acted upon
    203: 'non-authoritative-formation', // the returned meta data is not exactly the same as is available in the server
    204: 'No content', // there is no content to send to this request
    205: 'reset content', // tells the agent to reset the document which sent the request
    206: 'partial content', // when the response code is used when the range header sent is part of a resource
    207: 'multi-Status', // conveys information about multiple resources for situations where multiple statuses might be appropriate
    208: 'already reported', // used to prevent internal members of multiple bindings to the same collection
    226: 'I\'m used', // the get request for the resource and the response is a representation of the result manipulations applied
    300: 'multiple choices', // request has more than one request
    301: 'moved permanently', // url of requested resource is changed permanently  
    302: 'Found', //requested URL has been redirected to another website',
    303: 'see other', // the server sent this response to direct the client to the requested resource
    304: 'not modified', // tells the client that the resource has not been modified
    305: 'use proxy', // indicate that request response must be accessed by proxy
    306: 'unused', 
    307: 'temporary redirect', // the server sends this response to direct the client to get the requested resource at another URL
    308: 'permanent redirect', 
    400: 'bad request', //server cannot or will not process the request
    401: 'unauthorized',
    402: 'payment required',
    403: 'forbidden',
    404: 'not found',
    405: 'method no allowed', // the requested method is known by the server but is not surported
    406: 'Not Acceptable',
    407: 'proxy authentication required',
    408: 'Request Timeout',
    409: 'conflict',
    410: 'gone', // this is sent when the requested content has been permanently deleted from the server
    411: 'length required', // server rejected the request because the content-length header field is not defined
    412: 'precondition failed', // client indicated pre conditions in the header that the server did not meet
    413: 'payload too large', // requested entity is larger than the limit defined by the server
    414: 'uri too long', // the url is longer than the server wishes to interprete
    415: 'unsurported media type', // the media format of the requested data is not surpported by the server
    416: 'ranger not satisfiable', // the ranger specified by the ranger header field in the request cannot be fulfilled
    417: 'expectation failed', // the response code means the expectation in the request header field cannot be met by the server
    418: 'i\'m a teapot', // the server refuses the attempt to brew coffee with a teapot
    421: 'misdirected request', // the request is directed at a server that is not able to produce a response
    422: 'unprocessable content', // the request was well formed but was unable to be followed due to semantic errors
    423: 'locked', // access to the resource has been locked
    424: 'failed dependency', // the request failed due to failure of previous request
    425: 'too early', // indicates that the server is unwilling to risk processing a request that may be replayed
    426: 'upgrade required', // the server refuses to perform the request using the current protocal but might be willing after client upgrades
    428: 'precondition required', // the origin of the server requires the request to be conditional 
    429: 'too many requests', // the user has sent too many requests in a given amount of time
    431: 'requested header fields too large', //the server is unwilling to process the request because its header fields are too large
    451: 'unavailable for legal reasons', 
    500: 'internal server error',
    501: 'not implemented', // requested method is not surported but hte server and canot be handled'
    502: 'bad gateway', // the server got an invlaid request
    503: 'service unavailable', // the server is not ready to handle the request
    504: 'gateway timeout', // the server is acting as a gateway and could not get a response
    505: 'HTTP version not surported', 
    506: 'variant also negotiates', // The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.
    507: 'insufficient storage', 
    508: 'infinite loop detected',
    510: 'not extended', // extensions to the latest requested expected
    511: 'network authentication required', // authentication required to access network

    //database errors
    600: 'Internal database error',
    601: 'invalid query', // data cannot be found in the database
    602: 'oops! wrong database',
    603: 'service unavailable', // server cannot handle the request
    604: 'query timeout',
    605: 'query does not exist',
    608: 'infinite loop',
    611: 'database is not connected',
    612: 'empty data',
    613: 'duplicate data',

    //database success
    704: 'complete data displayed',
    705: 'specific data displayed',
    706: 'faulty details',
    707: 'data already in field list',
    708: 'user already exists',

    // unable to validate
    // no token
    // email is taken
    // not email 
    // not enough characters
    // password is weak
    // password is strong
    // not enough characters 
    // wrong password
    // verify account

}

module.exports = {
    statuscodes
}

