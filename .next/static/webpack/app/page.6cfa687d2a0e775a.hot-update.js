"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Component_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Component/Nav */ \"(app-pages-browser)/./Component/Nav.js\");\n/* harmony import */ var _Component_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Component/Banner */ \"(app-pages-browser)/./Component/Banner.js\");\n/* harmony import */ var _Component_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Component/Section */ \"(app-pages-browser)/./Component/Section.js\");\n/* harmony import */ var _Component_NewsLetter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Component/NewsLetter */ \"(app-pages-browser)/./Component/NewsLetter.js\");\n/* harmony import */ var _Component_Pricing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Component/Pricing */ \"(app-pages-browser)/./Component/Pricing.js\");\n/* harmony import */ var _Component_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Component/Footer */ \"(app-pages-browser)/./Component/Footer.js\");\n/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-typed */ \"(app-pages-browser)/./node_modules/react-typed/dist/react-typed.js\");\n/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _assests_laptop_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/assests/laptop.jpg */ \"(app-pages-browser)/./assests/laptop.jpg\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst page = ()=>{\n    _s();\n    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n_s(page, \"67p6LeFm+neLuE3kTOJGCw8ljzI=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDdUM7QUFDTjtBQUNNO0FBQ007QUFDRTtBQUNOO0FBQ0Y7QUFFRztBQUNGO0FBQ1k7QUFHTDtBQUNKO0FBRVA7QUFFTjtBQUNPO0FBSVE7QUFDRDtBQUNEO0FBQ0Q7QUFFMUMsTUFBTW9CLE9BQU87O0lBQ1gsTUFBSyxDQUFDQyxRQUFTQyxVQUFVLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUNyQyxxQkFDRTtBQXFCSjtHQXhCTW1CO0FBMEJOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE5hdiBmcm9tICdAL0NvbXBvbmVudC9OYXYnXG5pbXBvcnQgQmFubmVyIGZyb20gJ0AvQ29tcG9uZW50L0Jhbm5lcidcbmltcG9ydCBTZWN0aW9uUGFnZSBmcm9tICdAL0NvbXBvbmVudC9TZWN0aW9uJ1xuaW1wb3J0IE5ld3NMZXR0ZXIgZnJvbSAnQC9Db21wb25lbnQvTmV3c0xldHRlcidcbmltcG9ydCBQcmljaW5nIGZyb20gJ0AvQ29tcG9uZW50L1ByaWNpbmcnXG5pbXBvcnQgRm9vdGVyIGZyb20gJ0AvQ29tcG9uZW50L0Zvb3RlcidcblxuaW1wb3J0IHsgQ2lVbmxvY2sgfSBmcm9tIFwicmVhY3QtaWNvbnMvY2lcIjtcbmltcG9ydCB7IE1kUGFpZCB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuaW1wb3J0IHsgTWRXb3Jrc3BhY2VQcmVtaXVtIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5cblxuaW1wb3J0IHsgQWlPdXRsaW5lTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuaW1wb3J0IHsgSW9NZENsb3NlIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XG5cbmltcG9ydCBSZWFjdFR5cGVkIGZyb20gJ3JlYWN0LXR5cGVkJ1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBiZyBmcm9tICdAL2Fzc2VzdHMvbGFwdG9wLmpwZydcblxuXG5cbmltcG9ydCB7IEZhSW5zdGFncmFtIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyBGYUZhY2Vib29rIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyBGYVR3aXR0ZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IEZhR2l0aHViIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5cbmNvbnN0IHBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0W3RvZ2dsZSAsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSkgOyBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIDxOYXYgLz4gKi99XG4gIFxuXG5cbiAgICAgIHsvKiA8QmFubmVyIC8+ICovfVxuXG4gICAgICB7LyogPFNlY3Rpb25QYWdlLz4gICovfVxuICBcblxuICAgICAgey8qIDxOZXdzTGV0dGVyLz4gKi99XG4gICBcblxuICAgICAgey8qIDxQcmljaW5nLz4gICovfVxuICAgICAgXG5cbiAgICAgIHsvKiA8Rm9vdGVyLz4gKi99XG4gICBcbiAgICA8Lz5cbiAgKVxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFnZVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJOYXYiLCJCYW5uZXIiLCJTZWN0aW9uUGFnZSIsIk5ld3NMZXR0ZXIiLCJQcmljaW5nIiwiRm9vdGVyIiwiQ2lVbmxvY2siLCJNZFBhaWQiLCJNZFdvcmtzcGFjZVByZW1pdW0iLCJBaU91dGxpbmVNZW51IiwiSW9NZENsb3NlIiwiUmVhY3RUeXBlZCIsIkltYWdlIiwiYmciLCJGYUluc3RhZ3JhbSIsIkZhRmFjZWJvb2siLCJGYVR3aXR0ZXIiLCJGYUdpdGh1YiIsInBhZ2UiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});