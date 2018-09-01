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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/img/idea.svg":
/*!*********************************!*\
  !*** ./src/assets/img/idea.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48cGF0aCBkPSJtNTAgMjVhMTggMTggMCAxIDAgLTI3LjcxMiAxNS4xNTcgNS43MzQgNS43MzQgMCAwIDEgMi43MTIgNC44MDJ2NC4wNDFhMyAzIDAgMCAwIDMgM2g4YTMgMyAwIDAgMCAzLTN2LTMuOTU4YTUuODkxIDUuODkxIDAgMCAxIDIuNzctNC45MjIgMTcuOTg0IDE3Ljk4NCAwIDAgMCA4LjIzLTE1LjEyeiIgZmlsbD0iI2UzOWQxMCIvPjxwYXRoIGQ9Im0yNyA1OGEzIDMgMCAwIDAgMyAzaDRhMyAzIDAgMCAwIDMtM3YtNmgtMTB6IiBmaWxsPSIjZWJlYmViIi8+PHBhdGggZD0ibTU2LjE5MyAxNC40MjEgMy4xNDQtMi4zNTgtMy42LTQuOC0zLjE0NCAyLjM1OGEyIDIgMCAwIDEgLTMuMTc5LTEuODgzbC41NTUtMy44ODktNS45NC0uODQ5LS41NTUgMy44ODlhMiAyIDAgMCAxIC0zLjU4LjkxOGwtMi4zNTctMy4xNDQtNC44IDMuNiAyLjM1NyAzLjE0NGEyIDIgMCAwIDEgLTEuODgzIDMuMTc5bC0zLjg4OS0uNTU1LS44NDkgNS45NCAzLjg5LjU1NWEyIDIgMCAwIDEgLjkxNyAzLjU4bC0zLjE0MyAyLjM1OCAzLjYgNC44IDMuMTQzLTIuMzU3YTIgMiAwIDAgMSAzLjE4IDEuODgzbC0uNTYgMy44ODggNS45NC44NDkuNTYtMy44OWEyIDIgMCAwIDEgMy41OC0uOTE3bDIuMzU4IDMuMTQzIDQuOC0zLjYtMi4zNTktMy4xNDNhMiAyIDAgMCAxIDEuODgzLTMuMThsMy44ODkuNTU2Ljg0OS01Ljk0LTMuODg5LS41NTZhMiAyIDAgMCAxIC0uOTE4LTMuNTc5em0tMTEuNDU2IDExLjg0MmE3IDcgMCAxIDEgNy03IDcgNyAwIDAgMSAtNyA3eiIgZmlsbD0iIzEwYmRlMCIvPjxwYXRoIGQ9Im0yMi4yODggNDAuMTU3YTE4LjA0OSAxOC4wNDkgMCAwIDEgLTIuNDY0LTEuOTA4IDQuOTkyIDQuOTkyIDAgMSAxIC00LjgyNC02LjI0OWMuMTUzIDAgLjMuMDMyLjQ0Ni4wNDVhMTcuOTg2IDE3Ljk4NiAwIDAgMSAtMS40MzYtNy4wNDVoLTEuMjczbC0uNjkxIDMuMjg3YTEgMSAwIDAgMSAtMS41NDYuNjE4bC0yLjc2My0xLjkwNS0zIDMgMS45IDIuNzYzYTEgMSAwIDAgMSAtLjYxOCAxLjU0NmwtMy4yODIuNjkxdjRsMy4yODYuNjkxYTEgMSAwIDAgMSAuNjE4IDEuNTQ2bC0xLjkwNCAyLjc2MyAzIDMgMi43NjMtMS45YTEgMSAwIDAgMSAxLjU0Ny42MThsLjY5IDMuMjgyaDRsLjY5LTMuMjg3YTEgMSAwIDAgMSAxLjU0Ny0uNjE4bDIuNzYzIDEuOTA1IDMuMTM5LTMuMTM5YTUuODIyIDUuODIyIDAgMCAwIC0yLjU4OC0zLjcwNHoiIGZpbGw9IiNjOWRmZmYiLz48cGF0aCBkPSJtNjEuMTQyIDE3LjU2Ni0zLjg5LS41NTVhMSAxIDAgMCAxIC0uNDU5LTEuNzlsMy4xNDQtMi4zNThhMSAxIDAgMCAwIC4yLTEuNGwtMy42LTQuOGExIDEgMCAwIDAgLTEuNC0uMmwtMy4xNDMgMi4zNThhMSAxIDAgMCAxIC0xLjU5NC0uOTQxbC41NTYtMy44OWExIDEgMCAwIDAgLS44NDktMS4xMzJsLTUuOTM2LS44NDhhMSAxIDAgMCAwIC0xLjEzMi44NDhsLS41NTYgMy44OWExIDEgMCAwIDEgLTEuNzkuNDU5bC0yLjM1Ny0zLjE0NGExIDEgMCAwIDAgLTEuNC0uMmwtMy4wMDUgMi4yNTVhMTkuMzQ3IDE5LjM0NyAwIDAgMCAtNC4wOSAwIDE5IDE5IDAgMCAwIC0xNi43NTMgMTcuMDM3Yy0uMDI3LjI4My0uMDM3LjU2NC0uMDUxLjg0NWgtLjNhMSAxIDAgMCAwIC0uOTc4LjhsLS42OTEgMy4yODYtMi43NjgtMS45MDlhMSAxIDAgMCAwIC0xLjI3NS4xMTZsLTMgM2ExIDEgMCAwIDAgLS4xMTYgMS4yNzRsMS45IDIuNzYzLTMuMjg3LjY5MWExIDEgMCAwIDAgLS43ODYuOTc5djRhMSAxIDAgMCAwIC43OTQuOTc5bDMuMjg3LjY5MS0xLjkgMi43NjNhMSAxIDAgMCAwIC4xMTYgMS4yNzRsMyAzYTEgMSAwIDAgMCAxLjI3NS4xMTZsMi43NjMtMS45MDUuNjkxIDMuMjg3YTEgMSAwIDAgMCAuOTc4LjhoNGExIDEgMCAwIDAgLjk3OS0uNzk0bC42OTEtMy4yODcgMi43NjMgMS45YTEgMSAwIDAgMCAxLjI3NC0uMTE2bDEuNTUzLTEuNTU4djIuODVhMy45ODcgMy45ODcgMCAwIDAgMiAzLjQ0NHY1LjU1NmE0IDQgMCAwIDAgNCA0aDRhNCA0IDAgMCAwIDQtNHYtNS41NTZhMy45ODcgMy45ODcgMCAwIDAgMi0zLjQ0NHYtMy45NThhNC45IDQuOSAwIDAgMSAyLjMxMy00LjA4MiAxOS4xODUgMTkuMTg1IDAgMCAwIDIuMzU0LTEuOGwtMS4zMzQtMS40OWExNy4wMiAxNy4wMiAwIDAgMSAtMi4xMDcgMS42MTEgNi44ODggNi44ODggMCAwIDAgLTMuMjI2IDUuNzYxdjMuOTU4YTIgMiAwIDAgMSAtMiAyaC04YTIgMiAwIDAgMSAtMi0ydi00LjA0MWE2LjcyOCA2LjcyOCAwIDAgMCAtMy4xNzItNS42NDQgMTYuOTQ5IDE2Ljk0OSAwIDAgMSA4Ljk1Ny0zMS4zIDEuMDkgMS4wOSAwIDAgMCAtLjAzOS4xMDkgMSAxIDAgMCAwIC4xOTEuNzQxbDIuMzU3IDMuMTQzYS45NzkuOTc5IDAgMCAxIC4wNiAxLjExLjk5NC45OTQgMCAwIDEgLTEgLjQ4MWwtMy44OS0uNTU2YTEgMSAwIDAgMCAtMS4xMzIuODQ5bC0uODQ5IDUuOTM5YTEgMSAwIDAgMCAuODQ5IDEuMTMybDMuODkuNTU2YTEgMSAwIDAgMSAuNDU5IDEuNzlsLTMuMTQzIDIuMzU3YTEgMSAwIDAgMCAtLjIgMS40bDMuNiA0LjhhMSAxIDAgMCAwIDEuNC4ybDMuMTQ0LTIuMzU3YTEgMSAwIDAgMSAxLjU4OS45NDFsLS41NTUgMy44OWExIDEgMCAwIDAgLjg0OCAxLjEzMmw1Ljk0Ljg0OWExLjExMiAxLjExMiAwIDAgMCAuMTQxLjAwOSAxIDEgMCAwIDAgLjk5MS0uODU4bC41NTUtMy44OWExIDEgMCAwIDEgMS43OS0uNDU5bDIuMzU4IDMuMTQzYTEgMSAwIDAgMCAxLjQuMmw0LjgtMy42YTEgMSAwIDAgMCAuMi0xLjRsLTIuMzU3LTMuMTQzYS45ODMuOTgzIDAgMCAxIC0uMDYtMS4xMS45NzEuOTcxIDAgMCAxIDEtLjQ4bDMuODkuNTU1YTEgMSAwIDAgMCAxLjEzMi0uODQ4bC44NDgtNS45NGExIDEgMCAwIDAgLS44NDgtMS4xMzJ6bS00Ni4zNjggMTUuNDM0YTE4LjkzNyAxOC45MzcgMCAwIDAgMy43MTIgNS4zNDYgMy45OTQgMy45OTQgMCAxIDEgLTMuNzUtNS4zNDZ6bTE5LjIyNiAyN2gtNGEyIDIgMCAwIDEgLTItMnYtMWg4djFhMiAyIDAgMCAxIC0yIDJ6bTItN3YyaC04di0yem0tMTIuMjM3LTkuNDQxLTIuMTQ1IDIuMTQxLTIuMDc3LTEuNDMyYTIgMiAwIDAgMCAtMy4wOTIgMS4yMzVsLS41MjQgMi40OTdoLTIuMzc3bC0uNTI0LTIuNDkzYTIgMiAwIDAgMCAtMy4wOTItMS4yMzVsLTIuMDc4IDEuNDI4LTEuODIyLTEuODE4IDEuNDMxLTIuMDc2YTIgMiAwIDAgMCAtMS4yMzQtMy4wOTNsLTIuNDkzLS41MjV2LTIuMzc2bDIuNDkzLS41MjVhMiAyIDAgMCAwIDEuMjM1LTMuMDg3bC0xLjQzMi0yLjA4MiAxLjgyMi0xLjgxOCAyLjA3OSAxLjQzMmEyIDIgMCAwIDAgMy4wOTEtMS4yMzZsLjE3NS0uODMyYTE5LjA0IDE5LjA0IDAgMCAwIC43OTMgMy4zOTEgNiA2IDAgMSAwIDYuMDQ3IDguNyAxOC45MDUgMTguOTA1IDAgMCAwIDEuNzA5IDEuMjQ1IDQuODgxIDQuODgxIDAgMCAxIDIuMDE1IDIuNTU5em0zNS41MzctMjAuMTk1LTIuOS0uNDE0YTMgMyAwIDAgMCAtMi44MjQgNC43N2wxLjc1NyAyLjM0My0zLjIgMi40LTEuNzU4LTIuMzQyYTMgMyAwIDAgMCAtNS4zNyAxLjM3NWwtLjQwNSAyLjkwNC0zLjk1OS0uNTY2LjQxNC0yLjlhMyAzIDAgMCAwIC00Ljc3LTIuODI1bC0yLjM0MyAxLjc1Ny0yLjQtMy4yIDIuMzQyLTEuNzU4YTMgMyAwIDAgMCAtMS4zNzUtNS4zN2wtMi45LS40MTQuNTY2LTMuOTU5IDIuOS40MTRhMyAzIDAgMCAwIDIuODI1LTQuNzdsLTEuNzYzLTIuMzQ1IDMuMi0yLjQgMS43NTggMi4zNDNhMyAzIDAgMCAwIDUuMzctMS4zNzVsLjQxNC0yLjkgMy45NTkuNTY1LS40MTQgMi45YTMgMyAwIDAgMCA0Ljc3IDIuODI0bDIuMzQzLTEuNzU3IDIuNCAzLjItMi4zNDMgMS43NThhMyAzIDAgMCAwIDEuMzc1IDUuMzdsMi45LjQxNHoiLz48cGF0aCBkPSJtNDQuNzM2IDExLjI2NGE4IDggMCAxIDAgOCA4IDguMDA5IDguMDA5IDAgMCAwIC04LTh6bTAgMTRhNiA2IDAgMSAxIDYtNiA2LjAwNyA2LjAwNyAwIDAgMSAtNiA2eiIvPjxwYXRoIGQ9Im0zMSA0NmgydjNoLTJ6Ii8+PHBhdGggZD0ibTI3LjYyNiAzNi4xNzlhMTIgMTIgMCAwIDEgLTIuMDI2LTIxLjMzM2wtMS4wNjktMS42OTJhMTQgMTQgMCAwIDAgMi4zNjkgMjQuODg2IDYuMzg0IDYuMzg0IDAgMCAxIDQuMSA1Ljk2aDJhOC4zNjcgOC4zNjcgMCAwIDAgLTUuMzc0LTcuODIxeiIvPjxwYXRoIGQ9Im01MSAzOWg3djJoLTd6Ii8+PHBhdGggZD0ibTUyIDQzLjU5NWgydjcuODFoLTJ6IiB0cmFuc2Zvcm09Im1hdHJpeCguNjQwMTA5NyAtLjc2ODI4MzUyIC43NjgyODM1MiAuNjQwMTA5NyAtMTcuNDE5IDU3LjgxNCkiLz48cGF0aCBkPSJtNDUgNDdoMnY3aC0yeiIvPjxwYXRoIGQ9Im0yLjg3NyAxOGg4LjI0NnYxLjk5OWgtOC4yNDZ6IiB0cmFuc2Zvcm09Im1hdHJpeCguOTcwMTQzNTMgLS4yNDI1MzE1IC4yNDI1MzE1IC45NzAxNDM1MyAtNC4zOTkgMi4yNjUpIi8+PHBhdGggZD0ibTcuNSA2LjE5OWgxLjk5OXY4LjYwMmgtMS45OTl6IiB0cmFuc2Zvcm09Im1hdHJpeCguNTgxMjQyNzcgLS44MTM3MzAyIC44MTM3MzAyIC41ODEyNDI3NyAtNC45ODUgMTEuMzE0KSIvPjxwYXRoIGQ9Im0xMy45NzggMS44NzFoMnY4LjI1N2gtMnoiIHRyYW5zZm9ybT0ibWF0cml4KC45Njg4NDczOCAtLjI0NzY1ODU0IC4yNDc2NTg1NCAuOTY4ODQ3MzggLTEuMDE5IDMuODk2KSIvPjwvc3ZnPgo="

/***/ }),

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello world';
  var element = document.createElement('div');
  element.innerHTML = text;
  return element;
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/component.js");
/* harmony import */ var _assets_img_idea_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img/idea.svg */ "./src/assets/img/idea.svg");
/* harmony import */ var _assets_img_idea_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_img_idea_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _main_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.less */ "./src/main.less");
/* harmony import */ var _main_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_less__WEBPACK_IMPORTED_MODULE_2__);




var myFun = function myFun() {
  return console.log('::: myFun: ...');
};

document.body.appendChild(Object(_component__WEBPACK_IMPORTED_MODULE_0__["default"])('This Is a Custom Message'));
var img = document.createElement('img');
img.src = _assets_img_idea_svg__WEBPACK_IMPORTED_MODULE_1___default.a;
document.body.appendChild(img); // **********************************
// Polyfilling Features
// **********************************
// ...........

/***/ }),

/***/ "./src/main.less":
/*!***********************!*\
  !*** ./src/main.less ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });