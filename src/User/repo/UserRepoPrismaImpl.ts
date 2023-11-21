import { UserRepo } from "./UserRepo";
import { UserData } from "../models/User";
import { User } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { UserAlreadyExistsError } from "../errors/UserAlreadyExistsError";

export class UserRepoPrismaImpl implements UserRepo{

    private prismaClient: PrismaClient

    constructor(prismaClient: PrismaClient){
        this.prismaClient = prismaClient;
    }

    async existById(id: string): Promise<boolean> {
        const existingUser: User | null = await this.prismaClient.user.findUnique({ where: { id }})
        if(!existingUser) return false
        return true
    }

    async existByUsername(username: string): Promise<boolean> {
        const existingUser: User | null = await this.prismaClient.user.findUnique({ where: { username}})
        if(!existingUser) return false
        return true
    }

    async create(data: UserData): Promise<User> {
        if(await this.existByUsername(data.username)) 
            throw new UserAlreadyExistsError(`${data.username} already exists`)
        const createdUser: User = await this.prismaClient.user.create({ data })
        return createdUser
    }

    findById(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }

    findByUsername(username: string): Promise<User> {
        throw new Error("Method not implemented.");
    }

    findAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }

    updateUsername(username: string, id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }

    updatePassword(password: string, id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    updateFirstname(firstname: string, id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }

    updateMiddlename(middlename: string, id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }

    updateLastname(lastname: string, id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }

    updateRoleId(roleId: string, id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }

    deleteById(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}