
'use strict'
var BASIC_CONST = require('../config/constants/consts.js')
var response_message = require('../config/constants/utils.js')
var queries = require('../utils/queries.js')
const uuid = require('uuid')

//This functions Inserts data into DynamoDb

module.exports.insert = async (event) => {
    try {
        var event_details = (typeof (event.body) != 'object') ? JSON.parse(event.body) : event.body;
        var user_id = uuid.v4();
        var name = event_details.name;
        var age = event_details.age;
        var address = event_details.address;
        var insertJson = {
            name : name,
            age: age,
            address: address
        }
        var insertQuery;
        var insertParams ={
            TableName: ProcessingInstruction.env.USERS_TABLE,
            Key: {
                "id": user_id,
            },
            Item: insertJson
        }
        insertQuery = await queries.insert(insertParams);
        return response_message(200, BASIC_CONST.status.INSERT_SUCCESS);
    } catch (err) {
        return response_message(400, BASIC_CONST.status.ERROR,err);
    }
}
