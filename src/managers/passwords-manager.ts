import { PasswordsService } from "../services/passwords-service";

export class PasswordsRequestManager {
    public async deletePassword(service: string, username: string) {
        // Delete password by username and service:
        const passwordsService = new PasswordsService();

        await passwordsService.deletePassword(service, username);
    }
    
    public async updatePassword(username:string, passwordData: any) {
        // Update password:
        const passwordsService = new PasswordsService();

        const password = await passwordsService.updatePassword(username, passwordData.service, passwordData.password);

        return {password};
    }

    public async createPassword(username:string, passwordData: any) {
        // Create new password:
        const passwordsService = new PasswordsService();

        const password = await passwordsService.createPassword(username, passwordData.service, passwordData.password);

        return {password};
    }

    public async getPassword(service: string, username:string) {
        // Get password by service:
        const passwordsService = new PasswordsService();

        const password = await passwordsService.getPassword(service, username);
        if(!password){
            // Password doesnt exsists
            throw new Error('Password doesnt exsists');
        }

        return {password};
    }

}