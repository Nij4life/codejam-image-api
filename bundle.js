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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.1/css/all.css\">\n  <title>codejam-image-api</title>\n</head>\n\n<body>\n  <header>\n    <h1>codejam-image-api</h1>\n  </header>\n  <main class=\"main\">\n    <div class=\"left-sidebar\">\n      <ul class=\"menu-actions\">\n        <li class=\"canvas-action\" id=\"pencil\">\n          <i class=\"fas fa-pencil-alt\"></i>\n          Pencil (p)\n        </li>\n        <li class=\"canvas-action\" id=\"bucket\">\n          <i class=\"fas fa-fill-drip\"></i>\n          Paint bucket (b)\n        </li>\n        <li class=\"canvas-action\" id=\"choose\">\n          <i class=\"fas fa-palette\"></i>\n          Choose color (c)\n          <input type=\"color\">\n        </li>\n        <li class=\"canvas-action\" id=\"picker\">\n          <i class=\"fas fa-eye-dropper\"></i>\n          Color picker (d)\n        </li>\n      </ul>\n      <div class=\"palette\">\n        <div class=\"colors\">\n          <p class=\"palette-header\">Current color</p>\n          <div class=\"current-color\">\n            <div class=\"colors-item\"></div>\n          </div>\n        </div>\n        <div class=\"colors\">\n          <p class=\"palette-header\">Standard colors</p>\n          <div class=\"standard-colors\">\n            <div class=\"colors-item\"></div>\n            <div class=\"colors-item\"></div>\n            <div class=\"colors-item\"></div>\n            <div class=\"colors-item\"></div>\n            <div class=\"colors-item\"></div>\n            <div class=\"colors-item\"></div>\n            <div class=\"colors-item\"></div>\n          </div>\n        </div>\n        <div class=\"colors\">\n          <p class=\"palette-header\">Previous colors</p>\n          <div class=\"previous-colors\"></div>\n        </div>\n      </div>\n    </div>\n    <canvas class=\"canvas\" id=\"canvas\" width=\"128\" height=\"128\"></canvas>\n    <div class=\"right-sidebar\">\n      <div class=\"right-sidebar__block\">\n          <p class=\"right-sidebar__header\">Query by city name</p>\n          <button class=\"button button-city\" type=\"submit\">Load</button>\n          <input class=\"input-city\" type=\"text\">\n      </div>\n      <div class=\"right-sidebar__block\">\n          <p class=\"right-sidebar__header\">Change image to grayscale</p>\n          <button class=\"button button-grayscale\">Black and White</button>\n      </div>\n      <div class=\"right-sidebar__block\">\n        <p class=\"right-sidebar__header\">Clear storage and refresh page</p>\n        <button class=\"button button-clear\">Clear and Refresh</button>\n    </div>\n      <div class=\"right-sidebar__block\">\n          <p class=\"right-sidebar__header\">Change canvas range (px)</p>\n          <pre> 128     256     384     512</pre>\n          <input class=\"input-range\" type=\"range\" step=\"128\" min=\"128\" max=\"512\" value=\"128\">\n      </div>\n    </div>\n  </main>\n  <footer>\n    <p>RSschool-2019Q3</p>\n  </footer>\n</body>\n\n</html>\n";

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_js_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/js/controller */ "./src/js/controller.js");




/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style.scss":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0; }\n\nheader {\n  width: 100vw;\n  height: 40px;\n  background: #999; }\n  header h1 {\n    text-align: center; }\n\n.main {\n  display: flex;\n  justify-content: space-between;\n  width: 100vw;\n  min-height: calc(100vh - 40px - 20px);\n  user-select: none; }\n  .main .left-sidebar {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    width: 20vw;\n    min-width: 250px;\n    height: 100%;\n    min-height: calc(100vh - 40px - 20px);\n    background: rgba(240, 240, 240, 0.5);\n    z-index: 1; }\n\nfooter {\n  width: 100vw;\n  height: 20px;\n  color: #fff;\n  text-align: center;\n  background: #666666; }\n\n.menu-actions {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 5vmin 1vmin;\n  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);\n  padding: 10px 0; }\n  .menu-actions .canvas-action {\n    position: relative;\n    display: flex;\n    width: 100%;\n    margin: 5px;\n    font-size: 24px;\n    border-radius: 5px; }\n    .menu-actions .canvas-action:hover {\n      box-shadow: 0 1px 3px #666;\n      background: #ccc; }\n    .menu-actions .canvas-action i {\n      margin: 0 30px 0 10px; }\n    .menu-actions .canvas-action input[type=\"color\"] {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      opacity: 0; }\n  .menu-actions .active {\n    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.8);\n    background: #777;\n    color: #eee; }\n\n.palette-header {\n  width: 100%;\n  margin: 5px;\n  font-weight: 700;\n  text-align: center; }\n\n.palette .colors {\n  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.8); }\n  .palette .colors .current-colors,\n  .palette .colors .standard-colors,\n  .palette .colors .previous-colors {\n    display: flex;\n    flex-wrap: wrap;\n    margin-bottom: 5px; }\n  .palette .colors .colors-item {\n    width: 25px;\n    height: 25px;\n    margin: 10px;\n    border-radius: 50%; }\n    .palette .colors .colors-item:hover {\n      box-shadow: 0 0px 10px red; }\n\n.palette .current-color {\n  display: block;\n  padding: 5px 0; }\n  .palette .current-color .colors-item {\n    width: 40px;\n    height: 40px;\n    margin: auto;\n    background: green;\n    border: 1px solid black; }\n\n.palette .standard-colors .colors-item:nth-child(1) {\n  background: black; }\n\n.palette .standard-colors .colors-item:nth-child(2) {\n  background: gray; }\n\n.palette .standard-colors .colors-item:nth-child(3) {\n  background: blue; }\n\n.palette .standard-colors .colors-item:nth-child(4) {\n  background: green; }\n\n.palette .standard-colors .colors-item:nth-child(5) {\n  background: red; }\n\n.palette .standard-colors .colors-item:nth-child(6) {\n  background: yellow; }\n\n.palette .standard-colors .colors-item:nth-child(7) {\n  background: white; }\n\n.palette .previos-colors .colors-item {\n  width: 20px;\n  height: 20px; }\n\n.canvas {\n  align-self: center;\n  width: 512px;\n  height: 512px;\n  margin: auto;\n  border: 1px solid #000000;\n  image-rendering: pixelated; }\n\n.right-sidebar {\n  margin: 0 30px 0 0; }\n  .right-sidebar__block {\n    border-radius: 3px;\n    margin: 5px auto;\n    padding-bottom: 5px;\n    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.8);\n    background: rgba(240, 240, 240, 0.5); }\n    .right-sidebar__block:not(:first-child) {\n      display: flex;\n      flex-direction: column; }\n  .right-sidebar__header {\n    padding: 5px 0;\n    margin-bottom: 10px;\n    text-align: center;\n    background: rgba(220, 220, 220, 0.6); }\n  .right-sidebar .input-range {\n    width: calc(100% - 20px);\n    margin: 0 10px; }\n  .right-sidebar .button:hover {\n    box-shadow: 0 0px 5px rgba(0, 172, 0, 0.8); }\n  .right-sidebar .button:not(.button-city) {\n    width: 60%;\n    align-self: center; }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/js/constants.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/js/localStorage.js");


const {
  PENCIL,
  BUCKET,
  PICKER
} = _constants__WEBPACK_IMPORTED_MODULE_0__["MENU_ACTION_TYPES"];
const LocalStorageInstance = Object(_localStorage__WEBPACK_IMPORTED_MODULE_1__["default"])();

class CanvasClass {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvasSize = this.canvas.clientWidth;
    this.canvasPixelSize = canvas.width;
    this.pixelSize = this.canvasSize / this.canvasPixelSize;
    this.context = this.canvas.getContext('2d');
    this.tool = PENCIL;
    this.color = new ImageData(new Uint8ClampedArray([0, 128, 0, 255]), 1, 1);
    this.loadedImage = null;
    this.grayscale = null;
    this.startPosition = null;
    this.isMouseDown = false;
  }

  toggleMouseDown() {
    this.isMouseDown = !this.isMouseDown;
  }

  getCanvasFromStorage() {
    const url = LocalStorageInstance.getDataByType('canvas');

    if (url) {
      const img = new Image();
      img.src = url;

      img.onload = () => this.context.drawImage(img, 0, 0);
    } else {
      this.context.fillStyle = 'white';
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    const canvasPixelSize = LocalStorageInstance.getDataByType('canvasPixelSize');
    if (canvasPixelSize) this.changeCanvasSize(canvasPixelSize);
    return canvasPixelSize;
  }

  setCanvasToStorage() {
    LocalStorageInstance.setData('canvas', this.canvas.toDataURL());
    LocalStorageInstance.setData('canvasPixelSize', this.canvasPixelSize);
  }

  changeColorsToGray() {
    if (!this.loadedImage) {
      alert('Please upload a picture!');
    } else {
      const imageData = this.context.getImageData(0, 0, this.canvasPixelSize, this.canvasPixelSize);

      for (let i = 0; i < imageData.data.length; i += 4) {
        const averageColor = Math.floor(imageData.data[i] * 0.36 + imageData.data[i + 1] * 0.53 + imageData.data[i + 2] * 0.11);
        imageData.data[i] = averageColor;
        imageData.data[i + 1] = averageColor;
        imageData.data[i + 2] = averageColor;
      }

      this.context.putImageData(imageData, 0, 0);
      this.grayscale = true;
    }
  }

  clearCanvas() {
    this.context.fillStyle = 'white';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  setColor(color) {
    this.color = this.imageRgbaToData(color);
  }

  imageDataToRgba(color) {
    return `rgba(${color.data[0]}, ${color.data[1]}, ${color.data[2]}, ${color.data[3]})`;
  }

  imageRgbaToData(color) {
    return new ImageData(new Uint8ClampedArray(color.match(/\d+/g)), 1, 1);
  }

  getPixelPosition({
    offsetX,
    offsetY
  }) {
    const x = Math.floor(offsetX / this.pixelSize);
    const y = Math.floor(offsetY / this.pixelSize);
    return {
      x,
      y
    };
  }

  getPixelColor({
    x,
    y
  }) {
    return this.context.getImageData(x, y, 1, 1);
  }

  setPixelColor({
    x,
    y
  }, imageData) {
    this.context.putImageData(imageData, x, y);
  }

  isEqualColor(imageDataA, imageDataB) {
    for (let i = 0; i < imageDataA.data.length; i += 1) {
      if (imageDataA.data[i] !== imageDataB.data[i]) return false;
    }

    return true;
  }

  bresenhamDraw(startPosition, endPosition) {
    // Translate coordinates
    let xs = startPosition.x;
    let ys = startPosition.y;
    const xe = endPosition.x;
    const ye = endPosition.y; // Define differences and error check

    const dx = Math.abs(xe - xs);
    const dy = Math.abs(ye - ys);
    const sx = xs < xe ? 1 : -1;
    const sy = ys < ye ? 1 : -1;
    let err = dx - dy;

    while (!(xs === xe && ys === ye)) {
      const e2 = 2 * err;
      const position = {
        x: xs,
        y: ys
      };
      this.setPixelColor(position, this.color);

      if (e2 > -dy) {
        err -= dy;
        xs += sx;
      }

      if (e2 < dx) {
        err += dx;
        ys += sy;
      }
    }
  }

  draw(e, currentColor) {
    const newPosition = this.getPixelPosition(e);
    if (!this.startPosition) this.startPosition = newPosition;

    if (this.startPosition.x === newPosition.x && this.startPosition.y === newPosition.y) {
      this.setColor(currentColor);
      this.setPixelColor(this.startPosition, this.color);
    } else {
      this.bresenhamDraw(this.startPosition, newPosition);
      this.startPosition = newPosition;
    }
  }

  floodFill(x, y, startColor, replaceColor) {
    if (x < 0 || y < 0 || x > this.canvasPixelSize - 1 || y > this.canvasPixelSize - 1) return;
    const tempColor = this.getPixelColor({
      x,
      y
    });

    if (this.isEqualColor(tempColor, startColor) && !this.isEqualColor(tempColor, replaceColor)) {
      this.setPixelColor({
        x,
        y
      }, replaceColor);
      this.floodFill(x + 1, y, startColor, replaceColor);
      this.floodFill(x, y + 1, startColor, replaceColor);
      this.floodFill(x - 1, y, startColor, replaceColor);
      this.floodFill(x, y - 1, startColor, replaceColor);
    }
  }

  bucket(e, currentColor) {
    const position = this.getPixelPosition(e);
    const color = this.getPixelColor(position);
    this.setColor(currentColor);
    this.floodFill(position.x, position.y, color, this.color);
  }

  pickColor(e, Palette) {
    if (e.type === 'mousemove') return;
    const position = this.getPixelPosition(e);
    this.color = this.getPixelColor(position);
    const currentColor = this.imageDataToRgba(this.color); //  --------------------------Try move other classes throw controller

    Palette.setCurrentColorDivBackground(currentColor);

    if (!Palette.hasColor()) {
      Palette.createPreviousColor();
      Palette.limitPreviousColor();
    }
  }

  setDefault() {
    this.isMouseDown = false;
    this.startPosition = null;
  }

  getColorFromDiv(currentColor) {
    return getComputedStyle(currentColor).backgroundColor.replace(')', ', 255)');
  }

  changeCanvasSize(size) {
    this.canvasPixelSize = size;
    this.canvas.width = this.canvasPixelSize;
    this.canvas.height = this.canvasPixelSize;
    this.pixelSize = this.canvasSize / this.canvasPixelSize;
  }

  renderImage() {
    const width = this.loadedImage.naturalWidth > this.canvasPixelSize ? this.canvasPixelSize : this.loadedImage.naturalWidth;
    const height = this.loadedImage.naturalHeight > this.canvasPixelSize ? this.canvasPixelSize : this.loadedImage.naturalHeight;
    const startX = width < this.canvasPixelSize ? this.canvasPixelSize / 2 - width / 2 : 0;
    const startY = height < this.canvasPixelSize ? this.canvasPixelSize / 2 - height / 2 : 0;
    this.context.imageSmoothingQuality = 'medium';
    this.context.drawImage(this.loadedImage, startX, startY, width, height);
    if (this.grayscale) this.changeColorsToGray();
  }

  drawFromImage(url, newImage) {
    if (newImage) {
      this.grayscale = false;
      this.clearCanvas();
    } // add  .crossOrigin = 'anonymous';  that will been working button Black and White


    this.loadedImage = new Image();
    this.loadedImage.crossOrigin = 'anonymous';
    this.loadedImage.src = url;

    this.loadedImage.onload = () => this.renderImage();
  }

  actionSwitch(e, activeTool, currentColor, Palette) {
    if (this.isMouseDown) {
      switch (activeTool) {
        case PENCIL:
          this.draw(e, this.getColorFromDiv(currentColor));
          break;

        case BUCKET:
          this.bucket(e, this.getColorFromDiv(currentColor));
          break;

        case PICKER:
          this.pickColor(e, Palette);
          break;

        default:
          break;
      }
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CanvasClass);

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/*! exports provided: MENU_ACTION_TYPES, ACTIVE_CLASS, STORAGE_DATA_TOOL, MAX_SAVED_COLORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ACTION_TYPES", function() { return MENU_ACTION_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIVE_CLASS", function() { return ACTIVE_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_DATA_TOOL", function() { return STORAGE_DATA_TOOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_SAVED_COLORS", function() { return MAX_SAVED_COLORS; });
const MENU_ACTION_TYPES = {
  PENCIL: 'pencil',
  BUCKET: 'bucket',
  CHOOSE: 'choose',
  PICKER: 'picker'
};
const ACTIVE_CLASS = 'active';
const STORAGE_DATA_TOOL = 'tool';
const MAX_SAVED_COLORS = 3;


/***/ }),

/***/ "./src/js/controller.js":
/*!******************************!*\
  !*** ./src/js/controller.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menuActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuActions */ "./src/js/menuActions.js");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ "./src/js/canvas.js");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./palette */ "./src/js/palette.js");
/* harmony import */ var _imageLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imageLoader */ "./src/js/imageLoader.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localStorage */ "./src/js/localStorage.js");





const menuElement = document.querySelector('.menu-actions');
const Menu = new _menuActions__WEBPACK_IMPORTED_MODULE_0__["default"]();
const paletteElement = document.querySelector('.palette');
const Palette = new _palette__WEBPACK_IMPORTED_MODULE_2__["default"]();
const canvasElement = document.getElementById('canvas');
const Canvas = new _canvas__WEBPACK_IMPORTED_MODULE_1__["default"](canvasElement); // ---------------------------------------------- Try all Views move to own classes or files!

const imageLoaderButton = document.querySelector('.button-city');
const imageLoaderText = document.querySelector('.input-city');
const ImageLoader = new _imageLoader__WEBPACK_IMPORTED_MODULE_3__["default"]();
const LocalStorageInstance = Object(_localStorage__WEBPACK_IMPORTED_MODULE_4__["default"])();
const inputRange = document.querySelector('.input-range'); // listener for button Clear localStorage and Canvas

document.querySelector('.button-clear').addEventListener('click', () => {
  LocalStorageInstance.clearData();
  Canvas.clearCanvas();
  Menu.removeActiveClass();
}); // listeners for Canvas

canvasElement.addEventListener('mousedown', e => {
  Canvas.toggleMouseDown();
  Canvas.actionSwitch(e, Menu.activeTool, Palette.currentColorDiv, Palette); // const a = Canvas.getPickedColor();
  // a && Palette.setF(a);
});
canvasElement.addEventListener('mouseup', () => {
  Canvas.setDefault();
});
canvasElement.addEventListener('mousemove', e => {
  Canvas.actionSwitch(e, Menu.activeTool, Palette.currentColorDiv);
});
canvasElement.addEventListener('mouseleave', () => {
  Canvas.setDefault();
}); // listener for inpyt[type="range"] that change Canvas size

inputRange.addEventListener('change', e => {
  Canvas.changeCanvasSize(e.target.value);
  if (ImageLoader.url) Canvas.drawFromImage(ImageLoader.url);
}); // Listeners for imageLoaderButton

imageLoaderButton.addEventListener('click', async () => {
  const url = await ImageLoader.handleImageLoader(imageLoaderText.value);
  if (url) Canvas.drawFromImage(url, true);
}); // Listeners for button change colors in cancas to black and White

document.querySelector('.button-grayscale').addEventListener('click', () => Canvas.changeColorsToGray()); // listeners for palette

paletteElement.addEventListener('click', e => {
  Palette.handlePalette(e);
}); // Listeners for Menu

menuElement.addEventListener('click', e => {
  Menu.handleMenuAction(e.target);
}); // Listeners for window and document

document.querySelector('input[type="color"]').addEventListener('input', e => {
  document.querySelector('.current-color .colors-item').style.background = e.target.value;
});
window.addEventListener('keydown', e => {
  Menu.handleHotKeys(e);
});
window.addEventListener('load', () => {
  Menu.getActiveToolFromStorage();
  ImageLoader.getUrlFromStorage();
  const canvasPixelSize = Canvas.getCanvasFromStorage(); //         ----------------   To think how now to take out all view models !!!

  if (canvasPixelSize) inputRange.value = canvasPixelSize;
});

window.onbeforeunload = () => {
  Menu.setActiveTooltoStorage();
  Canvas.setCanvasToStorage();
  ImageLoader.setUrlToStorage();
};

/***/ }),

/***/ "./src/js/imageLoader.js":
/*!*******************************!*\
  !*** ./src/js/imageLoader.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/js/localStorage.js");

const LocalStorageInstance = Object(_localStorage__WEBPACK_IMPORTED_MODULE_0__["default"])();

class ImageLoaderClass {
  constructor() {
    this.url = null;
  }

  imageRequest(city) {
    if (!city) return null; // My key:    57a89ccbf0154dca7b3f85d98dc3547d01024aa2b07b09f6243a2c56f2434617

    return fetch(`https://api.unsplash.com/photos/random?query=town,${city}
            &client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17`).then(res => res.json()).then(data => {
      this.url = data.urls.small;
      return data.urls.small;
    });
  }

  setUrlToStorage() {
    LocalStorageInstance.setData('url', this.url);
  }

  getUrlFromStorage() {
    const urlFromStorage = LocalStorageInstance.getDataByType('url');
    this.url = !urlFromStorage ? null : urlFromStorage;
  }

  handleImageLoader(city) {
    return this.imageRequest(city);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ImageLoaderClass);

/***/ }),

/***/ "./src/js/localStorage.js":
/*!********************************!*\
  !*** ./src/js/localStorage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getInstanceLocalStorage; });
class LocalStorage {
  setData(type, data) {
    localStorage.setItem(type, data);
  }

  getDataByType(type) {
    return localStorage.getItem(type);
  }

  clearData() {
    localStorage.clear();
  }

}

const instance = new LocalStorage();
function getInstanceLocalStorage() {
  return instance;
}

/***/ }),

/***/ "./src/js/menuActions.js":
/*!*******************************!*\
  !*** ./src/js/menuActions.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/js/localStorage.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/js/constants.js");


const {
  CHOOSE,
  PICKER,
  BUCKET,
  PENCIL
} = _constants__WEBPACK_IMPORTED_MODULE_1__["MENU_ACTION_TYPES"];
const LocalStorageInstance = Object(_localStorage__WEBPACK_IMPORTED_MODULE_0__["default"])();

class MenuActionsClass {
  constructor() {
    this.activeTool = this.getActiveToolFromStorage();
    this.menuItems = document.querySelectorAll('.canvas-action');
  }

  removeActiveClass() {
    this.menuItems.forEach(el => {
      el.classList.remove(_constants__WEBPACK_IMPORTED_MODULE_1__["ACTIVE_CLASS"]);
    });
  }

  setActiveClass(target) {
    target.classList.add(_constants__WEBPACK_IMPORTED_MODULE_1__["ACTIVE_CLASS"]);
  }

  setActiveTool(tool) {
    this.activeTool = tool;
  }

  changeActiveTool(target) {
    this.removeActiveClass();
    this.setActiveClass(target);
    this.setActiveTool(target.id);
  }

  setActiveTooltoStorage() {
    LocalStorageInstance.setData(_constants__WEBPACK_IMPORTED_MODULE_1__["STORAGE_DATA_TOOL"], this.activeTool);
  }

  getActiveToolFromStorage() {
    const tool = LocalStorageInstance.getDataByType(_constants__WEBPACK_IMPORTED_MODULE_1__["STORAGE_DATA_TOOL"]);

    if (tool === BUCKET || tool === PICKER) {
      this.setActiveClass(document.getElementById(tool));
      return tool;
    }

    this.setActiveClass(document.getElementById(PENCIL));
    return PENCIL;
  }

  handleMenuAction(target) {
    const li = target.closest('.canvas-action');
    if (!li || li.id === CHOOSE) return;
    this.changeActiveTool(target);
  }

  serviceHotKeys(id) {
    const target = document.getElementById(id);

    if (id === CHOOSE) {
      this.inputElement.click();
    } else {
      this.changeActiveTool(target);
    }
  }

  handleHotKeys(e) {
    if (e.shiftKey) {
      switch (e.code) {
        case 'KeyP':
          this.serviceHotKeys(PENCIL);
          break;

        case 'KeyB':
          this.serviceHotKeys(BUCKET);
          break;

        case 'KeyC':
          this.serviceHotKeys(CHOOSE);
          break;

        case 'KeyD':
          this.serviceHotKeys(PICKER);
          break;

        default:
          break;
      }
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MenuActionsClass);

/***/ }),

/***/ "./src/js/palette.js":
/*!***************************!*\
  !*** ./src/js/palette.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/js/constants.js");


class PaletteClass {
  constructor() {
    this.currentColorDiv = document.querySelector('.current-color .colors-item');
    this.previousColorsWrap = document.querySelector('.previous-colors');
    this.previousColorsCollection = document.querySelector('.previous-colors').getElementsByClassName('colors-item');
  }

  setCurrentColorDivBackground(color) {
    this.currentColorDiv.style.background = color;
  }

  getColor(target) {
    return getComputedStyle(target).backgroundColor.replace(')', ', 255)');
  }

  checkDivColor(target) {
    return !!target.classList.contains('colors-item');
  }

  hasColor() {
    if (this.previousColorsCollection.length === 0) {
      return false;
    }

    return Array.from(this.previousColorsCollection).some(el => el.style.background === this.currentColorDiv.style.background);
  }

  limitPreviousColor() {
    if (this.previousColorsCollection.length > _constants__WEBPACK_IMPORTED_MODULE_0__["MAX_SAVED_COLORS"]) {
      this.previousColorsWrap.lastElementChild.remove();
    }
  }

  createPreviousColor() {
    const div = document.createElement('div');
    div.classList.add('colors-item');
    div.style.background = getComputedStyle(this.currentColorDiv).backgroundColor;
    this.previousColorsWrap.prepend(div);
  }

  handlePalette({
    target
  }) {
    if (!this.checkDivColor(target)) return;
    this.setCurrentColorDivBackground(this.getColor(target));
    if (this.hasColor()) return;
    this.createPreviousColor();
    this.limitPreviousColor();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PaletteClass);

/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map