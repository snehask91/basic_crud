'use strict'
const jsonValidator = require('is-my-json-valid')
const VALIDATOR_MSG = require('../config/constants/validatorMsg')
var formatErrorMsg = (data) => {
  var validatorPattern = {
    "than": "LENGTH",
    "format": "CHAR",
    "type": "CHAR",
    "required": "REQUIRED"
  }
  var arrLen = data.length;
  for (let i = 0; i < arrLen; i++) {
    let msgArr = data[i].field.split(".");
    let attributeName = msgArr[msgArr.length - 1].toUpperCase();
    let msg = data[i].message;
    let errMsg = "";
    for (let x in validatorPattern) {
      let pattern = new RegExp(x);
      if (msg.match(pattern)) {
        errMsg = VALIDATOR_MSG[attributeName];
        if (errMsg) {
          errMsg = errMsg[validatorPattern[x]]
        } else {
          errMsg = attributeName.toLowerCase() + ' ' + data[i].message + '.'
          errMsg = errMsg.charAt(0).toUpperCase() + errMsg.slice(1);
        }
      }
    }
    data[i] = {
      "debug_error": process.env.DEBUG ? data[i] : {},      
      "message": errMsg
    };
  }
  return data;
};

module.exports.mailKeyword=(data)=>{
  var validate = jsonValidator({
    required: true,
    type: 'object',
    properties: {      
      email_id: {
        required: true,
        type: 'string',
        format: 'email_id',
      },
      // subject: {
      //   required: true,
      //   type: 'string',
      //   minLength: 1,
      //   maxLength: 200
      // },
      name: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 200
      },
      message: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 2000
      },      
    }
  }, {
    formats: { 
        'name': VALIDATOR_MSG.NAME.REGEX,
        'email_id': VALIDATOR_MSG.EMAIL_ID.REGEX,
        // 'subject': VALIDATOR_MSG.SUBJECT.REGEX,
        'message': VALIDATOR_MSG.MESSAGE.REGEX,       
    }
})
  if (validate(data)) {
    return true
  } else {
    return formatErrorMsg(validate.errors)
  }
}


module.exports.sendEmailKeyword=(data)=>{
  var validate = jsonValidator({
    required: true,
    type: 'object',
    properties: {      
      mail_to_email_id: {
        required: true,
        type: 'string',
        format: 'mail_to_email_id',
      },
      subject: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 200
      },
      message: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 2000
      },      
    }
  }, {
    formats: { 
        // 'name': VALIDATOR_MSG.NAME.REGEX,
        'mail_to_email_id': VALIDATOR_MSG.MAIL_TO_EMAIL_ID.REGEX,
        'subject': VALIDATOR_MSG.SUBJECT.REGEX,
        'message': VALIDATOR_MSG.MESSAGE.REGEX,       
    }
})
  if (validate(data)) {
    return true
  } else {
    return formatErrorMsg(validate.errors)
  }
}

module.exports.encrptDecryptKeyword=(data)=>{
  var validate = jsonValidator({
    required: true,
    type: 'object',
    properties: {      
      data: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 2000
      }      
    }
  }, {
    formats: { 
        // 'name': VALIDATOR_MSG.NAME.REGEX,
        'data': VALIDATOR_MSG.DATA.REGEX,            
    }
})
  if (validate(data)) {
    return true
  } else {
    return formatErrorMsg(validate.errors)
  }
}

module.exports.decryptKeyword=(data)=>{
  var validate = jsonValidator({
    required: true,
    type: 'object',
    properties: {      
      id: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 50
      }      
    }
  }, {
    formats: { 
        // 'name': VALIDATOR_MSG.NAME.REGEX,
        'id': VALIDATOR_MSG.ID.REGEX,            
    }
})
  if (validate(data)) {
    return true
  } else {
    return formatErrorMsg(validate.errors)
  }
}
module.exports.sendSMSKeyword=(data)=>{
  var validate = jsonValidator({
    required: true,
    type: 'object',
    properties: {      
      sms_to_phone: {
        required: true,
        type: 'string',
        format: 'sms_to_phone',
      },
      subject: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 200
      },
      message: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 2000
      },      
    }
  }, {
    formats: { 
        // 'name': VALIDATOR_MSG.NAME.REGEX,
        'sms_to_phone': VALIDATOR_MSG.PHONE_WITH_CODE.REGEX,
        'subject': VALIDATOR_MSG.SUBJECT.REGEX,
        'message': VALIDATOR_MSG.MESSAGE.REGEX,       
    }
})
  if (validate(data)) {
    return true
  } else {
    return formatErrorMsg(validate.errors)
  }
}
module.exports.snsPushKeyword=(data)=>{
  var validate = jsonValidator({
    required: true,
    type: 'object',
    properties: {      
      deviceToken: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 2000
      },      
      deviceType: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 2000
      },
      message: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 2000
      },      
    }
  }, {
    formats: { 
        'deviceToken': VALIDATOR_MSG.DEVICE_TOKEN.REGEX,
        'deviceType': VALIDATOR_MSG.DEVICE_TYPE.REGEX,        
        'message': VALIDATOR_MSG.MESSAGE.REGEX,       
    }
})
  if (validate(data)) {
    return true
  } else {
    return formatErrorMsg(validate.errors)
  }
}

module.exports.companyKeyword = (data) => {
  var validate = jsonValidator({
    required: true,
    type: 'object',
    properties: {
      companySlug: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 50
      },
      companyName: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 50
      },
      companyStatus: {
        required: true,
        type: 'integer',
        minLength: 1,
        maxLength: 1
      },
      createdBy: {
        required: true,
        type: 'string',
        minLength: 10,
        maxLength: 200
      },
      companyEmail: {
        required: true,
        type: 'string',
        format: 'email_id'
      }
    }
  }, {
      formats: {
        'companyCode': VALIDATOR_MSG.COMPANY_CODE.REGEX,
        'companySubdomain': VALIDATOR_MSG.company_subdomain.REGEX,
        'companyName': VALIDATOR_MSG.COMPANY_NAME.REGEX,
        'companyStatus': VALIDATOR_MSG.COMPANY_STATUS.REGEX,
        'createdBy': VALIDATOR_MSG.CREATEDBY.REGEX,
        'companyEmail': VALIDATOR_MSG.EMAIL_ID.REGEX,
      }
    })
  if (validate(data)) {
    return true
  } else {
    return formatErrorMsg(validate.errors)
  }
}



module.exports.meKeyword=(data)=>{
  var validate = jsonValidator({
    required: true,
    type: 'object',
    properties: {      
      email_id: {
        required: true,
        type: 'string',
        format: 'email_id',
      },      
    }
  }, {
    formats: { 
        'email_id': VALIDATOR_MSG.EMAIL_ID.REGEX,        
    }
})
  if (validate(data)) {
    return true
  } else {
    return formatErrorMsg(validate.errors)
  }
}
module.exports.smsKeyword=(data)=>{
  var validate = jsonValidator({
    required: true,
    type: 'object',
    properties: {    
      code: {
        required: true,
        type: 'string',
        minLength: 3,
        maxLength: 3
      }, 
      phone: {
        required: true,
        type: 'string',
        format: 'phone'
      },
      message: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 2000
      },      
    }
  }, {
    formats: {       
        'phone': VALIDATOR_MSG.PHONE.REGEX,
        'code': VALIDATOR_MSG.CODE.REGEX,   
        'message': VALIDATOR_MSG.MESSAGE.REGEX,       
    }
})
  if (validate(data)) {
    return true
  } else {
    return formatErrorMsg(validate.errors)
  }
}

module.exports.slackKeyword=(data)=>{
  var validate = jsonValidator({
    required: true,
    type: 'object',
    properties: {   
      name: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 200
      },
      email_id: {
        required: true,
        type: 'string',
        format: 'email_id',
      },  
      message: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 2000
      },      
    }
  }, {
    formats: {     
        'name': VALIDATOR_MSG.NAME.REGEX,          
        'email_id': VALIDATOR_MSG.EMAIL_ID.REGEX,
        'message': VALIDATOR_MSG.MESSAGE.REGEX,       
    }
})
  if (validate(data)) {
    return true
  } else {
    return formatErrorMsg(validate.errors)
  }
}

module.exports.sendSlackKeyword=(data)=>{
  var validate = jsonValidator({
    required: true,
    type: 'object',
    properties: {   
      name: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 200
      },

      message: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 2000
      },      
    }
  }, {
    formats: {     
        'name': VALIDATOR_MSG.NAME.REGEX,                  
        'message': VALIDATOR_MSG.MESSAGE.REGEX,       
    }
})
  if (validate(data)) {
    return true
  } else {
    return formatErrorMsg(validate.errors)
  }
}

module.exports.uploaadDOCKeyword=(data)=>{
  var validate = jsonValidator({
    required: true,
    type: 'object',
    properties: {   
      docname: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 200
      },          
    }
  }, {
    formats: {     
        'docname': VALIDATOR_MSG.NAME.REGEX,                  
      
    }
})
  if (validate(data)) {
    return true
  } else {
    return formatErrorMsg(validate.errors)
  }
}

module.exports.notificationsPromiseKeyword=(data)=>{
  var validate = jsonValidator({
    required: true,
    type: 'object',
    properties: {   
      name: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 200
      },
      email_id: {
        required: true,
        type: 'string',
        format: 'email_id',
      },
      subject: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 200
      },
      code: {
        required: true,
        type: 'string',
        minLength: 3,
        maxLength: 3
      },
      phone: {
        required: true,
        type: 'string',
        format: 'phone'
      },
      message: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 2000
      },      
    }
  }, {
    formats: {       
        'name': VALIDATOR_MSG.NAME.REGEX,          
        'phone': VALIDATOR_MSG.PHONE.REGEX,
        'code': VALIDATOR_MSG.CODE.REGEX,  
        'email_id': VALIDATOR_MSG.EMAIL_ID.REGEX, 
        'subject': VALIDATOR_MSG.SUBJECT.REGEX,
        'message': VALIDATOR_MSG.MESSAGE.REGEX,       
    }
})
  if (validate(data)) {
    return true
  } else {
    return formatErrorMsg(validate.errors)
  }
}

module.exports.addNotificationKeyword = (data) => {
  var validate = jsonValidator({
    required: true,
    type: 'object',
    properties: {
      notification_type: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 50
      },
      notification_message: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 2000
      },
      notification_subject: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 200
      },
      // created_by: {
      //   required: true,
      //   type: 'string',
      //   minLength: 1,
      //   maxLength: 50
      // },
      status: {
        required: true,
        format: 'balance',    
        minLength: 1,
        maxLength: 1  
      },
    }
  }, {
      formats: {
        'notification_type': VALIDATOR_MSG.NOTIFICATION_TYPE.REGEX,
        'notification_message': VALIDATOR_MSG.NOTIFICATION_MESSAGE.REGEX,
        'notification_subject': VALIDATOR_MSG.NOTIFICATION_SUBJECT.REGEX,
        // 'created_by': VALIDATOR_MSG.CREATED_BY.REGEX,
        'status': VALIDATOR_MSG.STATUS.REGEX,        
      }
    })
  if (validate(data)) {
    return true
  } else {
    return formatErrorMsg(validate.errors)
  }
}

module.exports.updateNotificationKeyword = (data) => {
  var validate = jsonValidator({
    required: true,
    type: 'object',
    properties: {
      notification_id: {
        required: true,
        format: 'balance',            
      },
      notification_type: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 50
      },
      notification_message: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 2000
      },
      notification_subject: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 200
      },
      // created_by: {
      //   required: true,
      //   type: 'string',
      //   minLength: 1,
      //   maxLength: 50
      // },
      status: {
        required: true,
        format: 'number',    
        minLength: 1,
        maxLength: 1  
      },
    }
  }, {
      formats: {
        'notification_id': VALIDATOR_MSG.NOTIFICATION_ID.REGEX,
        'notification_type': VALIDATOR_MSG.NOTIFICATION_TYPE.REGEX,
        'notification_message': VALIDATOR_MSG.NOTIFICATION_MESSAGE.REGEX,
        'notification_subject': VALIDATOR_MSG.NOTIFICATION_SUBJECT.REGEX,
        // 'created_by': VALIDATOR_MSG.CREATED_BY.REGEX,
        'status': VALIDATOR_MSG.STATUS.REGEX,        
      }
    })
  if (validate(data)) {
    return true
  } else {
    return formatErrorMsg(validate.errors)
  }
}
module.exports.notificationsKeyword=(data)=>{
  var validate = jsonValidator({
    required: true,
    type: 'object',
    properties: {  
      // flag: {
      //   required: true,
      //   type: 'string',
      //   minLength: 1,
      //   maxLength: 50
      // }, 
      name: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 200
      },
      email_id: {
        required: true,
        type: 'string',
        format: 'email_id',
      },
      // subject: {
      //   required: true,
      //   type: 'string',
      //   minLength: 1,
      //   maxLength: 200
      // },
      // code: {
      //   required: true,
      //   type: 'string',
      //   minLength: 3,
      //   maxLength: 3
      // },
      // phone: {
      //   required: true,
      //   type: 'string',
      //   format: 'phone'
      // },
      message: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 2000
      },      
    }
  }, {
    formats: {       
        // 'flag': VALIDATOR_MSG.FLAG.REGEX,          
        'name': VALIDATOR_MSG.NAME.REGEX,          
        // 'phone': VALIDATOR_MSG.PHONE.REGEX,
        // 'code': VALIDATOR_MSG.CODE.REGEX,  
        'email_id': VALIDATOR_MSG.EMAIL_ID.REGEX, 
        // 'subject': VALIDATOR_MSG.SUBJECT.REGEX,
        'message': VALIDATOR_MSG.MESSAGE.REGEX,       
    }
})
  if (validate(data)) {
    return true
  } else {
    return formatErrorMsg(validate.errors)
  }
}


module.exports.searchKeyword = (data) => {
  var validate = jsonValidator({
    required: true,
    type: 'object',
    properties: {
      entityType: {
        required: true,
        type: 'string'
      },
      pageSize: {
        required: true,
        type: 'integer'
      },
      sortBy: {
        required: true,
        type: 'string'
      },
      conditionalOperator: {
        required: true,
        type: 'string'
      },
      filters: {
        searchTag: {
          ComparisonOperator: {
            required: true,
            type: 'string'
          },
          AttributeValueList: {
            required: true,
            type: 'array'
          }
        }
      },
      asc: {
        required: true,
        type: 'boolean'
      }
    }
  })
  if (validate(data)) {
    return true
  } else {
    return formatErrorMsg(validate.errors)
  }
}
