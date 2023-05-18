import { Product } from './product';

export class Phone extends Product {
  constructor(
    public name: string,
    public price: number,
    public manufacturer: string,
    public batterySize: number,
    public cameraPix: number
  ) {
    super(name, price, manufacturer);
  }

  getBatterySize() {
    return this.batterySize;
  }
  setBatterySize(batterySize: number) {
    this.batterySize = batterySize;
  }
  getCameraPix() {
    return this.cameraPix;
  }
  setCameraPix(cameraPix: number) {
    this.cameraPix = cameraPix;
  }
}
