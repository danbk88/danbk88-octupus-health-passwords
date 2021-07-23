import { AuthRequestManager } from "../managers/auth-manager";
import { BaseController } from "./base-controller";

export class AuthController extends BaseController {
    public static async login(req, res) {
        try {
            const credentials = req.userCredentials;
            const manager = new AuthRequestManager();
            const tokens = await manager.loginUser(credentials);
            const result = AuthController.buildResult(tokens);

            res.send(result);
        } catch (error) {
            const errRes = AuthController.buildErrorResult(error);
            return res.status(401).send(errRes);
        }
    }

    public static async refreshToken(req, res) {
        try {
            const user = req.user;
            const manager = new AuthRequestManager();
            const tokens = await manager.refreshToken(user.username);
            const result = AuthController.buildResult(tokens);

            res.send(result);
        } catch (error) {
            const errRes = AuthController.buildErrorResult(error);
            return res.status(401).send(errRes);
        }
    }
}