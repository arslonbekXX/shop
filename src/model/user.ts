export class User {
  private Id = 0;

  constructor(public name: string, public username: string, public password: string, public balance: number) {}

  getId() {
    return this.Id;
  }
  setId(id: number) {
    this.Id = id;
  }
  getName() {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }
  getUsername() {
    return this.username;
  }
  setUsername(username: string) {
    this.username = username;
  }
  getPassword() {
    return this.password;
  }
  setPassword(password: string) {
    this.password = password;
  }
  getBalance() {
    return this.balance;
  }
  setBalance(balance: any) {
    this.balance = balance;
  }
}
