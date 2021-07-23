import * as jwt from 'jsonwebtoken';
import * as config from '../config.json';


export class TokensService {
    public generateTokens(username: string) {
        const accessToken = this.generateAccessToken(username);
        const refreshToken = this.generateRefreeshToken(username);

        return {access_token: accessToken, refresh_token:refreshToken}
    }

    public async verifyAccessToken(username: any) {
        try {
            const decoded = await jwt.verify(username, process.env.ACCESS_TOKEN_SECRET);
            return decoded.username;
        } catch (error) {
            // Invalid token, return null:
            return null;
        }
    }

    public async verifyRefreshToken(username: any) {
        try {
            const decoded = await jwt.verify(username, process.env.REFRESH_TOKEN_SECRET);
            return decoded.username;
        } catch (error) {
            // Invalid token, return null:
            return null;
        }
    }

    private generateAccessToken(username: any) {
        return jwt.sign({username}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: config.authentication.access_token_expirity_seconds });
    }

    private generateRefreeshToken(username: any) {
        return jwt.sign({username}, process.env.REFRESH_TOKEN_SECRET, { expiresIn: config.authentication.refresh_token_expirity_seconds });
    }
}