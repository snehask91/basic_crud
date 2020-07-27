'use strict'
var BASIC_CONST = require('../config/constants/consts.js')
var response_message = require('../config/constants/utils.js')
var queries = require('../utils/queries.js')
const uuid = require('uuid')

//This functions REMOVES data from DynamoDb

module.exports.insert = async (event) => {
    try {
        var event_details = (typeof (event.body) != 'object') ? JSON.parse(event.body) : event.body;
        var user_id = event.pathParameters.id;
        var removeQuery;
        var removeParams ={
            TableName: ProcessingInstruction.env.USERS_TABLE,
            Key: {
                "id": user_id,
            }
        }
        removeQuery = await queries.delete(removeParams);
        return response_message(200, BASIC_CONST.status.DELETE_SUCCESS);
    } catch (err) {
        return response_message(400, BASIC_CONST.status.ERROR,err);
    }
}
