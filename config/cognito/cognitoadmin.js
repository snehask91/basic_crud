
'use strict';
const AWS = require("aws-sdk");
AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
    region: process.env.REGION
});

module.exports.admin = () => {
    var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();
    return cognitoidentityserviceprovider;
}
