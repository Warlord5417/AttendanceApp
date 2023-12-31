import { Role } from "@prisma/client";
import { RoleData } from "../models/Role";

export interface RoleService{
    createRole(data: RoleData): Promise<Role>
    findRoleById(id: string): Promise<Role>
    findRoleByRole(role: string): Promise<Role>
    findAllRoles(): Promise<Role[]>
    updateRole(role: string, id: string): Promise<Role>
    updateDesc(description: string, id: string): Promise<Role>
    deleteRoleById(id: string): Promise<void>
}