export class ApiError extends Error {
    constructor(statusCode, message = "something went wrong", error = []) {
        super(message);
        this.statusCode = statusCode;
        this.success = false;
        this.message = message;
        this.error = error;

        Error.captureStackTrace(this, this.constructor);
    }
}