import { UserRepo } from "./UserRepo";
import { UserData } from "../models/User";
import { User } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

export class UserRepoPrismaImpl implements UserRepo{

    private prismaClient: PrismaClient

    constructor(prismaClient: PrismaClient){
        this.prismaClient = prismaClient;
    }

    existById(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    existByUsername(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    create(data: UserData): Promise<User> {
        throw new Error("Method not implemented.");
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