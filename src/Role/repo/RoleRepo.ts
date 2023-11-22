import { Role } from "@prisma/client"
import { RoleData } from "../models/Role"

export interface RoleRepo{

    existById(id: string): Promise<boolean>
    existByRole(id: string): Promise<boolean>
    create(data: RoleData): Promise<Role>
    findById(id: string): Promise<Role>
    findByRole(role: string): Promise<Role>
    findAll(): Promise<Role[]>
    updateRole(role: string, id: string): Promise<Role>
    updateDesc(description: string, id: string): Promise<Role>
    deleteById(id: string): Promise<void>

}