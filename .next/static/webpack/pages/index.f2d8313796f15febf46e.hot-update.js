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

  return __jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloProvider"], {
    client: client,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, " restaurants go here"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, "dishes go here")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGlzaGVzL1tkaXNoXS5qcyJdLCJuYW1lcyI6WyJEaXNoTGlzdCIsInByb3BzIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2FydCIsImFkZEl0ZW0iLCJyZW1vdmVJdGVtIiwidXNlciIsInNldFVzZXIiLCJ1c2VyTmFtZSIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwiY29uc29sZSIsImxvZyIsInNlYXJjaCIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJ1c2VTdGF0ZSIsImxpbmsiLCJIdHRwTGluayIsInVyaSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImNsaWVudCIsIkFwb2xsb0NsaWVudCIsIkdFVF9SRVNUQVVSQU5UUyIsImdxbCIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJ1c2VRdWVyeSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN0YXVyYW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBV0EsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFBQTs7QUFDdkIsUUFBTTtBQUFFQyxhQUFGO0FBQWFDO0FBQWIsTUFBMkJGLEtBQWpDO0FBQ0EsTUFBSTtBQUFDRyxRQUFEO0FBQU1DLFdBQU47QUFBY0MsY0FBZDtBQUEwQkMsUUFBMUI7QUFBZ0NDLFdBQWhDO0FBQXlDQztBQUF6QyxNQUFxREMsd0RBQVUsQ0FBQ0MsMkRBQUQsQ0FBbkU7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlaLEtBQUssQ0FBQ2EsTUFBbEI7QUFFQSxRQUFNQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkFBWixJQUFtQyx1QkFBbkQ7QUFDRU4sU0FBTyxDQUFDQyxHQUFSLENBQWEsUUFBT0UsT0FBUSxFQUE1QjtBQUNBLFFBQU07QUFBQSxPQUFDSSxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLElBQUlDLHVEQUFKLENBQWE7QUFBRUMsT0FBRyxFQUFHLEdBQUVULE9BQVE7QUFBbEIsR0FBYixDQUFiO0FBQ0EsUUFBTVUsS0FBSyxHQUFHLElBQUlDLDREQUFKLEVBQWQ7QUFDQSxRQUFNQyxNQUFNLEdBQUcsSUFBSUMsMkRBQUosQ0FBaUI7QUFBQ04sUUFBRDtBQUFNRztBQUFOLEdBQWpCLENBQWY7QUFFRixRQUFNSSxlQUFlLEdBQUdDLGtEQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FYRTtBQWFBLFFBQU07QUFBRUMsV0FBRjtBQUFXQyxTQUFYO0FBQWtCQztBQUFsQixNQUEyQkMsK0RBQVEsQ0FBQ0wsZUFBRCxDQUF6QztBQUNBLE1BQUlFLE9BQUosRUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDWCxNQUFJLENBQUNDLElBQUwsRUFBVyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDWnJCLFNBQU8sQ0FBQ0MsR0FBUixDQUFhLGVBQWNzQixJQUFJLENBQUNDLFNBQUwsQ0FBZUgsSUFBSSxDQUFDSSxXQUFwQixDQUFpQyxFQUE1RCxFQTdCd0IsQ0ErQnZCO0FBQ0E7QUFDQTs7QUFFRSxTQUNFLE1BQUMsNkRBQUQ7QUFBZ0IsVUFBTSxFQUFFVixNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0YsTUFBQyw4Q0FBRDtBQUFLLE1BQUUsRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREUsRUFLRixNQUFDLDhDQUFEO0FBQUssTUFBRSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFMRSxDQURBLENBREY7QUFjRDs7R0FqRE0zQixRO1VBeUIwQmtDLHVEOzs7S0F6QjFCbEMsUTtBQW1EUUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjJkODMxMzc5NmYxNWZlYmY0NmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z3FsLHVzZVF1ZXJ5fSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7QXBvbGxvUHJvdmlkZXIsQXBvbGxvQ2xpZW50LEh0dHBMaW5rLCBJbk1lbW9yeUNhY2hlfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBEaXNoZXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZGlzaGVzXCJcclxuaW1wb3J0IHt1c2VDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCc7XHJcblxyXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb250ZXh0XCJcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgQ2FyZCxcclxuICBDYXJkQm9keSxcclxuICBDYXJkSW1nLFxyXG4gIENhcmRUZXh0LFxyXG4gIENhcmRUaXRsZSxcclxuICBDb250YWluZXIsXHJcbiAgUm93LFxyXG4gIENvbH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmZ1bmN0aW9uIERpc2hMaXN0KHByb3BzKSB7XHJcbiAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gcHJvcHM7XHJcbiAgdmFyIHtjYXJ0LGFkZEl0ZW0scmVtb3ZlSXRlbSwgdXNlciwgc2V0VXNlciwgdXNlck5hbWV9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuICBjb25zb2xlLmxvZyhwcm9wcy5zZWFyY2gpXHJcblxyXG4gIGNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCI7XHJcbiAgICBjb25zb2xlLmxvZyhgVVJMOiAke0FQSV9VUkx9YClcclxuICAgIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBsaW5rID0gbmV3IEh0dHBMaW5rKHsgdXJpOiBgJHtBUElfVVJMfS9ncmFwaHFsYH0pXHJcbiAgICBjb25zdCBjYWNoZSA9IG5ldyBJbk1lbW9yeUNhY2hlKClcclxuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe2xpbmssY2FjaGV9KTtcclxuXHJcbiAgY29uc3QgR0VUX1JFU1RBVVJBTlRTID0gZ3FsYFxyXG4gICAgcXVlcnkge1xyXG4gICAgICByZXN0YXVyYW50cyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICB1cmxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBgO1xyXG5cclxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUkVTVEFVUkFOVFMpXHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FUlJPUjwvcD47XHJcbiAgaWYgKCFkYXRhKSByZXR1cm4gPHA+Tm90IGZvdW5kPC9wPjtcclxuIGNvbnNvbGUubG9nKGBRdWVyeSBEYXRhOiAke0pTT04uc3RyaW5naWZ5KGRhdGEucmVzdGF1cmFudHMpfWApXHJcblxyXG4gIC8vIGNvbnN0IHJlbmRlckRpc2hlcyA9IChyZXN0YXVyYW50SUQpID0+IHtcclxuICAvLyAgIHJldHVybiAoPERpc2hlcyByZXN0SWQ9e3Jlc3RhdXJhbnRJRH0+IDwvRGlzaGVzPilcclxuICAvLyB9O1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgIDxSb3cgeHM9JzMnPlxyXG4gICAgICB7Lyoge3Jlc3RMaXN0fSAqL30gcmVzdGF1cmFudHMgZ28gaGVyZVxyXG4gICAgPC9Sb3c+XHJcbiAgXHJcbiAgICA8Um93IHhzPSczJz5cclxuICAgIHsvKiB7cmVuZGVyRGlzaGVzKHJlc3RhdXJhbnRJRCl9ICovfWRpc2hlcyBnbyBoZXJlXHJcbiAgICA8L1Jvdz5cclxuIFxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBEaXNoTGlzdCJdLCJzb3VyY2VSb290IjoiIn0=