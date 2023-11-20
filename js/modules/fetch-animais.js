import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  //cria div contendo o numero total de cada animal

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaNumeros() {
    const animanumm = new AnimaNumeros("[data-numero]", "ativo", ".numeros");
    animanumm.init();
  }

  //puxa os animais atraves de um jsopn, e usa cria cada div de animais utilizando o createAnimal
  async function criarAnimais() {
    try {
      //fetch, espera a resposta e transforma em json
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      //apos a transformacao, ativa as funcoes para preencher e para animar os numeros.
      animaisJSON.forEach(animal => preencherAnimais(animal));
      animaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
