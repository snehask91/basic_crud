var validatorMsg = {
    "EMAIL_ID": {
        "REQUIRED": "Email id is required.",
        "CHAR": "Invalid Email id.",
        "REGEX": /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        // "DUPLICATE": "Please contact administrator."
    },
    "MAIL_TO_EMAIL_ID": {
        "REQUIRED": "Mail to Email id is required.",
        "CHAR": "Invalid Email id.",
        "REGEX": /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        // "DUPLICATE": "Please contact administrator."
    },
    
    "DATA": {
        "REQUIRED": "Data is required.",
        "LENGTH": "Data length should be in between 1 and 2000.",
        "CHAR": "Alphanumeric characters along with hyphens and underscore are allowed in Data.",
        "REGEX": /^[a-zA-Z0-9-_ ]+$/
    },    
    "ID": {
        "REQUIRED": "ID is required.",
        "LENGTH": "ID length should be in between 1 and 2000.",
        "CHAR": "Alphanumeric characters along with hyphens and underscore are allowed in ID.",
        "REGEX": /^[a-zA-Z0-9-_ ]+$/
    },
    "SUBJECT": {
        "REQUIRED": "Subject is required.",
        "LENGTH": "Subject length should be in between 1 and 200.",
        "CHAR": "Alphanumeric characters along with hyphens and underscore are allowed in Subject.",
        "REGEX": /^[a-zA-Z0-9-_ ]+$/
    },
    "MESSAGE": {
        "REQUIRED": "Message is required.",
        "LENGTH": "Message length should be in between 1 and 2000.",
        "CHAR": "Alphanumeric characters along with hyphens and underscore are allowed in Message.",
        "REGEX": /^[a-zA-Z0-9-_ ]+$/
    },
    "DEVICE_TOKEN": {
        "REQUIRED": "Device Token is required.",
        "LENGTH": "Device Token length should be in between 1 and 2000.",
        "CHAR": "Alphanumeric characters along with hyphens and underscore are allowed in Device Token.",
        "REGEX": /^[a-zA-Z0-9-_ ]+$/
    },
    "DEVICE_TYPE": {
        "REQUIRED": "Device Type is required.",
        "LENGTH": "Device Type length should be in between 1 and 2000.",
        "CHAR": "Alphanumeric characters along with hyphens and underscore are allowed in Device Type.",
        "REGEX": /^[a-zA-Z0-9-_ ]+$/
    },
    
    
    "COMPANY_CODE": {
        "REQUIRED": "Company Code is required.",
        "LENGTH": "Company Code length should be in between 1 and 50.",
        "CHAR": "Alphanumeric characters along with hyphens and underscore are allowed in Company Code.",
        "REGEX": /^[a-zA-Z0-9-_ ]+$/
    },
    "COMPANY_NAME": {
        "REQUIRED": "Company name is required.",
        "LENGTH": "Company name length should be in between 1 and 50.",
        "CHAR": "Alphabet characters along with hypens and underscore are allowed in Company name.",
        "REGEX": /^[a-zA-Z-_]+$/
    },
    "company_subdomain": {
        "REQUIRED": "Company name is required.",
        "LENGTH": "Company name length should be in between 1 and 50.",
        "CHAR": "Alphabet characters along with hypens and underscore are allowed in Company name.",
        "REGEX": /^[a-zA-Z-_]+$/
    },
    "COMPANY_STATUS": {
        "REQUIRED": "Company name is required.",
        "LENGTH": "Company name length should be in between 1 and 50.",
        "CHAR": "Alphabet characters  are allowed in Company name.",
        "REGEX": /^[a-zA-Z]+$/
    },
    "CREATEDBY": {
        "REQUIRED": "CreatedBy is required.",
        "LENGTH": "CreatedBy length should be in between 1 and 50.",
        "CHAR": "Alphanumeric characters along with hyphens and underscore are allowed in CreatedBy.",
        "REGEX": /^[a-zA-Z0-9-_ ]+$/
    },
    "LAST_NAME": {
        "REQUIRED": "Last name is required.",
        "LENGTH": "last name length should be in between 1 and 50.",
        "CHAR": "Alphabet characters are allowed in Last name.",
        "REGEX": /^[a-zA-Z]+$/
    },
    "MIDDLE_NAME": {
        "REQUIRED": "Middle name is required.",
        "LENGTH": "Middle name length should be in between 1 and 50.",
        "CHAR": "Alphabet characters are allowed in Middle name.",
        "REGEX": /^[a-zA-Z]+$/
    },
    "DATE_OF_BIRTH": {
        "REQUIRED": "Date of birth is required.",
        "CHAR": "Please provide Date of birth in format. mm/dd/yyyy.",
        "REGEX": /^\d{2}\/\d{2}\/\d{4}$/
    },
    "PHONE": {
        "REQUIRED": "Phone is required.",
        "CHAR": "Only numbers are allowed in Phone.",
        "REGEX": /^[0][1-9]\d{9}$|^[1-9]\d{9}$/
    },
    "PHONE_WITH_CODE": {
        "REQUIRED": "Phone Number is required.",
        "LENGTH": "Phone Number length should be with code.",
        "CHAR": "Only numbers are allowed in Phone Number.",
        "REGEX": /(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})/
    },
    "CODE": {
        "REQUIRED": "Code is required.",
        "LENGTH": "Code length should be in between 1 and 200.",
        "CHAR": "Alphanumeric characters along with hyphens and underscore are allowed in Code.",
        "REGEX": /^[a-zA-Z0-9-_ ]+$/
    },
    "NAME": {
        "REQUIRED": "Name is required.",
        "LENGTH": "Name length should be in between 1 and 200.",
        "CHAR": "Alphabet characters are allowed in Name.",
        "REGEX": /^[a-zA-Z]+$/
    },
    "FLAG": {
        "REQUIRED": "Flag is required.",
        "CHAR": "Only numbers are allowed in Flag.",
        "REGEX": /^[0-9]+$/
    },
    "NOTIFICATION_ID": {
        "REQUIRED": "Notification ID is required.",
        "CHAR": "Only numbers are allowed in Notification ID.",
        "REGEX": /^[0-9]+$/
    },
    "NOTIFICATION_TYPE": {
        "REQUIRED": "Notification Type is required.",
        "LENGTH": "Notification Type name length should be in between 1 and 50.",
        "CHAR": "Alphabet characters are allowed in Notification Type.",
        "REGEX": /^[a-zA-Z0-9-_ ]+$/
    },
    "NOTIFICATION_MESSAGE": {
        "REQUIRED": "Notification Message is required.",
        "LENGTH": "Notification Message length should be in between 1 and 2000.",
        "CHAR": "Alphabet characters are allowed in Notification Message.",
        "REGEX": /^[a-zA-Z0-9-_ ]+$/
    },
    "NOTIFICATION_SUBJECT": {
        "REQUIRED": "Notification Subject is required.",
        "LENGTH": "Notification Subject length should be in between 1 and 200.",
        "CHAR": "Alphabet characters are allowed in Notification Subject.",
        "REGEX": /^[a-zA-Z0-9-_ ]+$/
    },
    "CREATED_BY": {
        "REQUIRED": "Created By is required.",
        "LENGTH": "Created By length should be in between 1 and 20.",
        "CHAR": "Alphabet characters are allowed in Created By.",
        "REGEX": /^[a-zA-Z0-9-_ ]+$/
    },
    "STATUS": {
        "REQUIRED": "Status is required.",
        "LENGTH": "Status length should be 1.",
        "CHAR": "Only 0 & 1 numbers are allowed in Status.",
        "REGEX": /^[0-1]*$/
    },
    "COMPANY_NAME": {
        "REQUIRED": "Company name is required.",
        "CHAR": "Alphanumeric characters along with hyphens and underscore are allowed in company name.",
        "REGEX": /^[a-zA-Z0-9-_ ]+$/
    },
    "JOB_TITLE": {
        "REQUIRED": "Job title is required.",
        "CHAR": "Alphanumeric characters along with spaces are allowed in job title.",
        "REGEX": /^[a-zA-Z0-9 ]+$/
    },
    "INCOME": {
        "REQUIRED": "Income is required.",
        "CHAR": "Only numbers are allowed in income.",
        "REGEX": /^[0-9]+$/
    },
    "PROPERTY_TYPE": {
        "REQUIRED": "Property type is required.",
        "CHAR": "Alphabet characters along with spaces are allowed in Property type.",
        "REGEX": /^[a-zA-Z ]+$/
    },
    "ADDRESS": {
        "ADDRESSS_LINE1": {
            "REQUIRED": "Address line1  is required.",
        },
        "ADDRESSS_LINE2": {
            "REQUIRED": "Address line2  is required.",
        },
        "CITY": {
            "REQUIRED": "City is required.",
        },
        "STATE": {
            "REQUIRED": "State is required.",
        },
        "COUNTRY": {
            "REQUIRED": "Country is required.",
        },
        "ZIP": {
            "REQUIRED": "Zip  is required.",
        },
    },
    "PROPERTY_PRICE": {
        "REQUIRED": "Property price is required.",
        "CHAR": "Only numeric values are allowed in property price",
        "REGEX": /^[0-9]+$/
    },
    "PAYLOAD": {
        "CASE": "Only snake cases are allowed in payload (e.g. email_id, first_name). Invalid keys: ",
        "INPUT": "Invalid input JSON"
    },
    "SECURITY": {
        "INVALID": "Incorrect username or password.",
        "INVALID_PROVIDER": "Invalid Provider in headers.",
        "INVALID_PASSWORD": "You have entered an incorrect password.",
        "CHANGE_PASSWORD_SUCCESS": "Password has been changed successfully.",
        "INVALID_USER": "User doesn\'t exist.",
        "VERIFICATION_CODE_ERROR": "Unable to send verification code.",
        "VERIFICATION_CODE_SUCCESS": "Verification code has been sent to provided email id.",
        "JWT_INVALID": "Unauthorized",
        "RESET_PASSWORD_SUCCESS": "Password has been reset successfully.",
        "FORCE_CHANGE_PASSWORD": "Please change your temporary password.",
        "JWT_EXPIRED": "Your session has expired. Please login again.",
        "EMAIL_VERIFY": "Please verify your OTP to activate the account.",
        "EMAIL_VERIFY_SUCCESS": "OTP has been verified successfully.",
        "EMAIL_VERIFY_RESEND": "Verification code has been sent to linked email id."
    },
    "DUPLICATE": {
        "EMAIL": "This email already exists.",
        "USERNAME": "This username already exists.",
        "STATUS_CODE": 400,
        "REQUIRED": "Please provide username or email in query params."
    },
    "CONFIRM_PASSWORD": {
        "INPUT": "Please enter your valid username/email, verification code and new password (min 8 chars)."
    },
    "VERIFY_EMAIL": {
        "INPUT": "Please enter your valid username and verification code."
    },
    "VERIFY_EMAIL_RESEND": {
        "INPUT": "Please enter your valid username."
    }
};
module.exports = validatorMsg;