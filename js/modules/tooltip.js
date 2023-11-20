export default class Tooltip {
  constructor(local) {
    this.tooltips = document.querySelector(local);
    this.criarTooltipBox = this.criarTooltipBox.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.addeven = this.addeven.bind(this);
  }
  //move a tooltip de acordo com a posicao do mouse

  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 180}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }

    // console.log(event);
  }

  onMouseLeave(div) {
    div.remove();
    div.removeEventListener("mouseleave", this.onMouseLeave);
    div.removeEventListener("mousemove", this.onMouseMove);
  }

  criarTooltipBox() {
    this.tooltipBox = document.createElement("div");
    this.text = this.tooltips.getAttribute("aria-label");
    this.tooltipBox.classList.add("tooltip");
    this.tooltipBox.innerText = this.text;
    document.body.appendChild(this.tooltipBox);
    return this.tooltipBox;
  }

  onMouseOver() {
    this.tooltipBox = this.criarTooltipBox();
    this.tooltips.addEventListener("mousemove", this.onMouseMove);
    this.tooltips.addEventListener("mouseleave", () => {
      this.onMouseLeave(this.tooltipBox);
    });
  }

  addeven() {
    this.tooltips.addEventListener("mouseover", this.onMouseOver);
  }

  init() {
    this.addeven();
    return this;
  }
}
