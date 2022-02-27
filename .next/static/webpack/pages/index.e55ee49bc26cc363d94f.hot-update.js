webpackHotUpdate_N_E("pages/index",{

/***/ "./components/restaurantList.js":
/*!**************************************!*\
  !*** ./components/restaurantList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _dishes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dishes */ "./components/dishes.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./components/context.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _jsxFileName = "C:\\Users\\amato\\OneDrive\\Desktop\\MIT XPRO\\restaurant_capstone\\components\\restaurantList.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function RestaurantList(props) {
  _s();

  const {
    0: restaurantID,
    1: setRestaurantID
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    cart,
    user
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_4__["default"]);
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(cart);
  const activeUser = user.activeUser;
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
      lineNumber: 36,
      columnNumber: 23
    }
  }, "Loading...");
  if (error) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, "ERROR");
  if (!data) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, "Not found"); // console.log(`Query Data: ${JSON.stringify(data.restaurants)}`)

  let searchQuery = data.restaurants.filter(res => {
    return res.name.toLowerCase().includes(props.search);
  });

  if (searchQuery.length === 0) {
    return __jsx("div", {
      style: {
        color: "red",
        fontWeight: 'bold'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 12
      }
    }, `No restaurants found, try refining your search.`);
  }

  ;
  let restId = searchQuery[0].id; // definet renderer for Dishes

  const renderDishes = restaurantID => {
    return __jsx(_dishes__WEBPACK_IMPORTED_MODULE_2__["default"], {
      restId: restaurantID,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    }, " ");
  };

  if (searchQuery.length > 0) {
    const restList = searchQuery.map(res => __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      xs: "6",
      sm: "4",
      key: res.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
      style: {
        margin: "0 0.5rem 20px 0.5rem"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardImg"], {
      top: true,
      style: {
        height: 200
      },
      src: `http://localhost:1337` + res.image.url,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardText"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }
    }, res.description)), __jsx("div", {
      className: "card-footer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      id: res.name,
      color: "info",
      disabled: !activeUser,
      onClick: () => next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(`/dishes/${res.name}`),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }
    }, res.name)))));
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      xs: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 5
      }
    }, restList), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      xs: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 5
      }
    }, renderDishes(restaurantID)));
  } else {
    return __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 10
      }
    }, " No Restaurants Found");
  }
}

_s(RestaurantList, "vSa8LMF71aaYXu2cay25+xCoLgA=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"]];
});

_c = RestaurantList;
/* harmony default export */ __webpack_exports__["default"] = (RestaurantList);

var _c;

$RefreshReg$(_c, "RestaurantList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwicmVzdGF1cmFudElEIiwic2V0UmVzdGF1cmFudElEIiwidXNlU3RhdGUiLCJjYXJ0IiwidXNlciIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsImFjdGl2ZVVzZXIiLCJHRVRfUkVTVEFVUkFOVFMiLCJncWwiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidXNlUXVlcnkiLCJzZWFyY2hRdWVyeSIsInJlc3RhdXJhbnRzIiwiZmlsdGVyIiwicmVzIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzZWFyY2giLCJsZW5ndGgiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJyZXN0SWQiLCJpZCIsInJlbmRlckRpc2hlcyIsInJlc3RMaXN0IiwibWFwIiwibWFyZ2luIiwiaGVpZ2h0IiwiaW1hZ2UiLCJ1cmwiLCJkZXNjcmlwdGlvbiIsIlJvdXRlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFXQSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUE4QjtBQUFBOztBQUM1QixRQUFLO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NDLHNEQUFRLENBQUMsQ0FBRCxDQUEvQztBQUNBLFFBQU07QUFBQ0MsUUFBRDtBQUFPQztBQUFQLE1BQWdCQyx3REFBVSxDQUFDQyxnREFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQk4sc0RBQVEsQ0FBQ0MsSUFBRCxDQUFsQztBQUNBLFFBQU1NLFVBQVUsR0FBR0wsSUFBSSxDQUFDSyxVQUF4QjtBQUNBLFFBQU1DLGVBQWUsR0FBR0Msa0RBQUk7QUFDOUI7QUFDQTtB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R0FBRyxDQUFDQyxJQUFsSCxDQUZBLENBWEYsQ0FERixDQURlLENBQWpCO0FBc0JBLFdBRUUsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0EsTUFBQyw4Q0FBRDtBQUFLLFFBQUUsRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR1UsUUFESCxDQURBLEVBS0EsTUFBQyw4Q0FBRDtBQUFLLFFBQUUsRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQ0QsWUFBWSxDQUFDN0IsWUFBRCxDQURiLENBTEEsQ0FGRjtBQWFELEdBcENELE1Bb0NPO0FBQ0wsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUFQO0FBQ0Q7QUFDQTs7R0E3RVFGLGM7VUFpQjBCaUIsdUQ7OztLQWpCMUJqQixjO0FBOEVTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lNTVlZTQ5YmMyNmNjMzYzZDk0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtncWwsdXNlUXVlcnl9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBEaXNoZXMgZnJvbSBcIi4vZGlzaGVzXCJcbmltcG9ydCB7dXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCJcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEJvZHksXG4gIENhcmRJbWcsXG4gIENhcmRUZXh0LFxuICBDYXJkVGl0bGUsXG4gIENvbnRhaW5lcixcbiAgUm93LFxuICBDb2x9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmZ1bmN0aW9uIFJlc3RhdXJhbnRMaXN0KHByb3BzKXtcbiAgY29uc3RbcmVzdGF1cmFudElELCBzZXRSZXN0YXVyYW50SURdID0gdXNlU3RhdGUoMClcbiAgY29uc3Qge2NhcnQsIHVzZXIgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoY2FydCk7XG4gIGNvbnN0IGFjdGl2ZVVzZXIgPSB1c2VyLmFjdGl2ZVVzZXI7XG4gIGNvbnN0IEdFVF9SRVNUQVVSQU5UUyA9IGdxbGBcbiAgICBxdWVyeSB7XG4gICAgICByZXN0YXVyYW50cyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgO1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUkVTVEFVUkFOVFMpXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVSUk9SPC9wPjtcbiAgaWYgKCFkYXRhKSByZXR1cm4gPHA+Tm90IGZvdW5kPC9wPjtcbiAvLyBjb25zb2xlLmxvZyhgUXVlcnkgRGF0YTogJHtKU09OLnN0cmluZ2lmeShkYXRhLnJlc3RhdXJhbnRzKX1gKVxuXG5cbmxldCBzZWFyY2hRdWVyeSA9IGRhdGEucmVzdGF1cmFudHMuZmlsdGVyKChyZXMpID0+e1xuICAgIHJldHVybiByZXMubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaClcbiAgfSk7XG5cbiAgaWYoc2VhcmNoUXVlcnkubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIDxkaXYgc3R5bGU9e3tjb2xvcjogXCJyZWRcIiwgZm9udFdlaWdodDonYm9sZCd9fT57YE5vIHJlc3RhdXJhbnRzIGZvdW5kLCB0cnkgcmVmaW5pbmcgeW91ciBzZWFyY2guYH08L2Rpdj5cbiAgfTtcblxubGV0IHJlc3RJZCA9IHNlYXJjaFF1ZXJ5WzBdLmlkO1xuIFxuLy8gZGVmaW5ldCByZW5kZXJlciBmb3IgRGlzaGVzXG4gIGNvbnN0IHJlbmRlckRpc2hlcyA9IChyZXN0YXVyYW50SUQpID0+IHtcbiAgICByZXR1cm4gKDxEaXNoZXMgcmVzdElkPXtyZXN0YXVyYW50SUR9PiA8L0Rpc2hlcz4pXG4gIH07XG5pZihzZWFyY2hRdWVyeS5sZW5ndGggPiAwKXtcbiAgY29uc3QgcmVzdExpc3QgPSBzZWFyY2hRdWVyeS5tYXAoKHJlcykgPT4gKFxuICAgIDxDb2wgeHM9XCI2XCIgc209XCI0XCIga2V5PXtyZXMuaWR9PlxuICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMC41cmVtIDIwcHggMC41cmVtXCIgfX0+XG4gICAgICAgIDxDYXJkSW1nXG4gICAgICAgICAgdG9wPXt0cnVlfVxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMjAwIH19XG4gICAgICAgICAgc3JjPXtcbiAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDoxMzM3YCsgcmVzLmltYWdlLnVybFxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgIDxDYXJkVGV4dD57cmVzLmRlc2NyaXB0aW9ufTwvQ2FyZFRleHQ+XG4gICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgXG4gICAgICAgIDxCdXR0b24gaWQ9e3Jlcy5uYW1lfSBjb2xvcj1cImluZm9cIiBkaXNhYmxlZD17IWFjdGl2ZVVzZXJ9IG9uQ2xpY2s9eygpPT4gUm91dGVyLnB1c2goYC9kaXNoZXMvJHtyZXMubmFtZX1gKX0gPntyZXMubmFtZX08L0J1dHRvbj5cbiAgICAgICAgey8qIG9uQ2xpY2s9eygpPT4gc2V0UmVzdGF1cmFudElEKHJlcy5pZCl9ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L0NvbD5cbiAgKSlcblxuICByZXR1cm4oXG5cbiAgICA8Q29udGFpbmVyPlxuICAgIDxSb3cgeHM9JzMnPlxuICAgICAge3Jlc3RMaXN0fVxuICAgIDwvUm93PlxuICBcbiAgICA8Um93IHhzPSczJz5cbiAgICB7cmVuZGVyRGlzaGVzKHJlc3RhdXJhbnRJRCl9XG4gICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gXG4gIClcbn0gZWxzZSB7XG4gIHJldHVybiA8aDE+IE5vIFJlc3RhdXJhbnRzIEZvdW5kPC9oMT5cbn1cbn1cbiAgIGV4cG9ydCBkZWZhdWx0IFJlc3RhdXJhbnRMaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==