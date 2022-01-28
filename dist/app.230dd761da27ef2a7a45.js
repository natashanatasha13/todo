/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app/styles/styles.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app/styles/styles.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/cross.png */ \"./src/app/images/cross.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n  box-sizing: border-box;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n  box-sizing: inherit;\\n}\\nbody {\\n  font-family: \\\"Inter\\\", sans-serif;\\n  background: #f5f5f5;\\n  color: #4d4d4d;\\n  min-width: 230px;\\n  max-width: 550px;\\n  margin: 0 auto;\\n}\\n\\n.title_container {\\n  margin-top: 0;\\n}\\n\\n.title {\\n  text-align: center;\\n  color: rgba(175, 47, 47, 0.15);\\n  font-size: 100px;\\n  margin-top: 0;\\n  margin-bottom: 10px;\\n  font-weight: lighter;\\n}\\n\\n.new-todo {\\n  margin: 0;\\n  width: 100%;\\n  height: 80px;\\n  font-size: 24px;\\n  font-family: inherit;\\n  font-weight: inherit;\\n  line-height: 1.4em;\\n  outline: 0;\\n  color: #999;\\n  padding: 6px;\\n  border: 1px solid rgba(209, 209, 209, 0.3);\\n  box-shadow: inset 0 -1px 5px 0 rgb(0 0 0 / 10%);\\n  box-shadow: 0 3px 5px 0 rgb(0 0 0 / 10%);\\n}\\n::placeholder {\\n  color: rgb(209, 209, 209);\\n  padding-left: 80px;\\n  font-style: italic;\\n}\\n.footer {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-evenly;\\n  margin: 0;\\n  width: 100%;\\n  height: 50px;\\n  font-size: 15px;\\n  font-family: inherit;\\n  font-weight: inherit;\\n  line-height: 1.4em;\\n  outline: 0;\\n  color: #999;\\n  padding: 6px;\\n  border: 1px solid rgba(209, 209, 209, 0.3);\\n  box-shadow: inset 0 -1px 5px 0 rgb(0 0 0 / 10%);\\n  box-shadow: 0 3px 5px 0 rgb(0 0 0 / 20%);\\n  background: white;\\n}\\n\\n.button {\\n  margin-right: 10px;\\n  color: #999;\\n  background-color: white;\\n  border: none;\\n}\\n.button:hover {\\n  border: 1px solid rgba(209, 209, 209, 0.3);\\n  border-radius: 3px;\\n  cursor: pointer;\\n}\\n\\n.clicked {\\n  border: 1px solid rgb(36, 36, 36);\\n  border-radius: 3px;\\n  cursor: pointer;\\n  color: rgb(36, 36, 36);\\n}\\n.clear:hover {\\n  border-bottom: 1px solid rgba(37, 37, 37, 0.3);\\n}\\n\\n.footer_conteiner {\\n  margin-top: 50px;\\n  text-align: center;\\n  font-size: 10px;\\n  color: #999;\\n}\\nul {\\n  margin: 0;\\n  padding: 0;\\n}\\n.list {\\n  position: relative;\\n  margin: 0;\\n  padding-left: 40px;\\n  width: 100%;\\n  height: 50px;\\n  font-size: 24px;\\n  font-family: inherit;\\n  font-weight: inherit;\\n  line-height: 1.4em;\\n  background-color: white;\\n  outline: 0;\\n  border: 1px solid rgba(209, 209, 209, 0.3);\\n  box-shadow: inset 0 -1px 5px 0 rgb(0 0 0 / 10%);\\n  box-shadow: 0 3px 5px 0 rgb(0 0 0 / 10%);\\n  list-style-type: none;\\n}\\n\\n.done {\\n  color: rgb(221, 219, 219);\\n}\\n.cross {\\n  width: 20px;\\n  height: 20px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: 100%;\\n  position: absolute;\\n  left: 90%;\\n  top: 30%;\\n}\\n\\n.invisible {\\n  opacity: 0;\\n}\\n\\n.to_change {\\n  width: 20px;\\n  height: 20px;\\n  border-radius: 50px;\\n  border: 1px solid rgb(0, 0, 0);\\n  position: absolute;\\n  right: 94%;\\n  top: 20%;\\n  transition: ease-in-out 0.5s;\\n}\\n\\n.to_change_done {\\n  background-color: rgb(180, 196, 180);\\n}\\n.items_conteiner {\\n  display: flex;\\n  gap: 5px;\\n  align-items: center;\\n}\\n\\n.lower_footer {\\n  position: relative;\\n  bottom: 45px;\\n  z-index: -1;\\n  margin: 0 auto;\\n  width: 99%;\\n  height: 50px;\\n  font-size: 15px;\\n  font-family: inherit;\\n  font-weight: inherit;\\n  line-height: 1.4em;\\n  outline: 0;\\n  color: #999;\\n  padding: 6px;\\n  border: 1px solid rgba(209, 209, 209, 0.3);\\n  box-shadow: inset 0 -1px 5px 0 rgb(0 0 0 / 10%);\\n  box-shadow: 0 3px 5px 0 rgb(0 0 0 / 20%);\\n  background: white;\\n}\\n\\n.lowest_footer {\\n  position: relative;\\n  bottom: 90px;\\n  z-index: -2;\\n  margin: 0 auto;\\n  width: 98%;\\n  height: 50px;\\n  font-size: 15px;\\n  font-family: inherit;\\n  font-weight: inherit;\\n  line-height: 1.4em;\\n  outline: 0;\\n  color: #999;\\n  padding: 6px;\\n  border: 1px solid rgba(209, 209, 209, 0.3);\\n  box-shadow: inset 0 -1px 5px 0 rgb(0 0 0 / 10%);\\n  box-shadow: 0 3px 5px 0 rgb(0 0 0 / 20%);\\n  background: white;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://classes-webpack/./src/app/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://classes-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://classes-webpack/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://classes-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/app/styles/styles.css":
/*!***********************************!*\
  !*** ./src/app/styles/styles.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/app/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://classes-webpack/./src/app/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://classes-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://classes-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://classes-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://classes-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://classes-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://classes-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app/App.js":
/*!************************!*\
  !*** ./src/app/App.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/app/styles/styles.css\");\n/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/main */ \"./src/components/main/index.js\");\n\n\n\n\n_components_main__WEBPACK_IMPORTED_MODULE_1__.renderAll.mount();\n_components_main__WEBPACK_IMPORTED_MODULE_1__.renderAll.render();\n_components_main__WEBPACK_IMPORTED_MODULE_1__.renderAll.handlers();\n\n\n\n//# sourceURL=webpack://classes-webpack/./src/app/App.js?");

/***/ }),

/***/ "./src/components/counter/Counter.js":
/*!*******************************************!*\
  !*** ./src/components/counter/Counter.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoCounter)\n/* harmony export */ });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element */ \"./src/components/element/index.js\");\n\nclass TodoCounter extends _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(elementClass, elementPlaceHolder, textContent, elementParent) {\n    super(\"span\", elementClass, elementPlaceHolder, textContent, elementParent);\n  }\n  render() {\n    this.elementParent.appendChild(this.element);\n  }\n}\nconsole.log('It works');\n\n//# sourceURL=webpack://classes-webpack/./src/components/counter/Counter.js?");

/***/ }),

/***/ "./src/components/counter/index.js":
/*!*****************************************!*\
  !*** ./src/components/counter/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Counter */ \"./src/components/counter/Counter.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Counter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://classes-webpack/./src/components/counter/index.js?");

/***/ }),

/***/ "./src/components/element/Element.js":
/*!*******************************************!*\
  !*** ./src/components/element/Element.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Element),\n/* harmony export */   \"filter\": () => (/* binding */ filter),\n/* harmony export */   \"itemArray\": () => (/* binding */ itemArray)\n/* harmony export */ });\n\nconst filter = localStorage.getItem(\"currentFilter\");\nconst itemArray = Array.from(localStorage);\nitemArray.splice(0, 1);\n\nclass Element {\n  constructor(\n    element,\n    elementClass,\n    elementPlaceHolder,\n    textContent,\n    elementParent\n  ) {\n    this.element = element;\n    this.elementClass = elementClass;\n    this.elementPlaceHolder = elementPlaceHolder;\n    this.textContent = textContent;\n    this.elementParent = elementParent;\n  }\n  mount() {\n    this.element = document.createElement(this.element);\n    this.element.className = this.elementClass;\n    this.element.textContent = this.textContent;\n    this.element.placeholder = this.elementPlaceHolder;\n  }\n  render() {\n    this.elementParent.appendChild(this.element);\n    return this.element;\n  }\n}\n\n\n\n//# sourceURL=webpack://classes-webpack/./src/components/element/Element.js?");

/***/ }),

/***/ "./src/components/element/index.js":
/*!*****************************************!*\
  !*** ./src/components/element/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"filter\": () => (/* reexport safe */ _Element__WEBPACK_IMPORTED_MODULE_0__.filter),\n/* harmony export */   \"itemArray\": () => (/* reexport safe */ _Element__WEBPACK_IMPORTED_MODULE_0__.itemArray)\n/* harmony export */ });\n/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Element */ \"./src/components/element/Element.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n;\n\n\n//# sourceURL=webpack://classes-webpack/./src/components/element/index.js?");

/***/ }),

/***/ "./src/components/footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/Footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoFooter)\n/* harmony export */ });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element */ \"./src/components/element/index.js\");\n\n\n\nclass TodoFooter extends _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(elementClass, elementPlaceHolder, textContent, elementParent) {\n      super(\"div\", elementClass, elementPlaceHolder, textContent, elementParent);\n    }\n  }\n\n//# sourceURL=webpack://classes-webpack/./src/components/footer/Footer.js?");

/***/ }),

/***/ "./src/components/footer/index.js":
/*!****************************************!*\
  !*** ./src/components/footer/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ \"./src/components/footer/Footer.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://classes-webpack/./src/components/footer/index.js?");

/***/ }),

/***/ "./src/components/footerButton/FooterButton.js":
/*!*****************************************************!*\
  !*** ./src/components/footerButton/FooterButton.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoButton)\n/* harmony export */ });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element */ \"./src/components/element/index.js\");\n/* harmony import */ var _listElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../listElement */ \"./src/components/listElement/index.js\");\n/* harmony import */ var _spanButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spanButton */ \"./src/components/spanButton/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ \"./src/constants/index.js\");\n\n\n\n\n\nclass TodoButton extends _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(elementClass, elementPlaceHolder, textContent, elementParent) {\n    super(\n      \"button\",\n      elementClass,\n      elementPlaceHolder,\n      textContent,\n      elementParent\n    );\n  }\n  render() {\n    this.elementParent.appendChild(this.element);\n  }\n  handlerAllButton(ul, button, counter, buttonCompleted, buttonActive) {\n    this.element.addEventListener(\"click\", () => {\n      const allArr = _element__WEBPACK_IMPORTED_MODULE_0__.itemArray.filter((item) => {\n        if (JSON.parse(item).status !== _constants__WEBPACK_IMPORTED_MODULE_3__.STATUSES.deleted) { \n          return _element__WEBPACK_IMPORTED_MODULE_0__.itemArray;\n        }\n      });\n\n      ul.element.textContent = \"\";\n      allArr.forEach((item) => {\n        const parsedItem = JSON.parse(item);\n        const newTodo = new _listElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n          \"li\",\n          `list ${parsedItem.status ? \"active\" : \"done\"}`,\n          \"\",\n          parsedItem.value,\n          ul.element,\n          parsedItem.id - 1,\n          parsedItem.status\n        );\n        newTodo.mount();\n        newTodo.render();\n        const deleteButton = new _spanButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n          \"cross invisible\",\n          \"\",\n          \"\",\n          newTodo.element\n        );\n        const toggleButton = new _spanButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n          \"to_change\",\n          \"\",\n          \"\",\n          newTodo.element\n        );\n\n        deleteButton.mount();\n        deleteButton.render();\n        toggleButton.mount();\n        toggleButton.render();\n        newTodo.handleLiMouseover(deleteButton);\n        newTodo.handleLiMouseout(deleteButton);\n        newTodo.handleSpanClick(deleteButton, counter);\n        newTodo.handleSpanToggleClick(toggleButton, counter);\n        button.handlerClearCompletedButton(newTodo, counter, _constants__WEBPACK_IMPORTED_MODULE_3__.STATUSES.active);\n\n        if (newTodo.element.classList.contains(\"done\")) {\n          toggleButton.element.classList.add(\"to_change_done\");\n        }\n      });\n\n      let trueArr = [];\n      _element__WEBPACK_IMPORTED_MODULE_0__.itemArray.forEach((item) => {\n        if (JSON.parse(item).status === _constants__WEBPACK_IMPORTED_MODULE_3__.STATUSES.active) { \n          trueArr.push(item);\n        }\n      });\n      counter.element.textContent = trueArr.length;\n\n      this.element.classList.add(\"clicked\");\n      buttonCompleted.element.classList.remove(\"clicked\");\n      buttonActive.element.classList.remove(\"clicked\");\n      localStorage.setItem(\"currentFilter\", \"currentFilterAll\");\n    });\n  }\n  handlerActiveButton(ul, button, counter, buttonAll, buttonCompleted) {\n    this.element.addEventListener(\"click\", () => {\n      const activeArr = _element__WEBPACK_IMPORTED_MODULE_0__.itemArray.filter((item) => {\n        if (JSON.parse(item).status === _constants__WEBPACK_IMPORTED_MODULE_3__.STATUSES.active) {\n          return _element__WEBPACK_IMPORTED_MODULE_0__.itemArray;\n        }\n      });\n      console.log(activeArr);\n      ul.element.textContent = \"\";\n      activeArr.forEach((item) => {\n        const parsedItem = JSON.parse(item);\n        const newTodo = new _listElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n          \"li\",\n          `list ${parsedItem.status ? \"active\" : \"done\"}`,\n          \"\",\n          parsedItem.value,\n          ul.element,\n          parsedItem.id - 1,\n          parsedItem.status\n        );\n        newTodo.mount();\n        newTodo.render();\n        const deleteButton = new _spanButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n          \"cross invisible\",\n          \"\",\n          \"\",\n          newTodo.element\n        );\n        const toggleButton = new _spanButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n          \"to_change\",\n          \"\",\n          \"\",\n          newTodo.element\n        );\n        deleteButton.mount();\n        deleteButton.render();\n        toggleButton.mount();\n        toggleButton.render();\n        newTodo.handleLiMouseover(deleteButton);\n        newTodo.handleLiMouseout(deleteButton);\n        newTodo.handleSpanClick(deleteButton, counter);\n        newTodo.handleSpanToggleClick(toggleButton, counter);\n        button.handlerClearCompletedButton(newTodo, counter, _constants__WEBPACK_IMPORTED_MODULE_3__.STATUSES.active);\n      });\n\n      counter.element.textContent = activeArr.length;\n\n      buttonAll.element.classList.remove(\"clicked\");\n      this.element.classList.add(\"clicked\");\n      buttonCompleted.element.classList.remove(\"clicked\");\n      localStorage.setItem(\"currentFilter\", \"currentFilterActive\");\n    });\n  }\n  handlerCompletedButton(ul, button, counter, buttonAll, buttonActive) {\n    this.element.addEventListener(\"click\", () => {\n      const doneArr = _element__WEBPACK_IMPORTED_MODULE_0__.itemArray.filter((item) => {\n        if (JSON.parse(item).status === _constants__WEBPACK_IMPORTED_MODULE_3__.STATUSES.done) {\n          return _element__WEBPACK_IMPORTED_MODULE_0__.itemArray;\n        }\n      });\n\n      ul.element.textContent = \"\";\n      doneArr.forEach((item) => {\n        const parsedItem = JSON.parse(item);\n        const newTodo = new _listElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n          \"li\",\n          `list ${parsedItem.status ? \"active\" : \"done\"}`,\n          \"\",\n          parsedItem.value,\n          ul.element,\n          parsedItem.id - 1,\n          parsedItem.status\n        );\n        newTodo.mount();\n        newTodo.render();\n        const deleteButton = new _spanButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n          \"cross invisible\",\n          \"\",\n          \"\",\n          newTodo.element\n        );\n        const toggleButton = new _spanButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n          \"to_change\",\n          \"\",\n          \"\",\n          newTodo.element\n        );\n        deleteButton.mount();\n        deleteButton.render();\n        toggleButton.mount();\n        toggleButton.render();\n        newTodo.handleLiMouseover(deleteButton);\n        newTodo.handleLiMouseout(deleteButton);\n        newTodo.handleSpanClick(deleteButton, counter);\n        newTodo.handleSpanToggleClick(toggleButton, counter);\n        button.handlerClearCompletedButton(newTodo, counter, _constants__WEBPACK_IMPORTED_MODULE_3__.STATUSES.done);\n        if (newTodo.element.classList.contains(\"done\")) {\n          toggleButton.element.classList.add(\"to_change_done\");\n        }\n      });\n\n      counter.element.textContent = doneArr.length;\n\n      this.element.classList.add(\"clicked\");\n      buttonAll.element.classList.remove(\"clicked\");\n      buttonActive.element.classList.remove(\"clicked\");\n      localStorage.setItem(\"currentFilter\", \"currentFilterComplited\");\n    });\n  }\n  handlerClearCompletedButton(li, counter, value = _constants__WEBPACK_IMPORTED_MODULE_3__.STATUSES.active) { //const\n    this.element.addEventListener(\"click\", () => {\n      if (li.element.classList.contains(\"done\")) {\n        li.element.remove();\n        localStorage.setItem(\n          li.todoId + 1,\n          JSON.stringify(li.newStatus(_constants__WEBPACK_IMPORTED_MODULE_3__.STATUSES.deleted)[li.todoId])\n        );\n\n        _element__WEBPACK_IMPORTED_MODULE_0__.itemArray[li.todoId] = JSON.stringify(li.newStatus(_constants__WEBPACK_IMPORTED_MODULE_3__.STATUSES.deleted)[li.todoId]);\n        let trueArr = [];\n\n        _element__WEBPACK_IMPORTED_MODULE_0__.itemArray.forEach((item) => {\n          if (JSON.parse(item).status === value) {\n            trueArr.push(item);\n          }\n        });\n        counter.element.textContent = trueArr.length;\n      }\n    });\n  }\n}\n\n//# sourceURL=webpack://classes-webpack/./src/components/footerButton/FooterButton.js?");

/***/ }),

/***/ "./src/components/footerButton/index.js":
/*!**********************************************!*\
  !*** ./src/components/footerButton/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _FooterButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FooterButton */ \"./src/components/footerButton/FooterButton.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_FooterButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://classes-webpack/./src/components/footerButton/index.js?");

/***/ }),

/***/ "./src/components/input/Input.js":
/*!***************************************!*\
  !*** ./src/components/input/Input.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoInput)\n/* harmony export */ });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element */ \"./src/components/element/index.js\");\n/* harmony import */ var _element_Element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../element/Element.js */ \"./src/components/element/Element.js\");\n/* harmony import */ var _eventEmitter_EventEmitter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../eventEmitter/EventEmitter.js */ \"./src/eventEmitter/EventEmitter.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ \"./src/constants/index.js\");\n\n\n\n\nclass TodoInput extends _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(elementClass, elementPlaceHolder, textContent, elementParent) {\n    super(\n      \"input\",\n      elementClass,\n      elementPlaceHolder,\n      textContent,\n      elementParent\n    );\n  }\n\n  hadlerInput(ul, button, counter) {\n    this.element.addEventListener(\"keydown\", (event) => {\n      if (event.code === \"Enter\" && this.element.value !== \"\") {\n        const item = {\n          value: this.element.value,\n          status: _constants__WEBPACK_IMPORTED_MODULE_3__.STATUSES.active,\n          id: _element_Element_js__WEBPACK_IMPORTED_MODULE_1__.itemArray.length + 1,\n        };\n        localStorage.setItem(\"currentFilter\", \"currentFilterAll\");\n        localStorage.setItem(localStorage.length, JSON.stringify(item));\n        _element_Element_js__WEBPACK_IMPORTED_MODULE_1__.itemArray.push(localStorage.getItem(localStorage.length - 1));\n\n        this.element.value = \"\";\n\n        _eventEmitter_EventEmitter_js__WEBPACK_IMPORTED_MODULE_2__.myEventEmitter.emit(\"createLI\", button, counter)\n        console.log(_element_Element_js__WEBPACK_IMPORTED_MODULE_1__.itemArray);\n      }\n    });\n  }\n}\n\n\n\n//# sourceURL=webpack://classes-webpack/./src/components/input/Input.js?");

/***/ }),

/***/ "./src/components/input/index.js":
/*!***************************************!*\
  !*** ./src/components/input/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ \"./src/components/input/Input.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Input__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://classes-webpack/./src/components/input/index.js?");

/***/ }),

/***/ "./src/components/list/List.js":
/*!*************************************!*\
  !*** ./src/components/list/List.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element */ \"./src/components/element/index.js\");\n/* harmony import */ var _listElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../listElement */ \"./src/components/listElement/index.js\");\n/* harmony import */ var _spanButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spanButton */ \"./src/components/spanButton/index.js\");\n/* harmony import */ var _eventEmitter_EventEmitter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../eventEmitter/EventEmitter.js */ \"./src/eventEmitter/EventEmitter.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ \"./src/constants/index.js\");\n\n\n\n\n\n\nclass TodoList extends _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n  constructor(\n    elementClass,\n    elementPlaceHolder,\n    textContent,\n    elementParent,\n    elementChild\n  ) {\n    super(\"ul\", elementClass, elementPlaceHolder, textContent, elementParent);\n    this.elementChild = elementChild;\n  }\n\n  mount() {\n    super.mount()\n    _eventEmitter_EventEmitter_js__WEBPACK_IMPORTED_MODULE_3__.myEventEmitter.on(\"createLI\", this.renderList.bind(this))\n  }\n\n  renderList(button, counter) {\n    console.log('here')\n    const newTodo = new _listElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n      \"li\",\n      \"list\",\n      \"\",\n      JSON.parse(_element__WEBPACK_IMPORTED_MODULE_0__.itemArray[_element__WEBPACK_IMPORTED_MODULE_0__.itemArray.length - 1]).value,\n      this.element,\n      _element__WEBPACK_IMPORTED_MODULE_0__.itemArray.length - 1,\n      _constants__WEBPACK_IMPORTED_MODULE_4__.STATUSES.active\n    );\n    newTodo.mount();\n    newTodo.render();\n    const deleteButton = new _spanButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n      \"cross invisible\",\n      \"\",\n      \"\",\n      newTodo.element\n    );\n\n    counter.element.textContent = parseInt(counter.element.textContent) + 1;\n    const toggleButton = new _spanButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"to_change\", \"\", \"\", newTodo.element);\n    deleteButton.mount();\n    deleteButton.render();\n    toggleButton.mount();\n    toggleButton.render();\n    newTodo.handleLiMouseover(deleteButton);\n    newTodo.handleLiMouseout(deleteButton);\n    newTodo.handleSpanClick(deleteButton, counter);\n    newTodo.handleSpanToggleClick(toggleButton, counter);\n    button.handlerClearCompletedButton(newTodo, counter, _constants__WEBPACK_IMPORTED_MODULE_4__.STATUSES.active);\n\n\n\n  }\n\n  afterOnload(button, counter, buttonActive, buttonCompleted, buttonAll) {\n    window.onload = () => {\n      let newArr = [];\n      if (_element__WEBPACK_IMPORTED_MODULE_0__.filter === \"currentFilterActive\") {\n        newArr = _element__WEBPACK_IMPORTED_MODULE_0__.itemArray.filter((item) => {\n          if (JSON.parse(item).status === _constants__WEBPACK_IMPORTED_MODULE_4__.STATUSES.active) {\n            return _element__WEBPACK_IMPORTED_MODULE_0__.itemArray;\n          }\n        });\n        buttonActive.element.classList.add(\"clicked\");\n        buttonAll.element.classList.remove(\"clicked\");\n        let trueArr = [];\n        _element__WEBPACK_IMPORTED_MODULE_0__.itemArray.forEach((item) => {\n          if (JSON.parse(item).status === _constants__WEBPACK_IMPORTED_MODULE_4__.STATUSES.active) {\n            trueArr.push(item);\n          }\n        });\n        counter.element.textContent = trueArr.length;\n        this.element.textContent = \"\";\n        newArr.forEach((item) => {\n          const parsedItem = JSON.parse(item);\n          const newTodo = new _listElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n            \"li\",\n            `list ${parsedItem.status ? \"active\" : \"done\"}`,\n            \"\",\n            parsedItem.value,\n            this.element,\n            parsedItem.id - 1,\n            parsedItem.status\n          );\n          newTodo.mount();\n          newTodo.render();\n          const deleteButton = new _spanButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n            \"cross invisible\",\n            \"\",\n            \"\",\n            newTodo.element\n          );\n          const toggleButton = new _spanButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n            \"to_change\",\n            \"\",\n            \"\",\n            newTodo.element\n          );\n\n          deleteButton.mount();\n          deleteButton.render();\n          toggleButton.mount();\n          toggleButton.render();\n          newTodo.handleLiMouseover(deleteButton);\n          newTodo.handleLiMouseout(deleteButton);\n          newTodo.handleSpanClick(deleteButton, counter);\n          newTodo.handleSpanToggleClick(toggleButton, counter);\n          button.handlerClearCompletedButton(newTodo, counter, _constants__WEBPACK_IMPORTED_MODULE_4__.STATUSES.active);\n          if (newTodo.element.classList.contains(\"done\")) {\n            toggleButton.element.classList.add(\"to_change_done\");\n          }\n        });\n      } else if (_element__WEBPACK_IMPORTED_MODULE_0__.filter === \"currentFilterComplited\") {\n        newArr = _element__WEBPACK_IMPORTED_MODULE_0__.itemArray.filter((item) => {\n          if (JSON.parse(item).status === _constants__WEBPACK_IMPORTED_MODULE_4__.STATUSES.done) {\n            return _element__WEBPACK_IMPORTED_MODULE_0__.itemArray;\n          }\n        });\n        buttonCompleted.element.classList.add(\"clicked\");\n        buttonAll.element.classList.remove(\"clicked\");\n        let trueArr = [];\n        _element__WEBPACK_IMPORTED_MODULE_0__.itemArray.forEach((item) => {\n          if (JSON.parse(item).status === _constants__WEBPACK_IMPORTED_MODULE_4__.STATUSES.done) {\n            trueArr.push(item);\n          }\n        });\n        counter.element.textContent = trueArr.length;\n        this.element.textContent = \"\";\n        newArr.forEach((item) => {\n          const parsedItem = JSON.parse(item);\n          const newTodo = new _listElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n            \"li\",\n            `list ${parsedItem.status ? \"active\" : \"done\"}`,\n            \"\",\n            parsedItem.value,\n            this.element,\n            parsedItem.id - 1,\n            parsedItem.status\n          );\n          newTodo.mount();\n          newTodo.render();\n          const deleteButton = new _spanButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n            \"cross invisible\",\n            \"\",\n            \"\",\n            newTodo.element\n          );\n          const toggleButton = new _spanButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n            \"to_change\",\n            \"\",\n            \"\",\n            newTodo.element\n          );\n\n          deleteButton.mount();\n          deleteButton.render();\n          toggleButton.mount();\n          toggleButton.render();\n          newTodo.handleLiMouseover(deleteButton);\n          newTodo.handleLiMouseout(deleteButton);\n          newTodo.handleSpanClick(deleteButton, counter);\n          newTodo.handleSpanToggleClick(toggleButton, counter);\n          button.handlerClearCompletedButton(newTodo, counter, _constants__WEBPACK_IMPORTED_MODULE_4__.STATUSES.done);\n          if (newTodo.element.classList.contains(\"done\")) {\n            toggleButton.element.classList.add(\"to_change_done\");\n          }\n        });\n      } else {\n        newArr = _element__WEBPACK_IMPORTED_MODULE_0__.itemArray.filter((item) => {\n          if (JSON.parse(item).status !== _constants__WEBPACK_IMPORTED_MODULE_4__.STATUSES.deleted) {\n            return _element__WEBPACK_IMPORTED_MODULE_0__.itemArray;\n          }\n        });\n\n        buttonActive.element.classList.remove(\"clicked\");\n        buttonCompleted.element.classList.remove(\"clicked\");\n        buttonAll.element.classList.add(\"clicked\");\n        let trueArr = [];\n        _element__WEBPACK_IMPORTED_MODULE_0__.itemArray.forEach((item) => {\n          if (JSON.parse(item).status === _constants__WEBPACK_IMPORTED_MODULE_4__.STATUSES.active) {\n            trueArr.push(item);\n          }\n        });\n        counter.element.textContent = trueArr.length;\n        this.element.textContent = \"\";\n        newArr.forEach((item) => {\n          const parsedItem = JSON.parse(item);\n          const newTodo = new _listElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n            \"li\",\n            `list ${parsedItem.status ? \"active\" : \"done\"}`,\n            \"\",\n            parsedItem.value,\n            this.element,\n            parsedItem.id - 1,\n            parsedItem.status\n          );\n          newTodo.mount();\n          newTodo.render();\n          const deleteButton = new _spanButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n            \"cross invisible\",\n            \"\",\n            \"\",\n            newTodo.element\n          );\n          const toggleButton = new _spanButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n            \"to_change\",\n            \"\",\n            \"\",\n            newTodo.element\n          );\n\n          deleteButton.mount();\n          deleteButton.render();\n          toggleButton.mount();\n          toggleButton.render();\n          newTodo.handleLiMouseover(deleteButton);\n          newTodo.handleLiMouseout(deleteButton);\n          newTodo.handleSpanClick(deleteButton, counter);\n          newTodo.handleSpanToggleClick(toggleButton, counter);\n          button.handlerClearCompletedButton(newTodo, counter, _constants__WEBPACK_IMPORTED_MODULE_4__.STATUSES.active);\n          if (newTodo.element.classList.contains(\"done\")) {\n            toggleButton.element.classList.add(\"to_change_done\");\n          }\n        });\n      }\n    };\n  }\n}\n\n\n\n//# sourceURL=webpack://classes-webpack/./src/components/list/List.js?");

/***/ }),

/***/ "./src/components/list/index.js":
/*!**************************************!*\
  !*** ./src/components/list/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ \"./src/components/list/List.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_List__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://classes-webpack/./src/components/list/index.js?");

/***/ }),

/***/ "./src/components/listElement/ListElement.js":
/*!***************************************************!*\
  !*** ./src/components/listElement/ListElement.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoListItem)\n/* harmony export */ });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element */ \"./src/components/element/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ \"./src/constants/index.js\");\n\n\n\n\n\nclass TodoListItem extends _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(\n    element,\n    elementClass,\n    elementPlaceHolder,\n    textContent,\n    elementParent,\n    todoId,\n    status\n  ) {\n    super(\n      element,\n      elementClass,\n      elementPlaceHolder,\n      textContent,\n      elementParent\n    );\n    this.todoId = todoId;\n    this.status = status;\n  }\n  handleLiMouseover(span) {\n    this.element.addEventListener(\"mouseover\", () => {\n      span.element.classList.remove(\"invisible\");\n    });\n  }\n  handleLiMouseout(span) {\n    this.element.addEventListener(\"mouseout\", () => {\n      span.element.classList.add(\"invisible\");\n    });\n  }\n  handleSpanClick(span, counter) {\n    span.element.addEventListener(\"click\", () => {\n      this.element.remove();\n\n      \n        localStorage.setItem(\n          this.todoId+1,\n          JSON.stringify(this.newStatus(_constants__WEBPACK_IMPORTED_MODULE_1__.STATUSES.deleted)[this.todoId]) \n        );\n        \n      _element__WEBPACK_IMPORTED_MODULE_0__.itemArray[this.todoId] = JSON.stringify(this.newStatus(_constants__WEBPACK_IMPORTED_MODULE_1__.STATUSES.deleted)[this.todoId]);\n      if (!this.element.classList.contains(\"done\")) {\n        counter.element.textContent = parseInt(counter.element.textContent) - 1;\n      }\n    });\n  }\n  handleSpanToggleClick(toggleSpan, counter) {\n    toggleSpan.element.addEventListener(\"click\", () => {\n      if (!this.element.classList.contains(\"done\")) {\n        this.element.classList.remove(\"active\");\n        this.element.classList.add(\"done\");\n        toggleSpan.element.classList.add(\"to_change_done\");\n\n        _element__WEBPACK_IMPORTED_MODULE_0__.itemArray[this.todoId] = JSON.stringify(this.newStatus(_constants__WEBPACK_IMPORTED_MODULE_1__.STATUSES.done)[this.todoId]);\n\n        localStorage.setItem(\n          this.todoId + 1,\n          JSON.stringify(this.newStatus(_constants__WEBPACK_IMPORTED_MODULE_1__.STATUSES.done)[this.todoId])\n        );\n        counter.element.textContent = parseInt(counter.element.textContent) - 1;\n      } else {\n        this.element.classList.remove(\"done\");\n        this.element.classList.add(\"active\");\n        toggleSpan.element.classList.remove(\"to_change_done\");\n\n        _element__WEBPACK_IMPORTED_MODULE_0__.itemArray[this.todoId] = JSON.stringify(this.newStatus(_constants__WEBPACK_IMPORTED_MODULE_1__.STATUSES.active)[this.todoId]);\n\n        localStorage.setItem(\n          this.todoId + 1,\n          JSON.stringify(this.newStatus(_constants__WEBPACK_IMPORTED_MODULE_1__.STATUSES.active)[this.todoId])\n        );\n        counter.element.textContent = parseInt(counter.element.textContent) + 1;\n      }\n\n    });\n  }\n\n  newStatus(status) {\n    const newValArr = [];\n    _element__WEBPACK_IMPORTED_MODULE_0__.itemArray.forEach((value) => {\n      const newValue = JSON.parse(value);\n      newValue.status = status;\n      newValArr.push(newValue);\n    });\n\n    return newValArr;\n  }\n}\n\n//# sourceURL=webpack://classes-webpack/./src/components/listElement/ListElement.js?");

/***/ }),

/***/ "./src/components/listElement/index.js":
/*!*********************************************!*\
  !*** ./src/components/listElement/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ListElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListElement */ \"./src/components/listElement/ListElement.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ListElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://classes-webpack/./src/components/listElement/index.js?");

/***/ }),

/***/ "./src/components/main/Main.js":
/*!*************************************!*\
  !*** ./src/components/main/Main.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderAll\": () => (/* binding */ renderAll)\n/* harmony export */ });\n/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../title */ \"./src/components/title/index.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../input */ \"./src/components/input/index.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list */ \"./src/components/list/index.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer */ \"./src/components/footer/index.js\");\n/* harmony import */ var _footerButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footerButton */ \"./src/components/footerButton/index.js\");\n/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../counter */ \"./src/components/counter/index.js\");\n\n\n\n\n\n\n\n\n\n\nconst root = document.querySelector(\"#root\")\n\nclass Main {\n  mount() {\n    (this.newTitle = new _title__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"title\", \"\", \"todos\", root)),\n      this.newTitle.mount();\n    (this.newInput = new _input__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n      \"new-todo\",\n      \"What needs to be done?\",\n      \"\",\n      root\n    )),\n      this.newInput.mount();\n    this.newUl = new _list__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"\", \"\", \"\", root, \"\");\n    this.newUl.mount();\n    this.newFooter = new _footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"footer\", \"\", \"\", root);\n    this.newFooter.mount();\n    this.newFooterLower = new _footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"lower_footer\", \"\", \"\", root);\n    this.newFooterLower.mount();\n    this.newFooterLowest = new _footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\n      \"lowest_footer\",\n      \"\",\n      \"\",\n      root\n    );\n    this.newFooterLowest.mount();\n    this.counterNum = new _counter__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\"items\", \"\", 0, this.newFooter.element);\n    this.counterNum.mount();\n    this.counterTxt = new _counter__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\n      \"items\",\n      \"\",\n      \"items left\",\n      this.newFooter.element\n    );\n    this.counterTxt.mount();\n    this.newButtonAll = new _footerButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\n      \"button all clicked\",\n      \"\",\n      \"All\",\n      this.newFooter.element\n    );\n    this.newButtonAll.mount();\n    this.newButtonActive = new _footerButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\n      \"button active\",\n      \"\",\n      \"Active\",\n      this.newFooter.element\n    );\n    this.newButtonActive.mount();\n    this.newButtonCompleted = new _footerButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\n      \"button completed\",\n      \"\",\n      \"Completed\",\n      this.newFooter.element\n    );\n    this.newButtonCompleted.mount();\n    this.newButtonClear = new _footerButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\n      \"button clear\",\n      \"\",\n      \"Clear completed\",\n      this.newFooter.element\n    );\n    this.newButtonClear.mount();\n  }\n\n  render() {\n    this.newTitle.render();\n    this.newInput.render();\n    this.newUl.render();\n    this.newFooter.render();\n    this.newFooterLower.render();\n    this.newFooterLowest.render();\n    this.counterNum.render();\n    this.counterTxt.render();\n    this.newButtonAll.render();\n    this.newButtonActive.render();\n    this.newButtonCompleted.render();\n    this.newButtonClear.render();\n  }\n  handlers() {\n    this.newButtonAll.handlerAllButton(\n      this.newUl,\n      this.newButtonClear,\n      this.counterNum,\n      this.newButtonCompleted,\n      this.newButtonActive\n    );\n    this.newButtonActive.handlerActiveButton(\n      this.newUl,\n      this.newButtonClear,\n      this.counterNum,\n      this.newButtonAll,\n      this.newButtonCompleted\n    );\n    this.newButtonCompleted.handlerCompletedButton(\n      this.newUl,\n      this.newButtonClear,\n      this.counterNum,\n      this.newButtonAll,\n      this.newButtonActive\n    );\n    this.newInput.hadlerInput(this.newUl, this.newButtonClear, this.counterNum);\n\n    this.newUl.afterOnload(\n      this.newButtonClear,\n      this.counterNum,\n      this.newButtonActive,\n      this.newButtonCompleted,\n      this.newButtonAll\n    );\n  }\n}\n\nconst renderAll = new Main();\n\n\n\n//# sourceURL=webpack://classes-webpack/./src/components/main/Main.js?");

/***/ }),

/***/ "./src/components/main/index.js":
/*!**************************************!*\
  !*** ./src/components/main/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderAll\": () => (/* reexport safe */ _Main_js__WEBPACK_IMPORTED_MODULE_0__.renderAll)\n/* harmony export */ });\n/* harmony import */ var _Main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.js */ \"./src/components/main/Main.js\");\n\n\n\n//# sourceURL=webpack://classes-webpack/./src/components/main/index.js?");

/***/ }),

/***/ "./src/components/spanButton/SpanButton.js":
/*!*************************************************!*\
  !*** ./src/components/spanButton/SpanButton.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoSpanButton)\n/* harmony export */ });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element */ \"./src/components/element/index.js\");\n\n\nclass TodoSpanButton extends _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(elementClass, elementPlaceHolder, textContent, elementParent) {\n      super(\"span\", elementClass, elementPlaceHolder, textContent, elementParent);\n    }\n  }\n  \n\n//# sourceURL=webpack://classes-webpack/./src/components/spanButton/SpanButton.js?");

/***/ }),

/***/ "./src/components/spanButton/index.js":
/*!********************************************!*\
  !*** ./src/components/spanButton/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _SpanButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpanButton */ \"./src/components/spanButton/SpanButton.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_SpanButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://classes-webpack/./src/components/spanButton/index.js?");

/***/ }),

/***/ "./src/components/title/Title.js":
/*!***************************************!*\
  !*** ./src/components/title/Title.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoTitle)\n/* harmony export */ });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element */ \"./src/components/element/index.js\");\n\n\n\nclass TodoTitle extends _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(elementClass, elementPlaceHolder, textContent, elementParent) {\n      super(\"h1\", elementClass, elementPlaceHolder, textContent, elementParent);\n    }\n  }\n  \n  \n\n//# sourceURL=webpack://classes-webpack/./src/components/title/Title.js?");

/***/ }),

/***/ "./src/components/title/index.js":
/*!***************************************!*\
  !*** ./src/components/title/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Title */ \"./src/components/title/Title.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Title__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://classes-webpack/./src/components/title/index.js?");

/***/ }),

/***/ "./src/constants/Statuses.js":
/*!***********************************!*\
  !*** ./src/constants/Statuses.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"STATUSES\": () => (/* binding */ STATUSES)\n/* harmony export */ });\nconst STATUSES={\n    active:1,\n    done:0,\n    deleted:2\n}\n\n\n//# sourceURL=webpack://classes-webpack/./src/constants/Statuses.js?");

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"STATUSES\": () => (/* reexport safe */ _Statuses__WEBPACK_IMPORTED_MODULE_0__.STATUSES)\n/* harmony export */ });\n/* harmony import */ var _Statuses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Statuses */ \"./src/constants/Statuses.js\");\n\n\n\n//# sourceURL=webpack://classes-webpack/./src/constants/index.js?");

/***/ }),

/***/ "./src/eventEmitter/EventEmitter.js":
/*!******************************************!*\
  !*** ./src/eventEmitter/EventEmitter.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myEventEmitter\": () => (/* binding */ myEventEmitter)\n/* harmony export */ });\n\nclass EventEmitter {\n    constructor() {\n      this.events = {};\n    }\n    on(name, listener) {\n        console.log(\"on>>>\", name)\n      if (!this.events[name]) {\n        this.events[name] = [];\n      }\n  \n      this.events[name].push(listener);\n      console.log('heren q')\n    }\n    removeListener(name, listenerToRemove) {\n      if (!this.events[name]) {\n        throw new Error(`Can't remove a listener. Event \"${name}\" doesn't exits.`);\n      }\n  \n      const filterListeners = (listener) => listener !== listenerToRemove;\n  \n      this.events[name] = this.events[name].filter(filterListeners);\n    }\n    emit(name, ...data) {\n        console.log(\"events\", this.events)\n      if (!this.events[name]) {\n        throw new Error(`Can't emit an event. Event \"${name}\" doesn't exits.`);\n      }\n  \n      const fireCallbacks = (callback) => {\n        callback(...data);\n      };\n  \n      this.events[name].forEach(fireCallbacks);\n    }\n  \n  }\n\n\n  const myEventEmitter = new EventEmitter();\n\n \n\n//# sourceURL=webpack://classes-webpack/./src/eventEmitter/EventEmitter.js?");

/***/ }),

/***/ "./src/app/images/cross.png":
/*!**********************************!*\
  !*** ./src/app/images/cross.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fabe186b9fc771a0e522.png\";\n\n//# sourceURL=webpack://classes-webpack/./src/app/images/cross.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app/App.js");
/******/ 	
/******/ })()
;