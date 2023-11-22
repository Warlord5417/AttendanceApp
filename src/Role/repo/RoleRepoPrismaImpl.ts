import { RoleRepo } from "./RoleRepo";
import { RoleData } from "../models/Role";
import { PrismaClient, Role } from "@prisma/client";
import { RoleAlreadyExistsError } from "../error/RoleAlreadyExistsError";

export class RoleRepoPrismaImpl implements RoleRepo{

    private prismaClient: PrismaClient

    constructor(prismaClient: PrismaClient){
        this.prismaClient = prismaClient
    }

    async existById(id: string): Promise<boolean> {
        const existingRole = await this.prismaClient.role.findUnique({ where: { id }})
        if(!existingRole) return false
        return true
    }

    async existByRole(id: string): Promise<boolean> {
        const existingRole = await this.prismaClient.role.findUnique({ where: { id }})
        if(!existingRole) return false
        return true
    }
    
    async create(data: RoleData): Promise<Role> {
        if(!await this.existByRole(data.role))
            throw new RoleAlreadyExistsError(`${data.role} already exists`)
        const role = await this.prismaClient.role.create({ data })
        return role
    }

    findById(id: string): Promise<Role> {
        throw new Error("Method not implemented.");
    }

    findByRole(role: string): Promise<Role> {
        throw new Error("Method not implemented.");
    }

    findAll(): Promise<Role[]> {
        throw new Error("Method not implemented.");
    }

    updateRole(role: string, id: string): Promise<Role> {
        throw new Error("Method not implemented.");
    }

    updateDesc(description: string, id: string): Promise<Role> {
        throw new Error("Method not implemented.");
    }
    
    deleteById(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}