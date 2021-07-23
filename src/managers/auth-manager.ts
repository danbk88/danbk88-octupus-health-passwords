import { AuthService } from "../services/auth-service";
import { TokensService } from "../services/tokens-service";

export class AuthRequestManager{
    public async loginUser(credentials: any) {
        // Login user request manager
        const service = new AuthService();
        const tokensService = new TokensService();
        // Try login user
        const user = await service.loginUser(credentials.username, credentials.password);
        if(!user){
            // Invalid credentials received
            throw new Error('Invalid credentials received');
        }
        // Success login, generate access token:
        const tokens = tokensService.generateTokens(user.username);

        return {tokens}
    }

    public async refreshToken(username: string) {
        const tokensService = new TokensService();

        const tokens = tokensService.generateTokens(username);

        return {tokens}
    }
}