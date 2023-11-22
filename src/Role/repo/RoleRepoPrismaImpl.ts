import { RoleRepo } from "./RoleRepo";
import { RoleData } from "../models/Role";
import { Role } from "@prisma/client";

export class RoleRepoPrismaImpl implements RoleRepo{
    existById(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    existByRole(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    create(data: RoleData): Promise<Role> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Role> {
        throw new Error("Method not implemented.");
    }
    findByName(role: string): Promise<Role> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<Role[]> {
        throw new Error("Method not implemented.");
    }
    updateRoleName(role: string, id: string): Promise<Role> {
        throw new Error("Method not implemented.");
    }
    updateDesc(description: string, id: string): Promise<Role> {
        throw new Error("Method not implemented.");
    }
    deleteById(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}