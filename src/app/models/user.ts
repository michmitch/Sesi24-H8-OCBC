export class User{
    static nextId = 1;

    constructor(public username: string, public password: string, public id: number = 0){
        this.id = id ? id : User.nextId++;
    }
}