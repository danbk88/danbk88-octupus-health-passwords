import { Password } from "../models/password-model.ts";
import Passwords from "../database/passwords/Passwords";

export class PasswordsDAL{
    public async delete(service: string, username: string) {
        let index = Passwords.findIndex((pass)=> pass.service == service && pass.user == username);
        if (index < 0) {
            return null;
        }
        Passwords.splice(index, 1);
    }

    public async update(username: any, service: string, password:string) {
        let pass = Passwords.find((pass)=> pass.service == service && pass.user == username);
        if(!pass){
            return null;
        }

        pass.password = password;

        return pass;
    }
    
    public async create(username:string, service: string, password: string) {
        const pass = new Password(username, service, password);
        Passwords.push(pass);

        return pass;
    }
    public async get(service: string, username:string) {
        const password = Passwords.find((pass)=> pass.service == service && pass.user == username);
        return password;
    }

}