export default class AnimaNumeros {
  constructor(datNN, observerClass, observado) {
    this.numeros = document.querySelectorAll(datNN);
    this.observerClass = observerClass;
    this.observerTarget = document.querySelector(observado);
    this.addMutationObserver = this.addMutationObserver.bind(this);
    this.handleMutation = this.handleMutation.bind(this);
    this.init = this.init.bind(this);
  }

  //recebe um elemnto do dom, com numero em seu texto
  //incrementa a partir de 0 ate o numero final
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  animaNumeros() {
    this.numeros.forEach((numero) =>
      this.constructor.incrementarNumero(numero)
    );
  }
  //ocorre quando a mutacao ocorre

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }
  //adiciona o mutationobserver para verificar quando a classe ativo eh adicionada ao element target

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
      console.log("erro");
    }

    return this;
  }
}
