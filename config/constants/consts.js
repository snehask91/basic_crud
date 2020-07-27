module.exports.headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
  "Access-Control-Allow-*": "*",
  "Access-Control-Allow-Headers": "*",
  "node-cache": "Missed node-cache"
}
module.exports.constants = {
  //declare flags and constants here
}

module.exports.status = { 
  //declare status messages here
    ERROR: "Error",
    SUCCESS:"Success",
    ERROR_MSG: "Invalid input JSON",    
    BAD_REQUEST: "Bad Request",
    DATA_NOT_PRESENT: "No data present inside the table",
    INSERT_SUCCESS: "Inserted item successfully in database",
    DELETE_SUCCESS: "Deleted item successfully in database",
    UPDATE_SUCCESS: "Updated item successfully in database"
}
