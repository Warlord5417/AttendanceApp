import { Context, Hono } from "hono";
import { RoleService } from "../services/RoleService";
import { RoleAlreadyExistsError } from "../error/RoleAlreadyExistsError";

export class RoleController extends Hono{

    private roleService: RoleService

    constructor(roleService: RoleService){
        super()
        this.roleService = roleService
    }

    getService(): RoleService{
        return this.roleService
    }
    
}