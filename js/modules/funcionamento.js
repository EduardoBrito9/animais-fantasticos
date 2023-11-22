export default class Funcionamento {
  constructor(funcionamento, classe) {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getHours();
    this.funcionamento = document.querySelector(funcionamento);
    this.classe = classe;
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    console.log(this.semanaAberto, this.diaAgora);
    this.horarioSemana = this.funcionamento.dataset.horario.split(",").map(Number);
    this.horarioAberto = this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1];
  }

  addSinal() {
    if (this.semanaAberto && this.horarioAberto) {
      this.funcionamento.classList.add(this.classe);
    }
  }

  init() {
    this.addSinal();
    return this;
  }
}
