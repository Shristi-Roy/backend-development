class ApiError extends Error {
    constructor (
        statusCode,
        message = 'something wend wrong',
        errors = [],
        statck = ""  
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null // read documentation how , what , why this.data = null
        this.message = message
        this.success = false;
        this.error = errors

        if (statck) {
            this.stack = statck
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}
export {ApiError}