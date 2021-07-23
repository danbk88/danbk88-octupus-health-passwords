export class ErrorResponse {
    error: string

    constructor(errorMsg: string) {
        this.error = errorMsg;
    }
}