import { User } from "@prisma/client";
import { UserData } from "../models/User";

export interface UserRepo{

    existById(id: string): Promise<boolean>
    existByUsername(username: string): Promise<boolean>
    create(data: UserData): Promise<User>
    findById(id: string): Promise<User>
    findByUsername(username: string): Promise<User>
    findAll(): Promise<User[]>
    updateUsername(username: string, id: string): Promise<User>
    updatePassword(password: string, id: string): Promise<void>
    updateFirstname(firstname: string, id: string): Promise<User>
    updateMiddlename(middlename: string, id: string): Promise<User>
    updateLastname(lastname: string, id: string): Promise<User>
    updateRoleId(roleId: string, id: string): Promise<User>
    deleteById(id: string): Promise<void>
}