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
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./components/context.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_3__["default"]);
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
    const restList = searchQuery.map(res => __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      xs: "6",
      sm: "4",
      key: res.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      style: {
        margin: "0 0.5rem 20px 0.5rem"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardImg"], {
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
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardText"], {
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
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      id: res.name,
      color: "info",
      disabled: !activeUser,
      onClick: () => Router.push("/dishes/1"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }
    }, res.name)))));
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      xs: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 5
      }
    }, restList), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
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
        lineNumber: 94,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwicmVzdGF1cmFudElEIiwic2V0UmVzdGF1cmFudElEIiwidXNlU3RhdGUiLCJjYXJ0IiwidXNlciIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsImFjdGl2ZVVzZXIiLCJHRVRfUkVTVEFVUkFOVFMiLCJncWwiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidXNlUXVlcnkiLCJzZWFyY2hRdWVyeSIsInJlc3RhdXJhbnRzIiwiZmlsdGVyIiwicmVzIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzZWFyY2giLCJsZW5ndGgiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJyZXN0SWQiLCJpZCIsInJlbmRlckRpc2hlcyIsInJlc3RMaXN0IiwibWFwIiwibWFyZ2luIiwiaGVpZ2h0IiwiaW1hZ2UiLCJ1cmwiLCJkZXNjcmlwdGlvbiIsIlJvdXRlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQVdBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQThCO0FBQUE7O0FBQzVCLFFBQUs7QUFBQSxPQUFDQyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ0Msc0RBQVEsQ0FBQyxDQUFELENBQS9DO0FBQ0EsUUFBTTtBQUFDQyxRQUFEO0FBQU9DO0FBQVAsTUFBZ0JDLHdEQUFVLENBQUNDLGdEQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CTixzREFBUSxDQUFDQyxJQUFELENBQWxDO0FBQ0EsUUFBTU0sVUFBVSxHQUFHTCxJQUFJLENBQUNLLFVBQXhCO0FBQ0EsUUFBTUMsZUFBZSxHQUFHQyxrREFBSTtBQUM5QjtBQUNBO0FBQ0E7QUFD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LENBRGUsQ0FBakI7QUFzQkEsV0FFRSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQSxNQUFDLDhDQUFEO0FBQUssUUFBRSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHVSxRQURILENBREEsRUFLQSxNQUFDLDhDQUFEO0FBQUssUUFBRSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDRCxZQUFZLENBQUM3QixZQUFELENBRGIsQ0FMQSxDQUZGO0FBY0QsR0FyQ0QsTUFxQ087QUFDTCxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQVA7QUFDRDtBQUNBOztHQTlFUUYsYztVQWlCMEJpQix1RDs7O0tBakIxQmpCLGM7QUErRVNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY1MWFjZmI0MjQxZGM2ZDZlNjQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dxbCx1c2VRdWVyeX0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IERpc2hlcyBmcm9tIFwiLi9kaXNoZXNcIlxuaW1wb3J0IHt1c2VDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5cbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIlxuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDYXJkQm9keSxcbiAgQ2FyZEltZyxcbiAgQ2FyZFRleHQsXG4gIENhcmRUaXRsZSxcbiAgQ29udGFpbmVyLFxuICBSb3csXG4gIENvbH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuZnVuY3Rpb24gUmVzdGF1cmFudExpc3QocHJvcHMpe1xuICBjb25zdFtyZXN0YXVyYW50SUQsIHNldFJlc3RhdXJhbnRJRF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCB7Y2FydCwgdXNlciB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShjYXJ0KTtcbiAgY29uc3QgYWN0aXZlVXNlciA9IHVzZXIuYWN0aXZlVXNlcjtcbiAgY29uc3QgR0VUX1JFU1RBVVJBTlRTID0gZ3FsYFxuICAgIHF1ZXJ5IHtcbiAgICAgIHJlc3RhdXJhbnRzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGA7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9SRVNUQVVSQU5UUylcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RVJST1I8L3A+O1xuICBpZiAoIWRhdGEpIHJldHVybiA8cD5Ob3QgZm91bmQ8L3A+O1xuIC8vIGNvbnNvbGUubG9nKGBRdWVyeSBEYXRhOiAke0pTT04uc3RyaW5naWZ5KGRhdGEucmVzdGF1cmFudHMpfWApXG5cblxubGV0IHNlYXJjaFF1ZXJ5ID0gZGF0YS5yZXN0YXVyYW50cy5maWx0ZXIoKHJlcykgPT57XG4gICAgcmV0dXJuIHJlcy5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoKVxuICB9KTtcblxuICBpZihzZWFyY2hRdWVyeS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gPGRpdiBzdHlsZT17e2NvbG9yOiBcInJlZFwiLCBmb250V2VpZ2h0Oidib2xkJ319PntgTm8gcmVzdGF1cmFudHMgZm91bmQsIHRyeSByZWZpbmluZyB5b3VyIHNlYXJjaC5gfTwvZGl2PlxuICB9O1xuXG5sZXQgcmVzdElkID0gc2VhcmNoUXVlcnlbMF0uaWQ7XG4gXG4vLyBkZWZpbmV0IHJlbmRlcmVyIGZvciBEaXNoZXNcbiAgY29uc3QgcmVuZGVyRGlzaGVzID0gKHJlc3RhdXJhbnRJRCkgPT4ge1xuICAgIHJldHVybiAoPERpc2hlcyByZXN0SWQ9e3Jlc3RhdXJhbnRJRH0+IDwvRGlzaGVzPilcbiAgfTtcbmlmKHNlYXJjaFF1ZXJ5Lmxlbmd0aCA+IDApe1xuICBjb25zdCByZXN0TGlzdCA9IHNlYXJjaFF1ZXJ5Lm1hcCgocmVzKSA9PiAoXG4gICAgPENvbCB4cz1cIjZcIiBzbT1cIjRcIiBrZXk9e3Jlcy5pZH0+XG4gICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW46IFwiMCAwLjVyZW0gMjBweCAwLjVyZW1cIiB9fT5cbiAgICAgICAgPENhcmRJbWdcbiAgICAgICAgICB0b3A9e3RydWV9XG4gICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAyMDAgfX1cbiAgICAgICAgICBzcmM9e1xuICAgICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjEzMzdgKyByZXMuaW1hZ2UudXJsXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgPENhcmRUZXh0PntyZXMuZGVzY3JpcHRpb259PC9DYXJkVGV4dD5cbiAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICBcbiAgICAgICAgPEJ1dHRvbiBpZD17cmVzLm5hbWV9IGNvbG9yPVwiaW5mb1wiIGRpc2FibGVkPXshYWN0aXZlVXNlcn0gb25DbGljaz17KCk9PiBSb3V0ZXIucHVzaChcIi9kaXNoZXMvMVwiKX0gPntyZXMubmFtZX08L0J1dHRvbj5cbiAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L0NvbD5cbiAgKSlcblxuICByZXR1cm4oXG5cbiAgICA8Q29udGFpbmVyPlxuICAgIDxSb3cgeHM9JzMnPlxuICAgICAge3Jlc3RMaXN0fVxuICAgIDwvUm93PlxuICBcbiAgICA8Um93IHhzPSczJz5cbiAgICB7cmVuZGVyRGlzaGVzKHJlc3RhdXJhbnRJRCl9XG4gICAgPC9Sb3c+XG4gXG4gICAgPC9Db250YWluZXI+XG4gXG4gIClcbn0gZWxzZSB7XG4gIHJldHVybiA8aDE+IE5vIFJlc3RhdXJhbnRzIEZvdW5kPC9oMT5cbn1cbn1cbiAgIGV4cG9ydCBkZWZhdWx0IFJlc3RhdXJhbnRMaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==