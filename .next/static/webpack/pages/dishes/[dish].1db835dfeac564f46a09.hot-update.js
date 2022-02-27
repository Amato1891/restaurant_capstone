webpackHotUpdate_N_E("pages/dishes/[dish]",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGlzaGVzL1tkaXNoXS5qcyJdLCJuYW1lcyI6WyJEaXNoTGlzdCIsInByb3BzIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2FydCIsImFkZEl0ZW0iLCJyZW1vdmVJdGVtIiwidXNlciIsInNldFVzZXIiLCJ1c2VyTmFtZSIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwiY29uc29sZSIsImxvZyIsInNlYXJjaCIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJ1c2VTdGF0ZSIsImxpbmsiLCJIdHRwTGluayIsInVyaSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImNsaWVudCIsIkFwb2xsb0NsaWVudCIsIkdFVF9SRVNUQVVSQU5UUyIsImdxbCIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJ1c2VRdWVyeSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN0YXVyYW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBV0EsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFBQTs7QUFDdkIsUUFBTTtBQUFFQyxhQUFGO0FBQWFDO0FBQWIsTUFBMkJGLEtBQWpDO0FBQ0EsTUFBSTtBQUFDRyxRQUFEO0FBQU1DLFdBQU47QUFBY0MsY0FBZDtBQUEwQkMsUUFBMUI7QUFBZ0NDLFdBQWhDO0FBQXlDQztBQUF6QyxNQUFxREMsd0RBQVUsQ0FBQ0MsMkRBQUQsQ0FBbkU7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlaLEtBQUssQ0FBQ2EsTUFBbEI7QUFFQSxRQUFNQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkFBWixJQUFtQyx1QkFBbkQ7QUFDRU4sU0FBTyxDQUFDQyxHQUFSLENBQWEsUUFBT0UsT0FBUSxFQUE1QjtBQUNBLFFBQU07QUFBQSxPQUFDSSxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLElBQUlDLHVEQUFKLENBQWE7QUFBRUMsT0FBRyxFQUFHLEdBQUVULE9BQVE7QUFBbEIsR0FBYixDQUFiO0FBQ0EsUUFBTVUsS0FBSyxHQUFHLElBQUlDLDREQUFKLEVBQWQ7QUFDQSxRQUFNQyxNQUFNLEdBQUcsSUFBSUMsMkRBQUosQ0FBaUI7QUFBQ04sUUFBRDtBQUFNRztBQUFOLEdBQWpCLENBQWY7QUFFRixRQUFNSSxlQUFlLEdBQUdDLGtEQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FYRTtBQWFBLFFBQU07QUFBRUMsV0FBRjtBQUFXQyxTQUFYO0FBQWtCQztBQUFsQixNQUEyQkMsK0RBQVEsQ0FBQ0wsZUFBRCxDQUF6QztBQUNBLE1BQUlFLE9BQUosRUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDWCxNQUFJLENBQUNDLElBQUwsRUFBVyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDWnJCLFNBQU8sQ0FBQ0MsR0FBUixDQUFhLGVBQWNzQixJQUFJLENBQUNDLFNBQUwsQ0FBZUgsSUFBSSxDQUFDSSxXQUFwQixDQUFpQyxFQUE1RCxFQTdCd0IsQ0ErQnZCO0FBQ0E7QUFDQTs7QUFFRSxTQUNFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNGLE1BQUMsOENBQUQ7QUFBSyxNQUFFLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURFLEVBS0YsTUFBQyw4Q0FBRDtBQUFLLE1BQUUsRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTEUsQ0FERjtBQVlEOztHQS9DTXJDLFE7VUF5QjBCa0MsdUQ7OztLQXpCMUJsQyxRO0FBaURRQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kaXNoZXMvW2Rpc2hdLjFkYjgzNWRmZWFjNTY0ZjQ2YTA5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dxbCx1c2VRdWVyeX0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQge0Fwb2xsb1Byb3ZpZGVyLEFwb2xsb0NsaWVudCxIdHRwTGluaywgSW5NZW1vcnlDYWNoZX0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgRGlzaGVzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Rpc2hlc1wiXHJcbmltcG9ydCB7dXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnO1xyXG5cclxuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29udGV4dFwiXHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIENhcmQsXHJcbiAgQ2FyZEJvZHksXHJcbiAgQ2FyZEltZyxcclxuICBDYXJkVGV4dCxcclxuICBDYXJkVGl0bGUsXHJcbiAgQ29udGFpbmVyLFxyXG4gIFJvdyxcclxuICBDb2x9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5mdW5jdGlvbiBEaXNoTGlzdChwcm9wcykge1xyXG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzO1xyXG4gIHZhciB7Y2FydCxhZGRJdGVtLHJlbW92ZUl0ZW0sIHVzZXIsIHNldFVzZXIsIHVzZXJOYW1lfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcbiAgY29uc29sZS5sb2cocHJvcHMuc2VhcmNoKVxyXG5cclxuICBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiO1xyXG4gICAgY29uc29sZS5sb2coYFVSTDogJHtBUElfVVJMfWApXHJcbiAgICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgbGluayA9IG5ldyBIdHRwTGluayh7IHVyaTogYCR7QVBJX1VSTH0vZ3JhcGhxbGB9KVxyXG4gICAgY29uc3QgY2FjaGUgPSBuZXcgSW5NZW1vcnlDYWNoZSgpXHJcbiAgICBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtsaW5rLGNhY2hlfSk7XHJcblxyXG4gIGNvbnN0IEdFVF9SRVNUQVVSQU5UUyA9IGdxbGBcclxuICAgIHF1ZXJ5IHtcclxuICAgICAgcmVzdGF1cmFudHMge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgdXJsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgYDtcclxuXHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX1JFU1RBVVJBTlRTKVxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RVJST1I8L3A+O1xyXG4gIGlmICghZGF0YSkgcmV0dXJuIDxwPk5vdCBmb3VuZDwvcD47XHJcbiBjb25zb2xlLmxvZyhgUXVlcnkgRGF0YTogJHtKU09OLnN0cmluZ2lmeShkYXRhLnJlc3RhdXJhbnRzKX1gKVxyXG5cclxuICAvLyBjb25zdCByZW5kZXJEaXNoZXMgPSAocmVzdGF1cmFudElEKSA9PiB7XHJcbiAgLy8gICByZXR1cm4gKDxEaXNoZXMgcmVzdElkPXtyZXN0YXVyYW50SUR9PiA8L0Rpc2hlcz4pXHJcbiAgLy8gfTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICA8Um93IHhzPSczJz5cclxuICAgICAgey8qIHtyZXN0TGlzdH0gKi99IHJlc3RhdXJhbnRzIGdvIGhlcmVcclxuICAgIDwvUm93PlxyXG4gIFxyXG4gICAgPFJvdyB4cz0nMyc+XHJcbiAgICB7Lyoge3JlbmRlckRpc2hlcyhyZXN0YXVyYW50SUQpfSAqL31kaXNoZXMgZ28gaGVyZVxyXG4gICAgPC9Sb3c+XHJcbiBcclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBEaXNoTGlzdCJdLCJzb3VyY2VSb290IjoiIn0=