export default class AnimaNumeros {
  constructor(datNN, observerClass, observado) {
   this.numeros = document.querySelectorAll(datNN);
   this.observerClass = observerClass;
   this.observerTarget = document.querySelector(observado);
  }

  animaNumeros() {
    this.numeros.forEach((numero) => {
      const total = +numero.innerText;
      const inscremento = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start += inscremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

 let observer= ''
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      observer.disconnect();
      animaNumeros();
    }
  }
  observer = new MutationObserver(handleMutation);

  
  observer.observe(this.observerTarget, { attributes: true });
}
