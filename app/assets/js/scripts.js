/*!
 * mightily
 * Big things come in small packages.
 * http://mightily.com
 * @author Mightily
 * @version 1.0.0
 * Copyright 2021. MIT licensed.
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),s=o(c),f=n(8),d=o(f),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},M=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},_=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?M():(x.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||d.default.ready("[data-aos]",O),w)};e.exports={init:_,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(f,t),M?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=O();return c(e)?d(e):void(h=setTimeout(f,a(e)))}function d(e){return h=void 0,_&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),o(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,k=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(s);return t=u(t)||0,i(n)&&(M=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(s);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return f;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?f:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",f=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(f,t),M?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function s(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=j();return s(e)?d(e):void(h=setTimeout(f,u(e)))}function d(e){return h=void 0,_&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=s(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),i(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,O=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(M=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==f}function a(e){if("number"==typeof e)return e;if(r(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?s:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,f="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0,i=void 0;for(t=0;t<e.length;t+=1){if(o=e[t],o.dataset&&o.dataset.aos)return!0;if(i=o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e,t){var n=window.document,i=o(),r=new i(a);u=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes),i=t.concat(o);if(n(i))return u()})}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){};t.default={isSupported:i,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rtl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetYoDigits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return transitionend; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);




// Core Foundation Utilities, utilized in a number of places.

/**
 * Returns a boolean for RTL support
 */
function rtl() {
  return __WEBPACK_IMPORTED_MODULE_0_jquery___default()('html').attr('dir') === 'rtl';
}

/**
 * returns a random base-36 uid with namespacing
 * @function
 * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
 * @param {String} namespace - name of plugin to be incorporated in uid, optional.
 * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
 * @returns {String} - unique id
 */
function GetYoDigits(length, namespace) {
  length = length || 6;
  return Math.round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)).toString(36).slice(1) + (namespace ? '-' + namespace : '');
}

function transitionend($elem) {
  var transitions = {
    'transition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'transitionend',
    'OTransition': 'otransitionend'
  };
  var elem = document.createElement('div'),
      end;

  for (var t in transitions) {
    if (typeof elem.style[t] !== 'undefined') {
      end = transitions[t];
    }
  }
  if (end) {
    return end;
  } else {
    end = setTimeout(function () {
      $elem.triggerHandler('transitionend', [$elem]);
    }, 1);
    return 'transitionend';
  }
}



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaQuery; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);




// Default set of media queries
var defaultQueries = {
  'default': 'only screen',
  landscape: 'only screen and (orientation: landscape)',
  portrait: 'only screen and (orientation: portrait)',
  retina: 'only screen and (-webkit-min-device-pixel-ratio: 2),' + 'only screen and (min--moz-device-pixel-ratio: 2),' + 'only screen and (-o-min-device-pixel-ratio: 2/1),' + 'only screen and (min-device-pixel-ratio: 2),' + 'only screen and (min-resolution: 192dpi),' + 'only screen and (min-resolution: 2dppx)'
};

// matchMedia() polyfill - Test a CSS media type/query in JS.
// Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license
var matchMedia = window.matchMedia || function () {
  'use strict';

  // For browsers that support matchMedium api such as IE 9 and webkit

  var styleMedia = window.styleMedia || window.media;

  // For those that don't support matchMedium
  if (!styleMedia) {
    var style = document.createElement('style'),
        script = document.getElementsByTagName('script')[0],
        info = null;

    style.type = 'text/css';
    style.id = 'matchmediajs-test';

    script && script.parentNode && script.parentNode.insertBefore(style, script);

    // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
    info = 'getComputedStyle' in window && window.getComputedStyle(style, null) || style.currentStyle;

    styleMedia = {
      matchMedium: function (media) {
        var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

        // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
        if (style.styleSheet) {
          style.styleSheet.cssText = text;
        } else {
          style.textContent = text;
        }

        // Test if media query is true or false
        return info.width === '1px';
      }
    };
  }

  return function (media) {
    return {
      matches: styleMedia.matchMedium(media || 'all'),
      media: media || 'all'
    };
  };
}();

var MediaQuery = {
  queries: [],

  current: '',

  /**
   * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
   * @function
   * @private
   */
  _init: function () {
    var self = this;
    var $meta = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('meta.foundation-mq');
    if (!$meta.length) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<meta class="foundation-mq">').appendTo(document.head);
    }

    var extractedStyles = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.foundation-mq').css('font-family');
    var namedQueries;

    namedQueries = parseStyleToObject(extractedStyles);

    for (var key in namedQueries) {
      if (namedQueries.hasOwnProperty(key)) {
        self.queries.push({
          name: key,
          value: 'only screen and (min-width: ' + namedQueries[key] + ')'
        });
      }
    }

    this.current = this._getCurrentSize();

    this._watcher();
  },


  /**
   * Checks if the screen is at least as wide as a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
   */
  atLeast: function (size) {
    var query = this.get(size);

    if (query) {
      return matchMedia(query).matches;
    }

    return false;
  },


  /**
   * Checks if the screen matches to a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check, either 'small only' or 'small'. Omitting 'only' falls back to using atLeast() method.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it does not.
   */
  is: function (size) {
    size = size.trim().split(' ');
    if (size.length > 1 && size[1] === 'only') {
      if (size[0] === this._getCurrentSize()) return true;
    } else {
      return this.atLeast(size[0]);
    }
    return false;
  },


  /**
   * Gets the media query of a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to get.
   * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
   */
  get: function (size) {
    for (var i in this.queries) {
      if (this.queries.hasOwnProperty(i)) {
        var query = this.queries[i];
        if (size === query.name) return query.value;
      }
    }

    return null;
  },


  /**
   * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
   * @function
   * @private
   * @returns {String} Name of the current breakpoint.
   */
  _getCurrentSize: function () {
    var matched;

    for (var i = 0; i < this.queries.length; i++) {
      var query = this.queries[i];

      if (matchMedia(query.value).matches) {
        matched = query;
      }
    }

    if (typeof matched === 'object') {
      return matched.name;
    } else {
      return matched;
    }
  },


  /**
   * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
   * @function
   * @private
   */
  _watcher: function () {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off('resize.zf.mediaquery').on('resize.zf.mediaquery', function () {
      var newSize = _this._getCurrentSize(),
          currentSize = _this.current;

      if (newSize !== currentSize) {
        // Change the current media query
        _this.current = newSize;

        // Broadcast the media query change on the window
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).trigger('changed.zf.mediaquery', [newSize, currentSize]);
      }
    });
  }
};

// Thank you: https://github.com/sindresorhus/query-string
function parseStyleToObject(str) {
  var styleObject = {};

  if (typeof str !== 'string') {
    return styleObject;
  }

  str = str.trim().slice(1, -1); // browsers re-quote string style values

  if (!str) {
    return styleObject;
  }

  styleObject = str.split('&').reduce(function (ret, param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = parts[0];
    var val = parts[1];
    key = decodeURIComponent(key);

    // missing `=` should be `null`:
    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
    val = val === undefined ? null : decodeURIComponent(val);

    if (!ret.hasOwnProperty(key)) {
      ret[key] = val;
    } else if (Array.isArray(ret[key])) {
      ret[key].push(val);
    } else {
      ret[key] = [ret[key], val];
    }
    return ret;
  }, {});

  return styleObject;
}



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Triggers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_util_motion__ = __webpack_require__(4);





var MutationObserver = function () {
  var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];
  for (var i = 0; i < prefixes.length; i++) {
    if (prefixes[i] + 'MutationObserver' in window) {
      return window[prefixes[i] + 'MutationObserver'];
    }
  }
  return false;
}();

var triggers = function (el, type) {
  el.data(type).split(' ').forEach(function (id) {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + id)[type === 'close' ? 'trigger' : 'triggerHandler'](type + '.zf.trigger', [el]);
  });
};

var Triggers = {
  Listeners: {
    Basic: {},
    Global: {}
  },
  Initializers: {}
};

Triggers.Listeners.Basic = {
  openListener: function () {
    triggers(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), 'open');
  },
  closeListener: function () {
    var id = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data('close');
    if (id) {
      triggers(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), 'close');
    } else {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).trigger('close.zf.trigger');
    }
  },
  toggleListener: function () {
    var id = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data('toggle');
    if (id) {
      triggers(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), 'toggle');
    } else {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).trigger('toggle.zf.trigger');
    }
  },
  closeableListener: function (e) {
    e.stopPropagation();
    var animation = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data('closable');

    if (animation !== '') {
      __WEBPACK_IMPORTED_MODULE_1__foundation_util_motion__["b" /* Motion */].animateOut(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), animation, function () {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).trigger('closed.zf');
      });
    } else {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).fadeOut().trigger('closed.zf');
    }
  },
  toggleFocusListener: function () {
    var id = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data('toggle-focus');
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + id).triggerHandler('toggle.zf.trigger', [__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this)]);
  }
};

// Elements with [data-open] will reveal a plugin that supports it when clicked.
Triggers.Initializers.addOpenListener = function ($elem) {
  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.openListener);
  $elem.on('click.zf.trigger', '[data-open]', Triggers.Listeners.Basic.openListener);
};

// Elements with [data-close] will close a plugin that supports it when clicked.
// If used without a value on [data-close], the event will bubble, allowing it to close a parent component.
Triggers.Initializers.addCloseListener = function ($elem) {
  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.closeListener);
  $elem.on('click.zf.trigger', '[data-close]', Triggers.Listeners.Basic.closeListener);
};

// Elements with [data-toggle] will toggle a plugin that supports it when clicked.
Triggers.Initializers.addToggleListener = function ($elem) {
  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.toggleListener);
  $elem.on('click.zf.trigger', '[data-toggle]', Triggers.Listeners.Basic.toggleListener);
};

// Elements with [data-closable] will respond to close.zf.trigger events.
Triggers.Initializers.addCloseableListener = function ($elem) {
  $elem.off('close.zf.trigger', Triggers.Listeners.Basic.closeableListener);
  $elem.on('close.zf.trigger', '[data-closeable], [data-closable]', Triggers.Listeners.Basic.closeableListener);
};

// Elements with [data-toggle-focus] will respond to coming in and out of focus
Triggers.Initializers.addToggleFocusListener = function ($elem) {
  $elem.off('focus.zf.trigger blur.zf.trigger', Triggers.Listeners.Basic.toggleFocusListener);
  $elem.on('focus.zf.trigger blur.zf.trigger', '[data-toggle-focus]', Triggers.Listeners.Basic.toggleFocusListener);
};

// More Global/complex listeners and triggers
Triggers.Listeners.Global = {
  resizeListener: function ($nodes) {
    if (!MutationObserver) {
      //fallback for IE 9
      $nodes.each(function () {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).triggerHandler('resizeme.zf.trigger');
      });
    }
    //trigger all listening elements and signal a resize event
    $nodes.attr('data-events', "resize");
  },
  scrollListener: function ($nodes) {
    if (!MutationObserver) {
      //fallback for IE 9
      $nodes.each(function () {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).triggerHandler('scrollme.zf.trigger');
      });
    }
    //trigger all listening elements and signal a scroll event
    $nodes.attr('data-events', "scroll");
  },
  closeMeListener: function (e, pluginId) {
    var plugin = e.namespace.split('.')[0];
    var plugins = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-' + plugin + ']').not('[data-yeti-box="' + pluginId + '"]');

    plugins.each(function () {
      var _this = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
      _this.triggerHandler('close.zf.trigger', [_this]);
    });
  }
};

// Global, parses whole document.
Triggers.Initializers.addClosemeListener = function (pluginName) {
  var yetiBoxes = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-yeti-box]'),
      plugNames = ['dropdown', 'tooltip', 'reveal'];

  if (pluginName) {
    if (typeof pluginName === 'string') {
      plugNames.push(pluginName);
    } else if (typeof pluginName === 'object' && typeof pluginName[0] === 'string') {
      plugNames.concat(pluginName);
    } else {
      console.error('Plugin names must be strings');
    }
  }
  if (yetiBoxes.length) {
    var listeners = plugNames.map(function (name) {
      return 'closeme.zf.' + name;
    }).join(' ');

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off(listeners).on(listeners, Triggers.Listeners.Global.closeMeListener);
  }
};

function debounceGlobalListener(debounce, trigger, listener) {
  var timer = void 0,
      args = Array.prototype.slice.call(arguments, 3);
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off(trigger).on(trigger, function (e) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      listener.apply(null, args);
    }, debounce || 10); //default time to emit scroll event
  });
}

Triggers.Initializers.addResizeListener = function (debounce) {
  var $nodes = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-resize]');
  if ($nodes.length) {
    debounceGlobalListener(debounce, 'resize.zf.trigger', Triggers.Listeners.Global.resizeListener, $nodes);
  }
};

Triggers.Initializers.addScrollListener = function (debounce) {
  var $nodes = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-scroll]');
  if ($nodes.length) {
    debounceGlobalListener(debounce, 'scroll.zf.trigger', Triggers.Listeners.Global.scrollListener, $nodes);
  }
};

Triggers.Initializers.addMutationEventsListener = function ($elem) {
  if (!MutationObserver) {
    return false;
  }
  var $nodes = $elem.find('[data-resize], [data-scroll], [data-mutate]');

  //element callback
  var listeningElementsMutation = function (mutationRecordsList) {
    var $target = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(mutationRecordsList[0].target);

    //trigger the event handler for the element depending on type
    switch (mutationRecordsList[0].type) {
      case "attributes":
        if ($target.attr("data-events") === "scroll" && mutationRecordsList[0].attributeName === "data-events") {
          $target.triggerHandler('scrollme.zf.trigger', [$target, window.pageYOffset]);
        }
        if ($target.attr("data-events") === "resize" && mutationRecordsList[0].attributeName === "data-events") {
          $target.triggerHandler('resizeme.zf.trigger', [$target]);
        }
        if (mutationRecordsList[0].attributeName === "style") {
          $target.closest("[data-mutate]").attr("data-events", "mutate");
          $target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger', [$target.closest("[data-mutate]")]);
        }
        break;

      case "childList":
        $target.closest("[data-mutate]").attr("data-events", "mutate");
        $target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger', [$target.closest("[data-mutate]")]);
        break;

      default:
        return false;
      //nothing
    }
  };

  if ($nodes.length) {
    //for each element that needs to listen for resizing, scrolling, or mutation add a single observer
    for (var i = 0; i <= $nodes.length - 1; i++) {
      var elementObserver = new MutationObserver(listeningElementsMutation);
      elementObserver.observe($nodes[i], { attributes: true, childList: true, characterData: false, subtree: true, attributeFilter: ["data-events", "style"] });
    }
  }
};

Triggers.Initializers.addSimpleListeners = function () {
  var $document = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document);

  Triggers.Initializers.addOpenListener($document);
  Triggers.Initializers.addCloseListener($document);
  Triggers.Initializers.addToggleListener($document);
  Triggers.Initializers.addCloseableListener($document);
  Triggers.Initializers.addToggleFocusListener($document);
};

Triggers.Initializers.addGlobalListeners = function () {
  var $document = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document);
  Triggers.Initializers.addMutationEventsListener($document);
  Triggers.Initializers.addResizeListener();
  Triggers.Initializers.addScrollListener();
  Triggers.Initializers.addClosemeListener();
};

Triggers.init = function ($, Foundation) {
  if (typeof $.triggersInitialized === 'undefined') {
    var $document = $(document);

    if (document.readyState === "complete") {
      Triggers.Initializers.addSimpleListeners();
      Triggers.Initializers.addGlobalListeners();
    } else {
      $(window).on('load', function () {
        Triggers.Initializers.addSimpleListeners();
        Triggers.Initializers.addGlobalListeners();
      });
    }

    $.triggersInitialized = true;
  }

  if (Foundation) {
    Foundation.Triggers = Triggers;
    // Legacy included to be backwards compatible for now.
    Foundation.IHearYou = Triggers.Initializers.addGlobalListeners;
  }
};



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Move; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Motion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(1);





/**
 * Motion module.
 * @module foundation.motion
 */

var initClasses = ['mui-enter', 'mui-leave'];
var activeClasses = ['mui-enter-active', 'mui-leave-active'];

var Motion = {
  animateIn: function (element, animation, cb) {
    animate(true, element, animation, cb);
  },

  animateOut: function (element, animation, cb) {
    animate(false, element, animation, cb);
  }
};

function Move(duration, elem, fn) {
  var anim,
      prog,
      start = null;
  // console.log('called');

  if (duration === 0) {
    fn.apply(elem);
    elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
    return;
  }

  function move(ts) {
    if (!start) start = ts;
    // console.log(start, ts);
    prog = ts - start;
    fn.apply(elem);

    if (prog < duration) {
      anim = window.requestAnimationFrame(move, elem);
    } else {
      window.cancelAnimationFrame(anim);
      elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
    }
  }
  anim = window.requestAnimationFrame(move);
}

/**
 * Animates an element in or out using a CSS transition class.
 * @function
 * @private
 * @param {Boolean} isIn - Defines if the animation is in or out.
 * @param {Object} element - jQuery or HTML object to animate.
 * @param {String} animation - CSS class to use.
 * @param {Function} cb - Callback to run when animation is finished.
 */
function animate(isIn, element, animation, cb) {
  element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).eq(0);

  if (!element.length) return;

  var initClass = isIn ? initClasses[0] : initClasses[1];
  var activeClass = isIn ? activeClasses[0] : activeClasses[1];

  // Set up the animation
  reset();

  element.addClass(animation).css('transition', 'none');

  requestAnimationFrame(function () {
    element.addClass(initClass);
    if (isIn) element.show();
  });

  // Start the animation
  requestAnimationFrame(function () {
    element[0].offsetWidth;
    element.css('transition', '').addClass(activeClass);
  });

  // Clean up the animation when it finishes
  element.one(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__["c" /* transitionend */])(element), finish);

  // Hides the element (for out animations), resets the element, and runs a callback
  function finish() {
    if (!isIn) element.hide();
    reset();
    if (cb) cb.apply(element);
  }

  // Resets transitions and removes motion-specific classes
  function reset() {
    element[0].style.transitionDuration = 0;
    element.removeClass(initClass + ' ' + activeClass + ' ' + animation);
  }
}



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Foundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(2);






var FOUNDATION_VERSION = '6.4.2';

// Global Foundation object
// This is attached to the window, or used as a module for AMD/Browserify
var Foundation = {
  version: FOUNDATION_VERSION,

  /**
   * Stores initialized plugins.
   */
  _plugins: {},

  /**
   * Stores generated unique ids for plugin instances
   */
  _uuids: [],

  /**
   * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
   * @param {Object} plugin - The constructor of the plugin.
   */
  plugin: function (plugin, name) {
    // Object key to use when adding to global Foundation object
    // Examples: Foundation.Reveal, Foundation.OffCanvas
    var className = name || functionName(plugin);
    // Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin
    // Examples: data-reveal, data-off-canvas
    var attrName = hyphenate(className);

    // Add to the Foundation object and the plugins list (for reflowing)
    this._plugins[attrName] = this[className] = plugin;
  },
  /**
   * @function
   * Populates the _uuids array with pointers to each individual plugin instance.
   * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.
   * Also fires the initialization event for each plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @param {String} name - the name of the plugin, passed as a camelCased string.
   * @fires Plugin#init
   */
  registerPlugin: function (plugin, name) {
    var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();
    plugin.uuid = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__["a" /* GetYoDigits */])(6, pluginName);

    if (!plugin.$element.attr('data-' + pluginName)) {
      plugin.$element.attr('data-' + pluginName, plugin.uuid);
    }
    if (!plugin.$element.data('zfPlugin')) {
      plugin.$element.data('zfPlugin', plugin);
    }
    /**
     * Fires when the plugin has initialized.
     * @event Plugin#init
     */
    plugin.$element.trigger('init.zf.' + pluginName);

    this._uuids.push(plugin.uuid);

    return;
  },
  /**
   * @function
   * Removes the plugins uuid from the _uuids array.
   * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
   * Also fires the destroyed event for the plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @fires Plugin#destroyed
   */
  unregisterPlugin: function (plugin) {
    var pluginName = hyphenate(functionName(plugin.$element.data('zfPlugin').constructor));

    this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1);
    plugin.$element.removeAttr('data-' + pluginName).removeData('zfPlugin')
    /**
     * Fires when the plugin has been destroyed.
     * @event Plugin#destroyed
     */
    .trigger('destroyed.zf.' + pluginName);
    for (var prop in plugin) {
      plugin[prop] = null; //clean up script to prep for garbage collection.
    }
    return;
  },

  /**
   * @function
   * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
   * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
   * @default If no argument is passed, reflow all currently active plugins.
   */
  reInit: function (plugins) {
    var isJQ = plugins instanceof __WEBPACK_IMPORTED_MODULE_0_jquery___default.a;
    try {
      if (isJQ) {
        plugins.each(function () {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data('zfPlugin')._init();
        });
      } else {
        var type = typeof plugins,
            _this = this,
            fns = {
          'object': function (plgs) {
            plgs.forEach(function (p) {
              p = hyphenate(p);
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-' + p + ']').foundation('_init');
            });
          },
          'string': function () {
            plugins = hyphenate(plugins);
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-' + plugins + ']').foundation('_init');
          },
          'undefined': function () {
            this['object'](Object.keys(_this._plugins));
          }
        };
        fns[type](plugins);
      }
    } catch (err) {
      console.error(err);
    } finally {
      return plugins;
    }
  },

  /**
   * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
   * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
   * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
   */
  reflow: function (elem, plugins) {

    // If plugins is undefined, just grab everything
    if (typeof plugins === 'undefined') {
      plugins = Object.keys(this._plugins);
    }
    // If plugins is a string, convert it to an array with one item
    else if (typeof plugins === 'string') {
        plugins = [plugins];
      }

    var _this = this;

    // Iterate through each plugin
    __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.each(plugins, function (i, name) {
      // Get the current plugin
      var plugin = _this._plugins[name];

      // Localize the search to all elements inside elem, as well as elem itself, unless elem === document
      var $elem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(elem).find('[data-' + name + ']').addBack('[data-' + name + ']');

      // For each plugin found, initialize it
      $elem.each(function () {
        var $el = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this),
            opts = {};
        // Don't double-dip on plugins
        if ($el.data('zfPlugin')) {
          console.warn("Tried to initialize " + name + " on an element that already has a Foundation plugin.");
          return;
        }

        if ($el.attr('data-options')) {
          var thing = $el.attr('data-options').split(';').forEach(function (e, i) {
            var opt = e.split(':').map(function (el) {
              return el.trim();
            });
            if (opt[0]) opts[opt[0]] = parseValue(opt[1]);
          });
        }
        try {
          $el.data('zfPlugin', new plugin(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), opts));
        } catch (er) {
          console.error(er);
        } finally {
          return;
        }
      });
    });
  },
  getFnName: functionName,

  addToJquery: function ($) {
    // TODO: consider not making this a jQuery function
    // TODO: need way to reflow vs. re-initialize
    /**
     * The Foundation jQuery method.
     * @param {String|Array} method - An action to perform on the current jQuery object.
     */
    var foundation = function (method) {
      var type = typeof method,
          $noJS = $('.no-js');

      if ($noJS.length) {
        $noJS.removeClass('no-js');
      }

      if (type === 'undefined') {
        //needs to initialize the Foundation object, or an individual plugin.
        __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__["a" /* MediaQuery */]._init();
        Foundation.reflow(this);
      } else if (type === 'string') {
        //an individual method to invoke on a plugin or group of plugins
        var args = Array.prototype.slice.call(arguments, 1); //collect all the arguments, if necessary
        var plugClass = this.data('zfPlugin'); //determine the class of plugin

        if (plugClass !== undefined && plugClass[method] !== undefined) {
          //make sure both the class and method exist
          if (this.length === 1) {
            //if there's only one, call it directly.
            plugClass[method].apply(plugClass, args);
          } else {
            this.each(function (i, el) {
              //otherwise loop through the jQuery collection and invoke the method on each
              plugClass[method].apply($(el).data('zfPlugin'), args);
            });
          }
        } else {
          //error for no class or no method
          throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? functionName(plugClass) : 'this element') + '.');
        }
      } else {
        //error for invalid argument type
        throw new TypeError('We\'re sorry, ' + type + ' is not a valid parameter. You must use a string representing the method you wish to invoke.');
      }
      return this;
    };
    $.fn.foundation = foundation;
    return $;
  }
};

Foundation.util = {
  /**
   * Function for applying a debounce effect to a function call.
   * @function
   * @param {Function} func - Function to be called at end of timeout.
   * @param {Number} delay - Time in ms to delay the call of `func`.
   * @returns function
   */
  throttle: function (func, delay) {
    var timer = null;

    return function () {
      var context = this,
          args = arguments;

      if (timer === null) {
        timer = setTimeout(function () {
          func.apply(context, args);
          timer = null;
        }, delay);
      }
    };
  }
};

window.Foundation = Foundation;

// Polyfill for requestAnimationFrame
(function () {
  if (!Date.now || !window.Date.now) window.Date.now = Date.now = function () {
    return new Date().getTime();
  };

  var vendors = ['webkit', 'moz'];
  for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
    var vp = vendors[i];
    window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
  }
  if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
    var lastTime = 0;
    window.requestAnimationFrame = function (callback) {
      var now = Date.now();
      var nextTime = Math.max(lastTime + 16, now);
      return setTimeout(function () {
        callback(lastTime = nextTime);
      }, nextTime - now);
    };
    window.cancelAnimationFrame = clearTimeout;
  }
  /**
   * Polyfill for performance.now, required by rAF
   */
  if (!window.performance || !window.performance.now) {
    window.performance = {
      start: Date.now(),
      now: function () {
        return Date.now() - this.start;
      }
    };
  }
})();
if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP = function () {},
        fBound = function () {
      return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
    };

    if (this.prototype) {
      // native functions don't have a prototype
      fNOP.prototype = this.prototype;
    }
    fBound.prototype = new fNOP();

    return fBound;
  };
}
// Polyfill to get the name of a function in IE9
function functionName(fn) {
  if (Function.prototype.name === undefined) {
    var funcNameRegex = /function\s([^(]{1,})\(/;
    var results = funcNameRegex.exec(fn.toString());
    return results && results.length > 1 ? results[1].trim() : "";
  } else if (fn.prototype === undefined) {
    return fn.constructor.name;
  } else {
    return fn.prototype.constructor.name;
  }
}
function parseValue(str) {
  if ('true' === str) return true;else if ('false' === str) return false;else if (!isNaN(str * 1)) return parseFloat(str);
  return str;
}
// Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580
function hyphenate(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Slider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation_util_motion__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundation_util_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foundation_plugin__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__foundation_util_touch__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__foundation_util_triggers__ = __webpack_require__(3);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











/**
 * Slider module.
 * @module foundation.slider
 * @requires foundation.util.motion
 * @requires foundation.util.triggers
 * @requires foundation.util.keyboard
 * @requires foundation.util.touch
 */

var Slider = function (_Plugin) {
  _inherits(Slider, _Plugin);

  function Slider() {
    _classCallCheck(this, Slider);

    return _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).apply(this, arguments));
  }

  _createClass(Slider, [{
    key: '_setup',

    /**
     * Creates a new instance of a slider control.
     * @class
     * @name Slider
     * @param {jQuery} element - jQuery object to make into a slider control.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Slider.defaults, this.$element.data(), options);
      this.className = 'Slider'; // ie9 back compat

      // Touch and Triggers inits are idempotent, we just need to make sure it's initialied.
      __WEBPACK_IMPORTED_MODULE_5__foundation_util_touch__["a" /* Touch */].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);
      __WEBPACK_IMPORTED_MODULE_6__foundation_util_triggers__["a" /* Triggers */].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);

      this._init();

      __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a" /* Keyboard */].register('Slider', {
        'ltr': {
          'ARROW_RIGHT': 'increase',
          'ARROW_UP': 'increase',
          'ARROW_DOWN': 'decrease',
          'ARROW_LEFT': 'decrease',
          'SHIFT_ARROW_RIGHT': 'increase_fast',
          'SHIFT_ARROW_UP': 'increase_fast',
          'SHIFT_ARROW_DOWN': 'decrease_fast',
          'SHIFT_ARROW_LEFT': 'decrease_fast',
          'HOME': 'min',
          'END': 'max'
        },
        'rtl': {
          'ARROW_LEFT': 'increase',
          'ARROW_RIGHT': 'decrease',
          'SHIFT_ARROW_LEFT': 'increase_fast',
          'SHIFT_ARROW_RIGHT': 'decrease_fast'
        }
      });
    }

    /**
     * Initilizes the plugin by reading/setting attributes, creating collections and setting the initial position of the handle(s).
     * @function
     * @private
     */

  }, {
    key: '_init',
    value: function _init() {
      this.inputs = this.$element.find('input');
      this.handles = this.$element.find('[data-slider-handle]');

      this.$handle = this.handles.eq(0);
      this.$input = this.inputs.length ? this.inputs.eq(0) : __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + this.$handle.attr('aria-controls'));
      this.$fill = this.$element.find('[data-slider-fill]').css(this.options.vertical ? 'height' : 'width', 0);

      var isDbl = false,
          _this = this;
      if (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) {
        this.options.disabled = true;
        this.$element.addClass(this.options.disabledClass);
      }
      if (!this.inputs.length) {
        this.inputs = __WEBPACK_IMPORTED_MODULE_0_jquery___default()().add(this.$input);
        this.options.binding = true;
      }

      this._setInitAttr(0);

      if (this.handles[1]) {
        this.options.doubleSided = true;
        this.$handle2 = this.handles.eq(1);
        this.$input2 = this.inputs.length > 1 ? this.inputs.eq(1) : __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + this.$handle2.attr('aria-controls'));

        if (!this.inputs[1]) {
          this.inputs = this.inputs.add(this.$input2);
        }
        isDbl = true;

        // this.$handle.triggerHandler('click.zf.slider');
        this._setInitAttr(1);
      }

      // Set handle positions
      this.setHandles();

      this._events();
    }
  }, {
    key: 'setHandles',
    value: function setHandles() {
      var _this3 = this;

      if (this.handles[1]) {
        this._setHandlePos(this.$handle, this.inputs.eq(0).val(), true, function () {
          _this3._setHandlePos(_this3.$handle2, _this3.inputs.eq(1).val(), true);
        });
      } else {
        this._setHandlePos(this.$handle, this.inputs.eq(0).val(), true);
      }
    }
  }, {
    key: '_reflow',
    value: function _reflow() {
      this.setHandles();
    }
    /**
    * @function
    * @private
    * @param {Number} value - floating point (the value) to be transformed using to a relative position on the slider (the inverse of _value)
    */

  }, {
    key: '_pctOfBar',
    value: function _pctOfBar(value) {
      var pctOfBar = percent(value - this.options.start, this.options.end - this.options.start);

      switch (this.options.positionValueFunction) {
        case "pow":
          pctOfBar = this._logTransform(pctOfBar);
          break;
        case "log":
          pctOfBar = this._powTransform(pctOfBar);
          break;
      }

      return pctOfBar.toFixed(2);
    }

    /**
    * @function
    * @private
    * @param {Number} pctOfBar - floating point, the relative position of the slider (typically between 0-1) to be transformed to a value
    */

  }, {
    key: '_value',
    value: function _value(pctOfBar) {
      switch (this.options.positionValueFunction) {
        case "pow":
          pctOfBar = this._powTransform(pctOfBar);
          break;
        case "log":
          pctOfBar = this._logTransform(pctOfBar);
          break;
      }
      var value = (this.options.end - this.options.start) * pctOfBar + this.options.start;

      return value;
    }

    /**
    * @function
    * @private
    * @param {Number} value - floating point (typically between 0-1) to be transformed using the log function
    */

  }, {
    key: '_logTransform',
    value: function _logTransform(value) {
      return baseLog(this.options.nonLinearBase, value * (this.options.nonLinearBase - 1) + 1);
    }

    /**
    * @function
    * @private
    * @param {Number} value - floating point (typically between 0-1) to be transformed using the power function
    */

  }, {
    key: '_powTransform',
    value: function _powTransform(value) {
      return (Math.pow(this.options.nonLinearBase, value) - 1) / (this.options.nonLinearBase - 1);
    }

    /**
     * Sets the position of the selected handle and fill bar.
     * @function
     * @private
     * @param {jQuery} $hndl - the selected handle to move.
     * @param {Number} location - floating point between the start and end values of the slider bar.
     * @param {Function} cb - callback function to fire on completion.
     * @fires Slider#moved
     * @fires Slider#changed
     */

  }, {
    key: '_setHandlePos',
    value: function _setHandlePos($hndl, location, noInvert, cb) {
      // don't move if the slider has been disabled since its initialization
      if (this.$element.hasClass(this.options.disabledClass)) {
        return;
      }
      //might need to alter that slightly for bars that will have odd number selections.
      location = parseFloat(location); //on input change events, convert string to number...grumble.

      // prevent slider from running out of bounds, if value exceeds the limits set through options, override the value to min/max
      if (location < this.options.start) {
        location = this.options.start;
      } else if (location > this.options.end) {
        location = this.options.end;
      }

      var isDbl = this.options.doubleSided;

      //this is for single-handled vertical sliders, it adjusts the value to account for the slider being "upside-down"
      //for click and drag events, it's weird due to the scale(-1, 1) css property
      if (this.options.vertical && !noInvert) {
        location = this.options.end - location;
      }

      if (isDbl) {
        //this block is to prevent 2 handles from crossing eachother. Could/should be improved.
        if (this.handles.index($hndl) === 0) {
          var h2Val = parseFloat(this.$handle2.attr('aria-valuenow'));
          location = location >= h2Val ? h2Val - this.options.step : location;
        } else {
          var h1Val = parseFloat(this.$handle.attr('aria-valuenow'));
          location = location <= h1Val ? h1Val + this.options.step : location;
        }
      }

      var _this = this,
          vert = this.options.vertical,
          hOrW = vert ? 'height' : 'width',
          lOrT = vert ? 'top' : 'left',
          handleDim = $hndl[0].getBoundingClientRect()[hOrW],
          elemDim = this.$element[0].getBoundingClientRect()[hOrW],

      //percentage of bar min/max value based on click or drag point
      pctOfBar = this._pctOfBar(location),

      //number of actual pixels to shift the handle, based on the percentage obtained above
      pxToMove = (elemDim - handleDim) * pctOfBar,

      //percentage of bar to shift the handle
      movement = (percent(pxToMove, elemDim) * 100).toFixed(this.options.decimal);
      //fixing the decimal value for the location number, is passed to other methods as a fixed floating-point value
      location = parseFloat(location.toFixed(this.options.decimal));
      // declare empty object for css adjustments, only used with 2 handled-sliders
      var css = {};

      this._setValues($hndl, location);

      // TODO update to calculate based on values set to respective inputs??
      if (isDbl) {
        var isLeftHndl = this.handles.index($hndl) === 0,

        //empty variable, will be used for min-height/width for fill bar
        dim,

        //percentage w/h of the handle compared to the slider bar
        handlePct = ~~(percent(handleDim, elemDim) * 100);
        //if left handle, the math is slightly different than if it's the right handle, and the left/top property needs to be changed for the fill bar
        if (isLeftHndl) {
          //left or top percentage value to apply to the fill bar.
          css[lOrT] = movement + '%';
          //calculate the new min-height/width for the fill bar.
          dim = parseFloat(this.$handle2[0].style[lOrT]) - movement + handlePct;
          //this callback is necessary to prevent errors and allow the proper placement and initialization of a 2-handled slider
          //plus, it means we don't care if 'dim' isNaN on init, it won't be in the future.
          if (cb && typeof cb === 'function') {
            cb();
          } //this is only needed for the initialization of 2 handled sliders
        } else {
          //just caching the value of the left/bottom handle's left/top property
          var handlePos = parseFloat(this.$handle[0].style[lOrT]);
          //calculate the new min-height/width for the fill bar. Use isNaN to prevent false positives for numbers <= 0
          //based on the percentage of movement of the handle being manipulated, less the opposing handle's left/top position, plus the percentage w/h of the handle itself
          dim = movement - (isNaN(handlePos) ? (this.options.initialStart - this.options.start) / ((this.options.end - this.options.start) / 100) : handlePos) + handlePct;
        }
        // assign the min-height/width to our css object
        css['min-' + hOrW] = dim + '%';
      }

      this.$element.one('finished.zf.animate', function () {
        /**
         * Fires when the handle is done moving.
         * @event Slider#moved
         */
        _this.$element.trigger('moved.zf.slider', [$hndl]);
      });

      //because we don't know exactly how the handle will be moved, check the amount of time it should take to move.
      var moveTime = this.$element.data('dragging') ? 1000 / 60 : this.options.moveTime;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__foundation_util_motion__["a" /* Move */])(moveTime, $hndl, function () {
        // adjusting the left/top property of the handle, based on the percentage calculated above
        // if movement isNaN, that is because the slider is hidden and we cannot determine handle width,
        // fall back to next best guess.
        if (isNaN(movement)) {
          $hndl.css(lOrT, pctOfBar * 100 + '%');
        } else {
          $hndl.css(lOrT, movement + '%');
        }

        if (!_this.options.doubleSided) {
          //if single-handled, a simple method to expand the fill bar
          _this.$fill.css(hOrW, pctOfBar * 100 + '%');
        } else {
          //otherwise, use the css object we created above
          _this.$fill.css(css);
        }
      });

      /**
       * Fires when the value has not been change for a given time.
       * @event Slider#changed
       */
      clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        _this.$element.trigger('changed.zf.slider', [$hndl]);
      }, _this.options.changedDelay);
    }

    /**
     * Sets the initial attribute for the slider element.
     * @function
     * @private
     * @param {Number} idx - index of the current handle/input to use.
     */

  }, {
    key: '_setInitAttr',
    value: function _setInitAttr(idx) {
      var initVal = idx === 0 ? this.options.initialStart : this.options.initialEnd;
      var id = this.inputs.eq(idx).attr('id') || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__["a" /* GetYoDigits */])(6, 'slider');
      this.inputs.eq(idx).attr({
        'id': id,
        'max': this.options.end,
        'min': this.options.start,
        'step': this.options.step
      });
      this.inputs.eq(idx).val(initVal);
      this.handles.eq(idx).attr({
        'role': 'slider',
        'aria-controls': id,
        'aria-valuemax': this.options.end,
        'aria-valuemin': this.options.start,
        'aria-valuenow': initVal,
        'aria-orientation': this.options.vertical ? 'vertical' : 'horizontal',
        'tabindex': 0
      });
    }

    /**
     * Sets the input and `aria-valuenow` values for the slider element.
     * @function
     * @private
     * @param {jQuery} $handle - the currently selected handle.
     * @param {Number} val - floating point of the new value.
     */

  }, {
    key: '_setValues',
    value: function _setValues($handle, val) {
      var idx = this.options.doubleSided ? this.handles.index($handle) : 0;
      this.inputs.eq(idx).val(val);
      $handle.attr('aria-valuenow', val);
    }

    /**
     * Handles events on the slider element.
     * Calculates the new location of the current handle.
     * If there are two handles and the bar was clicked, it determines which handle to move.
     * @function
     * @private
     * @param {Object} e - the `event` object passed from the listener.
     * @param {jQuery} $handle - the current handle to calculate for, if selected.
     * @param {Number} val - floating point number for the new value of the slider.
     * TODO clean this up, there's a lot of repeated code between this and the _setHandlePos fn.
     */

  }, {
    key: '_handleEvent',
    value: function _handleEvent(e, $handle, val) {
      var value, hasVal;
      if (!val) {
        //click or drag events
        e.preventDefault();
        var _this = this,
            vertical = this.options.vertical,
            param = vertical ? 'height' : 'width',
            direction = vertical ? 'top' : 'left',
            eventOffset = vertical ? e.pageY : e.pageX,
            halfOfHandle = this.$handle[0].getBoundingClientRect()[param] / 2,
            barDim = this.$element[0].getBoundingClientRect()[param],
            windowScroll = vertical ? __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).scrollTop() : __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).scrollLeft();

        var elemOffset = this.$element.offset()[direction];

        // touch events emulated by the touch util give position relative to screen, add window.scroll to event coordinates...
        // best way to guess this is simulated is if clientY == pageY
        if (e.clientY === e.pageY) {
          eventOffset = eventOffset + windowScroll;
        }
        var eventFromBar = eventOffset - elemOffset;
        var barXY;
        if (eventFromBar < 0) {
          barXY = 0;
        } else if (eventFromBar > barDim) {
          barXY = barDim;
        } else {
          barXY = eventFromBar;
        }
        var offsetPct = percent(barXY, barDim);

        value = this._value(offsetPct);

        // turn everything around for RTL, yay math!
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__["b" /* rtl */])() && !this.options.vertical) {
          value = this.options.end - value;
        }

        value = _this._adjustValue(null, value);
        //boolean flag for the setHandlePos fn, specifically for vertical sliders
        hasVal = false;

        if (!$handle) {
          //figure out which handle it is, pass it to the next function.
          var firstHndlPos = absPosition(this.$handle, direction, barXY, param),
              secndHndlPos = absPosition(this.$handle2, direction, barXY, param);
          $handle = firstHndlPos <= secndHndlPos ? this.$handle : this.$handle2;
        }
      } else {
        //change event on input
        value = this._adjustValue(null, val);
        hasVal = true;
      }

      this._setHandlePos($handle, value, hasVal);
    }

    /**
     * Adjustes value for handle in regard to step value. returns adjusted value
     * @function
     * @private
     * @param {jQuery} $handle - the selected handle.
     * @param {Number} value - value to adjust. used if $handle is falsy
     */

  }, {
    key: '_adjustValue',
    value: function _adjustValue($handle, value) {
      var val,
          step = this.options.step,
          div = parseFloat(step / 2),
          left,
          prev_val,
          next_val;
      if (!!$handle) {
        val = parseFloat($handle.attr('aria-valuenow'));
      } else {
        val = value;
      }
      left = val % step;
      prev_val = val - left;
      next_val = prev_val + step;
      if (left === 0) {
        return val;
      }
      val = val >= prev_val + div ? next_val : prev_val;
      return val;
    }

    /**
     * Adds event listeners to the slider elements.
     * @function
     * @private
     */

  }, {
    key: '_events',
    value: function _events() {
      this._eventsForHandle(this.$handle);
      if (this.handles[1]) {
        this._eventsForHandle(this.$handle2);
      }
    }

    /**
     * Adds event listeners a particular handle
     * @function
     * @private
     * @param {jQuery} $handle - the current handle to apply listeners to.
     */

  }, {
    key: '_eventsForHandle',
    value: function _eventsForHandle($handle) {
      var _this = this,
          curHandle,
          timer;

      this.inputs.off('change.zf.slider').on('change.zf.slider', function (e) {
        var idx = _this.inputs.index(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this));
        _this._handleEvent(e, _this.handles.eq(idx), __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).val());
      });

      if (this.options.clickSelect) {
        this.$element.off('click.zf.slider').on('click.zf.slider', function (e) {
          if (_this.$element.data('dragging')) {
            return false;
          }

          if (!__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).is('[data-slider-handle]')) {
            if (_this.options.doubleSided) {
              _this._handleEvent(e);
            } else {
              _this._handleEvent(e, _this.$handle);
            }
          }
        });
      }

      if (this.options.draggable) {
        this.handles.addTouch();

        var $body = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body');
        $handle.off('mousedown.zf.slider').on('mousedown.zf.slider', function (e) {
          $handle.addClass('is-dragging');
          _this.$fill.addClass('is-dragging'); //
          _this.$element.data('dragging', true);

          curHandle = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.currentTarget);

          $body.on('mousemove.zf.slider', function (e) {
            e.preventDefault();
            _this._handleEvent(e, curHandle);
          }).on('mouseup.zf.slider', function (e) {
            _this._handleEvent(e, curHandle);

            $handle.removeClass('is-dragging');
            _this.$fill.removeClass('is-dragging');
            _this.$element.data('dragging', false);

            $body.off('mousemove.zf.slider mouseup.zf.slider');
          });
        })
        // prevent events triggered by touch
        .on('selectstart.zf.slider touchmove.zf.slider', function (e) {
          e.preventDefault();
        });
      }

      $handle.off('keydown.zf.slider').on('keydown.zf.slider', function (e) {
        var _$handle = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this),
            idx = _this.options.doubleSided ? _this.handles.index(_$handle) : 0,
            oldValue = parseFloat(_this.inputs.eq(idx).val()),
            newValue;

        // handle keyboard event with keyboard util
        __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a" /* Keyboard */].handleKey(e, 'Slider', {
          decrease: function () {
            newValue = oldValue - _this.options.step;
          },
          increase: function () {
            newValue = oldValue + _this.options.step;
          },
          decrease_fast: function () {
            newValue = oldValue - _this.options.step * 10;
          },
          increase_fast: function () {
            newValue = oldValue + _this.options.step * 10;
          },
          min: function () {
            newValue = _this.options.start;
          },
          max: function () {
            newValue = _this.options.end;
          },
          handled: function () {
            // only set handle pos when event was handled specially
            e.preventDefault();
            _this._setHandlePos(_$handle, newValue, true);
          }
        });
        /*if (newValue) { // if pressed key has special function, update value
          e.preventDefault();
          _this._setHandlePos(_$handle, newValue);
        }*/
      });
    }

    /**
     * Destroys the slider plugin.
     */

  }, {
    key: '_destroy',
    value: function _destroy() {
      this.handles.off('.zf.slider');
      this.inputs.off('.zf.slider');
      this.$element.off('.zf.slider');

      clearTimeout(this.timeout);
    }
  }]);

  return Slider;
}(__WEBPACK_IMPORTED_MODULE_4__foundation_plugin__["a" /* Plugin */]);

Slider.defaults = {
  /**
   * Minimum value for the slider scale.
   * @option
   * @type {number}
   * @default 0
   */
  start: 0,
  /**
   * Maximum value for the slider scale.
   * @option
   * @type {number}
   * @default 100
   */
  end: 100,
  /**
   * Minimum value change per change event.
   * @option
   * @type {number}
   * @default 1
   */
  step: 1,
  /**
   * Value at which the handle/input *(left handle/first input)* should be set to on initialization.
   * @option
   * @type {number}
   * @default 0
   */
  initialStart: 0,
  /**
   * Value at which the right handle/second input should be set to on initialization.
   * @option
   * @type {number}
   * @default 100
   */
  initialEnd: 100,
  /**
   * Allows the input to be located outside the container and visible. Set to by the JS
   * @option
   * @type {boolean}
   * @default false
   */
  binding: false,
  /**
   * Allows the user to click/tap on the slider bar to select a value.
   * @option
   * @type {boolean}
   * @default true
   */
  clickSelect: true,
  /**
   * Set to true and use the `vertical` class to change alignment to vertical.
   * @option
   * @type {boolean}
   * @default false
   */
  vertical: false,
  /**
   * Allows the user to drag the slider handle(s) to select a value.
   * @option
   * @type {boolean}
   * @default true
   */
  draggable: true,
  /**
   * Disables the slider and prevents event listeners from being applied. Double checked by JS with `disabledClass`.
   * @option
   * @type {boolean}
   * @default false
   */
  disabled: false,
  /**
   * Allows the use of two handles. Double checked by the JS. Changes some logic handling.
   * @option
   * @type {boolean}
   * @default false
   */
  doubleSided: false,
  /**
   * Potential future feature.
   */
  // steps: 100,
  /**
   * Number of decimal places the plugin should go to for floating point precision.
   * @option
   * @type {number}
   * @default 2
   */
  decimal: 2,
  /**
   * Time delay for dragged elements.
   */
  // dragDelay: 0,
  /**
   * Time, in ms, to animate the movement of a slider handle if user clicks/taps on the bar. Needs to be manually set if updating the transition time in the Sass settings.
   * @option
   * @type {number}
   * @default 200
   */
  moveTime: 200, //update this if changing the transition time in the sass
  /**
   * Class applied to disabled sliders.
   * @option
   * @type {string}
   * @default 'disabled'
   */
  disabledClass: 'disabled',
  /**
   * Will invert the default layout for a vertical<span data-tooltip title="who would do this???"> </span>slider.
   * @option
   * @type {boolean}
   * @default false
   */
  invertVertical: false,
  /**
   * Milliseconds before the `changed.zf-slider` event is triggered after value change.
   * @option
   * @type {number}
   * @default 500
   */
  changedDelay: 500,
  /**
  * Basevalue for non-linear sliders
  * @option
  * @type {number}
  * @default 5
  */
  nonLinearBase: 5,
  /**
  * Basevalue for non-linear sliders, possible values are: `'linear'`, `'pow'` & `'log'`. Pow and Log use the nonLinearBase setting.
  * @option
  * @type {string}
  * @default 'linear'
  */
  positionValueFunction: 'linear'
};

function percent(frac, num) {
  return frac / num;
}
function absPosition($handle, dir, clickPos, param) {
  return Math.abs($handle.position()[dir] + $handle[param]() / 2 - clickPos);
}
function baseLog(base, value) {
  return Math.log(value) / Math.log(base);
}



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Plugin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(1);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




// Abstract class for providing lifecycle hooks. Expect plugins to define AT LEAST
// {function} _setup (replaces previous constructor),
// {function} _destroy (replaces previous destroy)

var Plugin = function () {
  function Plugin(element, options) {
    _classCallCheck(this, Plugin);

    this._setup(element, options);
    var pluginName = getPluginName(this);
    this.uuid = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__["a" /* GetYoDigits */])(6, pluginName);

    if (!this.$element.attr('data-' + pluginName)) {
      this.$element.attr('data-' + pluginName, this.uuid);
    }
    if (!this.$element.data('zfPlugin')) {
      this.$element.data('zfPlugin', this);
    }
    /**
     * Fires when the plugin has initialized.
     * @event Plugin#init
     */
    this.$element.trigger('init.zf.' + pluginName);
  }

  _createClass(Plugin, [{
    key: 'destroy',
    value: function destroy() {
      this._destroy();
      var pluginName = getPluginName(this);
      this.$element.removeAttr('data-' + pluginName).removeData('zfPlugin')
      /**
       * Fires when the plugin has been destroyed.
       * @event Plugin#destroyed
       */
      .trigger('destroyed.zf.' + pluginName);
      for (var prop in this) {
        this[prop] = null; //clean up script to prep for garbage collection.
      }
    }
  }]);

  return Plugin;
}();

// Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580


function hyphenate(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function getPluginName(obj) {
  if (typeof obj.constructor.name !== 'undefined') {
    return hyphenate(obj.constructor.name);
  } else {
    return hyphenate(obj.className);
  }
}



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Keyboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(1);
/*******************************************
 *                                         *
 * This util was created by Marius Olbertz *
 * Please thank Marius on GitHub /owlbertz *
 * or the web http://www.mariusolbertz.de/ *
 *                                         *
 ******************************************/






var keyCodes = {
  9: 'TAB',
  13: 'ENTER',
  27: 'ESCAPE',
  32: 'SPACE',
  35: 'END',
  36: 'HOME',
  37: 'ARROW_LEFT',
  38: 'ARROW_UP',
  39: 'ARROW_RIGHT',
  40: 'ARROW_DOWN'
};

var commands = {};

// Functions pulled out to be referenceable from internals
function findFocusable($element) {
  if (!$element) {
    return false;
  }
  return $element.find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]').filter(function () {
    if (!__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).is(':visible') || __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).attr('tabindex') < 0) {
      return false;
    } //only have visible elements and those that have a tabindex greater or equal 0
    return true;
  });
}

function parseKey(event) {
  var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase();

  // Remove un-printable characters, e.g. for `fromCharCode` calls for CTRL only events
  key = key.replace(/\W+/, '');

  if (event.shiftKey) key = 'SHIFT_' + key;
  if (event.ctrlKey) key = 'CTRL_' + key;
  if (event.altKey) key = 'ALT_' + key;

  // Remove trailing underscore, in case only modifiers were used (e.g. only `CTRL_ALT`)
  key = key.replace(/_$/, '');

  return key;
}

var Keyboard = {
  keys: getKeyCodes(keyCodes),

  /**
   * Parses the (keyboard) event and returns a String that represents its key
   * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
   * @param {Event} event - the event generated by the event handler
   * @return String key - String that represents the key pressed
   */
  parseKey: parseKey,

  /**
   * Handles the given (keyboard) event
   * @param {Event} event - the event generated by the event handler
   * @param {String} component - Foundation component's name, e.g. Slider or Reveal
   * @param {Objects} functions - collection of functions that are to be executed
   */
  handleKey: function (event, component, functions) {
    var commandList = commands[component],
        keyCode = this.parseKey(event),
        cmds,
        command,
        fn;

    if (!commandList) return console.warn('Component not defined!');

    if (typeof commandList.ltr === 'undefined') {
      // this component does not differentiate between ltr and rtl
      cmds = commandList; // use plain list
    } else {
      // merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__["b" /* rtl */])()) cmds = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, commandList.ltr, commandList.rtl);else cmds = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, commandList.rtl, commandList.ltr);
    }
    command = cmds[keyCode];

    fn = functions[command];
    if (fn && typeof fn === 'function') {
      // execute function  if exists
      var returnValue = fn.apply();
      if (functions.handled || typeof functions.handled === 'function') {
        // execute function when event was handled
        functions.handled(returnValue);
      }
    } else {
      if (functions.unhandled || typeof functions.unhandled === 'function') {
        // execute function when event was not handled
        functions.unhandled();
      }
    }
  },


  /**
   * Finds all focusable elements within the given `$element`
   * @param {jQuery} $element - jQuery object to search within
   * @return {jQuery} $focusable - all focusable elements within `$element`
   */

  findFocusable: findFocusable,

  /**
   * Returns the component name name
   * @param {Object} component - Foundation component, e.g. Slider or Reveal
   * @return String componentName
   */

  register: function (componentName, cmds) {
    commands[componentName] = cmds;
  },


  // TODO9438: These references to Keyboard need to not require global. Will 'this' work in this context?
  //
  /**
   * Traps the focus in the given element.
   * @param  {jQuery} $element  jQuery object to trap the foucs into.
   */
  trapFocus: function ($element) {
    var $focusable = findFocusable($element),
        $firstFocusable = $focusable.eq(0),
        $lastFocusable = $focusable.eq(-1);

    $element.on('keydown.zf.trapfocus', function (event) {
      if (event.target === $lastFocusable[0] && parseKey(event) === 'TAB') {
        event.preventDefault();
        $firstFocusable.focus();
      } else if (event.target === $firstFocusable[0] && parseKey(event) === 'SHIFT_TAB') {
        event.preventDefault();
        $lastFocusable.focus();
      }
    });
  },

  /**
   * Releases the trapped focus from the given element.
   * @param  {jQuery} $element  jQuery object to release the focus for.
   */
  releaseFocus: function ($element) {
    $element.off('keydown.zf.trapfocus');
  }
};

/*
 * Constants for easier comparing.
 * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
 */
function getKeyCodes(kcs) {
  var k = {};
  for (var kc in kcs) {
    k[kcs[kc]] = kcs[kc];
  }return k;
}



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Touch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//**************************************************
//**Work inspired by multiple jquery swipe plugins**
//**Done by Yohai Ararat ***************************
//**************************************************



var Touch = {};

var startPosX,
    startPosY,
    startTime,
    elapsedTime,
    isMoving = false;

function onTouchEnd() {
  //  alert(this);
  this.removeEventListener('touchmove', onTouchMove);
  this.removeEventListener('touchend', onTouchEnd);
  isMoving = false;
}

function onTouchMove(e) {
  if (__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.spotSwipe.preventDefault) {
    e.preventDefault();
  }
  if (isMoving) {
    var x = e.touches[0].pageX;
    var y = e.touches[0].pageY;
    var dx = startPosX - x;
    var dy = startPosY - y;
    var dir;
    elapsedTime = new Date().getTime() - startTime;
    if (Math.abs(dx) >= __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.spotSwipe.moveThreshold && elapsedTime <= __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.spotSwipe.timeThreshold) {
      dir = dx > 0 ? 'left' : 'right';
    }
    // else if(Math.abs(dy) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
    //   dir = dy > 0 ? 'down' : 'up';
    // }
    if (dir) {
      e.preventDefault();
      onTouchEnd.call(this);
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).trigger('swipe', dir).trigger('swipe' + dir);
    }
  }
}

function onTouchStart(e) {
  if (e.touches.length == 1) {
    startPosX = e.touches[0].pageX;
    startPosY = e.touches[0].pageY;
    isMoving = true;
    startTime = new Date().getTime();
    this.addEventListener('touchmove', onTouchMove, false);
    this.addEventListener('touchend', onTouchEnd, false);
  }
}

function init() {
  this.addEventListener && this.addEventListener('touchstart', onTouchStart, false);
}

function teardown() {
  this.removeEventListener('touchstart', onTouchStart);
}

var SpotSwipe = function () {
  function SpotSwipe($) {
    _classCallCheck(this, SpotSwipe);

    this.version = '1.0.0';
    this.enabled = 'ontouchstart' in document.documentElement;
    this.preventDefault = false;
    this.moveThreshold = 75;
    this.timeThreshold = 200;
    this.$ = $;
    this._init();
  }

  _createClass(SpotSwipe, [{
    key: '_init',
    value: function _init() {
      var $ = this.$;
      $.event.special.swipe = { setup: init };

      $.each(['left', 'up', 'down', 'right'], function () {
        $.event.special['swipe' + this] = { setup: function () {
            $(this).on('swipe', $.noop);
          } };
      });
    }
  }]);

  return SpotSwipe;
}();

/****************************************************
 * As far as I can tell, both setupSpotSwipe and    *
 * setupTouchHandler should be idempotent,          *
 * because they directly replace functions &        *
 * values, and do not add event handlers directly.  *
 ****************************************************/

Touch.setupSpotSwipe = function ($) {
  $.spotSwipe = new SpotSwipe($);
};

/****************************************************
 * Method for adding pseudo drag events to elements *
 ***************************************************/
Touch.setupTouchHandler = function ($) {
  $.fn.addTouch = function () {
    this.each(function (i, el) {
      $(el).bind('touchstart touchmove touchend touchcancel', function () {
        //we pass the original event object because the jQuery event
        //object is normalized to w3c specs and does not provide the TouchList
        handleTouch(event);
      });
    });

    var handleTouch = function (event) {
      var touches = event.changedTouches,
          first = touches[0],
          eventTypes = {
        touchstart: 'mousedown',
        touchmove: 'mousemove',
        touchend: 'mouseup'
      },
          type = eventTypes[event.type],
          simulatedEvent;

      if ('MouseEvent' in window && typeof window.MouseEvent === 'function') {
        simulatedEvent = new window.MouseEvent(type, {
          'bubbles': true,
          'cancelable': true,
          'screenX': first.screenX,
          'screenY': first.screenY,
          'clientX': first.clientX,
          'clientY': first.clientY
        });
      } else {
        simulatedEvent = document.createEvent('MouseEvent');
        simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0 /*left*/, null);
      }
      first.target.dispatchEvent(simulatedEvent);
    };
  };
};

Touch.init = function ($) {
  if (typeof $.spotSwipe === 'undefined') {
    Touch.setupSpotSwipe($);
    Touch.setupTouchHandler($);
  }
};



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_util_mediaQuery__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_util_triggers__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_slider__ = __webpack_require__(6);


__WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a" /* Foundation */].addToJquery(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);

__WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a" /* Foundation */].MediaQuery = __WEBPACK_IMPORTED_MODULE_2__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_util_mediaQuery__["a" /* MediaQuery */];

__WEBPACK_IMPORTED_MODULE_3__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_util_triggers__["a" /* Triggers */].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a, __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a" /* Foundation */]);

__WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a" /* Foundation */].plugin(__WEBPACK_IMPORTED_MODULE_4__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_slider__["a" /* Slider */], 'Slider');

/***/ })
/******/ ]);

/*!
 * Glide.js v3.2.3
 * (c) 2013-2018 J??drzej Cha??ubek <jedrzej.chalubek@gmail.com> (http://jedrzejchalubek.com/)
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Glide = factory());
}(this, (function () { 'use strict';

  var defaults = {
    /**
     * Type of the movement.
     *
     * Available types:
     * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
     * `carousel` - Changes slides without starting over when it reaches the first or last slide.
     *
     * @type {String}
     */
    type: 'slider',

    /**
     * Start at specific slide number defined with zero-based index.
     *
     * @type {Number}
     */
    startAt: 0,

    /**
     * A number of slides visible on the single viewport.
     *
     * @type {Number}
     */
    perView: 1,

    /**
     * Focus currently active slide at a specified position in the track.
     *
     * Available inputs:
     * `center` - Current slide will be always focused at the center of a track.
     * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
     *
     * @type {String|Number}
     */
    focusAt: 0,

    /**
     * A size of the gap added between slides.
     *
     * @type {Number}
     */
    gap: 10,

    /**
     * Change slides after a specified interval. Use `false` for turning off autoplay.
     *
     * @type {Number|Boolean}
     */
    autoplay: false,

    /**
     * Stop autoplay on mouseover event.
     *
     * @type {Boolean}
     */
    hoverpause: true,

    /**
     * Allow for changing slides with left and right keyboard arrows.
     *
     * @type {Boolean}
     */
    keyboard: true,

    /**
     * Stop running `perView` number of slides from the end. Use this
     * option if you don't want to have an empty space after
     * a slider. Works only with `slider` type and a
     * non-centered `focusAt` setting.
     *
     * @type {Boolean}
     */
    bound: false,

    /**
     * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
     *
     * @type {Number|Boolean}
     */
    swipeThreshold: 80,

    /**
     * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
     *
     * @type {Number|Boolean}
     */
    dragThreshold: 120,

    /**
     * A maximum number of slides to which movement will be made on swiping or dragging. Use `false` for unlimited.
     *
     * @type {Number|Boolean}
     */
    perTouch: false,

    /**
     * Moving distance ratio of the slides on a swiping and dragging.
     *
     * @type {Number}
     */
    touchRatio: 0.5,

    /**
     * Angle required to activate slides moving on swiping or dragging.
     *
     * @type {Number}
     */
    touchAngle: 45,

    /**
     * Duration of the animation in milliseconds.
     *
     * @type {Number}
     */
    animationDuration: 400,

    /**
     * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
     *
     * @type {Boolean}
     */
    rewind: true,

    /**
     * Duration of the rewinding animation of the `slider` type in milliseconds.
     *
     * @type {Number}
     */
    rewindDuration: 800,

    /**
     * Easing function for the animation.
     *
     * @type {String}
     */
    animationTimingFunc: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',

    /**
     * Throttle costly events at most once per every wait milliseconds.
     *
     * @type {Number}
     */
    throttle: 10,

    /**
     * Moving direction mode.
     *
     * Available inputs:
     * - 'ltr' - left to right movement,
     * - 'rtl' - right to left movement.
     *
     * @type {String}
     */
    direction: 'ltr',

    /**
     * The distance value of the next and previous viewports which
     * have to peek in the current view. Accepts number and
     * pixels as a string. Left and right peeking can be
     * set up separately with a directions object.
     *
     * For example:
     * `100` - Peek 100px on the both sides.
     * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
     *
     * @type {Number|String|Object}
     */
    peek: 0,

    /**
     * Collection of options applied at specified media breakpoints.
     * For example: display two slides per view under 800px.
     * `{
     *   '800px': {
     *     perView: 2
     *   }
     * }`
     */
    breakpoints: {},

    /**
     * Collection of internally used HTML classes.
     *
     * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
     * @type {Object}
     */
    classes: {
      direction: {
        ltr: 'glide--ltr',
        rtl: 'glide--rtl'
      },
      slider: 'glide--slider',
      carousel: 'glide--carousel',
      swipeable: 'glide--swipeable',
      dragging: 'glide--dragging',
      cloneSlide: 'glide__slide--clone',
      activeNav: 'glide__bullet--active',
      activeSlide: 'glide__slide--active',
      disabledArrow: 'glide__arrow--disabled'
    }
  };

  /**
   * Outputs warning message to the bowser console.
   *
   * @param  {String} msg
   * @return {Void}
   */
  function warn(msg) {
    console.error("[Glide warn]: " + msg);
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  /**
   * Converts value entered as number
   * or string to integer value.
   *
   * @param {String} value
   * @returns {Number}
   */
  function toInt(value) {
    return parseInt(value);
  }

  /**
   * Converts value entered as number
   * or string to flat value.
   *
   * @param {String} value
   * @returns {Number}
   */
  function toFloat(value) {
    return parseFloat(value);
  }

  /**
   * Indicates whether the specified value is a string.
   *
   * @param  {*}   value
   * @return {Boolean}
   */
  function isString(value) {
    return typeof value === 'string';
  }

  /**
   * Indicates whether the specified value is an object.
   *
   * @param  {*} value
   * @return {Boolean}
   *
   * @see https://github.com/jashkenas/underscore
   */
  function isObject(value) {
    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

    return type === 'function' || type === 'object' && !!value; // eslint-disable-line no-mixed-operators
  }

  /**
   * Indicates whether the specified value is a number.
   *
   * @param  {*} value
   * @return {Boolean}
   */
  function isNumber(value) {
    return typeof value === 'number';
  }

  /**
   * Indicates whether the specified value is a function.
   *
   * @param  {*} value
   * @return {Boolean}
   */
  function isFunction(value) {
    return typeof value === 'function';
  }

  /**
   * Indicates whether the specified value is undefined.
   *
   * @param  {*} value
   * @return {Boolean}
   */
  function isUndefined(value) {
    return typeof value === 'undefined';
  }

  /**
   * Indicates whether the specified value is an array.
   *
   * @param  {*} value
   * @return {Boolean}
   */
  function isArray(value) {
    return value.constructor === Array;
  }

  /**
   * Creates and initializes specified collection of extensions.
   * Each extension receives access to instance of glide and rest of components.
   *
   * @param {Object} glide
   * @param {Object} extensions
   *
   * @returns {Object}
   */
  function mount(glide, extensions, events) {
    var components = {};

    for (var name in extensions) {
      if (isFunction(extensions[name])) {
        components[name] = extensions[name](glide, components, events);
      } else {
        warn('Extension must be a function');
      }
    }

    for (var _name in components) {
      if (isFunction(components[_name].mount)) {
        components[_name].mount();
      }
    }

    return components;
  }

  /**
   * Defines getter and setter property on the specified object.
   *
   * @param  {Object} obj         Object where property has to be defined.
   * @param  {String} prop        Name of the defined property.
   * @param  {Object} definition  Get and set definitions for the property.
   * @return {Void}
   */
  function define(obj, prop, definition) {
    Object.defineProperty(obj, prop, definition);
  }

  /**
   * Sorts aphabetically object keys.
   *
   * @param  {Object} obj
   * @return {Object}
   */
  function sortKeys(obj) {
    return Object.keys(obj).sort().reduce(function (r, k) {
      r[k] = obj[k];

      return r[k], r;
    }, {});
  }

  /**
   * Merges passed settings object with default options.
   *
   * @param  {Object} defaults
   * @param  {Object} settings
   * @return {Object}
   */
  function mergeOptions(defaults, settings) {
    var options = _extends({}, defaults, settings);

    // `Object.assign` do not deeply merge objects, so we
    // have to do it manually for every nested object
    // in options. Although it does not look smart,
    // it's smaller and faster than some fancy
    // merging deep-merge algorithm script.
    if (settings.hasOwnProperty('classes')) {
      options.classes = _extends({}, defaults.classes, settings.classes);

      if (settings.classes.hasOwnProperty('direction')) {
        options.classes.direction = _extends({}, defaults.classes.direction, settings.classes.direction);
      }
    }

    if (settings.hasOwnProperty('breakpoints')) {
      options.breakpoints = _extends({}, defaults.breakpoints, settings.breakpoints);
    }

    return options;
  }

  var EventsBus = function () {
    /**
     * Construct a EventBus instance.
     *
     * @param {Object} events
     */
    function EventsBus() {
      var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      classCallCheck(this, EventsBus);

      this.events = events;
      this.hop = events.hasOwnProperty;
    }

    /**
     * Adds listener to the specifed event.
     *
     * @param {String|Array} event
     * @param {Function} handler
     */


    createClass(EventsBus, [{
      key: 'on',
      value: function on(event, handler) {
        if (isArray(event)) {
          for (var i = 0; i < event.length; i++) {
            this.on(event[i], handler);
          }
        }

        // Create the event's object if not yet created
        if (!this.hop.call(this.events, event)) {
          this.events[event] = [];
        }

        // Add the handler to queue
        var index = this.events[event].push(handler) - 1;

        // Provide handle back for removal of event
        return {
          remove: function remove() {
            delete this.events[event][index];
          }
        };
      }

      /**
       * Runs registered handlers for specified event.
       *
       * @param {String|Array} event
       * @param {Object=} context
       */

    }, {
      key: 'emit',
      value: function emit(event, context) {
        if (isArray(event)) {
          for (var i = 0; i < event.length; i++) {
            this.emit(event[i], context);
          }
        }

        // If the event doesn't exist, or there's no handlers in queue, just leave
        if (!this.hop.call(this.events, event)) {
          return;
        }

        // Cycle through events queue, fire!
        this.events[event].forEach(function (item) {
          item(context || {});
        });
      }
    }]);
    return EventsBus;
  }();

  var Glide = function () {
    /**
     * Construct glide.
     *
     * @param  {String} selector
     * @param  {Object} options
     */
    function Glide(selector) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      classCallCheck(this, Glide);

      this._c = {};
      this._t = [];
      this._e = new EventsBus();

      this.disabled = false;
      this.selector = selector;
      this.settings = mergeOptions(defaults, options);
      this.index = this.settings.startAt;
    }

    /**
     * Initializes glide.
     *
     * @param {Object} extensions Collection of extensions to initialize.
     * @return {Glide}
     */


    createClass(Glide, [{
      key: 'mount',
      value: function mount$$1() {
        var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        this._e.emit('mount.before');

        if (isObject(extensions)) {
          this._c = mount(this, extensions, this._e);
        } else {
          warn('You need to provide a object on `mount()`');
        }

        this._e.emit('mount.after');

        return this;
      }

      /**
       * Collects an instance `translate` transformers.
       *
       * @param  {Array} transformers Collection of transformers.
       * @return {Void}
       */

    }, {
      key: 'mutate',
      value: function mutate() {
        var transformers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        if (isArray(transformers)) {
          this._t = transformers;
        } else {
          warn('You need to provide a array on `mutate()`');
        }

        return this;
      }

      /**
       * Updates glide with specified settings.
       *
       * @param {Object} settings
       * @return {Glide}
       */

    }, {
      key: 'update',
      value: function update() {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        this.settings = mergeOptions(this.settings, settings);

        if (settings.hasOwnProperty('startAt')) {
          this.index = settings.startAt;
        }

        this._e.emit('update');

        return this;
      }

      /**
       * Change slide with specified pattern. A pattern must be in the special format:
       * `>` - Move one forward
       * `<` - Move one backward
       * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
       * `>>` - Rewinds to end (last slide)
       * `<<` - Rewinds to start (first slide)
       *
       * @param {String} pattern
       * @return {Glide}
       */

    }, {
      key: 'go',
      value: function go(pattern) {
        this._c.Run.make(pattern);

        return this;
      }

      /**
       * Move track by specified distance.
       *
       * @param {String} distance
       * @return {Glide}
       */

    }, {
      key: 'move',
      value: function move(distance) {
        this._c.Transition.disable();
        this._c.Move.make(distance);

        return this;
      }

      /**
       * Destroy instance and revert all changes done by this._c.
       *
       * @return {Glide}
       */

    }, {
      key: 'destroy',
      value: function destroy() {
        this._e.emit('destroy');

        return this;
      }

      /**
       * Start instance autoplaying.
       *
       * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings
       * @return {Glide}
       */

    }, {
      key: 'play',
      value: function play() {
        var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (interval) {
          this.settings.autoplay = interval;
        }

        this._e.emit('play');

        return this;
      }

      /**
       * Stop instance autoplaying.
       *
       * @return {Glide}
       */

    }, {
      key: 'pause',
      value: function pause() {
        this._e.emit('pause');

        return this;
      }

      /**
       * Sets glide into a idle status.
       *
       * @return {Glide}
       */

    }, {
      key: 'disable',
      value: function disable() {
        this.disabled = true;

        return this;
      }

      /**
       * Sets glide into a active status.
       *
       * @return {Glide}
       */

    }, {
      key: 'enable',
      value: function enable() {
        this.disabled = false;

        return this;
      }

      /**
       * Adds cuutom event listener with handler.
       *
       * @param  {String|Array} event
       * @param  {Function} handler
       * @return {Glide}
       */

    }, {
      key: 'on',
      value: function on(event, handler) {
        this._e.on(event, handler);

        return this;
      }

      /**
       * Checks if glide is a precised type.
       *
       * @param  {String} name
       * @return {Boolean}
       */

    }, {
      key: 'isType',
      value: function isType(name) {
        return this.settings.type === name;
      }

      /**
       * Gets value of the core options.
       *
       * @return {Object}
       */

    }, {
      key: 'settings',
      get: function get$$1() {
        return this._o;
      }

      /**
       * Sets value of the core options.
       *
       * @param  {Object} o
       * @return {Void}
       */
      ,
      set: function set$$1(o) {
        if (isObject(o)) {
          this._o = o;
        } else {
          warn('Options must be an `object` instance.');
        }
      }

      /**
       * Gets current index of the slider.
       *
       * @return {Object}
       */

    }, {
      key: 'index',
      get: function get$$1() {
        return this._i;
      }

      /**
       * Sets current index a slider.
       *
       * @return {Object}
       */
      ,
      set: function set$$1(i) {
        this._i = toInt(i);
      }

      /**
       * Gets type name of the slider.
       *
       * @return {String}
       */

    }, {
      key: 'type',
      get: function get$$1() {
        return this.settings.type;
      }

      /**
       * Gets value of the idle status.
       *
       * @return {Boolean}
       */

    }, {
      key: 'disabled',
      get: function get$$1() {
        return this._d;
      }

      /**
       * Sets value of the idle status.
       *
       * @return {Boolean}
       */
      ,
      set: function set$$1(status) {
        this._d = !!status;
      }
    }]);
    return Glide;
  }();

  function Run (Glide, Components, Events) {
    var Run = {
      /**
       * Initializes autorunning of the glide.
       *
       * @return {Void}
       */
      mount: function mount() {
        this._o = false;
      },


      /**
       * Makes glides running based on the passed moving schema.
       *
       * @param {String} move
       */
      make: function make(move) {
        var _this = this;

        if (!Glide.disabled) {
          Glide.disable();

          this.move = move;

          Events.emit('run.before', this.move);

          this.calculate();

          Events.emit('run', this.move);

          Components.Transition.after(function () {
            if (_this.isOffset('<') || _this.isOffset('>')) {
              _this._o = false;

              Events.emit('run.offset', _this.move);
            }

            Events.emit('run.after', _this.move);

            Glide.enable();
          });
        }
      },


      /**
       * Calculates current index based on defined move.
       *
       * @return {Void}
       */
      calculate: function calculate() {
        var move = this.move,
            length = this.length;
        var steps = move.steps,
            direction = move.direction;


        var countableSteps = isNumber(toInt(steps)) && toInt(steps) !== 0;

        switch (direction) {
          case '>':
            if (steps === '>') {
              Glide.index = length;
            } else if (this.isEnd()) {
              if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
                this._o = true;

                Glide.index = 0;
              }

              Events.emit('run.end', move);
            } else if (countableSteps) {
              Glide.index += Math.min(length - Glide.index, -toInt(steps));
            } else {
              Glide.index++;
            }
            break;

          case '<':
            if (steps === '<') {
              Glide.index = 0;
            } else if (this.isStart()) {
              if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
                this._o = true;

                Glide.index = length;
              }

              Events.emit('run.start', move);
            } else if (countableSteps) {
              Glide.index -= Math.min(Glide.index, toInt(steps));
            } else {
              Glide.index--;
            }
            break;

          case '=':
            Glide.index = steps;
            break;
        }
      },


      /**
       * Checks if we are on the first slide.
       *
       * @return {Boolean}
       */
      isStart: function isStart() {
        return Glide.index === 0;
      },


      /**
       * Checks if we are on the last slide.
       *
       * @return {Boolean}
       */
      isEnd: function isEnd() {
        return Glide.index === this.length;
      },


      /**
       * Checks if we are making a offset run.
       *
       * @param {String} direction
       * @return {Boolean}
       */
      isOffset: function isOffset(direction) {
        return this._o && this.move.direction === direction;
      }
    };

    define(Run, 'move', {
      /**
       * Gets value of the move schema.
       *
       * @returns {Object}
       */
      get: function get() {
        return this._m;
      },


      /**
       * Sets value of the move schema.
       *
       * @returns {Object}
       */
      set: function set(value) {
        this._m = {
          direction: value.substr(0, 1),
          steps: value.substr(1) ? value.substr(1) : 0
        };
      }
    });

    define(Run, 'length', {
      /**
       * Gets value of the running distance based
       * on zero-indexing number of slides.
       *
       * @return {Number}
       */
      get: function get() {
        var settings = Glide.settings;
        var length = Components.Html.slides.length;

        // While number of slides inside instance is smaller
        // that `perView` settings we should't run at all.
        // Running distance has to be zero.

        if (settings.perView > length) {
          return 0;
        }

        // If the `bound` option is acitve, a maximum running distance should be
        // reduced by `perView` and `focusAt` settings. Running distance
        // should end before creating an empty space after instance.
        if (Glide.isType('slider') && settings.focusAt !== 'center' && settings.bound) {
          return length - 1 - (toInt(settings.perView) - 1) + toInt(settings.focusAt);
        }

        return length - 1;
      }
    });

    define(Run, 'offset', {
      /**
       * Gets status of the offsetting flag.
       *
       * @return {Boolean}
       */
      get: function get() {
        return this._o;
      }
    });

    return Run;
  }

  /**
   * Returns a current time.
   *
   * @return {Number}
   */
  function now() {
    return new Date().getTime();
  }

  /**
   * Returns a function, that, when invoked, will only be triggered
   * at most once during a given window of time.
   *
   * @param {Function} func
   * @param {Number} wait
   * @param {Object=} options
   * @return {Function}
   *
   * @see https://github.com/jashkenas/underscore
   */
  function throttle(func, wait, options) {
    var timeout = void 0,
        context = void 0,
        args = void 0,
        result = void 0;
    var previous = 0;
    if (!options) options = {};

    var later = function later() {
      previous = options.leading === false ? 0 : now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };

    var throttled = function throttled() {
      var at = now();
      if (!previous && options.leading === false) previous = at;
      var remaining = wait - (at - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = at;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };

    throttled.cancel = function () {
      clearTimeout(timeout);
      previous = 0;
      timeout = context = args = null;
    };

    return throttled;
  }

  var MARGIN_TYPE = {
    ltr: ['marginLeft', 'marginRight'],
    rtl: ['marginRight', 'marginLeft']
  };

  function Gaps (Glide, Components, Events) {
    var Gaps = {
      /**
       * Applies gaps between slides. First and last
       * slides do not receive it's edge margins.
       *
       * @param {HTMLCollection} slides
       * @return {Void}
       */
      apply: function apply(slides) {
        for (var i = 0, len = slides.length; i < len; i++) {
          var style = slides[i].style;
          var direction = Components.Direction.value;

          if (i !== 0) {
            style[MARGIN_TYPE[direction][0]] = this.value / 2 + 'px';
          } else {
            style[MARGIN_TYPE[direction][0]] = '';
          }

          if (i !== slides.length - 1) {
            style[MARGIN_TYPE[direction][1]] = this.value / 2 + 'px';
          } else {
            style[MARGIN_TYPE[direction][1]] = '';
          }
        }
      },


      /**
       * Removes gaps from the slides.
       *
       * @param {HTMLCollection} slides
       * @returns {Void}
      */
      remove: function remove(slides) {
        for (var i = 0, len = slides.length; i < len; i++) {
          var style = slides[i].style;

          style.marginLeft = '';
          style.marginRight = '';
        }
      }
    };

    define(Gaps, 'value', {
      /**
       * Gets value of the gap.
       *
       * @returns {Number}
       */
      get: function get() {
        return toInt(Glide.settings.gap);
      }
    });

    define(Gaps, 'grow', {
      /**
       * Gets additional dimentions value caused by gaps.
       * Used to increase width of the slides wrapper.
       *
       * @returns {Number}
       */
      get: function get() {
        return Gaps.value * (Components.Sizes.length - 1);
      }
    });

    define(Gaps, 'reductor', {
      /**
       * Gets reduction value caused by gaps.
       * Used to subtract width of the slides.
       *
       * @returns {Number}
       */
      get: function get() {
        var perView = Glide.settings.perView;

        return Gaps.value * (perView - 1) / perView;
      }
    });

    /**
     * Apply calculated gaps:
     * - after building, so slides (including clones) will receive proper margins
     * - on updating via API, to recalculate gaps with new options
     */
    Events.on(['build.after', 'update'], throttle(function () {
      Gaps.apply(Components.Html.wrapper.children);
    }, 30));

    /**
     * Remove gaps:
     * - on destroying to bring markup to its inital state
     */
    Events.on('destroy', function () {
      Gaps.remove(Components.Html.wrapper.children);
    });

    return Gaps;
  }

  /**
   * Finds siblings nodes of the passed node.
   *
   * @param  {Element} node
   * @return {Array}
   */
  function siblings(node) {
    if (node && node.parentNode) {
      var n = node.parentNode.firstChild;
      var matched = [];

      for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== node) {
          matched.push(n);
        }
      }

      return matched;
    }

    return [];
  }

  /**
   * Checks if passed node exist and is a valid element.
   *
   * @param  {Element} node
   * @return {Boolean}
   */
  function exist(node) {
    if (node && node instanceof window.HTMLElement) {
      return true;
    }

    return false;
  }

  var TRACK_SELECTOR = '[data-glide-el="track"]';

  function Html (Glide, Components) {
    var Html = {
      /**
       * Setup slider HTML nodes.
       *
       * @param {Glide} glide
       */
      mount: function mount() {
        this.root = Glide.selector;
        this.track = this.root.querySelector(TRACK_SELECTOR);
        this.slides = Array.prototype.slice.call(this.wrapper.children).filter(function (slide) {
          return !slide.classList.contains(Glide.settings.classes.cloneSlide);
        });
      }
    };

    define(Html, 'root', {
      /**
       * Gets node of the glide main element.
       *
       * @return {Object}
       */
      get: function get() {
        return Html._r;
      },


      /**
       * Sets node of the glide main element.
       *
       * @return {Object}
       */
      set: function set(r) {
        if (isString(r)) {
          r = document.querySelector(r);
        }

        if (exist(r)) {
          Html._r = r;
        } else {
          warn('Root element must be a existing Html node');
        }
      }
    });

    define(Html, 'track', {
      /**
       * Gets node of the glide track with slides.
       *
       * @return {Object}
       */
      get: function get() {
        return Html._t;
      },


      /**
       * Sets node of the glide track with slides.
       *
       * @return {Object}
       */
      set: function set(t) {
        if (exist(t)) {
          Html._t = t;
        } else {
          warn('Could not find track element. Please use ' + TRACK_SELECTOR + ' attribute.');
        }
      }
    });

    define(Html, 'wrapper', {
      /**
       * Gets node of the slides wrapper.
       *
       * @return {Object}
       */
      get: function get() {
        return Html.track.children[0];
      }
    });

    return Html;
  }

  function Peek (Glide, Components, Events) {
    var Peek = {
      /**
       * Setups how much to peek based on settings.
       *
       * @return {Void}
       */
      mount: function mount() {
        this.value = Glide.settings.peek;
      }
    };

    define(Peek, 'value', {
      /**
       * Gets value of the peek.
       *
       * @returns {Number|Object}
       */
      get: function get() {
        return Peek._v;
      },


      /**
       * Sets value of the peek.
       *
       * @param {Number|Object} value
       * @return {Void}
       */
      set: function set(value) {
        if (isObject(value)) {
          value.before = toInt(value.before);
          value.after = toInt(value.after);
        } else {
          value = toInt(value);
        }

        Peek._v = value;
      }
    });

    define(Peek, 'reductor', {
      /**
       * Gets reduction value caused by peek.
       *
       * @returns {Number}
       */
      get: function get() {
        var value = Peek.value;
        var perView = Glide.settings.perView;

        if (isObject(value)) {
          return value.before / perView + value.after / perView;
        }

        return value * 2 / perView;
      }
    });

    /**
     * Recalculate peeking sizes on:
     * - when resizing window to update to proper percents
     */
    Events.on(['resize', 'update'], function () {
      Peek.mount();
    });

    return Peek;
  }

  function Move (Glide, Components, Events) {
    var Move = {
      /**
       * Constructs move component.
       *
       * @returns {Void}
       */
      mount: function mount() {
        this._o = 0;
      },


      /**
       * Calculates a movement value based on passed offset and currently active index.
       *
       * @param  {Number} offset
       * @return {Void}
       */
      make: function make() {
        var _this = this;

        var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        this.offset = offset;

        Events.emit('move', {
          movement: this.value
        });

        Components.Transition.after(function () {
          Events.emit('move.after', {
            movement: _this.value
          });
        });
      }
    };

    define(Move, 'offset', {
      /**
       * Gets an offset value used to modify current translate.
       *
       * @return {Object}
       */
      get: function get() {
        return Move._o;
      },


      /**
       * Sets an offset value used to modify current translate.
       *
       * @return {Object}
       */
      set: function set(value) {
        Move._o = !isUndefined(value) ? toInt(value) : 0;
      }
    });

    define(Move, 'translate', {
      /**
       * Gets a raw movement value.
       *
       * @return {Number}
       */
      get: function get() {
        return Components.Sizes.slideWidth * Glide.index;
      }
    });

    define(Move, 'value', {
      /**
       * Gets an actual movement value corrected by offset.
       *
       * @return {Number}
       */
      get: function get() {
        var offset = this.offset;
        var translate = this.translate;

        if (Components.Direction.is('rtl')) {
          return translate + offset;
        }

        return translate - offset;
      }
    });

    /**
     * Make movement to proper slide on:
     * - before build, so glide will start at `startAt` index
     * - on each standard run to move to newly calculated index
     */
    Events.on(['build.before', 'run'], function () {
      Move.make();
    });

    return Move;
  }

  function Sizes (Glide, Components, Events) {
    var Sizes = {
      /**
       * Setups dimentions of slides.
       *
       * @return {Void}
       */
      setupSlides: function setupSlides() {
        var slides = Components.Html.slides;

        for (var i = 0; i < slides.length; i++) {
          slides[i].style.width = this.slideWidth + 'px';
        }
      },


      /**
       * Setups dimentions of slides wrapper.
       *
       * @return {Void}
       */
      setupWrapper: function setupWrapper(dimention) {
        Components.Html.wrapper.style.width = this.wrapperSize + 'px';
      },


      /**
       * Removes applied styles from HTML elements.
       *
       * @returns {Void}
       */
      remove: function remove() {
        var slides = Components.Html.slides;

        for (var i = 0; i < slides.length; i++) {
          slides[i].style.width = '';
        }

        Components.Html.wrapper.style.width = '';
      }
    };

    define(Sizes, 'length', {
      /**
       * Gets count number of the slides.
       *
       * @return {Number}
       */
      get: function get() {
        return Components.Html.slides.length;
      }
    });

    define(Sizes, 'width', {
      /**
       * Gets width value of the glide.
       *
       * @return {Number}
       */
      get: function get() {
        return Components.Html.root.offsetWidth;
      }
    });

    define(Sizes, 'wrapperSize', {
      /**
       * Gets size of the slides wrapper.
       *
       * @return {Number}
       */
      get: function get() {
        return Sizes.slideWidth * Sizes.length + Components.Gaps.grow + Components.Clones.grow;
      }
    });

    define(Sizes, 'slideWidth', {
      /**
       * Gets width value of the single slide.
       *
       * @return {Number}
       */
      get: function get() {
        return Sizes.width / Glide.settings.perView - Components.Peek.reductor - Components.Gaps.reductor;
      }
    });

    /**
     * Apply calculated glide's dimensions:
     * - before building, so other dimentions (e.g. translate) will be calculated propertly
     * - when resizing window to recalculate sildes dimensions
     * - on updating via API, to calculate dimensions based on new options
     */
    Events.on(['build.before', 'resize', 'update'], function () {
      Sizes.setupSlides();
      Sizes.setupWrapper();
    });

    /**
     * Remove calculated glide's dimensions:
     * - on destoting to bring markup to its inital state
     */
    Events.on('destroy', function () {
      Sizes.remove();
    });

    return Sizes;
  }

  function Build (Glide, Components, Events) {
    var Build = {
      /**
       * Init glide building. Adds classes, sets
       * dimensions and setups initial state.
       *
       * @return {Void}
       */
      mount: function mount() {
        Events.emit('build.before');

        this.typeClass();
        this.activeClass();

        Events.emit('build.after');
      },


      /**
       * Adds `type` class to the glide element.
       *
       * @return {Void}
       */
      typeClass: function typeClass() {
        Components.Html.root.classList.add(Glide.settings.classes[Glide.settings.type]);
      },


      /**
       * Sets active class to current slide.
       *
       * @return {Void}
       */
      activeClass: function activeClass() {
        var classes = Glide.settings.classes;
        var slide = Components.Html.slides[Glide.index];

        if (slide) {
          slide.classList.add(classes.activeSlide);

          siblings(slide).forEach(function (sibling) {
            sibling.classList.remove(classes.activeSlide);
          });
        }
      },


      /**
       * Removes HTML classes applied at building.
       *
       * @return {Void}
       */
      removeClasses: function removeClasses() {
        var classes = Glide.settings.classes;

        Components.Html.root.classList.remove(classes[Glide.settings.type]);

        Components.Html.slides.forEach(function (sibling) {
          sibling.classList.remove(classes.activeSlide);
        });
      }
    };

    /**
     * Clear building classes:
     * - on destroying to bring HTML to its initial state
     * - on updating to remove classes before remounting component
     */
    Events.on(['destroy', 'update'], function () {
      Build.removeClasses();
    });

    /**
     * Remount component:
     * - on resizing of the window to calculate new dimentions
     * - on updating settings via API
     */
    Events.on(['resize', 'update'], function () {
      Build.mount();
    });

    /**
     * Swap active class of current slide:
     * - after each move to the new index
     */
    Events.on('move.after', function () {
      Build.activeClass();
    });

    return Build;
  }

  function Clones (Glide, Components, Events) {
    var Clones = {
      /**
       * Create pattern map and collect slides to be cloned.
       */
      mount: function mount() {
        this.items = [];

        if (Glide.isType('carousel')) {
          this.items = this.collect();
        }
      },


      /**
       * Collect clones with pattern.
       *
       * @return {Void}
       */
      collect: function collect() {
        var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var slides = Components.Html.slides;
        var _Glide$settings = Glide.settings,
            perView = _Glide$settings.perView,
            classes = _Glide$settings.classes;


        var start = slides.slice(0, perView);
        var end = slides.slice(-perView);

        for (var r = 0; r < Math.max(1, Math.floor(perView / slides.length)); r++) {
          for (var i = 0; i < start.length; i++) {
            var clone = start[i].cloneNode(true);

            clone.classList.add(classes.cloneSlide);

            items.push(clone);
          }

          for (var _i = 0; _i < end.length; _i++) {
            var _clone = end[_i].cloneNode(true);

            _clone.classList.add(classes.cloneSlide);

            items.unshift(_clone);
          }
        }

        return items;
      },


      /**
       * Append cloned slides with generated pattern.
       *
       * @return {Void}
       */
      append: function append() {
        var items = this.items;
        var _Components$Html = Components.Html,
            wrapper = _Components$Html.wrapper,
            slides = _Components$Html.slides;


        var half = Math.floor(items.length / 2);
        var prepend = items.slice(0, half).reverse();
        var append = items.slice(half, items.length);

        for (var i = 0; i < append.length; i++) {
          wrapper.appendChild(append[i]);
        }

        for (var _i2 = 0; _i2 < prepend.length; _i2++) {
          wrapper.insertBefore(prepend[_i2], slides[0]);
        }

        for (var _i3 = 0; _i3 < items.length; _i3++) {
          items[_i3].style.width = Components.Sizes.slideWidth + 'px';
        }
      },


      /**
       * Remove all cloned slides.
       *
       * @return {Void}
       */
      remove: function remove() {
        var items = this.items;


        for (var i = 0; i < items.length; i++) {
          Components.Html.wrapper.removeChild(items[i]);
        }
      }
    };

    define(Clones, 'grow', {
      /**
       * Gets additional dimentions value caused by clones.
       *
       * @return {Number}
       */
      get: function get() {
        return (Components.Sizes.slideWidth + Components.Gaps.value) * Clones.items.length;
      }
    });

    /**
     * Append additional slide's clones:
     * - while glide's type is `carousel`
     */
    Events.on('update', function () {
      Clones.remove();
      Clones.mount();
      Clones.append();
    });

    /**
     * Append additional slide's clones:
     * - while glide's type is `carousel`
     */
    Events.on('build.before', function () {
      if (Glide.isType('carousel')) {
        Clones.append();
      }
    });

    /**
     * Remove clones HTMLElements:
     * - on destroying, to bring HTML to its initial state
     */
    Events.on('destroy', function () {
      Clones.remove();
    });

    return Clones;
  }

  var EventsBinder = function () {
    /**
     * Construct a EventsBinder instance.
     */
    function EventsBinder() {
      var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      classCallCheck(this, EventsBinder);

      this.listeners = listeners;
    }

    /**
     * Adds events listeners to arrows HTML elements.
     *
     * @param  {String|Array} events
     * @param  {Element|Window|Document} el
     * @param  {Function} closure
     * @return {Void}
     */


    createClass(EventsBinder, [{
      key: 'on',
      value: function on(events, el, closure) {
        var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (isString(events)) {
          events = [events];
        }

        for (var i = 0; i < events.length; i++) {
          this.listeners[events[i]] = closure;

          el.addEventListener(events[i], this.listeners[events[i]], capture);
        }
      }

      /**
       * Removes event listeners from arrows HTML elements.
       *
       * @param  {String|Array} events
       * @param  {Element|Window|Document} el
       * @return {Void}
       */

    }, {
      key: 'off',
      value: function off(events, el) {
        if (isString(events)) {
          events = [events];
        }

        for (var i = 0; i < events.length; i++) {
          el.removeEventListener(events[i], this.listeners[events[i]], false);
        }
      }

      /**
       * Destroy collected listeners.
       *
       * @returns {Void}
       */

    }, {
      key: 'destroy',
      value: function destroy() {
        delete this.listeners;
      }
    }]);
    return EventsBinder;
  }();

  function Resize (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    var Resize = {
      /**
       * Initializes window bindings.
       */
      mount: function mount() {
        this.bind();
      },


      /**
       * Binds `rezsize` listener to the window.
       * It's a costly event, so we are debouncing it.
       *
       * @return {Void}
       */
      bind: function bind() {
        Binder.on('resize', window, throttle(function () {
          Events.emit('resize');
        }, Glide.settings.throttle));
      },


      /**
       * Unbinds listeners from the window.
       *
       * @return {Void}
       */
      unbind: function unbind() {
        Binder.off('resize', window);
      }
    };

    /**
     * Remove bindings from window:
     * - on destroying, to remove added EventListener
     */
    Events.on('destroy', function () {
      Resize.unbind();
      Binder.destroy();
    });

    return Resize;
  }

  var VALID_DIRECTIONS = ['ltr', 'rtl'];
  var FLIPED_MOVEMENTS = {
    '>': '<',
    '<': '>',
    '=': '='
  };

  function Direction (Glide, Components, Events) {
    var Direction = {
      /**
       * Setups gap value based on settings.
       *
       * @return {Void}
       */
      mount: function mount() {
        this.value = Glide.settings.direction;
      },


      /**
       * Resolves pattern based on direction value
       *
       * @param {String} pattern
       * @returns {String}
       */
      resolve: function resolve(pattern) {
        var token = pattern.slice(0, 1);

        if (this.is('rtl')) {
          return pattern.split(token).join(FLIPED_MOVEMENTS[token]);
        }

        return pattern;
      },


      /**
       * Checks value of direction mode.
       *
       * @param {String} direction
       * @returns {Boolean}
       */
      is: function is(direction) {
        return this.value === direction;
      },


      /**
       * Applies direction class to the root HTML element.
       *
       * @return {Void}
       */
      addClass: function addClass() {
        Components.Html.root.classList.add(Glide.settings.classes.direction[this.value]);
      },


      /**
       * Removes direction class from the root HTML element.
       *
       * @return {Void}
       */
      removeClass: function removeClass() {
        Components.Html.root.classList.remove(Glide.settings.classes.direction[this.value]);
      }
    };

    define(Direction, 'value', {
      /**
       * Gets value of the direction.
       *
       * @returns {Number}
       */
      get: function get() {
        return Direction._v;
      },


      /**
       * Sets value of the direction.
       *
       * @param {String} value
       * @return {Void}
       */
      set: function set(value) {
        if (VALID_DIRECTIONS.indexOf(value) > -1) {
          Direction._v = value;
        } else {
          warn('Direction value must be `ltr` or `rtl`');
        }
      }
    });

    /**
     * Clear direction class:
     * - on destroy to bring HTML to its initial state
     * - on update to remove class before reappling bellow
     */
    Events.on(['destroy', 'update'], function () {
      Direction.removeClass();
    });

    /**
     * Remount component:
     * - on update to reflect changes in direction value
     */
    Events.on('update', function () {
      Direction.mount();
    });

    /**
     * Apply direction class:
     * - before building to apply class for the first time
     * - on updating to reapply direction class that may changed
     */
    Events.on(['build.before', 'update'], function () {
      Direction.addClass();
    });

    return Direction;
  }

  /**
   * Reflects value of glide movement.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */
  function Rtl (Glide, Components) {
    return {
      /**
       * Negates the passed translate if glide is in RTL option.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        if (Components.Direction.is('rtl')) {
          return -translate;
        }

        return translate;
      }
    };
  }

  /**
   * Updates glide movement with a `gap` settings.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */
  function Gap (Glide, Components) {
    return {
      /**
       * Modifies passed translate value with number in the `gap` settings.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        return translate + Components.Gaps.value * Glide.index;
      }
    };
  }

  /**
   * Updates glide movement with width of additional clones width.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */
  function Grow (Glide, Components) {
    return {
      /**
       * Adds to the passed translate width of the half of clones.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        return translate + Components.Clones.grow / 2;
      }
    };
  }

  /**
   * Updates glide movement with a `peek` settings.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */
  function Peeking (Glide, Components) {
    return {
      /**
       * Modifies passed translate value with a `peek` setting.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        if (Glide.settings.focusAt >= 0) {
          var peek = Components.Peek.value;

          if (isObject(peek)) {
            return translate - peek.before;
          }

          return translate - peek;
        }

        return translate;
      }
    };
  }

  /**
   * Updates glide movement with a `focusAt` settings.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */
  function Focusing (Glide, Components) {
    return {
      /**
       * Modifies passed translate value with index in the `focusAt` setting.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        var gap = Components.Gaps.value;
        var width = Components.Sizes.width;
        var focusAt = Glide.settings.focusAt;
        var slideWidth = Components.Sizes.slideWidth;

        if (focusAt === 'center') {
          return translate - (width / 2 - slideWidth / 2);
        }

        return translate - slideWidth * focusAt - gap * focusAt;
      }
    };
  }

  /**
   * Applies diffrent transformers on translate value.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */
  function mutator (Glide, Components, Events) {
    /**
     * Merge instance transformers with collection of default transformers.
     * It's important that the Rtl component be last on the list,
     * so it reflects all previous transformations.
     *
     * @type {Array}
     */
    var TRANSFORMERS = [Gap, Grow, Peeking, Focusing].concat(Glide._t, [Rtl]);

    return {
      /**
       * Piplines translate value with registered transformers.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      mutate: function mutate(translate) {
        for (var i = 0; i < TRANSFORMERS.length; i++) {
          var transformer = TRANSFORMERS[i];

          if (isFunction(transformer) && isFunction(transformer().modify)) {
            translate = transformer(Glide, Components, Events).modify(translate);
          } else {
            warn('Transformer should be a function that returns an object with `modify()` method');
          }
        }

        return translate;
      }
    };
  }

  function Translate (Glide, Components, Events) {
    var Translate = {
      /**
       * Sets value of translate on HTML element.
       *
       * @param {Number} value
       * @return {Void}
       */
      set: function set(value) {
        var transform = mutator(Glide, Components).mutate(value);

        Components.Html.wrapper.style.transform = 'translate3d(' + -1 * transform + 'px, 0px, 0px)';
      },


      /**
       * Removes value of translate from HTML element.
       *
       * @return {Void}
       */
      remove: function remove() {
        Components.Html.wrapper.style.transform = '';
      }
    };

    /**
     * Set new translate value:
     * - on move to reflect index change
     * - on updating via API to reflect possible changes in options
     */
    Events.on('move', function (context) {
      var gap = Components.Gaps.value;
      var length = Components.Sizes.length;
      var width = Components.Sizes.slideWidth;

      if (Glide.isType('carousel') && Components.Run.isOffset('<')) {
        Components.Transition.after(function () {
          Events.emit('translate.jump');

          Translate.set(width * (length - 1));
        });

        return Translate.set(-width - gap * length);
      }

      if (Glide.isType('carousel') && Components.Run.isOffset('>')) {
        Components.Transition.after(function () {
          Events.emit('translate.jump');

          Translate.set(0);
        });

        return Translate.set(width * length + gap * length);
      }

      return Translate.set(context.movement);
    });

    /**
     * Remove translate:
     * - on destroying to bring markup to its inital state
     */
    Events.on('destroy', function () {
      Translate.remove();
    });

    return Translate;
  }

  function Transition (Glide, Components, Events) {
    /**
     * Holds inactivity status of transition.
     * When true transition is not applied.
     *
     * @type {Boolean}
     */
    var disabled = false;

    var Transition = {
      /**
       * Composes string of the CSS transition.
       *
       * @param {String} property
       * @return {String}
       */
      compose: function compose(property) {
        var settings = Glide.settings;

        if (!disabled) {
          return property + ' ' + this.duration + 'ms ' + settings.animationTimingFunc;
        }

        return property + ' 0ms ' + settings.animationTimingFunc;
      },


      /**
       * Sets value of transition on HTML element.
       *
       * @param {String=} property
       * @return {Void}
       */
      set: function set() {
        var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

        Components.Html.wrapper.style.transition = this.compose(property);
      },


      /**
       * Removes value of transition from HTML element.
       *
       * @return {Void}
       */
      remove: function remove() {
        Components.Html.wrapper.style.transition = '';
      },


      /**
       * Runs callback after animation.
       *
       * @param  {Function} callback
       * @return {Void}
       */
      after: function after(callback) {
        setTimeout(function () {
          callback();
        }, this.duration);
      },


      /**
       * Enable transition.
       *
       * @return {Void}
       */
      enable: function enable() {
        disabled = false;

        this.set();
      },


      /**
       * Disable transition.
       *
       * @return {Void}
       */
      disable: function disable() {
        disabled = true;

        this.set();
      }
    };

    define(Transition, 'duration', {
      /**
       * Gets duration of the transition based
       * on currently running animation type.
       *
       * @return {Number}
       */
      get: function get() {
        var settings = Glide.settings;

        if (Glide.isType('slider') && Components.Run.offset) {
          return settings.rewindDuration;
        }

        return settings.animationDuration;
      }
    });

    /**
     * Set transition `style` value:
     * - on each moving, because it may be cleared by offset move
     */
    Events.on('move', function () {
      Transition.set();
    });

    /**
     * Disable transition:
     * - before initial build to avoid transitioning from `0` to `startAt` index
     * - while resizing window and recalculating dimentions
     * - on jumping from offset transition at start and end edges in `carousel` type
     */
    Events.on(['build.before', 'resize', 'translate.jump'], function () {
      Transition.disable();
    });

    /**
     * Enable transition:
     * - on each running, because it may be disabled by offset move
     */
    Events.on('run', function () {
      Transition.enable();
    });

    /**
     * Remove transition:
     * - on destroying to bring markup to its inital state
     */
    Events.on('destroy', function () {
      Transition.remove();
    });

    return Transition;
  }

  var START_EVENTS = ['touchstart', 'mousedown'];
  var MOVE_EVENTS = ['touchmove', 'mousemove'];
  var END_EVENTS = ['touchend', 'touchcancel', 'mouseup', 'mouseleave'];
  var MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];

  function Swipe (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    var swipeSin = 0;
    var swipeStartX = 0;
    var swipeStartY = 0;
    var disabled = false;

    var Swipe = {
      /**
       * Initializes swipe bindings.
       *
       * @return {Void}
       */
      mount: function mount() {
        this.bindSwipeStart();
      },


      /**
       * Handler for `swipestart` event. Calculates entry points of the user's tap.
       *
       * @param {Object} event
       * @return {Void}
       */
      start: function start(event) {
        if (!disabled && !Glide.disabled) {
          this.disable();

          var swipe = this.touches(event);

          swipeSin = null;
          swipeStartX = toInt(swipe.pageX);
          swipeStartY = toInt(swipe.pageY);

          this.bindSwipeMove();
          this.bindSwipeEnd();

          Events.emit('swipe.start');
        }
      },


      /**
       * Handler for `swipemove` event. Calculates user's tap angle and distance.
       *
       * @param {Object} event
       */
      move: function move(event) {
        if (!Glide.disabled) {
          var _Glide$settings = Glide.settings,
              touchAngle = _Glide$settings.touchAngle,
              touchRatio = _Glide$settings.touchRatio,
              classes = _Glide$settings.classes;


          var swipe = this.touches(event);

          var subExSx = toInt(swipe.pageX) - swipeStartX;
          var subEySy = toInt(swipe.pageY) - swipeStartY;
          var powEX = Math.abs(subExSx << 2);
          var powEY = Math.abs(subEySy << 2);
          var swipeHypotenuse = (powEX + powEY) * (powEX + powEY);
          var swipeCathetus = powEY * powEY;

          swipeSin = Math.asin(swipeCathetus / swipeHypotenuse);

          Components.Move.make(subExSx * toFloat(touchRatio));

          if (swipeSin * 180 / Math.PI < touchAngle) {
            event.stopPropagation();

            Components.Html.root.classList.add(classes.dragging);

            Events.emit('swipe.move');
          } else {
            return false;
          }
        }
      },


      /**
       * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
       *
       * @param {Object} event
       * @return {Void}
       */
      end: function end(event) {
        if (!Glide.disabled) {
          var settings = Glide.settings;

          var swipe = this.touches(event);
          var threshold = this.threshold(event);

          var swipeDistance = swipe.pageX - swipeStartX;
          var swipeDeg = swipeSin * 180 / Math.PI;
          var steps = Math.round(swipeDistance / Components.Sizes.slideWidth);

          this.enable();

          if (swipeDistance > threshold && swipeDeg < settings.touchAngle) {
            // While swipe is positive and greater than threshold move backward.
            if (settings.perTouch) {
              steps = Math.min(steps, toInt(settings.perTouch));
            }

            if (Components.Direction.is('rtl')) {
              steps = -steps;
            }

            Components.Run.make(Components.Direction.resolve('<' + steps));
          } else if (swipeDistance < -threshold && swipeDeg < settings.touchAngle) {
            // While swipe is negative and lower than negative threshold move forward.
            if (settings.perTouch) {
              steps = Math.max(steps, -toInt(settings.perTouch));
            }

            if (Components.Direction.is('rtl')) {
              steps = -steps;
            }

            Components.Run.make(Components.Direction.resolve('>' + steps));
          } else {
            // While swipe don't reach distance apply previous transform.
            Components.Move.make();
          }

          Components.Html.root.classList.remove(settings.classes.dragging);

          this.unbindSwipeMove();
          this.unbindSwipeEnd();

          Events.emit('swipe.end');
        }
      },


      /**
       * Binds swipe's starting event.
       *
       * @return {Void}
       */
      bindSwipeStart: function bindSwipeStart() {
        var _this = this;

        var settings = Glide.settings;

        if (settings.swipeThreshold) {
          Binder.on(START_EVENTS[0], Components.Html.wrapper, function (event) {
            _this.start(event);
          });
        }

        if (settings.dragThreshold) {
          Binder.on(START_EVENTS[1], Components.Html.wrapper, function (event) {
            _this.start(event);
          });
        }
      },


      /**
       * Unbinds swipe's starting event.
       *
       * @return {Void}
       */
      unbindSwipeStart: function unbindSwipeStart() {
        Binder.off(START_EVENTS[0], Components.Html.wrapper);
        Binder.off(START_EVENTS[1], Components.Html.wrapper);
      },


      /**
       * Binds swipe's moving event.
       *
       * @return {Void}
       */
      bindSwipeMove: function bindSwipeMove() {
        var _this2 = this;

        Binder.on(MOVE_EVENTS, Components.Html.wrapper, throttle(function (event) {
          _this2.move(event);
        }, Glide.settings.throttle));
      },


      /**
       * Unbinds swipe's moving event.
       *
       * @return {Void}
       */
      unbindSwipeMove: function unbindSwipeMove() {
        Binder.off(MOVE_EVENTS, Components.Html.wrapper);
      },


      /**
       * Binds swipe's ending event.
       *
       * @return {Void}
       */
      bindSwipeEnd: function bindSwipeEnd() {
        var _this3 = this;

        Binder.on(END_EVENTS, Components.Html.wrapper, function (event) {
          _this3.end(event);
        });
      },


      /**
       * Unbinds swipe's ending event.
       *
       * @return {Void}
       */
      unbindSwipeEnd: function unbindSwipeEnd() {
        Binder.off(END_EVENTS, Components.Html.wrapper);
      },


      /**
       * Normalizes event touches points accorting to different types.
       *
       * @param {Object} event
       */
      touches: function touches(event) {
        if (MOUSE_EVENTS.indexOf(event.type) > -1) {
          return event;
        }

        return event.touches[0] || event.changedTouches[0];
      },


      /**
       * Gets value of minimum swipe distance settings based on event type.
       *
       * @return {Number}
       */
      threshold: function threshold(event) {
        var settings = Glide.settings;

        if (MOUSE_EVENTS.indexOf(event.type) > -1) {
          return settings.dragThreshold;
        }

        return settings.swipeThreshold;
      },


      /**
       * Enables swipe event.
       *
       * @return {self}
       */
      enable: function enable() {
        disabled = false;

        Components.Transition.enable();

        return this;
      },


      /**
       * Disables swipe event.
       *
       * @return {self}
       */
      disable: function disable() {
        disabled = true;

        Components.Transition.disable();

        return this;
      }
    };

    /**
     * Add component class:
     * - after initial building
     */
    Events.on('build.after', function () {
      Components.Html.root.classList.add(Glide.settings.classes.swipeable);
    });

    /**
     * Remove swiping bindings:
     * - on destroying, to remove added EventListeners
     */
    Events.on('destroy', function () {
      Swipe.unbindSwipeStart();
      Swipe.unbindSwipeMove();
      Swipe.unbindSwipeEnd();
      Binder.destroy();
    });

    return Swipe;
  }

  function Images (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    var Images = {
      /**
       * Binds listener to glide wrapper.
       *
       * @return {Void}
       */
      mount: function mount() {
        this.bind();
      },


      /**
       * Binds `dragstart` event on wrapper to prevent dragging images.
       *
       * @return {Void}
       */
      bind: function bind() {
        Binder.on('dragstart', Components.Html.wrapper, this.dragstart);
      },


      /**
       * Unbinds `dragstart` event on wrapper.
       *
       * @return {Void}
       */
      unbind: function unbind() {
        Binder.off('dragstart', Components.Html.wrapper);
      },


      /**
       * Event handler. Prevents dragging.
       *
       * @return {Void}
       */
      dragstart: function dragstart(event) {
        event.preventDefault();
      }
    };

    /**
     * Remove bindings from images:
     * - on destroying, to remove added EventListeners
     */
    Events.on('destroy', function () {
      Images.unbind();
      Binder.destroy();
    });

    return Images;
  }

  function Anchors (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    /**
     * Holds detaching status of anchors.
     * Prevents detaching of already detached anchors.
     *
     * @private
     * @type {Boolean}
     */
    var detached = false;

    /**
     * Holds preventing status of anchors.
     * If `true` redirection after click will be disabled.
     *
     * @private
     * @type {Boolean}
     */
    var prevented = false;

    var Anchors = {
      /**
       * Setups a initial state of anchors component.
       *
       * @returns {Void}
       */
      mount: function mount() {
        /**
         * Holds collection of anchors elements.
         *
         * @private
         * @type {HTMLCollection}
         */
        this._a = Components.Html.wrapper.querySelectorAll('a');

        this.bind();
      },


      /**
       * Binds events to anchors inside a track.
       *
       * @return {Void}
       */
      bind: function bind() {
        Binder.on('click', Components.Html.wrapper, this.click);
      },


      /**
       * Unbinds events attached to anchors inside a track.
       *
       * @return {Void}
       */
      unbind: function unbind() {
        Binder.off('click', Components.Html.wrapper);
      },


      /**
       * Handler for click event. Prevents clicks when glide is in `prevent` status.
       *
       * @param  {Object} event
       * @return {Void}
       */
      click: function click(event) {
        event.stopPropagation();

        if (prevented) {
          event.preventDefault();
        }
      },


      /**
       * Detaches anchors click event inside glide.
       *
       * @return {self}
       */
      detach: function detach() {
        prevented = true;

        if (!detached) {
          for (var i = 0; i < this.items.length; i++) {
            this.items[i].draggable = false;

            this.items[i].setAttribute('data-href', this.items[i].getAttribute('href'));

            this.items[i].removeAttribute('href');
          }

          detached = true;
        }

        return this;
      },


      /**
       * Attaches anchors click events inside glide.
       *
       * @return {self}
       */
      attach: function attach() {
        prevented = false;

        if (detached) {
          for (var i = 0; i < this.items.length; i++) {
            this.items[i].draggable = true;

            this.items[i].setAttribute('href', this.items[i].getAttribute('data-href'));
          }

          detached = false;
        }

        return this;
      }
    };

    define(Anchors, 'items', {
      /**
       * Gets collection of the arrows HTML elements.
       *
       * @return {HTMLElement[]}
       */
      get: function get() {
        return Anchors._a;
      }
    });

    /**
     * Detach anchors inside slides:
     * - on swiping, so they won't redirect to its `href` attributes
     */
    Events.on('swipe.move', function () {
      Anchors.detach();
    });

    /**
     * Attach anchors inside slides:
     * - after swiping and transitions ends, so they can redirect after click again
     */
    Events.on('swipe.end', function () {
      Components.Transition.after(function () {
        Anchors.attach();
      });
    });

    /**
     * Unbind anchors inside slides:
     * - on destroying, to bring anchors to its initial state
     */
    Events.on('destroy', function () {
      Anchors.attach();
      Anchors.unbind();
      Binder.destroy();
    });

    return Anchors;
  }

  var NAV_SELECTOR = '[data-glide-el="controls[nav]"]';
  var CONTROLS_SELECTOR = '[data-glide-el^="controls"]';

  function Controls (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    var Controls = {
      /**
       * Inits arrows. Binds events listeners
       * to the arrows HTML elements.
       *
       * @return {Void}
       */
      mount: function mount() {
        /**
         * Collection of navigation HTML elements.
         *
         * @private
         * @type {HTMLCollection}
         */
        this._n = Components.Html.root.querySelectorAll(NAV_SELECTOR);

        /**
         * Collection of controls HTML elements.
         *
         * @private
         * @type {HTMLCollection}
         */
        this._c = Components.Html.root.querySelectorAll(CONTROLS_SELECTOR);

        this.addBindings();
      },


      /**
       * Sets active class to current slide.
       *
       * @return {Void}
       */
      setActive: function setActive() {
        for (var i = 0; i < this._n.length; i++) {
          this.addClass(this._n[i].children);
        }
      },


      /**
       * Removes active class to current slide.
       *
       * @return {Void}
       */
      removeActive: function removeActive() {
        for (var i = 0; i < this._n.length; i++) {
          this.removeClass(this._n[i].children);
        }
      },


      /**
       * Toggles active class on items inside navigation.
       *
       * @param  {HTMLElement} controls
       * @return {Void}
       */
      addClass: function addClass(controls) {
        var settings = Glide.settings;
        var item = controls[Glide.index];

        item.classList.add(settings.classes.activeNav);

        siblings(item).forEach(function (sibling) {
          sibling.classList.remove(settings.classes.activeNav);
        });
      },


      /**
       * Removes active class from active control.
       *
       * @param  {HTMLElement} controls
       * @return {Void}
       */
      removeClass: function removeClass(controls) {
        controls[Glide.index].classList.remove(Glide.settings.classes.activeNav);
      },


      /**
       * Adds handles to the each group of controls.
       *
       * @return {Void}
       */
      addBindings: function addBindings() {
        for (var i = 0; i < this._c.length; i++) {
          this.bind(this._c[i].children);
        }
      },


      /**
       * Removes handles from the each group of controls.
       *
       * @return {Void}
       */
      removeBindings: function removeBindings() {
        for (var i = 0; i < this._c.length; i++) {
          this.unbind(this._c[i].children);
        }
      },


      /**
       * Binds events to arrows HTML elements.
       *
       * @param {HTMLCollection} elements
       * @return {Void}
       */
      bind: function bind(elements) {
        for (var i = 0; i < elements.length; i++) {
          Binder.on(['click', 'touchstart'], elements[i], this.click);
        }
      },


      /**
       * Unbinds events binded to the arrows HTML elements.
       *
       * @param {HTMLCollection} elements
       * @return {Void}
       */
      unbind: function unbind(elements) {
        for (var i = 0; i < elements.length; i++) {
          Binder.off(['click', 'touchstart'], elements[i]);
        }
      },


      /**
       * Handles `click` event on the arrows HTML elements.
       * Moves slider in driection precised in
       * `data-glide-dir` attribute.
       *
       * @param {Object} event
       * @return {Void}
       */
      click: function click(event) {
        event.preventDefault();

        Components.Run.make(Components.Direction.resolve(event.currentTarget.getAttribute('data-glide-dir')));
      }
    };

    define(Controls, 'items', {
      /**
       * Gets collection of the controls HTML elements.
       *
       * @return {HTMLElement[]}
       */
      get: function get() {
        return Controls._c;
      }
    });

    /**
     * Swap active class of current navigation item:
     * - after mounting to set it to initial index
     * - after each move to the new index
     */
    Events.on(['mount.after', 'move.after'], function () {
      Controls.setActive();
    });

    /**
     * Remove bindings and HTML Classes:
     * - on destroying, to bring markup to its initial state
     */
    Events.on('destroy', function () {
      Controls.removeBindings();
      Controls.removeActive();
      Binder.destroy();
    });

    return Controls;
  }

  function Keyboard (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    var Keyboard = {
      /**
       * Binds keyboard events on component mount.
       *
       * @return {Void}
       */
      mount: function mount() {
        if (Glide.settings.keyboard) {
          this.bind();
        }
      },


      /**
       * Adds keyboard press events.
       *
       * @return {Void}
       */
      bind: function bind() {
        Binder.on('keyup', document, this.press);
      },


      /**
       * Removes keyboard press events.
       *
       * @return {Void}
       */
      unbind: function unbind() {
        Binder.off('keyup', document);
      },


      /**
       * Handles keyboard's arrows press and moving glide foward and backward.
       *
       * @param  {Object} event
       * @return {Void}
       */
      press: function press(event) {
        if (event.keyCode === 39) {
          Components.Run.make(Components.Direction.resolve('>'));
        }

        if (event.keyCode === 37) {
          Components.Run.make(Components.Direction.resolve('<'));
        }
      }
    };

    /**
     * Remove bindings from keyboard:
     * - on destroying to remove added events
     * - on updating to remove events before remounting
     */
    Events.on(['destroy', 'update'], function () {
      Keyboard.unbind();
    });

    /**
     * Remount component
     * - on updating to reflect potential changes in settings
     */
    Events.on('update', function () {
      Keyboard.mount();
    });

    /**
     * Destroy binder:
     * - on destroying to remove listeners
     */
    Events.on('destroy', function () {
      Binder.destroy();
    });

    return Keyboard;
  }

  function Autoplay (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    var Autoplay = {
      /**
       * Initializes autoplaying and events.
       *
       * @return {Void}
       */
      mount: function mount() {
        this.start();

        if (Glide.settings.hoverpause) {
          this.bind();
        }
      },


      /**
       * Starts autoplaying in configured interval.
       *
       * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
       * @return {Void}
       */
      start: function start() {
        var _this = this;

        if (Glide.settings.autoplay) {
          if (isUndefined(this._i)) {
            this._i = setInterval(function () {
              _this.stop();

              Components.Run.make('>');

              _this.start();
            }, this.time);
          }
        }
      },


      /**
       * Stops autorunning of the glide.
       *
       * @return {Void}
       */
      stop: function stop() {
        this._i = clearInterval(this._i);
      },


      /**
       * Stops autoplaying while mouse is over glide's area.
       *
       * @return {Void}
       */
      bind: function bind() {
        var _this2 = this;

        Binder.on('mouseover', Components.Html.root, function () {
          _this2.stop();
        });

        Binder.on('mouseout', Components.Html.root, function () {
          _this2.start();
        });
      },


      /**
       * Unbind mouseover events.
       *
       * @returns {Void}
       */
      unbind: function unbind() {
        Binder.off(['mouseover', 'mouseout'], Components.Html.root);
      }
    };

    define(Autoplay, 'time', {
      /**
       * Gets time period value for the autoplay interval. Prioritizes
       * times in `data-glide-autoplay` attrubutes over options.
       *
       * @return {Number}
       */
      get: function get() {
        var autoplay = Components.Html.slides[Glide.index].getAttribute('data-glide-autoplay');

        if (autoplay) {
          return toInt(autoplay);
        }

        return toInt(Glide.settings.autoplay);
      }
    });

    /**
     * Stop autoplaying and unbind events:
     * - on destroying, to clear defined interval
     * - on updating via API to reset interval that may changed
     */
    Events.on(['destroy', 'update'], function () {
      Autoplay.unbind();
    });

    /**
     * Stop autoplaying:
     * - before each run, to restart autoplaying
     * - on pausing via API
     * - on destroying, to clear defined interval
     * - while starting a swipe
     * - on updating via API to reset interval that may changed
     */
    Events.on(['run.before', 'pause', 'destroy', 'swipe.start', 'update'], function () {
      Autoplay.stop();
    });

    /**
     * Start autoplaying:
     * - after each run, to restart autoplaying
     * - on playing via API
     * - while ending a swipe
     */
    Events.on(['run.after', 'play', 'swipe.end'], function () {
      Autoplay.start();
    });

    /**
     * Remount autoplaying:
     * - on updating via API to reset interval that may changed
     */
    Events.on('update', function () {
      Autoplay.mount();
    });

    /**
     * Destroy a binder:
     * - on destroying glide instance to clearup listeners
     */
    Events.on('destroy', function () {
      Binder.destroy();
    });

    return Autoplay;
  }

  /**
   * Sorts keys of breakpoint object so they will be ordered from lower to bigger.
   *
   * @param {Object} points
   * @returns {Object}
   */
  function sortBreakpoints(points) {
    if (isObject(points)) {
      return sortKeys(points);
    } else {
      warn('Breakpoints option must be an object');
    }

    return {};
  }

  function Breakpoints (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    /**
     * Holds reference to settings.
     *
     * @type {Object}
     */
    var settings = Glide.settings;

    /**
     * Holds reference to breakpoints object in settings. Sorts breakpoints
     * from smaller to larger. It is required in order to proper
     * matching currently active breakpoint settings.
     *
     * @type {Object}
     */
    var points = sortBreakpoints(settings.breakpoints);

    /**
     * Cache initial settings before overwritting.
     *
     * @type {Object}
     */
    var defaults = _extends({}, settings);

    var Breakpoints = {
      /**
       * Matches settings for currectly matching media breakpoint.
       *
       * @param {Object} points
       * @returns {Object}
       */
      match: function match(points) {
        if (typeof window.matchMedia !== 'undefined') {
          for (var point in points) {
            if (points.hasOwnProperty(point)) {
              if (window.matchMedia('(max-width: ' + point + 'px)').matches) {
                return points[point];
              }
            }
          }
        }

        return defaults;
      }
    };

    /**
     * Overwrite instance settings with currently matching breakpoint settings.
     * This happens right after component initialization.
     */
    _extends(settings, Breakpoints.match(points));

    /**
     * Update glide with settings of matched brekpoint:
     * - window resize to update slider
     */
    Binder.on('resize', window, throttle(function () {
      Glide.settings = mergeOptions(settings, Breakpoints.match(points));
    }, Glide.settings.throttle));

    /**
     * Resort and update default settings:
     * - on reinit via API, so breakpoint matching will be performed with options
     */
    Events.on('update', function () {
      points = sortBreakpoints(points);

      defaults = _extends({}, settings);
    });

    /**
     * Unbind resize listener:
     * - on destroying, to bring markup to its initial state
     */
    Events.on('destroy', function () {
      Binder.off('resize', window);
    });

    return Breakpoints;
  }

  var COMPONENTS = {
    // Required
    Html: Html,
    Translate: Translate,
    Transition: Transition,
    Direction: Direction,
    Peek: Peek,
    Sizes: Sizes,
    Gaps: Gaps,
    Move: Move,
    Clones: Clones,
    Resize: Resize,
    Build: Build,
    Run: Run,

    // Optional
    Swipe: Swipe,
    Images: Images,
    Anchors: Anchors,
    Controls: Controls,
    Keyboard: Keyboard,
    Autoplay: Autoplay,
    Breakpoints: Breakpoints
  };

  var Glide$1 = function (_Core) {
    inherits(Glide$$1, _Core);

    function Glide$$1() {
      classCallCheck(this, Glide$$1);
      return possibleConstructorReturn(this, (Glide$$1.__proto__ || Object.getPrototypeOf(Glide$$1)).apply(this, arguments));
    }

    createClass(Glide$$1, [{
      key: 'mount',
      value: function mount() {
        var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return get(Glide$$1.prototype.__proto__ || Object.getPrototypeOf(Glide$$1.prototype), 'mount', this).call(this, _extends({}, COMPONENTS, extensions));
      }
    }]);
    return Glide$$1;
  }(Glide);

  return Glide$1;

})));

// Initialize and add the map
function initMap() {

	var markers = [];
	var googleMarkers = [];

	var locationElements = document.getElementsByClassName('location');

	// Create an array of markers
	for (var i = 0; i < locationElements.length; i++) {
	    // console.log(locationElements[i]);
		var locLat = locationElements[i].getAttribute('data-lat'),
			locLng = locationElements[i].getAttribute('data-lng');

		markers[i] = {};
		markers[i].position = { lat: locLat, lng: locLng }
		markers[i].url = 'https://www.google.com/maps/dir/' + locLat + ',' + locLng;
		markers[i].title = 'Get Directions';

	}

	// console.log(markers);

	if (locationElements.length > 0) {
		// The map, centered at Uluru
		var map = new google.maps.Map(
			document.getElementById('ih-map'),
			{
				zoom: 13,
				center: new google.maps.LatLng(markers[0].position.lat, markers[0].position.lng),
				disableDefaultUI: true,
				styles: [
				{
					"featureType": "administrative",
					"elementType": "all",
					"stylers": [
					{
						"visibility": "on"
					},
					{
						"lightness": 33
					}]
				},
				{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [
					{
						"color": "#efefef"
					}]
				},
				{
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [
					{
						"color": "#e3eed3"
					}]
				},
				{
					"featureType": "poi.park",
					"elementType": "labels",
					"stylers": [
					{
						"visibility": "on"
					},
					{
						"lightness": 20
					}]
				},
				{
					"featureType": "road",
					"elementType": "all",
					"stylers": [
					{
						"lightness": 20
					}]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry",
					"stylers": [
					{
						"color": "#83a5b0"
					}]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry",
					"stylers": [
					{
						"color": "#bdcdd3"
					}]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry",
					"stylers": [
					{
						"color": "#ffffff"
					}]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
					{
						"visibility": "on"
					},
					{
						"color": "#b5cbe4"
					}]
				}]
			});
	}

	// var iconBase = 'http://investors.local/app/themes/mightily/app/assets/img/';
	var iconBase = '/app/themes/mightily/app/assets/img/';

	// Create an array of google marker objects
	for (var i = 0; i < markers.length; i++) {
		googleMarkers[i] = new google.maps.Marker({
			position: new google.maps.LatLng(markers[i].position.lat,markers[i].position.lng),
			icon: iconBase + 'baseline-place-38px.svg',
			map: map,
			url: markers[i].url,
			title: markers[i].title
	    });
		google.maps.event.addListener(googleMarkers[i], 'click', function() {
			// window.location.href = marker.url;
			window.open(
				this.url, '_blank'
			);
		});
	}

	//
	if (googleMarkers.length > 1) {
		var bounds = new google.maps.LatLngBounds();

		for (var i = 0; i < googleMarkers.length; i++) {
			bounds.extend(googleMarkers[i].getPosition());
		}
		map.fitBounds(bounds);
	}

}

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.MicroModal = factory());
}(this, (function () { 'use strict';

var version = "0.3.1";

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var MicroModal = function () {

  var FOCUSABLE_ELEMENTS = ['a[href]', 'area[href]', 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', 'select:not([disabled]):not([aria-hidden])', 'textarea:not([disabled]):not([aria-hidden])', 'button:not([disabled]):not([aria-hidden])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'];

  var Modal = function () {
    function Modal(_ref) {
      var targetModal = _ref.targetModal,
          _ref$triggers = _ref.triggers,
          triggers = _ref$triggers === undefined ? [] : _ref$triggers,
          _ref$onShow = _ref.onShow,
          onShow = _ref$onShow === undefined ? function () {} : _ref$onShow,
          _ref$onClose = _ref.onClose,
          onClose = _ref$onClose === undefined ? function () {} : _ref$onClose,
          _ref$openTrigger = _ref.openTrigger,
          openTrigger = _ref$openTrigger === undefined ? 'data-micromodal-trigger' : _ref$openTrigger,
          _ref$closeTrigger = _ref.closeTrigger,
          closeTrigger = _ref$closeTrigger === undefined ? 'data-micromodal-close' : _ref$closeTrigger,
          _ref$disableScroll = _ref.disableScroll,
          disableScroll = _ref$disableScroll === undefined ? false : _ref$disableScroll,
          _ref$disableFocus = _ref.disableFocus,
          disableFocus = _ref$disableFocus === undefined ? false : _ref$disableFocus,
          _ref$awaitCloseAnimat = _ref.awaitCloseAnimation,
          awaitCloseAnimation = _ref$awaitCloseAnimat === undefined ? false : _ref$awaitCloseAnimat,
          _ref$debugMode = _ref.debugMode,
          debugMode = _ref$debugMode === undefined ? false : _ref$debugMode;
      classCallCheck(this, Modal);

      // Save a reference of the modal
      this.modal = document.getElementById(targetModal);

      // Save a reference to the passed config
      this.config = { debugMode: debugMode, disableScroll: disableScroll, openTrigger: openTrigger, closeTrigger: closeTrigger, onShow: onShow, onClose: onClose, awaitCloseAnimation: awaitCloseAnimation, disableFocus: disableFocus

        // Register click events only if prebinding eventListeners
      };if (triggers.length > 0) this.registerTriggers.apply(this, toConsumableArray(triggers));

      // prebind functions for event listeners
      this.onClick = this.onClick.bind(this);
      this.onKeydown = this.onKeydown.bind(this);
    }

    /**
     * Loops through all openTriggers and binds click event
     * @param  {array} triggers [Array of node elements]
     * @return {void}
     */


    createClass(Modal, [{
      key: 'registerTriggers',
      value: function registerTriggers() {
        var _this = this;

        for (var _len = arguments.length, triggers = Array(_len), _key = 0; _key < _len; _key++) {
          triggers[_key] = arguments[_key];
        }

        triggers.forEach(function (trigger) {
          trigger.addEventListener('click', function () {
            return _this.showModal();
          });
        });
      }
    }, {
      key: 'showModal',
      value: function showModal() {
        this.activeElement = document.activeElement;
        this.modal.setAttribute('aria-hidden', 'false');
        this.modal.classList.add('is-open');
        this.setFocusToFirstNode();
        this.scrollBehaviour('disable');
        this.addEventListeners();
        this.config.onShow(this.modal);
      }
    }, {
      key: 'closeModal',
      value: function closeModal() {
        var modal = this.modal;
        this.modal.setAttribute('aria-hidden', 'true');
        this.removeEventListeners();
        this.scrollBehaviour('enable');
        this.activeElement.focus();
        this.config.onClose(this.modal);

        if (this.config.awaitCloseAnimation) {
          this.modal.addEventListener('animationend', function handler() {
            modal.classList.remove('is-open');
            modal.removeEventListener('animationend', handler, false);
          }, false);
        } else {
          modal.classList.remove('is-open');
        }
      }
    }, {
      key: 'scrollBehaviour',
      value: function scrollBehaviour(toggle) {
        if (!this.config.disableScroll) return;
        var body = document.querySelector('body');
        switch (toggle) {
          case 'enable':
            Object.assign(body.style, { overflow: 'initial', height: 'initial' });
            break;
          case 'disable':
            Object.assign(body.style, { overflow: 'hidden', height: '100vh' });
            break;
          default:
        }
      }
    }, {
      key: 'addEventListeners',
      value: function addEventListeners() {
        this.modal.addEventListener('touchstart', this.onClick);
        this.modal.addEventListener('click', this.onClick);
        document.addEventListener('keydown', this.onKeydown);
      }
    }, {
      key: 'removeEventListeners',
      value: function removeEventListeners() {
        this.modal.removeEventListener('touchstart', this.onClick);
        this.modal.removeEventListener('click', this.onClick);
        document.removeEventListener('keydown', this.onKeydown);
      }
    }, {
      key: 'onClick',
      value: function onClick(event) {
        if (event.target.hasAttribute(this.config.closeTrigger)) {
          this.closeModal();
          event.preventDefault();
        }
      }
    }, {
      key: 'onKeydown',
      value: function onKeydown(event) {
        if (event.keyCode === 27) this.closeModal(event);
        if (event.keyCode === 9) this.maintainFocus(event);
      }
    }, {
      key: 'getFocusableNodes',
      value: function getFocusableNodes() {
        var nodes = this.modal.querySelectorAll(FOCUSABLE_ELEMENTS);
        return Object.keys(nodes).map(function (key) {
          return nodes[key];
        });
      }
    }, {
      key: 'setFocusToFirstNode',
      value: function setFocusToFirstNode() {
        if (this.config.disableFocus) return;
        var focusableNodes = this.getFocusableNodes();
        if (focusableNodes.length) focusableNodes[0].focus();
      }
    }, {
      key: 'maintainFocus',
      value: function maintainFocus(event) {
        var focusableNodes = this.getFocusableNodes();

        // if disableFocus is true
        if (!this.modal.contains(document.activeElement)) {
          focusableNodes[0].focus();
        } else {
          var focusedItemIndex = focusableNodes.indexOf(document.activeElement);

          if (event.shiftKey && focusedItemIndex === 0) {
            focusableNodes[focusableNodes.length - 1].focus();
            event.preventDefault();
          }

          if (!event.shiftKey && focusedItemIndex === focusableNodes.length - 1) {
            focusableNodes[0].focus();
            event.preventDefault();
          }
        }
      }
    }]);
    return Modal;
  }();

  /**
   * Modal prototype ends.
   * Here on code is reposible for detecting and
   * autobinding event handlers on modal triggers
   */

  // Keep a reference to the opened modal


  var activeModal = null;

  /**
   * Generates an associative array of modals and it's
   * respective triggers
   * @param  {array} triggers     An array of all triggers
   * @param  {string} triggerAttr The data-attribute which triggers the module
   * @return {array}
   */
  var generateTriggerMap = function generateTriggerMap(triggers, triggerAttr) {
    var triggerMap = [];

    triggers.forEach(function (trigger) {
      var targetModal = trigger.attributes[triggerAttr].value;
      if (triggerMap[targetModal] === undefined) triggerMap[targetModal] = [];
      triggerMap[targetModal].push(trigger);
    });

    return triggerMap;
  };

  /**
   * Validates whether a modal of the given id exists
   * in the DOM
   * @param  {number} id  The id of the modal
   * @return {boolean}
   */
  var validateModalPresence = function validateModalPresence(id) {
    if (!document.getElementById(id)) {
      console.warn('MicroModal v' + version + ': \u2757Seems like you have missed %c\'' + id + '\'', 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'ID somewhere in your code. Refer example below to resolve it.');
      console.warn('%cExample:', 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', '<div class="modal" id="' + id + '"></div>');
      return false;
    }
  };

  /**
   * Validates if there are modal triggers present
   * in the DOM
   * @param  {array} triggers An array of data-triggers
   * @return {boolean}
   */
  var validateTriggerPresence = function validateTriggerPresence(triggers) {
    if (triggers.length <= 0) {
      console.warn('MicroModal v' + version + ': \u2757Please specify at least one %c\'micromodal-trigger\'', 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'data attribute.');
      console.warn('%cExample:', 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', '<a href="#" data-micromodal-trigger="my-modal"></a>');
      return false;
    }
  };

  /**
   * Checks if triggers and their corresponding modals
   * are present in the DOM
   * @param  {array} triggers   Array of DOM nodes which have data-triggers
   * @param  {array} triggerMap Associative array of modals and thier triggers
   * @return {boolean}
   */
  var validateArgs = function validateArgs(triggers, triggerMap) {
    validateTriggerPresence(triggers);
    if (!triggerMap) return true;
    for (var id in triggerMap) {
      validateModalPresence(id);
    }return true;
  };

  /**
   * Binds click handlers to all modal triggers
   * @param  {object} config [description]
   * @return void
   */
  var init = function init(config) {
    // Create an config object with default openTrigger
    var options = Object.assign({}, { openTrigger: 'data-micromodal-trigger' }, config);

    // Collects all the nodes with the trigger
    var triggers = [].concat(toConsumableArray(document.querySelectorAll('[' + options.openTrigger + ']')));

    // Makes a mappings of modals with their trigger nodes
    var triggerMap = generateTriggerMap(triggers, options.openTrigger);

    // Checks if modals and triggers exist in dom
    if (options.debugMode === true && validateArgs(triggers, triggerMap) === false) return;

    // For every target modal creates a new instance
    for (var key in triggerMap) {
      var value = triggerMap[key];
      options.targetModal = key;
      options.triggers = [].concat(toConsumableArray(value));
      new Modal(options); // eslint-disable-line no-new
    }
  };

  /**
   * Shows a particular modal
   * @param  {string} targetModal [The id of the modal to display]
   * @param  {object} config [The configuration object to pass]
   * @return {void}
   */
  var show = function show(targetModal, config) {
    var options = config || {};
    options.targetModal = targetModal;

    // Checks if modals and triggers exist in dom
    if (options.debugMode === true && validateModalPresence(targetModal) === false) return;

    // stores reference to active modal
    activeModal = new Modal(options); // eslint-disable-line no-new
    activeModal.showModal();
  };

  /**
   * Closes the active modal
   * @return {void}
   */
  var close = function close() {
    activeModal.closeModal();
  };

  return { init: init, show: show, close: close };
}();

return MicroModal;

})));


// ------------------------------------------
// Rellax.js
// Buttery smooth parallax library
// Copyright (c) 2016 Moe Amaya (@moeamaya)
// MIT license
//
// Thanks to Paraxify.js and Jaime Cabllero
// for parallax concepts
// ------------------------------------------

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.Rellax = factory();
  }
}(this, function () {
  var Rellax = function(el, options){
    "use strict";

    var self = Object.create(Rellax.prototype);

    var posY = 0;
    var screenY = 0;
    var posX = 0;
    var screenX = 0;
    var blocks = [];
    var pause = true;

    // check what requestAnimationFrame to use, and if
    // it's not supported, use the onscroll event
    var loop = window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      function(callback){ setTimeout(callback, 1000 / 60); };

    // check which transform property to use
    var transformProp = window.transformProp || (function(){
        var testEl = document.createElement('div');
        if (testEl.style.transform === null) {
          var vendors = ['Webkit', 'Moz', 'ms'];
          for (var vendor in vendors) {
            if (testEl.style[ vendors[vendor] + 'Transform' ] !== undefined) {
              return vendors[vendor] + 'Transform';
            }
          }
        }
        return 'transform';
      })();

    // Default Settings
    self.options = {
      speed: -2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
      callback: function() {},
    };

    // User defined options (might have more in the future)
    if (options){
      Object.keys(options).forEach(function(key){
        self.options[key] = options[key];
      });
    }

    // By default, rellax class
    if (!el) {
      el = '.rellax';
    }

    // check if el is a className or a node
    var elements = typeof el === 'string' ? document.querySelectorAll(el) : [el];

    // Now query selector
    if (elements.length > 0) {
      self.elems = elements;
    }

    // The elements don't exist
    else {
      throw new Error("The elements you're trying to select don't exist.");
    }

    // Has a wrapper and it exists
    if (self.options.wrapper) {
      if (!self.options.wrapper.nodeType) {
        var wrapper = document.querySelector(self.options.wrapper);

        if (wrapper) {
          self.options.wrapper = wrapper;
        } else {
          throw new Error("The wrapper you're trying to use don't exist.");
        }
      }
    }


    // Get and cache initial position of all elements
    var cacheBlocks = function() {
      for (var i = 0; i < self.elems.length; i++){
        var block = createBlock(self.elems[i]);
        blocks.push(block);
      }
    };


    // Let's kick this script off
    // Build array for cached element values
    var init = function() {
      for (var i = 0; i < blocks.length; i++){
        self.elems[i].style.cssText = blocks[i].style;
      }

      blocks = [];

      screenY = window.innerHeight;
      screenX = window.innerWidth;
      setPosition();

      cacheBlocks();

      // If paused, unpause and set listener for window resizing events
      if (pause) {
        window.addEventListener('resize', init);
        pause = false;
      }
      animate();
    };

    // We want to cache the parallax blocks'
    // values: base, top, height, speed
    // el: is dom object, return: el cache values
    var createBlock = function(el) {
      var dataPercentage = el.getAttribute( 'data-rellax-percentage' );
      var dataSpeed = el.getAttribute( 'data-rellax-speed' );
      var dataZindex = el.getAttribute( 'data-rellax-zindex' ) || 0;

      // initializing at scrollY = 0 (top of browser), scrollX = 0 (left of browser)
      // ensures elements are positioned based on HTML layout.
      //
      // If the element has the percentage attribute, the posY and posX needs to be
      // the current scroll position's value, so that the elements are still positioned based on HTML layout
      var wrapperPosY = self.options.wrapper ? self.options.wrapper.scrollTop : (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop);
      var posY = self.options.vertical ? ( dataPercentage || self.options.center ? wrapperPosY : 0 ) : 0;
      var posX = self.options.horizontal ? ( dataPercentage || self.options.center ? (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft) : 0 ) : 0;

      var blockTop = posY + el.getBoundingClientRect().top;
      var blockHeight = el.clientHeight || el.offsetHeight || el.scrollHeight;

      var blockLeft = posX + el.getBoundingClientRect().left;
      var blockWidth = el.clientWidth || el.offsetWidth || el.scrollWidth;

      // apparently parallax equation everyone uses
      var percentageY = dataPercentage ? dataPercentage : (posY - blockTop + screenY) / (blockHeight + screenY);
      var percentageX = dataPercentage ? dataPercentage : (posX - blockLeft + screenX) / (blockWidth + screenX);
      if(self.options.center){ percentageX = 0.5; percentageY = 0.5; }

      // Optional individual block speed as data attr, otherwise global speed
      var speed = dataSpeed ? dataSpeed : self.options.speed;

      var bases = updatePosition(percentageX, percentageY, speed);

      // ~~Store non-translate3d transforms~~
      // Store inline styles and extract transforms
      var style = el.style.cssText;
      var transform = '';

      // Check if there's an inline styled transform
      if (style.indexOf('transform') >= 0) {
        // Get the index of the transform
        var index = style.indexOf('transform');

        // Trim the style to the transform point and get the following semi-colon index
        var trimmedStyle = style.slice(index);
        var delimiter = trimmedStyle.indexOf(';');

        // Remove "transform" string and save the attribute
        if (delimiter) {
          transform = " " + trimmedStyle.slice(11, delimiter).replace(/\s/g,'');
        } else {
          transform = " " + trimmedStyle.slice(11).replace(/\s/g,'');
        }
      }

      return {
        baseX: bases.x,
        baseY: bases.y,
        top: blockTop,
        left: blockLeft,
        height: blockHeight,
        width: blockWidth,
        speed: speed,
        style: style,
        transform: transform,
        zindex: dataZindex
      };
    };

    // set scroll position (posY, posX)
    // side effect method is not ideal, but okay for now
    // returns true if the scroll changed, false if nothing happened
    var setPosition = function() {
      var oldY = posY;
      var oldX = posX;

      posY = self.options.wrapper ? self.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
      posX = self.options.wrapper ? self.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset;


      if (oldY != posY && self.options.vertical) {
        // scroll changed, return true
        return true;
      }

      if (oldX != posX && self.options.horizontal) {
        // scroll changed, return true
        return true;
      }

      // scroll did not change
      return false;
    };

    // Ahh a pure function, gets new transform value
    // based on scrollPosition and speed
    // Allow for decimal pixel values
    var updatePosition = function(percentageX, percentageY, speed) {
      var result = {};
      var valueX = (speed * (100 * (1 - percentageX)));
      var valueY = (speed * (100 * (1 - percentageY)));

      result.x = self.options.round ? Math.round(valueX) : Math.round(valueX * 100) / 100;
      result.y = self.options.round ? Math.round(valueY) : Math.round(valueY * 100) / 100;

      return result;
    };

    // Loop
    var update = function() {
      if (setPosition() && pause === false) {
        animate();
      }

      // loop again
      loop(update);
    };

    // Transform3d on parallax element
    var animate = function() {
      var positions;
      for (var i = 0; i < self.elems.length; i++){
        var percentageY = ((posY - blocks[i].top + screenY) / (blocks[i].height + screenY));
        var percentageX = ((posX - blocks[i].left + screenX) / (blocks[i].width + screenX));

        // Subtracting initialize value, so element stays in same spot as HTML
        positions = updatePosition(percentageX, percentageY, blocks[i].speed);// - blocks[i].baseX;
        var positionY = positions.y - blocks[i].baseY;
        var positionX = positions.x - blocks[i].baseX;

        var zindex = blocks[i].zindex;

        // Move that element
        // (Set the new translation and append initial inline transforms.)
        var translate = 'translate3d(' + (self.options.horizontal ? positionX : '0') + 'px,' + (self.options.vertical ? positionY : '0') + 'px,' + zindex + 'px) ' + blocks[i].transform;
        self.elems[i].style[transformProp] = translate;
      }
      self.options.callback(positions);
    };

    self.destroy = function() {
      for (var i = 0; i < self.elems.length; i++){
        self.elems[i].style.cssText = blocks[i].style;
      }

      // Remove resize event listener if not pause, and pause
      if (!pause) {
        window.removeEventListener('resize', init);
        pause = true;
      }
    };

    // Init
    init();

    // Start the loop
    update();

    // Allow to recalculate the initial values whenever we want
    self.refresh = init;

    return self;
  };
  return Rellax;
}));

/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v4.2.0
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("whatInput", [], factory);
	else if(typeof exports === 'object')
		exports["whatInput"] = factory();
	else
		root["whatInput"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = function () {
	  /*
	   * variables
	   */

	  // last used input type
	  var currentInput = 'initial';

	  // last used input intent
	  var currentIntent = null;

	  // cache document.documentElement
	  var doc = document.documentElement;

	  // form input types
	  var formInputs = ['input', 'select', 'textarea'];

	  var functionList = [];

	  // list of modifier keys commonly used with the mouse and
	  // can be safely ignored to prevent false keyboard detection
	  var ignoreMap = [16, // shift
	  17, // control
	  18, // alt
	  91, // Windows key / left Apple cmd
	  93 // Windows menu / right Apple cmd
	  ];

	  // list of keys for which we change intent even for form inputs
	  var changeIntentMap = [9 // tab
	  ];

	  // mapping of events to input types
	  var inputMap = {
	    keydown: 'keyboard',
	    mousedown: 'mouse',
	    mousemove: 'mouse',
	    MSPointerDown: 'pointer',
	    MSPointerMove: 'pointer',
	    pointerdown: 'pointer',
	    pointermove: 'pointer',
	    touchstart: 'touch'
	  };

	  // array of all used input types
	  var inputTypes = [];

	  // boolean: true if touch buffer is active
	  var isBuffering = false;

	  // boolean: true if the page is being scrolled
	  var isScrolling = false;

	  // store current mouse position
	  var mousePos = {
	    x: null,
	    y: null
	  };

	  // map of IE 10 pointer events
	  var pointerMap = {
	    2: 'touch',
	    3: 'touch', // treat pen like touch
	    4: 'mouse'
	  };

	  var supportsPassive = false;

	  try {
	    var opts = Object.defineProperty({}, 'passive', {
	      get: function get() {
	        supportsPassive = true;
	      }
	    });

	    window.addEventListener('test', null, opts);
	  } catch (e) {}

	  /*
	   * set up
	   */

	  var setUp = function setUp() {
	    // add correct mouse wheel event mapping to `inputMap`
	    inputMap[detectWheel()] = 'mouse';

	    addListeners();
	    setInput();
	  };

	  /*
	   * events
	   */

	  var addListeners = function addListeners() {
	    // `pointermove`, `MSPointerMove`, `mousemove` and mouse wheel event binding
	    // can only demonstrate potential, but not actual, interaction
	    // and are treated separately

	    // pointer events (mouse, pen, touch)
	    if (window.PointerEvent) {
	      doc.addEventListener('pointerdown', updateInput);
	      doc.addEventListener('pointermove', setIntent);
	    } else if (window.MSPointerEvent) {
	      doc.addEventListener('MSPointerDown', updateInput);
	      doc.addEventListener('MSPointerMove', setIntent);
	    } else {
	      // mouse events
	      doc.addEventListener('mousedown', updateInput);
	      doc.addEventListener('mousemove', setIntent);

	      // touch events
	      if ('ontouchstart' in window) {
	        doc.addEventListener('touchstart', touchBuffer);
	        doc.addEventListener('touchend', touchBuffer);
	      }
	    }

	    // mouse wheel
	    doc.addEventListener(detectWheel(), setIntent, supportsPassive ? { passive: true } : false);

	    // keyboard events
	    doc.addEventListener('keydown', updateInput);
	  };

	  // checks conditions before updating new input
	  var updateInput = function updateInput(event) {
	    // only execute if the touch buffer timer isn't running
	    if (!isBuffering) {
	      var eventKey = event.which;
	      var value = inputMap[event.type];
	      if (value === 'pointer') value = pointerType(event);

	      if (currentInput !== value || currentIntent !== value) {
	        var activeElem = document.activeElement;
	        var activeInput = false;
	        var notFormInput = activeElem && activeElem.nodeName && formInputs.indexOf(activeElem.nodeName.toLowerCase()) === -1;

	        if (notFormInput || changeIntentMap.indexOf(eventKey) !== -1) {
	          activeInput = true;
	        }

	        if (value === 'touch' ||
	        // ignore mouse modifier keys
	        value === 'mouse' ||
	        // don't switch if the current element is a form input
	        value === 'keyboard' && eventKey && activeInput && ignoreMap.indexOf(eventKey) === -1) {
	          // set the current and catch-all variable
	          currentInput = currentIntent = value;

	          setInput();
	        }
	      }
	    }
	  };

	  // updates the doc and `inputTypes` array with new input
	  var setInput = function setInput() {
	    doc.setAttribute('data-whatinput', currentInput);
	    doc.setAttribute('data-whatintent', currentInput);

	    if (inputTypes.indexOf(currentInput) === -1) {
	      inputTypes.push(currentInput);
	      doc.className += ' whatinput-types-' + currentInput;
	    }

	    fireFunctions('input');
	  };

	  // updates input intent for `mousemove` and `pointermove`
	  var setIntent = function setIntent(event) {
	    // test to see if `mousemove` happened relative to the screen
	    // to detect scrolling versus mousemove
	    if (mousePos['x'] !== event.screenX || mousePos['y'] !== event.screenY) {
	      isScrolling = false;

	      mousePos['x'] = event.screenX;
	      mousePos['y'] = event.screenY;
	    } else {
	      isScrolling = true;
	    }

	    // only execute if the touch buffer timer isn't running
	    // or scrolling isn't happening
	    if (!isBuffering && !isScrolling) {
	      var value = inputMap[event.type];
	      if (value === 'pointer') value = pointerType(event);

	      if (currentIntent !== value) {
	        currentIntent = value;

	        doc.setAttribute('data-whatintent', currentIntent);

	        fireFunctions('intent');
	      }
	    }
	  };

	  // buffers touch events because they frequently also fire mouse events
	  var touchBuffer = function touchBuffer(event) {
	    if (event.type === 'touchstart') {
	      isBuffering = false;

	      // set the current input
	      updateInput(event);
	    } else {
	      isBuffering = true;
	    }
	  };

	  var fireFunctions = function fireFunctions(type) {
	    for (var i = 0, len = functionList.length; i < len; i++) {
	      if (functionList[i].type === type) {
	        functionList[i].function.call(undefined, currentIntent);
	      }
	    }
	  };

	  /*
	   * utilities
	   */

	  var pointerType = function pointerType(event) {
	    if (typeof event.pointerType === 'number') {
	      return pointerMap[event.pointerType];
	    } else {
	      // treat pen like touch
	      return event.pointerType === 'pen' ? 'touch' : event.pointerType;
	    }
	  };

	  // detect version of mouse wheel event to use
	  // via https://developer.mozilla.org/en-US/docs/Web/Events/wheel
	  var detectWheel = function detectWheel() {
	    var wheelType = void 0;

	    // Modern browsers support "wheel"
	    if ('onwheel' in document.createElement('div')) {
	      wheelType = 'wheel';
	    } else {
	      // Webkit and IE support at least "mousewheel"
	      // or assume that remaining browsers are older Firefox
	      wheelType = document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
	    }

	    return wheelType;
	  };

	  /*
	   * init
	   */

	  // don't start script unless browser cuts the mustard
	  // (also passes if polyfills are used)
	  if ('addEventListener' in window && Array.prototype.indexOf) {
	    setUp();
	  }

	  /*
	   * api
	   */

	  return {
	    // returns string: the current input type
	    // opt: 'loose'|'strict'
	    // 'strict' (default): returns the same value as the `data-whatinput` attribute
	    // 'loose': includes `data-whatintent` value if it's more current than `data-whatinput`
	    ask: function ask(opt) {
	      return opt === 'loose' ? currentIntent : currentInput;
	    },

	    // returns array: all the detected input types
	    types: function types() {
	      return inputTypes;
	    },

	    // overwrites ignored keys with provided array
	    ignoreKeys: function ignoreKeys(arr) {
	      ignoreMap = arr;
	    },

	    // attach functions to input and intent "events"
	    // funct: function to fire on change
	    // eventType: 'input'|'intent'
	    onChange: function onChange(funct, eventType) {
	      functionList.push({
	        function: funct,
	        type: eventType
	      });
	    }
	  };
	}();

/***/ })
/******/ ])
});
;

(function ($, window, document, undefined) {

  'use strict';

  $(function () {
	  $.expose = {};
var ac,
accordions = {
	settings: {
		accItem: $('.acc-item'),
		accContent: $('.acc-item .acc-content'),
		title: $('.acc-item .title'),
		toggle: $('.acc-toggle'),
		closedArray: []
	},
	init: function() {
		ac = this.settings;
		this.bindUIActions();
		// Optional - Expose scoped vars to global $. Use in console with $.expose
		$.expose.ac = ac;
		$.expose.accordions = accordions;
		console.log('accordions loaded!');
	},
	bindUIActions: function() {
		ac.title.each( function(index, value) {
			ac.closedArray.push(true);
		});

		ac.title.on('click', function() {

			// Get the index of the clicked item
			var thisIndex = ac.title.index(this);
			// Update the value in the array at the given thisIndex
			// ac.closedArray[thisIndex] = false;

			$(this).closest('.acc-item').find('.acc-content').slideToggle( '3000', function() {
				// Animation complete.
			});

			if ( ac.closedArray[thisIndex] == false ) {
				$(this).closest('.acc-item').removeClass('open');
				$(this).closest('.acc-item').find('.acc-toggle').html('More');
				// closed = true;
				ac.closedArray[thisIndex] = true;
			} else {
				$(this).closest('.acc-item').addClass('open');
				$(this).closest('.acc-item').find('.acc-toggle').html('Less');
				// closed = false;
				ac.closedArray[thisIndex] = false;
			}

		});
	}
};

var lr,
layers = {
	settings: {
		card: $('.full-cards .card')
	},
	init: function() {
		lr = this.settings;
		this.bindUIActions();
		// Optional - Expose scoped vars to global $. Use in console with $.expose
		$.expose.lr = lr;
		$.expose.layers = layers;
		console.log('layers loaded!');
	},
	bindUIActions: function() {
        lr.card.mouseenter(function(){
            $(this).addClass('top-layer');
        });
        lr.card.mouseleave(function(){
			var currentCard = $(this);
        	setTimeout(function(){
        		currentCard.removeClass('top-layer');
        	}, 1000);
        });
	}
};

function calculateDoubleAnnuity() {
	var varRate = $('#double-annuity-input').val();
	var wkRate = parseFloat(varRate)
	var wkYears = 72 / wkRate
	var result = parseFloat(wkYears.toFixed(1)) + ' year';
	if (parseFloat(wkYears.toFixed(1)) > 1) result += 's';

	$('#double-annuity-result').addClass('animating');
	setTimeout(function() {
		$('#double-annuity-result').removeClass('animating').html(result);
	}, 300);
}

$(document).ready(function() {
	// =====================================
	// Wacth and update Annuity Form
	// =====================================
	$('#double-annuity-input').change(function() {
		calculateDoubleAnnuity();
	}).keyup(function() {
		calculateDoubleAnnuity();
	});

	$('#double-annuity-slider').on('moved.zf.slider', function() {
	  calculateDoubleAnnuity();
	});

	$('#double-annuity-refresh').on('click', function() {
		calculateDoubleAnnuity();
	});
});

function calculateDoubleCD() {
	var varRateCD = $('#cd-interest-rate-input').val();
	var varBracketCD = $('#tax-bracket-input').val();
	var wkRateCD = parseFloat(varRateCD);
	var wkBracketCD = parseInt(varBracketCD);
	var wkYears = parseFloat(72 / ((100 - wkBracketCD) * (wkRateCD / 100)))

	var result = parseFloat(wkYears.toFixed(1)) + ' year';
	if (parseFloat(wkYears.toFixed(1)) > 1) result += 's';

	$('#double-cd-result').addClass('animating');
	setTimeout(function() {
		$('#double-cd-result').removeClass('animating').html(result);
	}, 300);
}

$(document).ready(function() {
	// =====================================
	// Wacth and update CD Form
	// =====================================
	$('#cd-interest-rate-input').change(function() {
		calculateDoubleCD();
	}).keyup(function() {
		calculateDoubleCD();
	});

	$('#cd-interest-rate-slider').on('moved.zf.slider', function() {
		calculateDoubleCD();
	});

	$('#tax-bracket-input').change(function() {
		calculateDoubleCD();
	}).keyup(function() {
		calculateDoubleCD();
	});

	$('#tax-bracket-slider').on('moved.zf.slider', function() {
	  calculateDoubleCD();
	});

	$('#double-cd-refresh').on('click', function() {
		calculateDoubleCD();
	});
});

function format (expr, decplaces) {
	// raise incoming value by power of 10 times the
	// number of decimal places; round to an integer; convert to string
	var str = "" + Math.round (eval(expr) * Math.pow(10, decplaces));

	// pad small value strings with zeros to the left of the rounded number
	while (str.length <= decplaces) {
		str = "0" + str;
	}

	// establish location of decimal point
	var decpoint = str.length - decplaces;

	// assemble final result from (a) the string up to the position of
	// the decimal point; (b) the decimal point; and (c) the balance
	// of the string.  Return finished product.
	return str.substring(0,decpoint) + "." + str.substring(decpoint,str.length);

}

// turn incoming expression into a formatted value
function dollarize (expr) {
	return format(expr,2);
}

function calculateEquivalentYield() {
	var varRateY = $('#yield-interest-rate-input').val();
	var varBracketY = $('#yield-tax-bracket-input').val();
	var wkRateY = parseFloat(varRateY);
	var wkBracketY = parseInt(varBracketY);
	wkBracketY = 100 - parseInt(varBracketY);
	var wkYield = parseFloat((wkRateY / wkBracketY) * 100)
	wkYield = dollarize(wkYield);

	var result = wkYield;
	$('#yield-result').addClass('animating');
	setTimeout(function() {
		$('#yield-result').removeClass('animating').html(result);
	}, 300);
}

$(document).ready(function() {
	// =====================================
	// Wacth and update CD Form
	// =====================================
	$('#yield-interest-rate-input').change(function() {
		calculateEquivalentYield();
	}).keyup(function() {
		calculateEquivalentYield();
	});

	$('#yield-interest-rate-slider').on('moved.zf.slider', function() {
		calculateEquivalentYield();
	});

	$('#yield-tax-bracket-input').change(function() {
		calculateEquivalentYield();
	}).keyup(function() {
		calculateEquivalentYield();
	});

	$('#yield-tax-bracket-slider').on('moved.zf.slider', function() {
		calculateEquivalentYield();
	});

	$('#equivalent-yield-refresh').on('click', function() {
		calculateEquivalentYield();
	});
});

var cn,
cookieNotice = {
	settings: {
		notice: $('.cookie-notice'),
		close: $('.cookie-notice .close')
	},
	init: function() {
		cn = this.settings;
		this.bindUIActions();
		// Optional - Expose scoped vars to global $. Use in console with $.expose
		$.expose.cn = cn;
		$.expose.cookieNotice = cookieNotice;
		console.log('cookieNotice loaded!');
	},
	bindUIActions: function() {
		cn.close.on('click', function() {
			cn.notice.addClass('move');
			setTimeout(function(){
				cn.notice.addClass('hide');
			}, 600);
		});
	}
};

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var headerHeight = $('.header').outerHeight();
    var headerFixed = headerHeight + 50;

    if (scroll >= headerHeight) {
        $('.header').addClass('hide');
    } else {
        $('.header').removeClass('hide');
    }

    if (scroll >= headerFixed) {
        $('.header').addClass('transition');
    } else {
        $('.header').removeClass('transition');
    }

    if (scroll >= 500) {
        $('.header').addClass('reveal');
    } else {
        $('.header').removeClass('reveal');
    }
});

var mn,
mobileNav = {
	settings: {
		mobileBtn: $('.mobile-nav-btn'),
		mobileLink: $('.mobile-nav .menu-item a'),
		mobileNav: $('.mobile-nav-wrapper'),
        body: $('body'),
		header: $('.header')
	},
	init: function() {
		mn = this.settings;
		this.bindUIActions();
		// Optional - Expose scoped vars to global $. Use in console with $.expose
		$.expose.mn = mn;
		$.expose.mobileNav = mobileNav;
		console.log('mobile menu loaded!');
	},
	bindUIActions: function() {

		var closed = true;

		mn.mobileBtn.on('click', function() {

			$(this).addClass('open');

			if ( closed == false) {

				$(this).removeClass('open');
				mn.mobileNav.removeClass('slide');
                mn.body.removeClass('lock');
				mn.header.removeClass('dark');
				closed = true;

			} else {

				$(this).addClass('open');
				mn.mobileNav.addClass('slide');
                mn.body.addClass('lock');
				mn.header.addClass('dark');
				closed = false;

			}

		});

		mn.mobileLink.on('click', function() {

			mn.mobileBtn.removeClass('open');
			mn.mobileNav.removeClass('slide');
            mn.body.removeClass('lock');
			mn.header.removeClass('dark');
			closed = true;

		});

	}
};

var mobileDelay = 550;

$('.mobile-nav a').each(function(indexCount) {
	mobileDelay = mobileDelay + 50;
	// Apply the animation delay
	$(this).css("transition-delay", mobileDelay + "ms");
});

// var deskDelay = 150;
//
// $('.header-nav .sub-menu a').each(function(indexCount) {
// 	deskDelay = deskDelay + 50;
// 	// Apply the animation delay
// 	$(this).css("transition-delay", deskDelay + "ms");
// });

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    }
  });

var map,
licensedMap = {
	settings: {
		mapsvg: $('.map-svg svg'),
		productSelect: $('#map-legend'),
		stateListTitle: $('.state-list h2'),
		stateList: $('.licensed-state-list')
	},
	init: function() {
		map = this.settings;
		this.bindUIActions();
		// Optional - Expose scoped vars to global $. Use in console with $.expose
		$.expose.map = map;
		$.expose.licensedMap = licensedMap;
		console.log('licensed map loaded!');
	},
	bindUIActions: function() {
		var productType;

		if (map.mapsvg.length > 0) {
			// On page load, display first product in the select dropdown
			$(states).each( function(index, value) {

				var stateobj = states[index];
				var statename = stateobj.name;

				var statepath = statename.toLowerCase().replace(' ', '-');
				statepath = $('#' + statepath);
				// console.log(statepath);

				productType = 'a_licensed_to_sell';

				if (stateobj[productType] == 'yes') {
					statepath.addClass('active');
					map.stateList.html(function(i, html) {
						return html + (!html ? '' : ', ') + stateobj.name;
					});
				}

				if (stateobj[productType] == 'pending') {
					statepath.addClass('pending');
				}

			});

			map.productSelect.change( function() {

				// Remove active and pending classes from all states
				map.mapsvg.find('path').removeClass('active');
				map.mapsvg.find('path').removeClass('pending');
				// Clear html from state list & title
				map.stateList.html('');
				map.stateListTitle.html('');

				productType = $(this).val();
				var productName = $('#map-legend option:selected').text();
				map.stateListTitle.html(productName);

				$(states).each( function(index, value) {

					var stateobj = states[index];
					var statename = stateobj.name;

					var statepath = statename.toLowerCase().replace(' ', '-');
					statepath = $('#' + statepath);

					if (stateobj[productType] == 'yes') {
						statepath.addClass('active');
						map.stateList.html(function(i, html) {
							return html + (!html ? '' : ', ') + stateobj.name;
						});
					}

					if (stateobj[productType] == 'pending') {
						statepath.addClass('pending');
					}

				});

			});
		}

	}
};


// // on change event of dropdown select
// function productSelect(selectObject) {
//
// 	// Remove active and pending classes from all states
// 	mapsvg.find('path').removeClass('active');
// 	mapsvg.find('path').removeClass('pending');
//
// 	var productType = selectObject.value;
// 	console.log(productType);
//
// 	// var productType = jQuery('.map-legend').val();
// 	// var selectedproduct = 'Youth';
//
//
// 	jQuery.each(states, function(index, value) {
//
// 		var stateobj = states[index];
// 		var statename = stateobj.name.toLowerCase();
// 		statename = statename.replace(' ', '-');
//
// 		var statepath = jQuery('#' + statename);
//
// 		if (stateobj[productType] == 'Yes') {
// 		// if (stateobj[selectedproduct] == 'Yes') {
// 			statepath.addClass('active');
// 			jQuery('licensed-state-list').append(stateobj.name);
// 			// console.log(stateobj.name + ' is licensed. ');
// 		}
//
// 		if (stateobj[productType] == 'Pending') {
// 		// if (stateobj[selectedproduct] == 'Pending') {
// 			statepath.addClass('pending');
// 		}
//
// 	});
//
// }

var nf,
notification = {
	settings: {
		notice: $('.notification'),
		close: $('.notification .close')
	},
	init: function() {
		nf = this.settings;
		this.bindUIActions();
		// Optional - Expose scoped vars to global $. Use in console with $.expose
		$.expose.nf = nf;
		$.expose.notification = notification;
		console.log('notification loaded!');
	},
	bindUIActions: function() {
		nf.close.on('click', function() {
			nf.notice.addClass('hide');
		});
	}
};

var glideEls = document.getElementsByClassName('slide-list');

if (glideEls.length > 0) {

	var glideNo = 1;

	for (var i = 0; i < glideEls.length; i++) {

		var glideClass = '.glide-' + glideNo;

		var glide = new Glide(glideClass, {
			perView: 1,
			type:	'carousel',
			focusAt: 'center',
			animationTimingFunc: 'ease',
			animationDuration: 800
		});

		glide.mount();

		glideNo++;
	}

}

AOS.init({
    easing: 'ease-in-out',
    once: false,
    duration: 1000
});

accordions.init();
mobileNav.init();
layers.init();
licensedMap.init();
// cookieNotice.init();
// notification.init();
// MicroModal.init();

var rellaxEl = document.querySelectorAll('.rellax');

if (rellaxEl.length > 0) {
	console.log('The rellax class exists. ' + rellaxEl.length); // value

	var rellax = new Rellax('.rellax', {
	    speed: -2,
	    center: true,
	    wrapper: null,
	    round: true,
	    vertical: true,
	    horizontal: false
	});
}

function msieversion() {
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ");

	if (msie > 0) {
	    $("[data-aos^=fade][data-aos^=fade]").css("opacity", "1");
	}
}

$(document).ready(function() {
	msieversion()
});

$(document).foundation()

});

})(jQuery, window, document);
