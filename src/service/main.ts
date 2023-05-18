import * as yup from 'yup';

import { ProductService } from './product';
import { UserService } from './user';
import { User } from '../model/user';
import { Product } from '../model/product/product';

export class MainService {
  private userService = new UserService();
  private productService = new ProductService();

  addProduct(...products: Product[]) {
    for (const product of products) {
      this.productService.add(product);
    }
  }

  addUser(...users: User[]) {
    for (const user of users) {
      this.userService.add(user);
    }
  }

  getProductList() {
    return this.productService.getProductList();
  }

  getUserList() {
    return this.userService.getUserList();
  }

  showProduct(type: string) {
    return this.productService.getProductsByType(type);
  }

  checkAdmin(user: User) {
    return user.getUsername() === 'admin';
  }

  signUp(name: string, username: string, password: string) {
    this.userService.signUp(name, username, password);
  }

  signIn(username: string, password: string) {
    this.userService.signIn(username, password);
  }
}
