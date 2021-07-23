import { TokensService } from "../../services/tokens-service";
import { UsersService } from "../../services/users-service";

export class Authenticator {
    public static async authenticateAccessToken(req, res, next) {
        try {
            const isAccessToken = true;
            const user = await Authenticator.authenticate(req.header('Authorization'), isAccessToken);
            if(!user){
                // User doesnt exsists:
                return res.status(401).send({ error: 'Autorization error - user not authoruzed' });
            }
            // User authenticated, load on request:
            req.user = user

            next();
        } catch (error) {
            return res.status(401).send({ error: error.message });
        }
    }

    public static async authenticateRefreshToken(req, res, next) {
        try {
            const isAccessToken = false;
            const user = await Authenticator.authenticate(req.header('Authorization'), isAccessToken);
            if(!user){
                // User doesnt exsists:
                return res.status(401).send({ error: 'Autorization error - user not authoruzed' });
            }
            // User authenticated, load on request:
            req.user = user

            next();
        } catch (error) {
            return res.status(401).send({ error: error.message });
        }
    }

    private static async authenticate(authHeader: any, isAccessToken: boolean) {
        const service = new TokensService();
        const userService = new UsersService();

        if (!authHeader) {
            throw new Error('No Token Provided');
        }
        var token = authHeader.replace('Bearer ', '');

        //  Validate Token:
        let username: string = null;
        if (isAccessToken) {
            username = await service.verifyAccessToken(token);
        }
        else{
            username = await service.verifyRefreshToken(token);
        }

        const user = await userService.getUser(username);

        return user;
    }
}