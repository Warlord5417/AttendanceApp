export class UserDoesNotExistError extends Error{
    constructor(message: string){
        super(message)
    }
}