'use strict'
var BASIC_CONST = require('../config/constants/consts.js')
var response_message = require('../config/constants/utils.js')
var queries = require('../utils/queries.js')
const uuid = require('uuid')

//This functions Inserts data into DynamoDb

module.exports.insert = async (event) => {
    try {
        var event_details = (typeof (event.body) != 'object') ? JSON.parse(event.body) : event.body;
        var user_id = event.pathParameters.id;
        var name = event_details.name;
        var age = event_details.age;
        var address = event_details.address;
        var updateQuery;
        var updateParams ={
            TableName: ProcessingInstruction.env.USERS_TABLE,
            Key: {
                "id": user_id,
            },
            UpdateExpression: "set name = :name, #age = :age, #address = :address",
            ExpressionAttributeNames: {
                "#name": "name",
                "#age": "age",
                "#address": "address"
            },
            ExpressionAttributeValues: {
                ":name": name,
                ":age": age,
                ":address": address
            }
        }
        updateQuery = await queries.update(updateParams);
        return response_message(200, BASIC_CONST.status.UPDATE_SUCCESS);
    } catch (err) {
        return response_message(400, BASIC_CONST.status.ERROR,err);
    }
}
