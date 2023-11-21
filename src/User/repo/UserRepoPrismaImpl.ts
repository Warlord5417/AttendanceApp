import { UserRepo } from "./UserRepo";
import { UserData } from "../models/User";
import { User } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { UserAlreadyExistsError } from "../errors/UserAlreadyExistsError";
import { UserDoesNotExistError } from "../errors/UserDoesNotExistError";

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

    async findById(id: string): Promise<User> {
        if(!await this.existById(id)) 
            throw new UserDoesNotExistError(`User with id '${id}' does not exist`)
        const foundUser: User = await this.prismaClient.user.findUniqueOrThrow({ where: { id }})
        return foundUser;
    }

    async findByUsername(username: string): Promise<User> {
        if(!await this.existByUsername(username))
            throw new UserDoesNotExistError(`${username} does not exist`)
        const foundUser: User = await this.prismaClient.user.findUniqueOrThrow({ where: { username }})
        return foundUser
    }

    async findAll(): Promise<User[]> {
        const users: User[] = await this.prismaClient.user.findMany()
        return users
    }

    async updateUsername(username: string, id: string): Promise<User> {
        if(!await this.existById(id))
            throw new UserDoesNotExistError(`User with id '${id}' does not exist`)
        if(!await this.existByUsername(username))
            throw new UserAlreadyExistsError(`${username} already exists`)
        const updatedUser: User = await this.prismaClient.user.update({ data: { username }, where: { id }})
        return updatedUser
    }

    async updatePassword(password: string, id: string): Promise<void> {
        if(!await this.existById(id))
            throw new UserDoesNotExistError(`User with id '${id}' does not exist`)
        await this.prismaClient.user.update({ data: { password }, where: { id }})
    }

    async updateFirstname(firstname: string, id: string): Promise<User> {
        if(!await this.existById(id))
            throw new UserDoesNotExistError(`User with id '${id}' does not exist`)
        const updatedUser: User = await this.prismaClient.user.update({ data: { firstname }, where: { id }})
        return updatedUser
    }

    async updateMiddlename(middlename: string, id: string): Promise<User> {
        if(!await this.existById(id))
            throw new UserDoesNotExistError(`User with id '${id}' does not exist`)
        const updatedUser: User = await this.prismaClient.user.update({ data: { middlename }, where: { id }})
        return updatedUser
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