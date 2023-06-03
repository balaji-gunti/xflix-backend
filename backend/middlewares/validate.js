const Joi = require('joi');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');

const validate = (schema) => (req, res, next) => {
    if(Object.keys(req.body),length !== 0 && !req.is("application/json")){
        return next(
            new ApiError(
                httpStatus.UNSUPPORTED_MEDIA_TYPE,
                "Supports JSON request body only"
            )
        );
    }

        // if(error){
        //     const errorMessage = error.details.map((details) => details.message)
        //     return next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
        // }

        // Object.assign(req, value);
        // return next();
};

module.exports = validate;