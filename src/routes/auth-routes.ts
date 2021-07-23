import * as express from 'express';
import { Authenticator } from '../middlewares/auth/authentication-middlware';
import { AuthController } from '../controllers/auth-controller';
import { AuthValidator } from '../middlewares/validators/auth-validator';
const router = express.Router();

// Login user:
router.post('/login', 
    AuthValidator.userCredentialsValidation,
    AuthController.login);

// Refresh Token for a user:
router.post('/refresh', 
    Authenticator.authenticateRefreshToken,
    AuthController.refreshToken);

export default router;