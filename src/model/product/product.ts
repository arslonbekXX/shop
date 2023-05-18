export class Product {
  private id = 0;
  constructor(public name: string, public price: number, public manufacturer: string) {}

  getManufacturer() {
    return this.manufacturer;
  }
  setManufacturer(manufacturer: string) {
    this.manufacturer = manufacturer;
  }
  getId() {
    return this.id;
  }
  setId(id: number) {
    this.id = id;
  }
  getName() {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }
  getPrice() {
    return this.price;
  }
  setPrice(price: number) {
    this.price = price;
  }
}
