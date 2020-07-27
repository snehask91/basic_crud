'use strict'
var BASIC_CONST = require('../config/constants/consts.js')
var response_message = require('../config/constants/utils.js')
var queries = require('../utils/queries.js')

//This functions gets the data using pagination on DynamoDb

module.exports.get = async (event) => {
    try {
        var event_details = (typeof (event.body) != 'object') ? JSON.parse(event.body) : event.body;
        var lastEvaluatedKey = event_details.lastEvaluatedKey;
        var paginateQuery;
        var getParams ={
            TableName: ProcessingInstruction.env.USERS_TABLE,
            Limit: 5
        }        
        if(lastEvaluatedKey){
            getParams.ExclusiveStartKey = lastEvaluatedKey;
            paginateQuery = await queries.scan(getParams);
        }else{
            paginateQuery = await queries.scan(getParams);
        }
        if(paginateQuery.Items!= null ||paginateQuery.Items!= []){
            return response_message(200, BASIC_CONST.status.SUCCESS, paginateQuery.Items);
        }else{
            return response_message(200, BASIC_CONST.status.DATA_NOT_PRESENT);
        }
    } catch (err) {
        return response_message(400, BASIC_CONST.status.ERROR,err);
    }
}
