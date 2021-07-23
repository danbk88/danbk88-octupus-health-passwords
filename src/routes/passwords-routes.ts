import * as express from 'express';
import { Authenticator } from '../middlewares/auth/authentication-middlware';
import { PasswordsController } from '../controllers/passwords-controller';
import { PasswordsValidator } from '../middlewares/validators/passwords-validator';
const router = express.Router();

// Create Password:
router.post('/',
    Authenticator.authenticateAccessToken,
    PasswordsValidator.passwordValidation,
    PasswordsController.createPassword);

// Read password:
router.get('/:service',
    Authenticator.authenticateAccessToken,
    PasswordsValidator.serviceValidation,
    PasswordsController.getPassword);

// Update password:
router.patch('/:service',
    Authenticator.authenticateAccessToken,
    PasswordsValidator.passwordPassValidation,
    PasswordsController.updatePassword);

// Delete password:
router.delete('/:service',
    Authenticator.authenticateAccessToken,
    PasswordsValidator.serviceValidation,
    PasswordsController.deletePassword);

export default router;
