export default class TabNav {
  constructor(opc, content) {
    this.tabMenu = document.querySelectorAll(opc);
    this.tabContent = document.querySelectorAll(content);
  }

  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    const direcao = this.tabContent[index].dataset.anime;
    console.log(direcao);
    this.tabContent[index].classList.add("ativo", direcao);
  }

  init99() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.tabContent[0].classList.add("ativo");
      this.tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener("click", () => {
          this.activeTab(index);
        });
      });
    }
  }
}
