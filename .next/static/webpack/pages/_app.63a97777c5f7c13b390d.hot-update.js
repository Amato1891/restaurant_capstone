webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/context */ "./components/context.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ "./pages/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\amato\\OneDrive\\Desktop\\MIT XPRO\\restaurant_capstone\\pages\\_app.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function MyApp(props) {
  _s();

  var {
    cart,
    addItem,
    removeItem,
    user,
    setUser,
    userName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_context__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    cart: cart
  });
  const {
    Component,
    pageProps
  } = props;
  const activeUser = js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get('name');

  setUser = user => {
    setState({
      user
    });
  };

  addItem = item => {
    let {
      items
    } = state.cart; //check for item already in cart
    //if not in cart, add item if item is found increase quanity ++

    let foundItem = true;

    if (items.length > 0) {
      foundItem = items.find(i => i.id === item.id);
      if (!foundItem) foundItem = false;
    } else {
      foundItem = false;
    }

    console.log(`Found Item value: ${JSON.stringify(foundItem)}`); // if item is not new, add to cart, set quantity to 1

    if (!foundItem) {
      //set quantity property to 1
      let temp = JSON.parse(JSON.stringify(item));
      temp.quantity = 1;
      var newCart = {
        items: [...state.cart.items, temp],
        total: state.cart.total + item.price
      };
      setState({
        cart: newCart
      });
      console.log(`Total items: ${JSON.stringify(newCart)}`);
    } else {
      // we already have it so just increase quantity ++
      console.log(`Total so far:  ${state.cart.total}`);
      newCart = {
        items: items.map(item => {
          if (item.id === foundItem.id) {
            return Object.assign({}, item, {
              quantity: item.quantity + 1
            });
          } else {
            return item;
          }
        }),
        total: state.cart.total + item.price
      };
    }

    setState({
      cart: newCart
    }); // problem is this is not updated yet

    console.log(`state reset to cart:${JSON.stringify(state)}`);
  };

  removeItem = item => {
    let {
      items
    } = state.cart; //check for item already in cart

    const foundItem = items.find(i => i.id === item.id);

    if (foundItem.quantity > 1) {
      var newCart = {
        items: items.map(item => {
          if (item.id === foundItem.id) {
            return Object.assign({}, item, {
              quantity: item.quantity - 1
            });
          } else {
            return item;
          }
        }),
        total: state.cart.total - item.price
      }; //console.log(`NewCart after remove: ${JSON.stringify(newCart)}`)
    } else {
      // only 1 in the cart so remove the whole item
      console.log(`Try remove item ${JSON.stringify(foundItem)}`);
      const index = items.findIndex(i => i.id === foundItem.id);
      items.splice(index, 1);
      var newCart = {
        items: items,
        total: state.cart.total - item.price
      };
    }

    setState({
      cart: newCart
    });
  };

  return __jsx(_components_context__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, {
    value: {
      cart: state.cart,
      addItem: addItem,
      removeItem: removeItem,
      isAuthenticated: false,
      user: {
        activeUser
      },
      setUser: () => {}
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
    crossOrigin: "anonymous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }))));
}

_s(MyApp, "mgUa0OhD0CuUWFdwwntq+94xVzs=");

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsInByb3BzIiwiY2FydCIsImFkZEl0ZW0iLCJyZW1vdmVJdGVtIiwidXNlciIsInNldFVzZXIiLCJ1c2VyTmFtZSIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiYWN0aXZlVXNlciIsIkNvb2tpZSIsImdldCIsIml0ZW0iLCJpdGVtcyIsImZvdW5kSXRlbSIsImxlbmd0aCIsImZpbmQiLCJpIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInRlbXAiLCJwYXJzZSIsInF1YW50aXR5IiwibmV3Q2FydCIsInRvdGFsIiwicHJpY2UiLCJtYXAiLCJPYmplY3QiLCJhc3NpZ24iLCJpbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsImlzQXV0aGVudGljYXRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBcUI7QUFBQTs7QUFDbkIsTUFBSTtBQUFDQyxRQUFEO0FBQU1DLFdBQU47QUFBY0MsY0FBZDtBQUEwQkMsUUFBMUI7QUFBZ0NDLFdBQWhDO0FBQXlDQztBQUF6QyxNQUFxREMsd0RBQVUsQ0FBQ0MsMkRBQUQsQ0FBbkU7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQU9DO0FBQVAsTUFBbUJDLHNEQUFRLENBQUM7QUFBQ1YsUUFBSSxFQUFDQTtBQUFOLEdBQUQsQ0FBakM7QUFDQSxRQUFNO0FBQUVXLGFBQUY7QUFBYUM7QUFBYixNQUEyQmIsS0FBakM7QUFDQSxRQUFNYyxVQUFVLEdBQUdDLGdEQUFNLENBQUNDLEdBQVAsQ0FBVyxNQUFYLENBQW5COztBQUVBWCxTQUFPLEdBQUlELElBQUQsSUFBVTtBQUNsQk0sWUFBUSxDQUFFO0FBQUNOO0FBQUQsS0FBRixDQUFSO0FBQ0QsR0FGRDs7QUFJQUYsU0FBTyxHQUFJZSxJQUFELElBQVU7QUFDbEIsUUFBSTtBQUFFQztBQUFGLFFBQVlULEtBQUssQ0FBQ1IsSUFBdEIsQ0FEa0IsQ0FFbEI7QUFDQTs7QUFDQSxRQUFJa0IsU0FBUyxHQUFHLElBQWhCOztBQUNBLFFBQUdELEtBQUssQ0FBQ0UsTUFBTixHQUFlLENBQWxCLEVBQW9CO0FBQ2xCRCxlQUFTLEdBQUdELEtBQUssQ0FBQ0csSUFBTixDQUFZQyxDQUFELElBQU9BLENBQUMsQ0FBQ0MsRUFBRixLQUFTTixJQUFJLENBQUNNLEVBQWhDLENBQVo7QUFFQSxVQUFHLENBQUNKLFNBQUosRUFBZUEsU0FBUyxHQUFHLEtBQVo7QUFDaEIsS0FKRCxNQUtJO0FBQ0ZBLGVBQVMsR0FBRyxLQUFaO0FBQ0Q7O0FBQ0RLLFdBQU8sQ0FBQ0MsR0FBUixDQUFhLHFCQUFvQkMsSUFBSSxDQUFDQyxTQUFMLENBQWVSLFNBQWYsQ0FBMEIsRUFBM0QsRUFia0IsQ0FjbEI7O0FBQ0EsUUFBSSxDQUFDQSxTQUFMLEVBQWdCO0FBQ2Q7QUFFQSxVQUFJUyxJQUFJLEdBQUdGLElBQUksQ0FBQ0csS0FBTCxDQUFXSCxJQUFJLENBQUNDLFNBQUwsQ0FBZVYsSUFBZixDQUFYLENBQVg7QUFDQVcsVUFBSSxDQUFDRSxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsVUFBSUMsT0FBTyxHQUFHO0FBQ1ZiLGFBQUssRUFBRSxDQUFDLEdBQUdULEtBQUssQ0FBQ1IsSUFBTixDQUFXaUIsS0FBZixFQUFxQlUsSUFBckIsQ0FERztBQUVWSSxhQUFLLEVBQUV2QixLQUFLLENBQUNSLElBQU4sQ0FBVytCLEtBQVgsR0FBbUJmLElBQUksQ0FBQ2dCO0FBRnJCLE9BQWQ7QUFJQXZCLGNBQVEsQ0FBQztBQUFDVCxZQUFJLEVBQUM4QjtBQUFOLE9BQUQsQ0FBUjtBQUNBUCxhQUFPLENBQUNDLEdBQVIsQ0FBYSxnQkFBZUMsSUFBSSxDQUFDQyxTQUFMLENBQWVJLE9BQWYsQ0FBd0IsRUFBcEQ7QUFDRCxLQVhELE1BV087QUFDTDtBQUNBUCxhQUFPLENBQUNDLEdBQVIsQ0FBYSxrQkFBaUJoQixLQUFLLENBQUNSLElBQU4sQ0FBVytCLEtBQU0sRUFBL0M7QUFDQUQsYUFBTyxHQUFFO0FBQ0xiLGFBQUssRUFBRUEsS0FBSyxDQUFDZ0IsR0FBTixDQUFXakIsSUFBRCxJQUFTO0FBQ3hCLGNBQUdBLElBQUksQ0FBQ00sRUFBTCxLQUFZSixTQUFTLENBQUNJLEVBQXpCLEVBQTRCO0FBQzFCLG1CQUFPWSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCbkIsSUFBbEIsRUFBd0I7QUFBRWEsc0JBQVEsRUFBRWIsSUFBSSxDQUFDYSxRQUFMLEdBQWdCO0FBQTVCLGFBQXhCLENBQVA7QUFDQSxXQUZGLE1BRU07QUFDTixtQkFBT2IsSUFBUDtBQUNEO0FBQUMsU0FMSyxDQURGO0FBT0xlLGFBQUssRUFBRXZCLEtBQUssQ0FBQ1IsSUFBTixDQUFXK0IsS0FBWCxHQUFtQmYsSUFBSSxDQUFDZ0I7QUFQMUIsT0FBVDtBQVNEOztBQUNEdkIsWUFBUSxDQUFDO0FBQUNULFVBQUksRUFBRThCO0FBQVAsS0FBRCxDQUFSLENBdkNrQixDQXVDVTs7QUFDNUJQLFdBQU8sQ0FBQ0MsR0FBUixDQUFhLHVCQUFzQkMsSUFBSSxDQUFDQyxTQUFMLENBQWVsQixLQUFmLENBQXNCLEVBQXpEO0FBRUQsR0ExQ0Q7O0FBMkNBTixZQUFVLEdBQUljLElBQUQsSUFBVTtBQUNyQixRQUFJO0FBQUVDO0FBQUYsUUFBWVQsS0FBSyxDQUFDUixJQUF0QixDQURxQixDQUVyQjs7QUFDQSxVQUFNa0IsU0FBUyxHQUFHRCxLQUFLLENBQUNHLElBQU4sQ0FBWUMsQ0FBRCxJQUFPQSxDQUFDLENBQUNDLEVBQUYsS0FBU04sSUFBSSxDQUFDTSxFQUFoQyxDQUFsQjs7QUFDQSxRQUFJSixTQUFTLENBQUNXLFFBQVYsR0FBcUIsQ0FBekIsRUFBNEI7QUFDMUIsVUFBSUMsT0FBTyxHQUFHO0FBQ1piLGFBQUssRUFBRUEsS0FBSyxDQUFDZ0IsR0FBTixDQUFXakIsSUFBRCxJQUFTO0FBQzFCLGNBQUdBLElBQUksQ0FBQ00sRUFBTCxLQUFZSixTQUFTLENBQUNJLEVBQXpCLEVBQTRCO0FBQzFCLG1CQUFPWSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCbkIsSUFBbEIsRUFBd0I7QUFBRWEsc0JBQVEsRUFBRWIsSUFBSSxDQUFDYSxRQUFMLEdBQWdCO0FBQTVCLGFBQXhCLENBQVA7QUFDQSxXQUZGLE1BRU07QUFDTixtQkFBT2IsSUFBUDtBQUNEO0FBQUMsU0FMTyxDQURLO0FBT2RlLGFBQUssRUFBRXZCLEtBQUssQ0FBQ1IsSUFBTixDQUFXK0IsS0FBWCxHQUFtQmYsSUFBSSxDQUFDZ0I7QUFQakIsT0FBZCxDQUQwQixDQVUxQjtBQUNELEtBWEQsTUFXTztBQUFFO0FBQ1BULGFBQU8sQ0FBQ0MsR0FBUixDQUFhLG1CQUFrQkMsSUFBSSxDQUFDQyxTQUFMLENBQWVSLFNBQWYsQ0FBMEIsRUFBekQ7QUFDQSxZQUFNa0IsS0FBSyxHQUFHbkIsS0FBSyxDQUFDb0IsU0FBTixDQUFpQmhCLENBQUQsSUFBT0EsQ0FBQyxDQUFDQyxFQUFGLEtBQVNKLFNBQVMsQ0FBQ0ksRUFBMUMsQ0FBZDtBQUNBTCxXQUFLLENBQUNxQixNQUFOLENBQWFGLEtBQWIsRUFBb0IsQ0FBcEI7QUFDQSxVQUFJTixPQUFPLEdBQUU7QUFBRWIsYUFBSyxFQUFFQSxLQUFUO0FBQWdCYyxhQUFLLEVBQUV2QixLQUFLLENBQUNSLElBQU4sQ0FBVytCLEtBQVgsR0FBbUJmLElBQUksQ0FBQ2dCO0FBQS9DLE9BQWI7QUFDRDs7QUFDRHZCLFlBQVEsQ0FBQztBQUFDVCxVQUFJLEVBQUM4QjtBQUFOLEtBQUQsQ0FBUjtBQUNELEdBdEJEOztBQXdCQSxTQUNFLE1BQUMsMkRBQUQsQ0FBWSxRQUFaO0FBQXFCLFNBQUssRUFBRTtBQUFDOUIsVUFBSSxFQUFFUSxLQUFLLENBQUNSLElBQWI7QUFBbUJDLGFBQU8sRUFBRUEsT0FBNUI7QUFBcUNDLGdCQUFVLEVBQUVBLFVBQWpEO0FBQTREcUMscUJBQWUsRUFBQyxLQUE1RTtBQUFrRnBDLFVBQUksRUFBQztBQUFDVTtBQUFELE9BQXZGO0FBQW9HVCxhQUFPLEVBQUMsTUFBSSxDQUFFO0FBQWxILEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBQyxZQUROO0FBRUUsUUFBSSxFQUFDLHVFQUZQO0FBR0UsYUFBUyxFQUFDLHlFQUhaO0FBSUUsZUFBVyxFQUFDLFdBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFVRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFNBQUQseUZBQWVRLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURKLENBVkYsQ0FERjtBQWtCRDs7R0EvRlFkLEs7O0tBQUFBLEs7QUFrR01BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNjNhOTc3NzdjNWY3YzEzYjM5MGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250ZXh0XCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9pbmRleFwiXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiXG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIlxuXG5mdW5jdGlvbiBNeUFwcChwcm9wcyl7XG4gIHZhciB7Y2FydCxhZGRJdGVtLHJlbW92ZUl0ZW0sIHVzZXIsIHNldFVzZXIsIHVzZXJOYW1lfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dClcbiAgY29uc3QgW3N0YXRlLHNldFN0YXRlXSA9IHVzZVN0YXRlKHtjYXJ0OmNhcnR9KTtcbiAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gcHJvcHM7XG4gIGNvbnN0IGFjdGl2ZVVzZXIgPSBDb29raWUuZ2V0KCduYW1lJyk7XG5cbiAgc2V0VXNlciA9ICh1c2VyKSA9PiB7XG4gICAgc2V0U3RhdGUoIHt1c2VyfSApO1xuICB9O1xuXG4gIGFkZEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIGxldCB7IGl0ZW1zIH0gPSBzdGF0ZS5jYXJ0O1xuICAgIC8vY2hlY2sgZm9yIGl0ZW0gYWxyZWFkeSBpbiBjYXJ0XG4gICAgLy9pZiBub3QgaW4gY2FydCwgYWRkIGl0ZW0gaWYgaXRlbSBpcyBmb3VuZCBpbmNyZWFzZSBxdWFuaXR5ICsrXG4gICAgbGV0IGZvdW5kSXRlbSA9IHRydWU7XG4gICAgaWYoaXRlbXMubGVuZ3RoID4gMCl7XG4gICAgICBmb3VuZEl0ZW0gPSBpdGVtcy5maW5kKChpKSA9PiBpLmlkID09PSBpdGVtLmlkKTtcbiAgICAgXG4gICAgICBpZighZm91bmRJdGVtKSBmb3VuZEl0ZW0gPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGZvdW5kSXRlbSA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgRm91bmQgSXRlbSB2YWx1ZTogJHtKU09OLnN0cmluZ2lmeShmb3VuZEl0ZW0pfWApXG4gICAgLy8gaWYgaXRlbSBpcyBub3QgbmV3LCBhZGQgdG8gY2FydCwgc2V0IHF1YW50aXR5IHRvIDFcbiAgICBpZiAoIWZvdW5kSXRlbSkge1xuICAgICAgLy9zZXQgcXVhbnRpdHkgcHJvcGVydHkgdG8gMVxuICAgIFxuICAgICAgbGV0IHRlbXAgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGl0ZW0pKTtcbiAgICAgIHRlbXAucXVhbnRpdHkgPSAxO1xuICAgICAgdmFyIG5ld0NhcnQgPSB7XG4gICAgICAgICAgaXRlbXM6IFsuLi5zdGF0ZS5jYXJ0Lml0ZW1zLHRlbXBdLFxuICAgICAgICAgIHRvdGFsOiBzdGF0ZS5jYXJ0LnRvdGFsICsgaXRlbS5wcmljZSxcbiAgICAgIH1cbiAgICAgIHNldFN0YXRlKHtjYXJ0Om5ld0NhcnR9KVxuICAgICAgY29uc29sZS5sb2coYFRvdGFsIGl0ZW1zOiAke0pTT04uc3RyaW5naWZ5KG5ld0NhcnQpfWApXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHdlIGFscmVhZHkgaGF2ZSBpdCBzbyBqdXN0IGluY3JlYXNlIHF1YW50aXR5ICsrXG4gICAgICBjb25zb2xlLmxvZyhgVG90YWwgc28gZmFyOiAgJHtzdGF0ZS5jYXJ0LnRvdGFsfWApXG4gICAgICBuZXdDYXJ0PSB7XG4gICAgICAgICAgaXRlbXM6IGl0ZW1zLm1hcCgoaXRlbSkgPT57XG4gICAgICAgICAgICBpZihpdGVtLmlkID09PSBmb3VuZEl0ZW0uaWQpe1xuICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwgeyBxdWFudGl0eTogaXRlbS5xdWFudGl0eSArIDEgfSlcbiAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgIH19KSxcbiAgICAgICAgICB0b3RhbDogc3RhdGUuY2FydC50b3RhbCArIGl0ZW0ucHJpY2UsXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0U3RhdGUoe2NhcnQ6IG5ld0NhcnR9KTsgIC8vIHByb2JsZW0gaXMgdGhpcyBpcyBub3QgdXBkYXRlZCB5ZXRcbiAgICBjb25zb2xlLmxvZyhgc3RhdGUgcmVzZXQgdG8gY2FydDoke0pTT04uc3RyaW5naWZ5KHN0YXRlKX1gKVxuICAgICBcbiAgfTtcbiAgcmVtb3ZlSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgbGV0IHsgaXRlbXMgfSA9IHN0YXRlLmNhcnQ7XG4gICAgLy9jaGVjayBmb3IgaXRlbSBhbHJlYWR5IGluIGNhcnRcbiAgICBjb25zdCBmb3VuZEl0ZW0gPSBpdGVtcy5maW5kKChpKSA9PiBpLmlkID09PSBpdGVtLmlkKTtcbiAgICBpZiAoZm91bmRJdGVtLnF1YW50aXR5ID4gMSkge1xuICAgICAgdmFyIG5ld0NhcnQgPSB7XG4gICAgICAgIGl0ZW1zOiBpdGVtcy5tYXAoKGl0ZW0pID0+e1xuICAgICAgICBpZihpdGVtLmlkID09PSBmb3VuZEl0ZW0uaWQpe1xuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7IHF1YW50aXR5OiBpdGVtLnF1YW50aXR5IC0gMSB9KVxuICAgICAgICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfX0pLFxuICAgICAgdG90YWw6IHN0YXRlLmNhcnQudG90YWwgLSBpdGVtLnByaWNlLFxuICAgICAgfVxuICAgICAgLy9jb25zb2xlLmxvZyhgTmV3Q2FydCBhZnRlciByZW1vdmU6ICR7SlNPTi5zdHJpbmdpZnkobmV3Q2FydCl9YClcbiAgICB9IGVsc2UgeyAvLyBvbmx5IDEgaW4gdGhlIGNhcnQgc28gcmVtb3ZlIHRoZSB3aG9sZSBpdGVtXG4gICAgICBjb25zb2xlLmxvZyhgVHJ5IHJlbW92ZSBpdGVtICR7SlNPTi5zdHJpbmdpZnkoZm91bmRJdGVtKX1gKVxuICAgICAgY29uc3QgaW5kZXggPSBpdGVtcy5maW5kSW5kZXgoKGkpID0+IGkuaWQgPT09IGZvdW5kSXRlbS5pZCk7XG4gICAgICBpdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgdmFyIG5ld0NhcnQ9IHsgaXRlbXM6IGl0ZW1zLCB0b3RhbDogc3RhdGUuY2FydC50b3RhbCAtIGl0ZW0ucHJpY2UgfSBcbiAgICB9XG4gICAgc2V0U3RhdGUoe2NhcnQ6bmV3Q2FydH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2NhcnQ6IHN0YXRlLmNhcnQsIGFkZEl0ZW06IGFkZEl0ZW0sIHJlbW92ZUl0ZW06IHJlbW92ZUl0ZW0saXNBdXRoZW50aWNhdGVkOmZhbHNlLHVzZXI6e2FjdGl2ZVVzZXJ9LHNldFVzZXI6KCk9Pnt9fX0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtR241Mzg0eHFRMWFvV1hBKzA1OFJYUHhQZzZmeTRJV3ZUTmgwRTI2M1htRmNKbFNBd2lHZ0ZBVy9kQWlTNkpYbVwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgIFxuICAgICAgPExheW91dD5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0xheW91dD5cblxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbiAgXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9