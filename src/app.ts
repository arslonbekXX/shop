import './styles.scss';
import Data from './assets/data.json';

export class App {
    private message: string;

    constructor(msg: string) {
      this.message = msg;
    }

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

const appInstance = new App('Hello Webpack and TypeScript ♥');
appInstance.printHello('app');
console.log(Data);
