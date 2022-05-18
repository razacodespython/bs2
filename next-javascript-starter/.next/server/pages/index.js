"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @thirdweb-dev/react */ \"@thirdweb-dev/react\");\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ \"web3\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Home() {\n    const address = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useAddress)();\n    const connectWithMetamask = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useMetamask)();\n    const disconnectWallet = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useDisconnect)();\n    const { contract  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract)(\"0xE0ab3D51a3374c371c5D8a39Dc1418FE399ae2EE\");\n    const { 0: myWaves , 1: setMywaves  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (contract) {\n            (async ()=>{\n                var ref;\n                const totalWaves = await (contract === null || contract === void 0 ? void 0 : (ref = contract.functions) === null || ref === void 0 ? void 0 : ref.getTotalWaves());\n                setMywaves(web3__WEBPACK_IMPORTED_MODULE_4___default().utils.hexToNumberString(totalWaves === null || totalWaves === void 0 ? void 0 : totalWaves._hex));\n            })();\n        }\n    });\n    const createWave = async ()=>{\n        try {\n            var ref;\n            console.log(\"trying\");\n            await (contract === null || contract === void 0 ? void 0 : (ref = contract.functions) === null || ref === void 0 ? void 0 : ref.wave());\n            console.log(contract);\n            // getWaves()\n            console.log(\"trying again\");\n        } catch (error) {\n            console.log(\"error:\", error);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: address ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: disconnectWallet,\n                    children: \"Disconnect Wallet\"\n                }, void 0, false, {\n                    fileName: \"/Users/razazaidi/Documents/GitHub/wave-app-buildspace/next-javascript-starter/pages/index.js\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Your address: \",\n                        address\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/razazaidi/Documents/GitHub/wave-app-buildspace/next-javascript-starter/pages/index.js\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \" \",\n                        myWaves,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/razazaidi/Documents/GitHub/wave-app-buildspace/next-javascript-starter/pages/index.js\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: createWave,\n                    children: \"create a wave\"\n                }, void 0, false, {\n                    fileName: \"/Users/razazaidi/Documents/GitHub/wave-app-buildspace/next-javascript-starter/pages/index.js\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: connectWithMetamask,\n            children: \"Connect with Metamask\"\n        }, void 0, false, {\n            fileName: \"/Users/razazaidi/Documents/GitHub/wave-app-buildspace/next-javascript-starter/pages/index.js\",\n            lineNumber: 45,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/razazaidi/Documents/GitHub/wave-app-buildspace/next-javascript-starter/pages/index.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUY7QUFDOUM7QUFDVDtBQUNYO0FBRVIsUUFBUSxDQUFDUSxJQUFJLEdBQUcsQ0FBQztJQUM5QixLQUFLLENBQUNDLE9BQU8sR0FBR1QsK0RBQVU7SUFDMUIsS0FBSyxDQUFDVSxtQkFBbUIsR0FBR1IsZ0VBQVc7SUFDdkMsS0FBSyxDQUFDUyxnQkFBZ0IsR0FBR1Ysa0VBQWE7SUFDdEMsS0FBSyxDQUFDLENBQUMsQ0FBQ1csUUFBUSxFQUFDLENBQUMsR0FBR1QsZ0VBQVcsQ0FBQyxDQUE0QztJQUM3RSxLQUFLLE1BQUVVLE9BQU8sTUFBRUMsVUFBVSxNQUFJVCwrQ0FBUSxDQUFDLENBQUU7SUFHM0NELGdEQUFTLEtBQU8sQ0FBQztRQUNmLEVBQUUsRUFBRVEsUUFBUSxFQUFFLENBQUM7dUJBQ0EsQ0FBQztvQkFDYUEsR0FBbUI7Z0JBQTVDLEtBQUssQ0FBQ0csVUFBVSxHQUFHLEtBQUssRUFBQ0gsUUFBUSxhQUFSQSxRQUFRLEtBQVJBLElBQUksQ0FBSkEsQ0FBbUIsR0FBbkJBLElBQUksQ0FBSkEsQ0FBbUIsSUFBbkJBLEdBQW1CLEdBQW5CQSxRQUFRLENBQUVJLFNBQVMsY0FBbkJKLEdBQW1CLEtBQW5CQSxJQUFJLENBQUpBLENBQW1CLEdBQW5CQSxJQUFJLENBQUpBLENBQW1CLEdBQW5CQSxHQUFtQixDQUFFSyxhQUFhO2dCQUMzREgsVUFBVSxDQUFDUCxtRUFBNEIsQ0FBQ1EsVUFBVSxhQUFWQSxVQUFVLEtBQVZBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLFVBQVUsQ0FBRUssSUFBSTtZQUMxRCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxLQUFLLENBQUNDLFVBQVUsYUFBZSxDQUFDO1FBQzlCLEdBQUcsRUFBQztnQkFFSVQsR0FBbUI7WUFEekJVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVE7WUFDcEIsS0FBSyxFQUFDWCxRQUFRLGFBQVJBLFFBQVEsS0FBUkEsSUFBSSxDQUFKQSxDQUFtQixHQUFuQkEsSUFBSSxDQUFKQSxDQUFtQixJQUFuQkEsR0FBbUIsR0FBbkJBLFFBQVEsQ0FBRUksU0FBUyxjQUFuQkosR0FBbUIsS0FBbkJBLElBQUksQ0FBSkEsQ0FBbUIsR0FBbkJBLElBQUksQ0FBSkEsQ0FBbUIsR0FBbkJBLEdBQW1CLENBQUVZLElBQUk7WUFDL0JGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWCxRQUFRO1lBQ3BCLEVBQWE7WUFDYlUsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBYztRQUM1QixDQUFDLENBQUMsS0FBSyxFQUFDRSxLQUFLLEVBQUMsQ0FBQztZQUNiSCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFRLFNBQUVFLEtBQUs7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFFQyxNQUFNLDZFQUNIQyxDQUFHO2tCQUNEakIsT0FBTzs7NEZBRUhrQixDQUFNO29CQUFDQyxPQUFPLEVBQUVqQixnQkFBZ0I7OEJBQUUsQ0FBaUI7Ozs7Ozs0RkFDbkRrQixDQUFDOzt3QkFBQyxDQUFjO3dCQUFDcEIsT0FBTzs7Ozs7Ozs0RkFDeEJxQixDQUFFOzt3QkFBQyxDQUFDO3dCQUFDakIsT0FBTzt3QkFBQyxDQUFDOzs7Ozs7OzRGQUNkYyxDQUFNO29CQUFDQyxPQUFPLEVBQUVQLFVBQVU7OEJBQUUsQ0FBYTs7Ozs7Ozt1R0FHM0NNLENBQU07WUFBQ0MsT0FBTyxFQUFFbEIsbUJBQW1CO3NCQUFFLENBQXFCOzs7Ozs7Ozs7OztBQUluRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1qYXZhc2NyaXB0LXN0YXJ0ZXIvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUFkZHJlc3MsIHVzZURpc2Nvbm5lY3QsIHVzZU1ldGFtYXNrLCB1c2VDb250cmFjdCB9IGZyb20gJ0B0aGlyZHdlYi1kZXYvcmVhY3QnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJpZ051bWJlciB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBhZGRyZXNzID0gdXNlQWRkcmVzcygpO1xuICBjb25zdCBjb25uZWN0V2l0aE1ldGFtYXNrID0gdXNlTWV0YW1hc2soKTtcbiAgY29uc3QgZGlzY29ubmVjdFdhbGxldCA9IHVzZURpc2Nvbm5lY3QoKTtcbiAgY29uc3QgeyBjb250cmFjdCB9ID0gdXNlQ29udHJhY3QoXCIweEUwYWIzRDUxYTMzNzRjMzcxYzVEOGEzOURjMTQxOEZFMzk5YWUyRUVcIik7XG4gIGNvbnN0IFtteVdhdmVzLCBzZXRNeXdhdmVzXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gIGlmIChjb250cmFjdCkge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB0b3RhbFdhdmVzID0gYXdhaXQgY29udHJhY3Q/LmZ1bmN0aW9ucz8uZ2V0VG90YWxXYXZlcygpO1xuICAgICAgc2V0TXl3YXZlcyhXZWIzLnV0aWxzLmhleFRvTnVtYmVyU3RyaW5nKHRvdGFsV2F2ZXM/Ll9oZXgpKTtcbiAgICB9KSgpO1xuICB9XG59LCApO1xuXG5jb25zdCBjcmVhdGVXYXZlID0gYXN5bmMgKCkgPT4ge1xuICB0cnl7XG4gICAgY29uc29sZS5sb2coXCJ0cnlpbmdcIilcbiAgICBhd2FpdCBjb250cmFjdD8uZnVuY3Rpb25zPy53YXZlKClcbiAgICBjb25zb2xlLmxvZyhjb250cmFjdClcbiAgICAvLyBnZXRXYXZlcygpXG4gICAgY29uc29sZS5sb2coXCJ0cnlpbmcgYWdhaW5cIilcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgY29uc29sZS5sb2coXCJlcnJvcjpcIiwgZXJyb3IpXG4gIH1cbn1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7YWRkcmVzcyA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Rpc2Nvbm5lY3RXYWxsZXR9PkRpc2Nvbm5lY3QgV2FsbGV0PC9idXR0b24+XG4gICAgICAgICAgPHA+WW91ciBhZGRyZXNzOiB7YWRkcmVzc308L3A+XG4gICAgICAgICAgPGgxPiB7bXlXYXZlc30gPC9oMT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NyZWF0ZVdhdmV9PmNyZWF0ZSBhIHdhdmU8L2J1dHRvbj5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Nvbm5lY3RXaXRoTWV0YW1hc2t9PkNvbm5lY3Qgd2l0aCBNZXRhbWFzazwvYnV0dG9uPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VBZGRyZXNzIiwidXNlRGlzY29ubmVjdCIsInVzZU1ldGFtYXNrIiwidXNlQ29udHJhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJpZ051bWJlciIsIldlYjMiLCJIb21lIiwiYWRkcmVzcyIsImNvbm5lY3RXaXRoTWV0YW1hc2siLCJkaXNjb25uZWN0V2FsbGV0IiwiY29udHJhY3QiLCJteVdhdmVzIiwic2V0TXl3YXZlcyIsInRvdGFsV2F2ZXMiLCJmdW5jdGlvbnMiLCJnZXRUb3RhbFdhdmVzIiwidXRpbHMiLCJoZXhUb051bWJlclN0cmluZyIsIl9oZXgiLCJjcmVhdGVXYXZlIiwiY29uc29sZSIsImxvZyIsIndhdmUiLCJlcnJvciIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@thirdweb-dev/react":
/*!**************************************!*\
  !*** external "@thirdweb-dev/react" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@thirdweb-dev/react");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();