import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(container, botao, lista, eventos, classe) {
    this.menu = document.querySelector(container);
    this.menuButton = document.querySelector(botao);
    this.menuList = document.querySelector(lista);
    this.eventos = eventos;
    this.className = classe;
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add(this.className);
    this.menuButton.classList.add(this.className);

    outsideClick(this.menu, this.eventos, () => {
      this.menuButton.classList.remove(this.className);
      this.menuList.classList.remove(this.className);
    });
  }

  addevent() {
    if (this.menuButton) {
      this.eventos.forEach((evento) => {
        console.log(evento);
        this.menuButton.addEventListener(evento, this.openMenu);
      });
    }
  }

  init() {
    if ((this.menuButton, this.className, this.eventos, this.menuList)) {
      this.addevent();
    }

    return this;
  }
}
