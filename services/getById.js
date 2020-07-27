'use strict'
var BASIC_CONST = require('../config/constants/consts.js')
var response_message = require('../config/constants/utils.js')
var queries = require('../utils/queries.js')

//This functions gets the data by id from DynamoDb

module.exports.getById = async (event) => {
    try {
        var event_details = (typeof (event.body) != 'object') ? JSON.parse(event.body) : event.body;
        var user_id = event.pathParameters.id;
        var getQuery;
        var getParams ={
            TableName: ProcessingInstruction.env.USERS_TABLE,
            Key: {
                "id": user_id,
            }
        }
        getQuery = await queries.query(getParams);

        if(paginateQuery.Items!= null ||paginateQuery.Items!= []){
            return response_message(200, BASIC_CONST.status.SUCCESS, paginateQuery.Items);
        }else{
            return response_message(200, BASIC_CONST.status.DATA_NOT_PRESENT);
        }
    } catch (err) {
        return response_message(400, BASIC_CONST.status.ERROR,err);
    }
}
