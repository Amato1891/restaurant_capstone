webpackHotUpdate_N_E("pages/dishes/[dish]",{

/***/ "./components/context.js":
/*!*******************************!*\
  !*** ./components/context.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* /context/AppContext.js */
 // create auth context with default value
// set backup default for isAuthenticated if none is provided in Provider

const AppContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  isAuthenticated: true,
  cart: {
    items: [],
    total: 0
  },
  addItem: () => {},
  removeItem: () => {},
  user: false,
  setUser: () => {},
  restaurant: null
});
console.log(AppContext);
/* harmony default export */ __webpack_exports__["default"] = (AppContext);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0LmpzIl0sIm5hbWVzIjpbIkFwcENvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJpc0F1dGhlbnRpY2F0ZWQiLCJjYXJ0IiwiaXRlbXMiLCJ0b3RhbCIsImFkZEl0ZW0iLCJyZW1vdmVJdGVtIiwidXNlciIsInNldFVzZXIiLCJyZXN0YXVyYW50IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0NBR0E7QUFFQTs7QUFDQSxNQUFNQSxVQUFVLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQ2Y7QUFBQ0MsaUJBQWUsRUFBQyxJQUFqQjtBQUNJQyxNQUFJLEVBQUU7QUFBQ0MsU0FBSyxFQUFDLEVBQVA7QUFDTkMsU0FBSyxFQUFDO0FBREEsR0FEVjtBQUdJQyxTQUFPLEVBQUMsTUFBSSxDQUFFLENBSGxCO0FBSUlDLFlBQVUsRUFBQyxNQUFJLENBQUUsQ0FKckI7QUFLSUMsTUFBSSxFQUFDLEtBTFQ7QUFNSUMsU0FBTyxFQUFDLE1BQUksQ0FBRSxDQU5sQjtBQU9JQyxZQUFVLEVBQUU7QUFQaEIsQ0FEZSxDQUFuQjtBQVVJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWWIsVUFBWjtBQUNXQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kaXNoZXMvW2Rpc2hdLjcyYjQzYTk5YTFiMGRjZDRjMTdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAvY29udGV4dC9BcHBDb250ZXh0LmpzICovXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGNyZWF0ZSBhdXRoIGNvbnRleHQgd2l0aCBkZWZhdWx0IHZhbHVlXG5cbi8vIHNldCBiYWNrdXAgZGVmYXVsdCBmb3IgaXNBdXRoZW50aWNhdGVkIGlmIG5vbmUgaXMgcHJvdmlkZWQgaW4gUHJvdmlkZXJcbmNvbnN0IEFwcENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KFxuICAgIHtpc0F1dGhlbnRpY2F0ZWQ6dHJ1ZSwgXG4gICAgICAgIGNhcnQ6IHtpdGVtczpbXSwgXG4gICAgICAgIHRvdGFsOjB9LFxuICAgICAgICBhZGRJdGVtOigpPT57fSxcbiAgICAgICAgcmVtb3ZlSXRlbTooKT0+e30sXG4gICAgICAgIHVzZXI6ZmFsc2UsIFxuICAgICAgICBzZXRVc2VyOigpPT57fSxcbiAgICAgICAgcmVzdGF1cmFudDogbnVsbFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKEFwcENvbnRleHQpXG5leHBvcnQgZGVmYXVsdCBBcHBDb250ZXh0OyAgIl0sInNvdXJjZVJvb3QiOiIifQ==