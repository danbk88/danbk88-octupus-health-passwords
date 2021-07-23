export class Password{
    user: string;
    service: string;
    password: string

    constructor(username:string, service:string, password:string) {
        this.user = username;
        this.password = password;
        this.service = service;
    }
}