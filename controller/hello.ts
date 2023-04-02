import { Request, Response } from 'express';

interface HelloResponse {
    message: "hello there"
}

// Interace for user, defined outside class
interface User {
    name: string;
    id: number;
}

// UserAccount
export class UserAccount {

    name: User["name"]
    id: User["id"]

    constructor(name: User["name"], id: User["id"]) {
        this.name = name;
        this.id = id;
    }

    // function is part of instance
    jokes() {
        return 'hello'
    }

    // function is not part of instance, part of UserAccount class
    static jokes() {
        return 'hello 2'
    }

}

export function HelloMessage(req: Request, res: Response) {
    const user = new UserAccount("Jie Wei", 1);
    const jokeValue: string = user.jokes()
    res.send(`Hello there, my name is ${user.name}`);
}
