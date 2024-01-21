class User {
    private nick: string;
    private pin: number;
    private accounts: Account[];
  
    constructor(nick: string, pin: number, accounts: Account[]) {
      this.nick = nick;
      this.pin = pin;
      this.accounts = accounts;
    }
  
    getNick(): string {
      return this.nick;
    }
  
    getPin(): number {
      return this.pin;
    }
  
    setPin(pin: number): void {
      this.pin = pin;
    }
  
    getAccounts(): Account[] {
      return this.accounts;
    }
  
    addAccount(nick: string, password: string, type: string): void {
      this.accounts.push(new Account(nick, password, type));
    }
  

    /*
    removeAccount(account: Account): void {
      const index = this.accounts.indexOf(account);
      if (index !== -1) {
        this.accounts.splice(index, 1);
      }
    }
    */
   
  }
  
  
  