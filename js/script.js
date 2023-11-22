import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import Funcionamento from "./modules/funcionamento.js";
import FetchBitcoin from "./modules/fetch-bitcoin.js";
import ScrollAnima from "./modules/scroll-animacao.js";
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

FetchBitcoin("https://blockchain.info/ticker", ".btc-preco");

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdown = new DropdownMenu("[data-dropdown]", "active");
dropdown.init();

const menumobile = new MenuMobile(
  ".menu",
  '[data-menu="button"]',
  '[data-menu="list"]',
  ["click", "touchstart"],
  "active",
);
menumobile.init();

const func = new Funcionamento("[data-semana]", "aberto");
func.init();
