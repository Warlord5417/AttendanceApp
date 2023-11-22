export class RoleAlreadyExistsError extends Error{
    constructor(message: string){
        super(message)
    }
}