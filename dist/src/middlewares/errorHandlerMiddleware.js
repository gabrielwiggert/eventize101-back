import { errorTypeToStatusCode, isAppError } from '../utils/errors.js';
export default function errorHandlerMiddleware(err, req, res, next) {
    console.log('Ooops! An error occured!', err);
    if (isAppError(err)) {
        var statusCode = errorTypeToStatusCode(err.type);
        return res.status(statusCode).send(err.message);
    }
    res.sendStatus(500);
}
