export class Basket {
  constructor(public productId: number, public userId: number, public Id: number, public amount: number) {}

  getId() {
    return this.Id;
  }
  setId(id: number) {
    this.Id = id;
  }
  getProductId() {
    return this.productId;
  }
  setProductId(productId: number) {
    this.productId = productId;
  }
  getUserId() {
    return this.userId;
  }
  setUserId(userId: number) {
    this.userId = userId;
  }
  getAmount() {
    return this.amount;
  }
  setAmount(amount: number) {
    this.amount = amount;
  }
}
