webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/dishes/[dish].js":
/*!********************************!*\
  !*** ./pages/dishes/[dish].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _components_dishes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/dishes */ "./components/dishes.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/context */ "./components/context.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _jsxFileName = "C:\\Users\\amato\\OneDrive\\Desktop\\MIT XPRO\\restaurant_capstone\\pages\\dishes\\[dish].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function DishList(props) {
  _s();

  const {
    Component,
    pageProps
  } = props;
  var {
    cart,
    addItem,
    removeItem,
    user,
    setUser,
    userName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_context__WEBPACK_IMPORTED_MODULE_5__["default"]);
  console.log(props.search);
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
  console.log(`URL: ${API_URL}`);
  const {
    0: query,
    1: setQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const link = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["HttpLink"]({
    uri: `${API_URL}/graphql`
  });
  const cache = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]();
  const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
    link,
    cache
  });
  const GET_RESTAURANTS = _apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"]`
    query {
      restaurants {
        id
        name
        description
        image {
          url
        }
      }
    }
  `;
  const {
    loading,
    error,
    data
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(GET_RESTAURANTS);
  if (loading) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 23
    }
  }, "Loading...");
  if (error) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, "ERROR");
  if (!data) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, "Not found");
  console.log(`Query Data: ${JSON.stringify(data.restaurants)}`); // const renderDishes = (restaurantID) => {
  //   return (<Dishes restId={restaurantID}> </Dishes>)
  // };

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, " restaurants go here"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, "dishes go here"));
}

_s(DishList, "6z9PVCCeU9xjb2C4qFKPQfjD5F8=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"]];
});

_c = DishList;
/* harmony default export */ __webpack_exports__["default"] = (DishList);

var _c;

$RefreshReg$(_c, "DishList");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGlzaGVzL1tkaXNoXS5qcyJdLCJuYW1lcyI6WyJEaXNoTGlzdCIsInByb3BzIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2FydCIsImFkZEl0ZW0iLCJyZW1vdmVJdGVtIiwidXNlciIsInNldFVzZXIiLCJ1c2VyTmFtZSIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwiY29uc29sZSIsImxvZyIsInNlYXJjaCIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJ1c2VTdGF0ZSIsImxpbmsiLCJIdHRwTGluayIsInVyaSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImNsaWVudCIsIkFwb2xsb0NsaWVudCIsIkdFVF9SRVNUQVVSQU5UUyIsImdxbCIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJ1c2VRdWVyeSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN0YXVyYW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBV0EsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFBQTs7QUFDdkIsUUFBTTtBQUFFQyxhQUFGO0FBQWFDO0FBQWIsTUFBMkJGLEtBQWpDO0FBQ0EsTUFBSTtBQUFDRyxRQUFEO0FBQU1DLFdBQU47QUFBY0MsY0FBZDtBQUEwQkMsUUFBMUI7QUFBZ0NDLFdBQWhDO0FBQXlDQztBQUF6QyxNQUFxREMsd0RBQVUsQ0FBQ0MsMkRBQUQsQ0FBbkU7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlaLEtBQUssQ0FBQ2EsTUFBbEI7QUFFQSxRQUFNQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkFBWixJQUFtQyx1QkFBbkQ7QUFDRU4sU0FBTyxDQUFDQyxHQUFSLENBQWEsUUFBT0UsT0FBUSxFQUE1QjtBQUNBLFFBQU07QUFBQSxPQUFDSSxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLElBQUlDLHVEQUFKLENBQWE7QUFBRUMsT0FBRyxFQUFHLEdBQUVULE9BQVE7QUFBbEIsR0FBYixDQUFiO0FBQ0EsUUFBTVUsS0FBSyxHQUFHLElBQUlDLDREQUFKLEVBQWQ7QUFDQSxRQUFNQyxNQUFNLEdBQUcsSUFBSUMsMkRBQUosQ0FBaUI7QUFBQ04sUUFBRDtBQUFNRztBQUFOLEdBQWpCLENBQWY7QUFFRixRQUFNSSxlQUFlLEdBQUdDLGtEQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FYRTtBQWFBLFFBQU07QUFBRUMsV0FBRjtBQUFXQyxTQUFYO0FBQWtCQztBQUFsQixNQUEyQkMsK0RBQVEsQ0FBQ0wsZUFBRCxDQUF6QztBQUNBLE1BQUlFLE9BQUosRUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDWCxNQUFJLENBQUNDLElBQUwsRUFBVyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDWnJCLFNBQU8sQ0FBQ0MsR0FBUixDQUFhLGVBQWNzQixJQUFJLENBQUNDLFNBQUwsQ0FBZUgsSUFBSSxDQUFDSSxXQUFwQixDQUFpQyxFQUE1RCxFQTdCd0IsQ0ErQnZCO0FBQ0E7QUFDQTs7QUFFRSxTQUNFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNGLE1BQUMsOENBQUQ7QUFBSyxNQUFFLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURFLEVBS0YsTUFBQyw4Q0FBRDtBQUFLLE1BQUUsRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTEUsQ0FERjtBQVlEOztHQS9DTXJDLFE7VUF5QjBCa0MsdUQ7OztLQXpCMUJsQyxRO0FBaURRQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xZGI4MzVkZmVhYzU2NGY0NmEwOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtncWwsdXNlUXVlcnl9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHtBcG9sbG9Qcm92aWRlcixBcG9sbG9DbGllbnQsSHR0cExpbmssIEluTWVtb3J5Q2FjaGV9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IERpc2hlcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9kaXNoZXNcIlxyXG5pbXBvcnQge3VzZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0JztcclxuXHJcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbnRleHRcIlxyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBDYXJkLFxyXG4gIENhcmRCb2R5LFxyXG4gIENhcmRJbWcsXHJcbiAgQ2FyZFRleHQsXHJcbiAgQ2FyZFRpdGxlLFxyXG4gIENvbnRhaW5lcixcclxuICBSb3csXHJcbiAgQ29sfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5cclxuZnVuY3Rpb24gRGlzaExpc3QocHJvcHMpIHtcclxuICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSBwcm9wcztcclxuICB2YXIge2NhcnQsYWRkSXRlbSxyZW1vdmVJdGVtLCB1c2VyLCBzZXRVc2VyLCB1c2VyTmFtZX0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG4gIGNvbnNvbGUubG9nKHByb3BzLnNlYXJjaClcclxuXHJcbiAgY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIjtcclxuICAgIGNvbnNvbGUubG9nKGBVUkw6ICR7QVBJX1VSTH1gKVxyXG4gICAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IGxpbmsgPSBuZXcgSHR0cExpbmsoeyB1cmk6IGAke0FQSV9VUkx9L2dyYXBocWxgfSlcclxuICAgIGNvbnN0IGNhY2hlID0gbmV3IEluTWVtb3J5Q2FjaGUoKVxyXG4gICAgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7bGluayxjYWNoZX0pO1xyXG5cclxuICBjb25zdCBHRVRfUkVTVEFVUkFOVFMgPSBncWxgXHJcbiAgICBxdWVyeSB7XHJcbiAgICAgIHJlc3RhdXJhbnRzIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgIGltYWdlIHtcclxuICAgICAgICAgIHVybFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9SRVNUQVVSQU5UUylcclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVSUk9SPC9wPjtcclxuICBpZiAoIWRhdGEpIHJldHVybiA8cD5Ob3QgZm91bmQ8L3A+O1xyXG4gY29uc29sZS5sb2coYFF1ZXJ5IERhdGE6ICR7SlNPTi5zdHJpbmdpZnkoZGF0YS5yZXN0YXVyYW50cyl9YClcclxuXHJcbiAgLy8gY29uc3QgcmVuZGVyRGlzaGVzID0gKHJlc3RhdXJhbnRJRCkgPT4ge1xyXG4gIC8vICAgcmV0dXJuICg8RGlzaGVzIHJlc3RJZD17cmVzdGF1cmFudElEfT4gPC9EaXNoZXM+KVxyXG4gIC8vIH07XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgPFJvdyB4cz0nMyc+XHJcbiAgICAgIHsvKiB7cmVzdExpc3R9ICovfSByZXN0YXVyYW50cyBnbyBoZXJlXHJcbiAgICA8L1Jvdz5cclxuICBcclxuICAgIDxSb3cgeHM9JzMnPlxyXG4gICAgey8qIHtyZW5kZXJEaXNoZXMocmVzdGF1cmFudElEKX0gKi99ZGlzaGVzIGdvIGhlcmVcclxuICAgIDwvUm93PlxyXG4gXHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgRGlzaExpc3QiXSwic291cmNlUm9vdCI6IiJ9