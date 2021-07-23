import { UsersDAL } from "../data-layers/users-dal";
import { User } from "../models/user-model";

export class UsersService {
    public async getUser(username: any) {
        const dal = new UsersDAL();
        const user: User = await dal.get(username);

        return user;
    }

}