import debounce from "./debounce.js";

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }
  //pega a distancia de cada item em relacao ao top do site

  getDistance() {
    this.distance = [...this.sections].map((sec) => {
      const offset = sec.offsetTop;
      return {
        element: sec,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
    // console.log(this.distance);
  }

  //verifica a distancia de cada objeto em relacao ao scroll do site
  checkDistance() {
    console.log("vezes");
    this.distance.forEach((ss) => {
      // console.log(window.scrollY, ss.offset);
      if (window.scrollY > ss.offset) {
        ss.element.classList.add("ativo");
      } else if (ss.element.classList.contains("ativo")) {
        ss.element.classList.remove("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
