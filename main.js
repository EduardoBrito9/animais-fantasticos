/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={61:(t,e,n)=>{var i=n(698).default;function o(){"use strict";t.exports=o=function(){return n},t.exports.__esModule=!0,t.exports.default=t.exports;var e,n={},r=Object.prototype,s=r.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",h=c.toStringTag||"@@toStringTag";function d(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(e){d=function(t,e,n){return t[e]=n}}function v(t,e,n,i){var o=e&&e.prototype instanceof w?e:w,r=Object.create(o.prototype),s=new _(i||[]);return a(r,"_invoke",{value:O(t,n,s)}),r}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}n.wrap=v;var p="suspendedStart",y="suspendedYield",m="executing",g="completed",b={};function w(){}function E(){}function k(){}var x={};d(x,u,(function(){return this}));var L=Object.getPrototypeOf,S=L&&L(L(q([])));S&&S!==r&&s.call(S,u)&&(x=S);var M=k.prototype=w.prototype=Object.create(x);function C(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function A(t,e){function n(o,r,a,c){var u=f(t[o],t,r);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==i(h)&&s.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;a(this,"_invoke",{value:function(t,i){function r(){return new e((function(e,o){n(t,i,e,o)}))}return o=o?o.then(r,r):r()}})}function O(t,n,i){var o=p;return function(r,s){if(o===m)throw new Error("Generator is already running");if(o===g){if("throw"===r)throw s;return{value:e,done:!0}}for(i.method=r,i.arg=s;;){var a=i.delegate;if(a){var c=T(a,i);if(c){if(c===b)continue;return c}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(o===p)throw o=g,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);o=m;var u=f(t,n,i);if("normal"===u.type){if(o=i.done?g:y,u.arg===b)continue;return{value:u.arg,done:i.done}}"throw"===u.type&&(o=g,i.method="throw",i.arg=u.arg)}}}function T(t,n){var i=n.method,o=t.iterator[i];if(o===e)return n.delegate=null,"throw"===i&&t.iterator.return&&(n.method="return",n.arg=e,T(t,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+i+"' method")),b;var r=f(o,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,b;var s=r.arg;return s?s.done?(n[t.resultName]=s.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,b):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,b)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function q(t){if(t||""===t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,r=function n(){for(;++o<t.length;)if(s.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return r.next=r}}throw new TypeError(i(t)+" is not iterable")}return E.prototype=k,a(M,"constructor",{value:k,configurable:!0}),a(k,"constructor",{value:E,configurable:!0}),E.displayName=d(k,h,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,d(t,h,"GeneratorFunction")),t.prototype=Object.create(M),t},n.awrap=function(t){return{__await:t}},C(A.prototype),d(A.prototype,l,(function(){return this})),n.AsyncIterator=A,n.async=function(t,e,i,o,r){void 0===r&&(r=Promise);var s=new A(v(t,e,i,o),r);return n.isGeneratorFunction(e)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},C(M),d(M,h,"Generator"),d(M,u,(function(){return this})),d(M,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var i in e)n.push(i);return n.reverse(),function t(){for(;n.length;){var i=n.pop();if(i in e)return t.value=i,t.done=!1,t}return t.done=!0,t}},n.values=q,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&s.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(i,o){return a.type="throw",a.arg=t,n.next=i,o&&(n.method="next",n.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o],a=r.completion;if("root"===r.tryLoc)return i("end");if(r.tryLoc<=this.prev){var c=s.call(r,"catchLoc"),u=s.call(r,"finallyLoc");if(c&&u){if(this.prev<r.catchLoc)return i(r.catchLoc,!0);if(this.prev<r.finallyLoc)return i(r.finallyLoc)}else if(c){if(this.prev<r.catchLoc)return i(r.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return i(r.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&s.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var r=o?o.completion:{};return r.type=t,r.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(r)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var o=i.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,i){return this.delegate={iterator:q(t),resultName:n,nextLoc:i},"next"===this.method&&(this.arg=e),b}},n}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},698:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},687:(t,e,n)=>{var i=n(61)();t.exports=i;try{regeneratorRuntime=i}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function i(t,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(r=o.key,s=void 0,s=function(t,n){if("object"!==e(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r),"symbol"===e(s)?s:String(s)),o)}var r,s}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var r=function(){function e(n,i){t(this,e),this.linksInternos=document.querySelectorAll(n),this.options=void 0===i?{behavior:"smooth",block:"start"}:i,this.scrollToSection=this.scrollToSection.bind(this)}return o(e,[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"linkadd",value:function(){var t=this;this.linksInternos.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.linksInternos.length&&this.linkadd(),this}}]),e}(),s=function(){function e(n,i){t(this,e),this.accordionlist=document.querySelectorAll(n),this.ativoClass=i,this.activeaccordion=this.activeaccordion.bind(this)}return o(e,[{key:"activeaccordion",value:function(t){t.target.classList.toggle(this.ativoClass),t.target.nextElementSibling.classList.toggle(this.ativoClass)}},{key:"addevent",value:function(){var t=this;this.accordionlist.forEach((function(e){e.addEventListener("click",t.activeaccordion)}))}},{key:"check",value:function(){this.accordionlist.length&&(this.accordionlist[0].classList.add(this.ativoClass),this.accordionlist[0].nextElementSibling.classList.add(this.ativoClass))}},{key:"init2",value:function(){return this.addevent(),this.check(),this}}]),e}(),a=function(){function e(n,i){t(this,e),this.tabMenu=document.querySelectorAll(n),this.tabContent=document.querySelectorAll(i)}return o(e,[{key:"activeTab",value:function(t){this.tabContent.forEach((function(t){t.classList.remove("ativo")}));var e=this.tabContent[t].dataset.anime;console.log(e),this.tabContent[t].classList.add("ativo",e)}},{key:"init99",value:function(){var t=this;this.tabMenu.length&&this.tabContent.length&&(this.tabContent[0].classList.add("ativo"),this.tabMenu.forEach((function(e,n){e.addEventListener("click",(function(){t.activeTab(n)}))})))}}]),e}(),c=function(){function e(n,i,o){t(this,e),this.botaoAbrir=document.querySelector(n),this.botaoFechar=document.querySelector(i),this.containerModal=document.querySelector(o),this.toggleModal=this.toggleModal.bind(this),this.cliqueForaModal=this.cliqueForaModal.bind(this)}return o(e,[{key:"toggleModal",value:function(t){t.preventDefault(),this.containerModal.classList.toggle("ativo")}},{key:"cliqueForaModal",value:function(t){t.target===this.containerModal&&this.toggleModal(t)}},{key:"init",value:function(){return this.botaoAbrir&&this.botaoFechar&&this.containerModal&&(this.botaoAbrir.addEventListener("click",this.toggleModal),this.botaoFechar.addEventListener("click",this.toggleModal),this.containerModal.addEventListener("click",this.cliqueForaModal)),this}}]),e}(),u=function(){function e(n){t(this,e),this.tooltips=document.querySelector(n),this.criarTooltipBox=this.criarTooltipBox.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this),this.addeven=this.addeven.bind(this)}return o(e,[{key:"onMouseMove",value:function(t){this.tooltipBox.style.top="".concat(t.pageY+20,"px"),t.pageX+240>window.innerWidth?this.tooltipBox.style.left="".concat(t.pageX-180,"px"):this.tooltipBox.style.left="".concat(t.pageX+20,"px")}},{key:"onMouseLeave",value:function(t){t.remove(),t.removeEventListener("mouseleave",this.onMouseLeave),t.removeEventListener("mousemove",this.onMouseMove)}},{key:"criarTooltipBox",value:function(){return this.tooltipBox=document.createElement("div"),this.text=this.tooltips.getAttribute("aria-label"),this.tooltipBox.classList.add("tooltip"),this.tooltipBox.innerText=this.text,document.body.appendChild(this.tooltipBox),this.tooltipBox}},{key:"onMouseOver",value:function(){var t=this;this.tooltipBox=this.criarTooltipBox(),this.tooltips.addEventListener("mousemove",this.onMouseMove),this.tooltips.addEventListener("mouseleave",(function(){t.onMouseLeave(t.tooltipBox)}))}},{key:"addeven",value:function(){this.tooltips.addEventListener("mouseover",this.onMouseOver)}},{key:"init",value:function(){return this.addeven(),this}}]),e}();function l(t,e,n){var i=document.documentElement,o="data-outside";function r(s){t.contains(s.target)||(t.removeAttribute(o),e.forEach((function(t){i.removeEventListener(t,r)})),n())}t.hasAttribute(o)||(e.forEach((function(t){setTimeout((function(){return i.addEventListener(t,r)}))})),t.setAttribute(o,""))}var h=function(){function e(n,i,o){t(this,e),this.dropdownMenus=document.querySelectorAll(n),this.handleClick=this.handleClick.bind(this),this.addevent=this.addevent.bind(this),this.events=void 0===o?["touchstart","click"]:o,this.activeClass=i}return o(e,[{key:"handleClick",value:function(t){t.preventDefault();var e=t.currentTarget;e.classList.add(this.activeClass),l(e,this.events,(function(){e.classList.remove("active")}))}},{key:"addevent",value:function(){var t=this;this.dropdownMenus.forEach((function(e){t.events.forEach((function(n){e.addEventListener(n,t.handleClick)}))}))}},{key:"init",value:function(){return this.dropdownMenus.length&&this.addevent(),console.log(this.dropdownMenus.length),this}}]),e}(),d=function(){function e(n,i,o,r,s){t(this,e),this.menu=document.querySelector(n),this.menuButton=document.querySelector(i),this.menuList=document.querySelector(o),this.eventos=r,this.className=s,this.openMenu=this.openMenu.bind(this)}return o(e,[{key:"openMenu",value:function(){var t=this;this.menuList.classList.add(this.className),this.menuButton.classList.add(this.className),l(this.menu,this.eventos,(function(){t.menuButton.classList.remove(t.className),t.menuList.classList.remove(t.className)}))}},{key:"addevent",value:function(){var t=this;this.menuButton&&this.eventos.forEach((function(e){console.log(e),t.menuButton.addEventListener(e,t.openMenu)}))}},{key:"init",value:function(){return this.menuButton,this.className,this.eventos,this.menuList&&this.addevent(),this}}]),e}(),v=function(){function e(n,i){t(this,e),this.funcionamento=document.querySelector(n),this.classe=i}return o(e,[{key:"dadosAgora",value:function(){this.dataAgora=new Date,this.diaAgora=this.dataAgora.getDay(),this.horarioAgora=this.dataAgora.getUTCHours()-3}},{key:"dadosFuncionamento",value:function(){this.diasSemana=this.funcionamento.dataset.semana.split(",").map(Number),this.horarioSemana=this.funcionamento.dataset.horario.split(",").map(Number)}},{key:"dadosAberto",value:function(){var t=-1!==this.diasSemana.indexOf(this.diaAgora),e=this.horarioAgora>=this.horarioSemana[0]&&this.horarioAgora<this.horarioSemana[1];return t&&e}},{key:"addSinal",value:function(){this.dadosAberto()&&this.funcionamento.classList.add(this.classe)}},{key:"init",value:function(){return this.funcionamento&&(this.dadosAgora(),this.dadosFuncionamento(),this.addSinal()),this}}]),e}();function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function p(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){var n;return function(){for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];n&&clearTimeout(n),n=setTimeout((function(){t.apply(void 0,o),n=null}),e)}}var m=function(){function e(n){t(this,e),this.sections=document.querySelectorAll(n),this.windowMetade=.6*window.innerHeight,this.checkDistance=y(this.checkDistance.bind(this),50)}return o(e,[{key:"getDistance",value:function(){var t=this;this.distance=p(this.sections).map((function(e){var n=e.offsetTop;return{element:e,offset:Math.floor(n-t.windowMetade)}}))}},{key:"checkDistance",value:function(){console.log("vezes"),this.distance.forEach((function(t){window.scrollY>t.offset?t.element.classList.add("ativo"):t.element.classList.contains("ativo")&&t.element.classList.remove("ativo")}))}},{key:"init",value:function(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}},{key:"stop",value:function(){window.removeEventListener("scroll",this.checkDistance)}}]),e}();function g(t,e,n,i,o,r,s){try{var a=t[r](s),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(i,o)}var b=n(687),w=n.n(b),E=function(){function e(n,i,o){t(this,e),this.numeros=document.querySelectorAll(n),this.observerClass=i,this.observerTarget=document.querySelector(o),this.addMutationObserver=this.addMutationObserver.bind(this),this.handleMutation=this.handleMutation.bind(this),this.init=this.init.bind(this)}return o(e,[{key:"animaNumeros",value:function(){var t=this;this.numeros.forEach((function(e){return t.constructor.incrementarNumero(e)}))}},{key:"handleMutation",value:function(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumeros())}},{key:"addMutationObserver",value:function(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}},{key:"init",value:function(){return this.numeros.length&&this.observerTarget&&(this.addMutationObserver(),console.log("erro")),this}}],[{key:"incrementarNumero",value:function(t){var e=+t.innerText,n=Math.floor(e/100),i=0,o=setInterval((function(){i+=n,t.innerText=i,i>e&&(t.innerText=e,clearInterval(o))}),25*Math.random())}}]),e}();function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},k(t,e)}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}function L(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=x(t);if(n){var r=x(this).constructor;i=Reflect.construct(o,arguments,r)}else i=o.apply(this,arguments);return function(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,i)}}var S=function(){function e(n,i){t(this,e),this.slide=document.querySelector(n),this.wrapper=document.querySelector(i),this.dist={finalPosition:0,startX:0,movement:0},this.changeEvent=new Event("changeEvent")}return o(e,[{key:"transition",value:function(t){this.slide.style.transition=t?"transform .3s":""}},{key:"moveSlide",value:function(t){this.dist.changedPosition=t,this.slide.style.transform="translate3d(".concat(t,"px, 0, 0)")}},{key:"uptadePosition",value:function(t){return this.dist.movement=1.5*(this.dist.startX-t),this.dist.finalPosition-this.dist.movement}},{key:"onStart",value:function(t){var e;"mousedown"===t.type?(t.preventDefault(),this.dist.startX=t.clientX,e="mousemove"):(this.dist.startX=t.changedTouches[0].clientX,e="touchmove"),this.wrapper.addEventListener(e,this.onMove),this.transition(!1)}},{key:"onMove",value:function(t){if("mousemove"===t.type){var e=this.uptadePosition(t.clientX);this.moveSlide(e)}else{var n=this.uptadePosition(t.changedTouches[0].clientX);this.moveSlide(n)}}},{key:"onEnd",value:function(t){var e="mouseup"===t.type?"mousemove":"touchmove";this.wrapper.removeEventListener(e,this.onMove),this.dist.finalPosition=this.dist.changedPosition,this.changeSlideOnEnd(),this.transition(!0)}},{key:"changeSlideOnEnd",value:function(){this.dist.movement>120&&void 0!==this.index.next?this.activeNextSlide():this.dist.movement<-120&&void 0!==this.index.prev?this.activePrevSlide():this.changeSlide(this.index.active)}},{key:"addevent",value:function(){this.wrapper.addEventListener("mousedown",this.onStart),this.wrapper.addEventListener("mouseup",this.onEnd),this.wrapper.addEventListener("touchstart",this.onStart),this.wrapper.addEventListener("touchend",this.onEnd)}},{key:"slidePosition",value:function(t){var e=(this.wrapper.offsetWidth-t.offsetWidth)/2;return-(t.offsetLeft-e)}},{key:"slidesConfig",value:function(){var t=this;this.slideArray=p(this.slide.children).map((function(e){return{position:t.slidePosition(e),element:e}}))}},{key:"slidesIndexNav",value:function(t){var e=this.slideArray.length-1;this.index={prev:0===t?void 0:t-1,active:t,next:t===e?void 0:t+1}}},{key:"changeSlide",value:function(t){this.moveSlide(this.slideArray[t].position),this.slidesIndexNav(t),this.dist.finalPosition=this.slideArray[t].position,this.changeActiveClass(),this.wrapper.dispatchEvent(this.changeEvent)}},{key:"changeActiveClass",value:function(){this.slideArray.forEach((function(t){return t.element.classList.remove("active")})),this.slideArray[this.index.active].element.classList.add("active")}},{key:"activePrevSlide",value:function(){void 0!==this.index.prev&&this.changeSlide(this.index.prev)}},{key:"activeNextSlide",value:function(){void 0!==this.index.next&&this.changeSlide(this.index.next)}},{key:"onResize",value:function(){var t=this;console.log("teste"),setTimeout((function(){t.slidesConfig(),t.changeSlide(t.index.active)}),800)}},{key:"onResizeEvent",value:function(){window.addEventListener("resize",this.onResize)}},{key:"bindEvents",value:function(){this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this),this.slidesConfig=this.slidesConfig.bind(this),this.onResize=y(this.onResize.bind(this),50),this.activePrevSlide=this.activePrevSlide.bind(this),this.activeNextSlide=this.activeNextSlide.bind(this)}},{key:"init",value:function(){return this.transition(!0),this.slidesConfig(),this.bindEvents(),this.addevent(),this.onResizeEvent(),this.changeSlide(0),this}}]),e}(),M=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(i,e);var n=L(i);function i(e,o){var r;return t(this,i),(r=n.call(this,e,o)).bindControl(),r}return o(i,[{key:"addArrow",value:function(t,e){this.prevElement=document.querySelector(t),this.nextElement=document.querySelector(e),this.addArrowEvent()}},{key:"addArrowEvent",value:function(){this.prevElement.addEventListener("click",this.activePrevSlide),this.nextElement.addEventListener("click",this.activeNextSlide)}},{key:"CreateControl",value:function(){var t=document.createElement("ul");return t.classList.add("slideNav"),this.slideArray.forEach((function(e,n){t.innerHTML+='<li><a href="#slide'.concat(n+1,'">').concat(n,"</a></li>")})),this.wrapper.appendChild(t),t}},{key:"EventControl",value:function(t,e){var n=this;t.addEventListener("click",(function(t){t.preventDefault(),n.changeSlide(e),n.activeControlClass()})),this.wrapper.addEventListener("changeEvent",this.activeControlClass)}},{key:"activeControlClass",value:function(){this.controlArray.forEach((function(t){t.classList.remove("active")})),this.controlArray[this.index.active].classList.add("active")}},{key:"addControl",value:function(t){this.control=document.querySelector(t)||this.CreateControl(),console.log(this.control),this.controlArray=p(this.control.children),this.controlArray.forEach(this.EventControl),this.activeControlClass()}},{key:"bindControl",value:function(){this.EventControl=this.EventControl.bind(this),this.activeControlClass=this.activeControlClass.bind(this)}}]),i}(S);new r('[data-menu="suave"] a[href^="#"]').init(),new s('[data-anime="accordion"] dt',"ativo").init2(),new a('[data-tab="menu"] li','[data-tab="content"] section').init99(),new c('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),new u("[data-tooltip]").init(),function(t,e){var n=document.querySelector(".numeros-grid");function i(t){var e=function(t){var e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML="<h3>".concat(t.specie,"</h3><span data-numero>").concat(t.total,"</span>"),e}(t);n.appendChild(e)}function o(){var t;return t=w().mark((function t(){var e;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("./animaisapi.json");case 3:return e=t.sent,t.next=6,e.json();case 6:t.sent.forEach((function(t){return i(t)})),new E("[data-numero]","ativo",".numeros").init(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})),o=function(){var e=this,n=arguments;return new Promise((function(i,o){var r=t.apply(e,n);function s(t){g(r,i,o,s,a,"next",t)}function a(t){g(r,i,o,s,a,"throw",t)}s(void 0)}))},o.apply(this,arguments)}!function(){o.apply(this,arguments)}()}(),console.log("clone"),fetch("https://blockchain.info/ticker").then((function(t){return t.json()})).then((function(t){document.querySelector(".btc-preco").innerText=(1e3/t.BRL.sell).toFixed(4)})).catch((function(t){return console.log(Error(t))})),new m('[data-anime="scroll"]').init(),new h("[data-dropdown]","active").init(),new d(".menu",'[data-menu="button"]','[data-menu="list"]',["click","touchstart"],"active").init();var C=new v("[data-semana]","aberto");console.log(C),C.init();var A=new M(".slide",".wrapper");A.init(),A.addControl(".custom-controls")})()})();