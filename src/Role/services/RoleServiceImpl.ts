import { RoleService } from "./RoleService";
import { RoleData } from "../models/Role";
import { Role } from "@prisma/client";
import { RoleRepo } from "../repo/RoleRepo";

export class RoleServiceImpl implements RoleService{

    private roleRepository: RoleRepo

    constructor(roleRepository: RoleRepo){
        this.roleRepository = roleRepository
    }

    async createRole(data: RoleData): Promise<Role> {
        return await this.roleRepository.create(data)
    }

    async findRoleById(id: string): Promise<Role> {
        return await this.roleRepository.findById(id)
    }

    async findRoleByRole(role: string): Promise<Role> {
        return await this.roleRepository.findByRole(role)
    }

    async findAllRoles(): Promise<Role[]> {
        return await this.roleRepository.findAll()
    }

    async updateRole(role: string, id: string): Promise<Role> {
        return await this.updateRole(role, id)
    }

    async updateDesc(description: string, id: string): Promise<Role> {
        return await this.roleRepository.updateDesc(description, id)
    }

    async deleteRoleById(id: string): Promise<void> {
        await this.roleRepository.deleteById(id)
    }

}