const AppError = require("./app-error");
const { StatusCodes } = require('http-status-codes')

class ValidationError extends AppError {
    constructor(
        name = 'ValidationError',
        message = 'Invalid Data provided',
        explanation = 'The request contains invalid or missing data. Please check the input fields and try again.',
        statusCode = StatusCodes.BAD_REQUEST
    ) {
        super(name, message, explanation, statusCode);
    }
};

class InternalServerError extends AppError {
    constructor(
        name = 'InternalServerError',
        message = 'Internal Server Error',
        explanation = 'An unexpected error occurred on the server. Please try again later or contact support if the problem persists.',
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR
    ) {
        super(name, message, explanation, statusCode);
    }
};

module.exports = {
    ValidationError,
    InternalServerError
}