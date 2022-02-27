webpackHotUpdate_N_E("pages/dishes/[dish]",{

/***/ "./pages/dishes/[dish].js":
/*!********************************!*\
  !*** ./pages/dishes/[dish].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
  `; // const { loading, error, data } = useQuery(GET_RESTAURANTS)
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>ERROR</p>;
  // if (!data) return <p>Not found</p>;
  // console.log(`Query Data: ${JSON.stringify(data.restaurants)}`)
  // const renderDishes = (restaurantID) => {
  //   return (<Dishes restId={restaurantID}> </Dishes>)
  // };

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, " restaurants go here"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, "dishes go here"));
}

_s(DishList, "NE3X7pwanzhYOjK1so5y4O2o9DI=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGlzaGVzL1tkaXNoXS5qcyJdLCJuYW1lcyI6WyJEaXNoTGlzdCIsInByb3BzIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2FydCIsImFkZEl0ZW0iLCJyZW1vdmVJdGVtIiwidXNlciIsInNldFVzZXIiLCJ1c2VyTmFtZSIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwiY29uc29sZSIsImxvZyIsInNlYXJjaCIsIkdFVF9SRVNUQVVSQU5UUyIsImdxbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQVdBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQ3ZCLFFBQU07QUFBRUMsYUFBRjtBQUFhQztBQUFiLE1BQTJCRixLQUFqQztBQUNBLE1BQUk7QUFBQ0csUUFBRDtBQUFNQyxXQUFOO0FBQWNDLGNBQWQ7QUFBMEJDLFFBQTFCO0FBQWdDQyxXQUFoQztBQUF5Q0M7QUFBekMsTUFBcURDLHdEQUFVLENBQUNDLDJEQUFELENBQW5FO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZWixLQUFLLENBQUNhLE1BQWxCO0FBRUEsUUFBTUMsZUFBZSxHQUFHQyxrREFBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBWEUsQ0FMdUIsQ0FrQnZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7QUFFQztBQUNBO0FBQ0E7O0FBRUUsU0FDRSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRixNQUFDLDhDQUFEO0FBQUssTUFBRSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERSxFQUtGLE1BQUMsOENBQUQ7QUFBSyxNQUFFLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxFLENBREY7QUFZRDs7R0F4Q01oQixROztLQUFBQSxRO0FBMENRQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kaXNoZXMvW2Rpc2hdLjM0NjBmNzdkNTA0MTRiZjE4YjI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dxbCx1c2VRdWVyeX0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgRGlzaGVzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Rpc2hlc1wiXHJcbmltcG9ydCB7dXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnO1xyXG5cclxuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29udGV4dFwiXHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIENhcmQsXHJcbiAgQ2FyZEJvZHksXHJcbiAgQ2FyZEltZyxcclxuICBDYXJkVGV4dCxcclxuICBDYXJkVGl0bGUsXHJcbiAgQ29udGFpbmVyLFxyXG4gIFJvdyxcclxuICBDb2x9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5mdW5jdGlvbiBEaXNoTGlzdChwcm9wcykge1xyXG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzO1xyXG4gIHZhciB7Y2FydCxhZGRJdGVtLHJlbW92ZUl0ZW0sIHVzZXIsIHNldFVzZXIsIHVzZXJOYW1lfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcbiAgY29uc29sZS5sb2cocHJvcHMuc2VhcmNoKVxyXG5cclxuICBjb25zdCBHRVRfUkVTVEFVUkFOVFMgPSBncWxgXHJcbiAgICBxdWVyeSB7XHJcbiAgICAgIHJlc3RhdXJhbnRzIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgIGltYWdlIHtcclxuICAgICAgICAgIHVybFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGA7XHJcblxyXG4gIC8vIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9SRVNUQVVSQU5UUylcclxuICAvLyBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIC8vIGlmIChlcnJvcikgcmV0dXJuIDxwPkVSUk9SPC9wPjtcclxuICAvLyBpZiAoIWRhdGEpIHJldHVybiA8cD5Ob3QgZm91bmQ8L3A+O1xyXG4gLy8gY29uc29sZS5sb2coYFF1ZXJ5IERhdGE6ICR7SlNPTi5zdHJpbmdpZnkoZGF0YS5yZXN0YXVyYW50cyl9YClcclxuXHJcbiAgLy8gY29uc3QgcmVuZGVyRGlzaGVzID0gKHJlc3RhdXJhbnRJRCkgPT4ge1xyXG4gIC8vICAgcmV0dXJuICg8RGlzaGVzIHJlc3RJZD17cmVzdGF1cmFudElEfT4gPC9EaXNoZXM+KVxyXG4gIC8vIH07XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgPFJvdyB4cz0nMyc+XHJcbiAgICAgIHsvKiB7cmVzdExpc3R9ICovfSByZXN0YXVyYW50cyBnbyBoZXJlXHJcbiAgICA8L1Jvdz5cclxuICBcclxuICAgIDxSb3cgeHM9JzMnPlxyXG4gICAgey8qIHtyZW5kZXJEaXNoZXMocmVzdGF1cmFudElEKX0gKi99ZGlzaGVzIGdvIGhlcmVcclxuICAgIDwvUm93PlxyXG4gXHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgRGlzaExpc3QiXSwic291cmNlUm9vdCI6IiJ9