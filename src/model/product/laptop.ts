import { Product } from './product';
export class Laptop extends Product {
  constructor(
    public name: string,
    public price: number,
    public manufacturer: string,
    public RAM: number,
    public CPU: string,
    public GPU: string,
    public memory: number
  ) {
    super(name, price, manufacturer);
  }

  getRAM() {
    return this.RAM;
  }
  setRAM(RAM: number) {
    this.RAM = RAM;
  }
  getCPU() {
    return this.CPU;
  }
  setCPU(CPU: string) {
    this.CPU = CPU;
  }
  getGPU() {
    return this.GPU;
  }
  setGPU(GPU: string) {
    this.GPU = GPU;
  }
  getMemory() {
    return this.memory;
  }
  setMemory(memory: number) {
    this.memory = memory;
  }
}
