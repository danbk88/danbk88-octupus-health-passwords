import { PasswordsRequestManager } from "../managers/passwords-manager";
import { BaseController } from "./base-controller";

export class PasswordsController extends BaseController {
    public static async deletePassword(req, res) {
        try {
            const service = req.service;
            const username = req.user.username;
            const manager = new PasswordsRequestManager();
            const password = await manager.deletePassword(service, username);
            const result = PasswordsController.buildResult(password);

            res.send(result);
        } catch (error) {
            const errRes = PasswordsController.buildErrorResult(error);
            return res.status(400).send(errRes);
        }    }

    public static async updatePassword(req, res) {
        try {
            const username = req.user.username;
            const passwordData = req.password;
            const manager = new PasswordsRequestManager();
            const password = await manager.updatePassword(username, passwordData);
            const result = PasswordsController.buildResult(password);

            res.send(result);
        } catch (error) {
            const errRes = PasswordsController.buildErrorResult(error);
            return res.status(400).send(errRes);
        }    }

    public static async getPassword(req, res) {
        try {
            const service = req.service;
            const username = req.user.username;
            const manager = new PasswordsRequestManager();
            const password = await manager.getPassword(service, username);
            const result = PasswordsController.buildResult(password);

            res.send(result);
        } catch (error) {
            const errRes = PasswordsController.buildErrorResult(error);
            return res.status(400).send(errRes);
        }
    }

    public static async createPassword(req, res) {
        try {
            const username = req.user.username;
            const passwordData = req.password;
            const manager = new PasswordsRequestManager();
            const password = await manager.createPassword(username, passwordData);
            const result = PasswordsController.buildResult(password);

            res.send(result);
        } catch (error) {
            const errRes = PasswordsController.buildErrorResult(error);
            return res.status(400).send(errRes);
        }
    }
}