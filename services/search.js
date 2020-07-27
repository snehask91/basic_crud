'use strict'
var BASIC_CONST = require('../config/constants/consts.js')
var response_message = require('../config/constants/utils.js')
var queries = require('../utils/queries.js')

//This functions searches the specific name in a specified age limit from DynamoDb

module.exports.search = async (event) => {
    try {
        var event_details = (typeof (event.body) != 'object') ? JSON.parse(event.body) : event.body;
        var searchKeyword = event_details.keyword;
        var min_age = event_details.min_age;
        var max_age = event_details.max_age;
        var searchQuery;
        var searchParams ={
            TableName: ProcessingInstruction.env.USERS_TABLE,
            KeyConditionExpression: "#age between :start AND :end",
            FilterExpression: 'contains (#name, :name)',
            ExpressionAttributeNames: {
                "#age": "age",
                "#name": "name",
            },
            ExpressionAttributeValues: {
                ":start": min_age,
                ":end": max_age,
                ":name": searchKeyword
            }
        }   
        searchQuery = await queries.scan(searchParams);
        if(paginateQuery.Items!= null ||paginateQuery.Items!= []){
            return response_message(200, BASIC_CONST.status.SUCCESS, paginateQuery.Items);
        }else{
            return response_message(200, BASIC_CONST.status.DATA_NOT_PRESENT);
        }
    } catch (err) {
        return response_message(400, BASIC_CONST.status.ERROR,err);
    }
}
