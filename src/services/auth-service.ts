import { UsersDAL } from "../data-layers/users-dal";
import { User } from "../models/user-model";

export class AuthService{
    public async loginUser(username: any, password: any) {
        const dal = new UsersDAL();
        // Get User:
        const user = await dal.get(username);
        if(!user){
            // User does not exists
            return null;
        }
        // Check passwords:
        const encoded = password;
        if(encoded !== user.password){
            // Passwords mismatch
            return null;
        }

        return user;
    }

}