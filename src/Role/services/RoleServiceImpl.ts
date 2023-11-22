import { RoleService } from "./RoleService";
import { RoleData } from "../models/Role";
import { Role } from "@prisma/client";
import { RoleRepo } from "../repo/RoleRepo";

export class RoleServiceImpl implements RoleService{

    private roleRepository: RoleRepo

    constructor(roleRepository: RoleRepo){
        this.roleRepository = roleRepository
    }

    async createRole(data: RoleData): Promise<{ id: string; role: string; description: string; }> {
        throw new Error("Method not implemented.");
    }

    async findRoleById(id: string): Promise<{ id: string; role: string; description: string; }> {
        throw new Error("Method not implemented.");
    }

    async findRoleByRole(role: string): Promise<{ id: string; role: string; description: string; }> {
        throw new Error("Method not implemented.");
    }

    async findAllRoles(): Promise<{ id: string; role: string; description: string; }[]> {
        throw new Error("Method not implemented.");
    }

    async updateRole(role: string): Promise<{ id: string; role: string; description: string; }> {
        throw new Error("Method not implemented.");
    }

    async updateDesc(description: string): Promise<{ id: string; role: string; description: string; }> {
        throw new Error("Method not implemented.");
    }

    async deleteRoleById(id: string): Promise<{ id: string; role: string; description: string; }> {
        throw new Error("Method not implemented.");
    }

}