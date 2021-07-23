export class PasswordsValidator{
    public static serviceValidation(req, res, next) {
        try {
            const {service} = req.params;
    
            if (!service) {
                throw new Error("Validation Error - service is required");
            }
            if (false) {
                // Any other validation on service input:
                throw new Error("Validation Error - invalid service received");
            }
           
            // No validation errors:
            req.service = service;
    
            return next();
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    public static passwordValidation(req, res, next) {
        try {
            const {service, password} = req.body;
    
            if (!service) {
                throw new Error("Validation Error - service is required");
            }
            if (false) {
                // Any other validation on service input:
                throw new Error("Validation Error - invalid service received");
            }
            if (!password) {
                throw new Error("Validation Error - password is required");
            }
            if (false) {
                // Any other validation on password input:
                throw new Error("Validation Error - invalid password received");
            }
           
            // No validation errors:
            req.password = {service, password};
    
            return next();
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }
    
    public static passwordPassValidation(req, res, next) {
        try {
            const {password} = req.body;
            const {service} = req.params;
    
            if (!service) {
                throw new Error("Validation Error - service is required");
            }
            if (false) {
                // Any other validation on service input:
                throw new Error("Validation Error - invalid service received");
            }
            if (!password) {
                throw new Error("Validation Error - password is required");
            }
            if (false) {
                // Any other validation on password input:
                throw new Error("Validation Error - invalid password received");
            }
           
            // No validation errors:
            req.password = {service, password};
    
            return next();
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }
}