'use strict'
var BASIC_CONST = require('../config/constants/consts.js')
const database = require('../config/database/connection.js');
var response_message = require('../config/constants/utils.js')


const dynamodb = database.dynamoDbopen();

module.exports.scan = async (params) => {
    return new Promise((resolve, reject) => {
        db.scan(params, (err, data) => {
            if (err) {
                console.log(err);
                reject(err);
            }
            else {
                // console.log(data);
                resolve(data);
            }
        })
    });
}

module.exports.query = async (params) => {
    return new Promise((resolve, reject) => {
        db.query(params, (err, data) => {
            if (err) {
                console.log(err);
                reject(err);
            }
            else {
                // console.log(data);
                resolve(data);
            }
        })
    });
}

module.exports.insert = async (params) => {
    return new Promise((resolve, reject) => {
        db.putItem(params, (err, data) => {
            if (err) {
                console.log(err);
                reject(err);
            }
            else {
                // console.log(data);
                resolve(data);
            }
        })
    });
}

module.exports.update = async (params) => {
    return new Promise((resolve, reject) => {
        db.updateItem(params, (err, data) => {
            if (err) {
                console.log(err);
                reject(err);
            }
            else {
                // console.log(data);
                resolve(data);
            }
        })
    });
}

module.exports.delete = async (params) => {
    return new Promise((resolve, reject) => {
        db.deleteItem(params, (err, data) => {
            if (err) {
                console.log(err);
                reject(err);
            }
            else {
                // console.log(data);
                resolve(data);
            }
        })
    });
}
