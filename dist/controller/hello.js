"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloMessage = exports.UserAccount = void 0;
// UserAccount
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    // function is part of instance
    jokes() {
        return 'hello';
    }
    // function is not part of instance, part of UserAccount class
    static jokes() {
        return 'hello 2';
    }
}
exports.UserAccount = UserAccount;
function HelloMessage(req, res) {
    const user = new UserAccount("Jie Wei", 1);
    const jokeValue = user.jokes();
    res.send(`Hello there, my name is ${user.name}`);
}
exports.HelloMessage = HelloMessage;
