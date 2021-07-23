import { ErrorResponse } from "../entities/responses/error-response";
import { SuccessResponse } from "../entities/responses/success-response";

export class BaseController {
    // -------------------------------------------------- HELPERS ---------------------------------------------------
    protected static buildResult(data: any): SuccessResponse {
        return new SuccessResponse(data);
    }

    protected static buildErrorResult(error: any): ErrorResponse {
        return new ErrorResponse(error.message);
    }
}