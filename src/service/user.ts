import { User } from '../model/user';

export class UserService {
  private userList: User[] = [];
  private idGenerator = 0;

  checkUsername(username: string) {
    for (let i = 0; i < this.userList.length; i++) {
      if (this.userList[i].getUsername() === username) {
        return true;
      }
    }
    return false;
  }

  add(user: User) {
    if (this.checkUsername(user.getUsername())) {
      return false;
    }
    user.setId(this.idGenerator++);
    this.userList.push(user);
    return true;
  }

  signUp(name: string, username: string, password: string) {
    if (this.checkUsername(username)) {
      throw new Error(`User ${username} already exists`);
    }
    const newUser = new User(name, username, password, 1000000);

    this.add(newUser);
  }

  signIn(username: string, password: string) {
    for (const user of this.userList) {
      if (user.getUsername() === username && user.getPassword() === password) {
        return user;
      }
    }
    return null;
  }

  getUserList() {
    return this.userList;
  }
}
