"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_razazaidi_Documents_GitHub_wave_app_buildspace_next_javascript_starter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_razazaidi_Documents_GitHub_wave_app_buildspace_next_javascript_starter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_razazaidi_Documents_GitHub_wave_app_buildspace_next_javascript_starter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @thirdweb-dev/react */ \"./node_modules/@thirdweb-dev/react/dist/index.js\");\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ \"../node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var address = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useAddress)();\n    var connectWithMetamask = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useMetamask)();\n    var disconnectWallet = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useDisconnect)();\n    var contract = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useContract)(\"0xE0ab3D51a3374c371c5D8a39Dc1418FE399ae2EE\").contract;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), myWaves = ref1[0], setMywaves = ref1[1];\n    // useEffect(() => {\n    //   if (contract) {\n    //     (async () => {\n    //       const getWaves = await contract?.functions?.getTotalWaves();\n    //       setMywaves(getWaves);\n    //     })();\n    //   }\n    // }, [contract]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var ref;\n        console.log(\"getting the waves\");\n        var totalWaves = contract === null || contract === void 0 ? void 0 : (ref = contract.functions) === null || ref === void 0 ? void 0 : ref.getTotalWaves();\n        console.log(\"setting wave\");\n        console.log(totalWaves);\n        setMywaves(web3__WEBPACK_IMPORTED_MODULE_4___default().utils.hexToNumberString(totalWaves === null || totalWaves === void 0 ? void 0 : totalWaves._hex));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (contract) {\n            _asyncToGenerator(_Users_razazaidi_Documents_GitHub_wave_app_buildspace_next_javascript_starter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var totalWaves;\n                return _Users_razazaidi_Documents_GitHub_wave_app_buildspace_next_javascript_starter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return nftCollection.getAll();\n                        case 2:\n                            totalWaves = _ctx.sent;\n                            setMywaves(totalWaves);\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }))();\n        }\n    }, [\n        totalWaves\n    ]);\n    var createWave = function() {\n        var _ref = _asyncToGenerator(_Users_razazaidi_Documents_GitHub_wave_app_buildspace_next_javascript_starter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref;\n            return _Users_razazaidi_Documents_GitHub_wave_app_buildspace_next_javascript_starter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ;\n                        console.log(\"trying\");\n                        _ctx.next = 5;\n                        return contract === null || contract === void 0 ? void 0 : (ref = contract.functions) === null || ref === void 0 ? void 0 : ref.wave();\n                    case 5:\n                        console.log(contract);\n                        // getWaves()\n                        console.log(\"trying again\");\n                        _ctx.next = 12;\n                        break;\n                    case 9:\n                        _ctx.prev = 9;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(\"error:\", _ctx.t0);\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    9\n                ]\n            ]);\n        }));\n        return function createWave() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: address ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: disconnectWallet,\n                    children: \"Disconnect Wallet\"\n                }, void 0, false, {\n                    fileName: \"/Users/razazaidi/Documents/GitHub/wave-app-buildspace/next-javascript-starter/pages/index.js\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Your address: \",\n                        address\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/razazaidi/Documents/GitHub/wave-app-buildspace/next-javascript-starter/pages/index.js\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: [\n                        \" \",\n                        myWaves,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/razazaidi/Documents/GitHub/wave-app-buildspace/next-javascript-starter/pages/index.js\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: createWave,\n                    children: \"create a wave\"\n                }, void 0, false, {\n                    fileName: \"/Users/razazaidi/Documents/GitHub/wave-app-buildspace/next-javascript-starter/pages/index.js\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n            onClick: connectWithMetamask,\n            children: \"Connect with Metamask\"\n        }, void 0, false, {\n            fileName: \"/Users/razazaidi/Documents/GitHub/wave-app-buildspace/next-javascript-starter/pages/index.js\",\n            lineNumber: 63,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/razazaidi/Documents/GitHub/wave-app-buildspace/next-javascript-starter/pages/index.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this));\n};\n_s(Home, \"HH7YEonoLLFAlnUnWAGI4T48Lyg=\", false, function() {\n    return [\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useAddress,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useMetamask,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useDisconnect,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useContract\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ckIsT0FBTzs7Ozs7Ozs0RkFDeEJzQixDQUFFOzt3QkFBQyxDQUFDO3dCQUFDbEIsT0FBTzt3QkFBQyxDQUFDOzs7Ozs7OzRGQUNkZSxDQUFNO29CQUFDQyxPQUFPLEVBQUVKLFVBQVU7OEJBQUUsQ0FBYTs7Ozs7Ozt1R0FHM0NHLENBQU07WUFBQ0MsT0FBTyxFQUFFbkIsbUJBQW1CO3NCQUFFLENBQXFCOzs7Ozs7Ozs7OztBQUluRSxDQUFDO0dBN0R1QkYsSUFBSTs7UUFDVlIsMkRBQVU7UUFDRUUsNERBQVc7UUFDZEQsOERBQWE7UUFDakJFLDREQUFXOzs7S0FKVkssSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUFkZHJlc3MsIHVzZURpc2Nvbm5lY3QsIHVzZU1ldGFtYXNrLCB1c2VDb250cmFjdCB9IGZyb20gJ0B0aGlyZHdlYi1kZXYvcmVhY3QnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJpZ051bWJlciB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBhZGRyZXNzID0gdXNlQWRkcmVzcygpO1xuICBjb25zdCBjb25uZWN0V2l0aE1ldGFtYXNrID0gdXNlTWV0YW1hc2soKTtcbiAgY29uc3QgZGlzY29ubmVjdFdhbGxldCA9IHVzZURpc2Nvbm5lY3QoKTtcbiAgY29uc3QgeyBjb250cmFjdCB9ID0gdXNlQ29udHJhY3QoXCIweEUwYWIzRDUxYTMzNzRjMzcxYzVEOGEzOURjMTQxOEZFMzk5YWUyRUVcIik7XG4gIGNvbnN0IFtteVdhdmVzLCBzZXRNeXdhdmVzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBpZiAoY29udHJhY3QpIHtcbiAgLy8gICAgIChhc3luYyAoKSA9PiB7XG4gIC8vICAgICAgIGNvbnN0IGdldFdhdmVzID0gYXdhaXQgY29udHJhY3Q/LmZ1bmN0aW9ucz8uZ2V0VG90YWxXYXZlcygpO1xuICAvLyAgICAgICBzZXRNeXdhdmVzKGdldFdhdmVzKTtcbiAgLy8gICAgIH0pKCk7XG4gIC8vICAgfVxuICAvLyB9LCBbY29udHJhY3RdKTtcbnVzZUVmZmVjdCgoKSA9PntcbiAgXG4gICAgY29uc29sZS5sb2coXCJnZXR0aW5nIHRoZSB3YXZlc1wiKVxuICAgIGNvbnN0IHRvdGFsV2F2ZXMgPSBjb250cmFjdD8uZnVuY3Rpb25zPy5nZXRUb3RhbFdhdmVzKCk7XG4gICAgY29uc29sZS5sb2coXCJzZXR0aW5nIHdhdmVcIilcbiAgICBjb25zb2xlLmxvZyh0b3RhbFdhdmVzKVxuICAgIHNldE15d2F2ZXMoV2ViMy51dGlscy5oZXhUb051bWJlclN0cmluZyh0b3RhbFdhdmVzPy5faGV4KSk7XG59LFtdXG4pXG5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gIGlmIChjb250cmFjdCkge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB0b3RhbFdhdmVzID0gYXdhaXQgbmZ0Q29sbGVjdGlvbi5nZXRBbGwoKTtcbiAgICAgIHNldE15d2F2ZXModG90YWxXYXZlcyk7XG5cbiAgICB9KSgpO1xuICB9XG59LCBbdG90YWxXYXZlc10pO1xuXG5jb25zdCBjcmVhdGVXYXZlID0gYXN5bmMgKCkgPT4ge1xuICB0cnl7XG4gICAgY29uc29sZS5sb2coXCJ0cnlpbmdcIilcbiAgICBhd2FpdCBjb250cmFjdD8uZnVuY3Rpb25zPy53YXZlKClcbiAgICBjb25zb2xlLmxvZyhjb250cmFjdClcbiAgICAvLyBnZXRXYXZlcygpXG4gICAgY29uc29sZS5sb2coXCJ0cnlpbmcgYWdhaW5cIilcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgY29uc29sZS5sb2coXCJlcnJvcjpcIiwgZXJyb3IpXG4gIH1cbn1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7YWRkcmVzcyA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Rpc2Nvbm5lY3RXYWxsZXR9PkRpc2Nvbm5lY3QgV2FsbGV0PC9idXR0b24+XG4gICAgICAgICAgPHA+WW91ciBhZGRyZXNzOiB7YWRkcmVzc308L3A+XG4gICAgICAgICAgPGgxPiB7bXlXYXZlc30gPC9oMT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NyZWF0ZVdhdmV9PmNyZWF0ZSBhIHdhdmU8L2J1dHRvbj5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Nvbm5lY3RXaXRoTWV0YW1hc2t9PkNvbm5lY3Qgd2l0aCBNZXRhbWFzazwvYnV0dG9uPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VBZGRyZXNzIiwidXNlRGlzY29ubmVjdCIsInVzZU1ldGFtYXNrIiwidXNlQ29udHJhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJpZ051bWJlciIsIldlYjMiLCJIb21lIiwiYWRkcmVzcyIsImNvbm5lY3RXaXRoTWV0YW1hc2siLCJkaXNjb25uZWN0V2FsbGV0IiwiY29udHJhY3QiLCJteVdhdmVzIiwic2V0TXl3YXZlcyIsImNvbnNvbGUiLCJsb2ciLCJ0b3RhbFdhdmVzIiwiZnVuY3Rpb25zIiwiZ2V0VG90YWxXYXZlcyIsInV0aWxzIiwiaGV4VG9OdW1iZXJTdHJpbmciLCJfaGV4IiwibmZ0Q29sbGVjdGlvbiIsImdldEFsbCIsImNyZWF0ZVdhdmUiLCJ3YXZlIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsInAiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});