class Account {
    private user: string; //email, nickname...
    private password: string; //password
    private type: string; //google, lol...

    constructor(user: string, password: string, type: string) {
        this.user = user;
        this.password = password;
        this.type = type;
    }

    getUser(): string {
        return this.user;
    }

    setuUser(user: string): void {
        this.user = user;
    }

    getPassword(): string {
        return this.password;
    }

    setPassword(password: string) {
        this.password = password;
    }

    getType(): string {
        return this.type;
    }


    setType(type: string): void {
        this.type = type;
    }

}

