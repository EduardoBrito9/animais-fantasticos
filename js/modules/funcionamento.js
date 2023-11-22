export default class Funcionamento {
  constructor(funcionamento, classe) {
    this.funcionamento = document.querySelector(funcionamento);
    this.classe = classe;
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);
  }

  dadosAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto = this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1];
    return semanaAberto && horarioAberto;
  }

  addSinal() {
    if (this.dadosAberto()) {
      this.funcionamento.classList.add(this.classe);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosAgora();
      this.dadosFuncionamento();
      this.addSinal();
    }
    return this;
  }
}
