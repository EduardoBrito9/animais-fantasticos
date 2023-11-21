import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(elemento, classe, events) {
    this.dropdownMenus = document.querySelectorAll(elemento);
    this.handleClick = this.handleClick.bind(this);
    this.addevent = this.addevent.bind(this);
    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }
    this.activeClass = classe;
  }

  handleClick(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove("active");
    });
  }

  addevent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.handleClick);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addevent();
    }
    console.log(this.dropdownMenus.length);
    return this;
  }
}
