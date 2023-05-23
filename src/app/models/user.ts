export class User {

    constructor(userId: string, userEmail: string, userName: string, userPassword: string) {
        this.userId = userId,
        this.userEmail = userEmail;
        this.userName = userName;
        this.userPassword = userPassword;
    }

    userId!: string;
    userEmail!: string;
    userName!: string;
    userPassword!: string;
}
