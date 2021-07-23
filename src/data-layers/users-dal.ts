import { User } from "../models/user-model";
import Users from "../database/users/Users";

export class UsersDAL{
    public async get(username: string) {
        const user = Users.find((user)=> user.username == username)
        return user;
    }

}