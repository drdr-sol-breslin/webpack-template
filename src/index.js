import './styles.scss';

class App {
  constructor() {
    this.sayHello();
  }

  sayHello() {
    document.body.innerHTML = 'hello';
    const bob = 'bob';
  }

  static getInstace() {
    if (!this.instance) {
      this.instance = new App();
    }

    return this.instance;
  }
}

window.addEventListener('load', () => {
  App.getInstace();
});
