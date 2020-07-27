'use strict';
const AWS = require("aws-sdk");

AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
    region: process.env.REGION
});


module.exports.dynamoDbopen = () => {
    AWS.config.update({
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_KEY,
        region: process.env.REGION
    });
    var dynamoDbconnection = new AWS.DynamoDB.DocumentClient();    
    return dynamoDbconnection;
}

module.exports.s3=()=>{
    AWS.config.update({
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_KEY,
        region: process.env.REGION
    });
    var s3 = new AWS.S3();
    return s3;
}
