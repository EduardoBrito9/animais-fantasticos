export default class Accordion {
  constructor(elem, name) {
    this.accordionlist = document.querySelectorAll(elem);
    this.ativoClass = name;
    this.activeaccordion = this.activeaccordion.bind(this);
  }

  activeaccordion(event) {
    event.target.classList.toggle(this.ativoClass);
    event.target.nextElementSibling.classList.toggle(this.ativoClass);
  }

  addevent() {
    this.accordionlist.forEach((item) => {
      item.addEventListener("click", this.activeaccordion);
    });
  }

  check() {
    if (this.accordionlist.length) {
      this.accordionlist[0].classList.add(this.ativoClass);
      this.accordionlist[0].nextElementSibling.classList.add(this.ativoClass);
    }
  }

  init2() {
    this.addevent();
    this.check();
    return this;
  }
}
