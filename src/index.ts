import './assets/styles/main.css';
import Data from './assets/data.json';

export class App {
  constructor(private message: string) {}

  public printHello(id: string) {
    const container = document.getElementById(id);
    if (!!container) {
      container.innerHTML = this.message;
      const a = 'aaaa';
    } else {
      console.error(`<element id="${id}" ...> does not exist !`);
    }
  }
}

const app = new App('Hello Webpack and TypeScript ♥');
app.printHello('root');
console.log(Data);
