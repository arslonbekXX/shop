import { Product } from './product';
export class TV extends Product {
  constructor(
    public name: string,
    public price: number,
    public manufacturer: string,
    public displaySize: number,
    public isSmart: boolean,
    public displayType: string
  ) {
    super(name, price, manufacturer);
  }

  getDisplaySize() {
    return this.displaySize;
  }
  setDisplaySize(displaySize: number) {
    this.displaySize = displaySize;
  }
  getSmart() {
    return this.isSmart;
  }
  setSmart(smart: boolean) {
    this.isSmart = smart;
  }
  getDisplayType() {
    return this.displayType;
  }
  setDisplayType(displayType: string) {
    this.displayType = displayType;
  }
}
