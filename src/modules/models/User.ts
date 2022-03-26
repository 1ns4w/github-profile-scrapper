export class User {
    
    name: string;
    username: string;
    avatarURL: string;

    constructor(name: string = "", username: string = "", avatarURL: string = "") {
        this.name = name;
        this.username = username;
        this.avatarURL = avatarURL;
    }
}