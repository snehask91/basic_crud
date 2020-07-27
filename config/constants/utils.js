'use strict';
var AWS = require("aws-sdk");
const BASIC_CONST = require('../../config/constants/consts.js');


module.exports.success = (statusCode, message, data) => {
    if (data == null) {
        return {
            statusCode: statusCode,
            headers: BASIC_CONST.headers,
            body: JSON.stringify({
                "statusCode": statusCode,
                "status": BASIC_CONST.status.SUCCESS,
                "message": message
            })
        };
    } else {
        return {
            statusCode: statusCode,
            headers: BASIC_CONST.headers,
            body: JSON.stringify({
                "statusCode": statusCode,
                "status": BASIC_CONST.status.SUCCESS,
                "message": message,
                "data": data
            })
        };
    }
}


module.exports.error = (statusCode, message, data = null) => {
    if (data == null) {
        return {
            statusCode: statusCode,
            headers: BASIC_CONST.headers,
            body: JSON.stringify({
                "statusCode": statusCode,
                "status": BASIC_CONST.status.ERROR,
                "message": message
            })
        };
    } else {
        return {
            statusCode: statusCode,
            headers: BASIC_CONST.headers,
            body: JSON.stringify({
                "statusCode": statusCode,
                "status": BASIC_CONST.status.ERROR,
                "message": message,
                "data": data
            })
        };
    }
}
