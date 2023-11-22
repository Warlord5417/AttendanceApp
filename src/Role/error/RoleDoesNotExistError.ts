export class RoleDoesNotExistError extends Error{
    constructor(message: string){
        super(message)
    }
}