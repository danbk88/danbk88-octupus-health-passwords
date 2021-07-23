export class AuthValidator{
    public static userCredentialsValidation(req, res, next) {
        try {
            const {username, password} = req.body;
    
            if (!username) {
                throw new Error("Validation Error - username is required");
            }
            if (false) {
                // Any other validation on username input:
                throw new Error("Validation Error - invalid username received");
            }
            if (!password) {
                throw new Error("Validation Error - password is required");
            }
            if (false) {
                // Any other validation on password input:
                throw new Error("Validation Error - invalid password received");
            }

            // No validation errors:
            req.userCredentials = {username, password};
    
            return next();
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }
}