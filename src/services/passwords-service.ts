import { PasswordsDAL } from "../data-layers/passwords-dal";

export class PasswordsService{
    public async deletePassword(service: string, username: string) {
        const dal = new PasswordsDAL();
        // Delete Password:
        await dal.delete(service, username);
    }

    public async updatePassword(username: string, service: any, password: any) {
        const dal = new PasswordsDAL();
 
        // Update password:
        const updated = await dal.update(username, service, password);
        if(!updated){
            // Password does not exsits:
            throw new Error('Password does not exsits');
        }
        return updated;
    }

    public async createPassword(username:string, service: string, password: string) {
        const dal = new PasswordsDAL();
        // Get Password:
        const pass = await dal.create(username, service, password);
        return pass;    
    }

    public async getPassword(service: string, username:string) {
        const dal = new PasswordsDAL();
        // Get Password:
        const password = await dal.get(service, username);
        let result = password ? {password: password.password, service: password.service} : null;
        return result;
    }

}