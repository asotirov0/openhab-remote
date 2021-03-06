import {AppEvent} from "@app/ui/event-bus";

export class ApplicationError extends Error {
    static eventName = AppEvent.ERROR;

    private readonly _exception: Error;
    private readonly _heading: string;

    constructor(message: string, heading: string, exception?: Error) {
        super(message);
        this._exception = exception;
        this._heading = heading;
    }

    get error(): Error {
        return this._exception;
    }

    get heading(): string {
        return this._heading;
    }
}

export class ResponseError extends ApplicationError {
    private readonly _statusCode: number;

    constructor(message: string, statusCode: number, exception?: Error) {
        super(message, "Request failed", exception);
        this._statusCode = statusCode;
    }

    get statusCode(): number {
        return this._statusCode;
    }
}

export class NetworkError extends ApplicationError {
    constructor(message: string, exception?: Error) {
        super(message, "Network error", exception);
    }
}
