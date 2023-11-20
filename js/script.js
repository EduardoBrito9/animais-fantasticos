import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import fetchAnimais from "./modules/fetch-animais.js";

const scrollsuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollsuave.init();

const acd = new Accordion('[data-anime="accordion"] dt', "ativo");
acd.init2();

const tabetter = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section',
);
tabetter.init99();

const mod = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]',
);
mod.init();

const tool = new Tooltip("[data-tooltip]");
tool.init();

fetchAnimais("../../animaisapi.json", ".numeros-grid");

initDropdownMenu();
initMenuMobile();
initFuncionamento();

initFetchBitcoin();
initAnimacaoScroll();
