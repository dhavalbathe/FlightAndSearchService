const globalErrorHandler = (err, req, res, next) => {
    console.log('in the gloabal error handler');
    return res.status(err.statusCode).json({
        name: err.name,
        success: false,
        message: err.message, 
        explanation: err.explanation
    })
};

module.exports = globalErrorHandler;