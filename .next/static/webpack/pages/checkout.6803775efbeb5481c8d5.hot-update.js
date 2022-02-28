webpackHotUpdate_N_E("pages/checkout",{

/***/ "./components/checkoutForm.js":
/*!************************************!*\
  !*** ./components/checkoutForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _cardSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cardSection */ "./components/cardSection.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./context */ "./components/context.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);




var _jsxFileName = "C:\\Users\\amato\\OneDrive\\Desktop\\restaurant_capstone\\components\\checkoutForm.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function CheckoutForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    stripe_id: ""
  }),
      data = _useState[0],
      setData = _useState[1];

  function pushToHome() {
    next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/');
  }

  ;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      validationError = _useState3[0],
      setValidationError = _useState3[1];

  var stripe = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["useStripe"])();
  var elements = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["useElements"])();
  var appContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_9__["default"]);
  var deactivateSubmitBtn = true;
  {
    appContext.user.activeUser ? deactivateSubmitBtn = !true : deactivateSubmitBtn = true;
  }
  ;
  {
    appContext.cart.items.length < 1 ? deactivateSubmitBtn = true : deactivateSubmitBtn = !true;
  }
  console.log(appContext.cart.items.length);

  function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function onChange(e) {
    // set the key = to the name property equal to the value typed
    var name = e.target.name;
    var value = e.target.value;
    if (name === 'state') value = value.toUpperCase();
    console.log("".concat(JSON.stringify(data)));
    var updateItem = data[name] = value; // update the state data object

    setData(_objectSpread(_objectSpread({}, data), {}, {
      updateItem: updateItem
    }));
  }

  function submitOrder() {
    return _submitOrder.apply(this, arguments);
  }

  function _submitOrder() {
    _submitOrder = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var cardElement, API_URL, token, userToken, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(data.firstName.length < 2)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", setValidationError("Name cannot be left blank"));

            case 2:
              if (!(data.lastName.length < 2)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", setValidationError("Name cannot be left blank"));

            case 4:
              if (!(data.address.length < 2)) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", setValidationError("Address cannot be left blank"));

            case 6:
              if (!(data.city.length < 2)) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return", setValidationError("City cannot be left blank"));

            case 8:
              if (!(data.state.length < 2)) {
                _context.next = 10;
                break;
              }

              return _context.abrupt("return", setValidationError("State cannot be left blank"));

            case 10:
              // // Use elements.getElement to get a reference to the mounted Element.
              cardElement = elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["CardElement"]); // // Pass the Element directly to other Stripe.js methods:
              // // e.g. createToken - https://stripe.com/docs/js/tokens_sources/create_token?type=cardElement
              // get token back from stripe to process credit card

              API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
              _context.next = 14;
              return stripe.createToken(cardElement);

            case 14:
              token = _context.sent;
              userToken = js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.get("token");
              console.log(token.token.id);
              _context.next = 19;
              return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6___default()("".concat(API_URL, "/orders"), {
                method: "POST",
                headers: userToken && {
                  Authorization: "Bearer ".concat(userToken)
                },
                body: JSON.stringify({
                  amount: Number(Math.round(appContext.cart.total + "e2") + "e-2"),
                  dishes: appContext.cart.items,
                  firstName: data.firstName,
                  lastName: data.lastName,
                  address: data.address,
                  city: data.city,
                  state: data.state,
                  token: token.token.id
                })
              });

            case 19:
              response = _context.sent;
              alert("\n    Thank you for your order ".concat(appContext.user.activeUser, "!\n    transaction id: ").concat(token.token.id, "\n    Your order will be ready in approximately: ").concat(getRandomArbitrary(10, 30)));
              pushToHome();

              if (!response.ok) {
                setError(response.statusText);
              }

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _submitOrder.apply(this, arguments);
  }

  return __jsx("div", {
    className: "jsx-1349334467" + " " + "paper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, __jsx("h5", {
    className: "jsx-1349334467",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, "Cardholder information:"), __jsx("small", {
    style: {
      color: "red",
      fontWeight: "bold"
    },
    className: "jsx-1349334467",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, validationError), __jsx("hr", {
    className: "jsx-1349334467",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    style: {
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      flex: "0.40",
      marginRight: "6%"
    },
    className: "jsx-1349334467",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, "First Name"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    placeholder: "John",
    name: "firstName",
    onChange: onChange,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  })), __jsx("div", {
    style: {
      flex: "0.40",
      marginRight: 0
    },
    className: "jsx-1349334467",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, "Last Name"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    placeholder: "Doe",
    name: "lastName",
    onChange: onChange,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    style: {
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      flex: "0.90",
      marginRight: 10
    },
    className: "jsx-1349334467",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, "Address"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    placeholder: "123456 main st",
    name: "address",
    onChange: onChange,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    style: {
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      flex: "0.45",
      marginRight: "6%"
    },
    className: "jsx-1349334467",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, "City"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    placeholder: "New York",
    name: "city",
    onChange: onChange,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  })), __jsx("div", {
    style: {
      flex: "0.25",
      marginRight: 0
    },
    className: "jsx-1349334467",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, "State"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    placeholder: "NY",
    name: "state",
    onChange: onChange,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }))), __jsx("hr", {
    className: "jsx-1349334467",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }), __jsx(_cardSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: data,
    deactivateSubmitBtn: deactivateSubmitBtn,
    stripeError: error,
    submitOrder: submitOrder,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1349334467",
    __self: this
  }, ".paper{border:1px solid lightgray;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);height:700px;padding:30px;background:#fff;border-radius:6px;margin-top:90px;}.form-half{-webkit-flex:0.5;-ms-flex:0.5;flex:0.5;}*{box-sizing:border-box;}body,html{background-color:#f6f9fc;font-size:18px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;}h1{color:#32325d;font-weight:400;line-height:50px;font-size:40px;margin:20px 0;padding:0;}.Checkout{margin:0 auto;max-width:800px;box-sizing:border-box;padding:0 5px;}label{color:#6b7c93;font-weight:300;-webkit-letter-spacing:0.025em;-moz-letter-spacing:0.025em;-ms-letter-spacing:0.025em;letter-spacing:0.025em;}button{white-space:nowrap;border:0;outline:0;display:inline-block;height:40px;line-height:40px;padding:0 14px;box-shadow:0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08);color:#fff;border-radius:4px;font-size:15px;font-weight:600;text-transform:uppercase;-webkit-letter-spacing:0.025em;-moz-letter-spacing:0.025em;-ms-letter-spacing:0.025em;letter-spacing:0.025em;background-color:#6772e5;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 150ms ease;-webkit-transition:all 150ms ease;transition:all 150ms ease;margin-top:10px;}form{margin-bottom:40px;padding-bottom:40px;border-bottom:3px solid #e6ebf1;}button:hover{color:#fff;cursor:pointer;background-color:#7795f8;-webkit-transform:translateY(-1px);-ms-transform:translateY(-1px);transform:translateY(-1px);box-shadow:0 7px 14px rgba(50,50,93,0.1), 0 3px 6px rgba(0,0,0,0.08);}input,.StripeElement{display:block;background-color:#f8f9fa !important;margin:10px 0 20px 0;max-width:500px;padding:10px 14px;font-size:1em;font-family:\"Source Code Pro\",monospace;box-shadow:rgba(50,50,93,0.14902) 0px 1px 3px, rgba(0,0,0,0.0196078) 0px 1px 0px;border:0;outline:0;border-radius:4px;background:white;}input::-webkit-input-placeholder{color:#aab7c4;}input::-moz-placeholder{color:#aab7c4;}input:-ms-input-placeholder{color:#aab7c4;}input::placeholder{color:#aab7c4;}input:focus,.StripeElement--focus{box-shadow:rgba(50,50,93,0.109804) 0px 4px 6px, rgba(0,0,0,0.0784314) 0px 1px 3px;-webkit-transition:all 150ms ease;-webkit-transition:all 150ms ease;transition:all 150ms ease;}.StripeElement.IdealBankElement,.StripeElement.PaymentRequestButton{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYW1hdG9cXE9uZURyaXZlXFxEZXNrdG9wXFxyZXN0YXVyYW50X2NhcHN0b25lXFxjb21wb25lbnRzXFxjaGVja291dEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEhTLEFBR3dDLEFBV2xCLEFBR2EsQUFJRyxBQUtYLEFBUUEsQUFNQSxBQUtLLEFBc0JBLEFBS1IsQUFTRyxBQWVBLEFBS3dCLEFBTTVCLFVBQ1osQ0FuQ2lCLEdBOUNDLEFBUUEsQUFNQSxBQXlDb0IsQUFldEMsS0FuRFcsQUFzQlcsR0FsRHRCLEdBSWlCLENBb0RVLENBcEVhLENBeUM1QixFQW5CTyxBQVFLLEFBTUMsUUFNRixDQWpDdkIsQUFzRGtDLENBOUN5QixPQU0xQyxHQXNETSxDQVJNLENBdENiLE9BWUYsR0FuQkUsSUFRaEIsS0FZbUIsQUFvQm5CLEFBY2tCLEtBckROLE1BdUV3QixJQXRFcEMsQ0FxRG9CLENBbENILE1BM0JqQixTQTZCaUMsRUFpQ2pCLFdBaUJZLEdBaEJlLG9CQWhGNUIsQUFvQ2YsS0FrQ2lDLFFBckVsQixPQWlGeUIsTUFoRnRCLE9BNkNMLElBa0RiLEtBOUZvQixFQTZDQSxnQkE1Q0YsRUE2Q0QsWUFzQmpCLEVBbEVBLENBNkNrQixnQkFDUyxRQWdDaEIsU0FDQyxRQWhDYSxFQWlDTCxrQkFDRCxpQkFDbkIsd0VBbEMyQix5QkFDSixrREFDYSxrQ0FDUiw0REFDVixnQkFDbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxhbWF0b1xcT25lRHJpdmVcXERlc2t0b3BcXHJlc3RhdXJhbnRfY2Fwc3RvbmVcXGNvbXBvbmVudHNcXGNoZWNrb3V0Rm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcbmltcG9ydCB7IENhcmRFbGVtZW50LCB1c2VTdHJpcGUsIHVzZUVsZW1lbnRzIH0gZnJvbSBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCI7XG5pbXBvcnQgQ2FyZFNlY3Rpb24gZnJvbSBcIi4vY2FyZFNlY3Rpb25cIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmZ1bmN0aW9uIENoZWNrb3V0Rm9ybSgpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xuICAgIGZpcnN0TmFtZTogXCJcIixcbiAgICBsYXN0TmFtZTogXCJcIixcbiAgICBhZGRyZXNzOiBcIlwiLFxuICAgIGNpdHk6IFwiXCIsXG4gICAgc3RhdGU6IFwiXCIsXG4gICAgc3RyaXBlX2lkOiBcIlwiLFxuICB9KTtcblxuICBmdW5jdGlvbiBwdXNoVG9Ib21lKCkge1xuICAgIFJvdXRlci5wdXNoKCcvJylcbiAgfTtcblxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdmFsaWRhdGlvbkVycm9yLCBzZXRWYWxpZGF0aW9uRXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHN0cmlwZSA9IHVzZVN0cmlwZSgpO1xuICBjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKCk7XG4gIGNvbnN0IGFwcENvbnRleHQgPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICBsZXQgZGVhY3RpdmF0ZVN1Ym1pdEJ0biA9IHRydWU7XG4gIHthcHBDb250ZXh0LnVzZXIuYWN0aXZlVXNlciA/IGRlYWN0aXZhdGVTdWJtaXRCdG4gPSAhdHJ1ZSA6IGRlYWN0aXZhdGVTdWJtaXRCdG4gPSB0cnVlfTtcbiAge2FwcENvbnRleHQuY2FydC5pdGVtcy5sZW5ndGggPCAxID8gZGVhY3RpdmF0ZVN1Ym1pdEJ0biA9IHRydWUgOiBkZWFjdGl2YXRlU3VibWl0QnRuID0gIXRydWV9XG4gIGNvbnNvbGUubG9nKGFwcENvbnRleHQuY2FydC5pdGVtcy5sZW5ndGgpXG5cbiAgZnVuY3Rpb24gZ2V0UmFuZG9tQXJiaXRyYXJ5KG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKVxuICB9XG5cbiAgZnVuY3Rpb24gb25DaGFuZ2UoZSkge1xuICAgIC8vIHNldCB0aGUga2V5ID0gdG8gdGhlIG5hbWUgcHJvcGVydHkgZXF1YWwgdG8gdGhlIHZhbHVlIHR5cGVkXG4gICAgbGV0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xuICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGlmKG5hbWUgPT09ICdzdGF0ZScpdmFsdWUgPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnNvbGUubG9nKGAke0pTT04uc3RyaW5naWZ5KGRhdGEpfWApXG4gICAgY29uc3QgdXBkYXRlSXRlbSA9IChkYXRhW25hbWVdID0gdmFsdWUpO1xuICAgIC8vIHVwZGF0ZSB0aGUgc3RhdGUgZGF0YSBvYmplY3RcbiAgICBzZXREYXRhKHsgLi4uZGF0YSwgdXBkYXRlSXRlbSB9KTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdE9yZGVyKCkge1xuICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYoZGF0YS5maXJzdE5hbWUubGVuZ3RoIDwgMikgcmV0dXJuIHNldFZhbGlkYXRpb25FcnJvcihcIk5hbWUgY2Fubm90IGJlIGxlZnQgYmxhbmtcIik7XG4gICAgaWYoZGF0YS5sYXN0TmFtZS5sZW5ndGggPCAyKSByZXR1cm4gc2V0VmFsaWRhdGlvbkVycm9yKFwiTmFtZSBjYW5ub3QgYmUgbGVmdCBibGFua1wiKTtcbiAgICBpZihkYXRhLmFkZHJlc3MubGVuZ3RoIDwgMikgcmV0dXJuIHNldFZhbGlkYXRpb25FcnJvcihcIkFkZHJlc3MgY2Fubm90IGJlIGxlZnQgYmxhbmtcIik7XG4gICAgaWYoZGF0YS5jaXR5Lmxlbmd0aCA8IDIpIHJldHVybiBzZXRWYWxpZGF0aW9uRXJyb3IoXCJDaXR5IGNhbm5vdCBiZSBsZWZ0IGJsYW5rXCIpO1xuICAgIGlmKGRhdGEuc3RhdGUubGVuZ3RoIDwgMikgcmV0dXJuIHNldFZhbGlkYXRpb25FcnJvcihcIlN0YXRlIGNhbm5vdCBiZSBsZWZ0IGJsYW5rXCIpO1xuICAgIC8vIC8vIFVzZSBlbGVtZW50cy5nZXRFbGVtZW50IHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgbW91bnRlZCBFbGVtZW50LlxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudCk7XG5cbiAgICAvLyAvLyBQYXNzIHRoZSBFbGVtZW50IGRpcmVjdGx5IHRvIG90aGVyIFN0cmlwZS5qcyBtZXRob2RzOlxuICAgIC8vIC8vIGUuZy4gY3JlYXRlVG9rZW4gLSBodHRwczovL3N0cmlwZS5jb20vZG9jcy9qcy90b2tlbnNfc291cmNlcy9jcmVhdGVfdG9rZW4/dHlwZT1jYXJkRWxlbWVudFxuICAgIC8vIGdldCB0b2tlbiBiYWNrIGZyb20gc3RyaXBlIHRvIHByb2Nlc3MgY3JlZGl0IGNhcmRcbiAgICBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiO1xuXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBzdHJpcGUuY3JlYXRlVG9rZW4oY2FyZEVsZW1lbnQpO1xuICAgIGNvbnN0IHVzZXJUb2tlbiA9IENvb2tpZXMuZ2V0KFwidG9rZW5cIik7XG4gICAgY29uc29sZS5sb2codG9rZW4udG9rZW4uaWQpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9vcmRlcnNgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogdXNlclRva2VuICYmIHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3VzZXJUb2tlbn1gIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGFtb3VudDogTnVtYmVyKE1hdGgucm91bmQoYXBwQ29udGV4dC5jYXJ0LnRvdGFsICsgXCJlMlwiKSArIFwiZS0yXCIpLFxuICAgICAgICBkaXNoZXM6IGFwcENvbnRleHQuY2FydC5pdGVtcyxcbiAgICAgICAgZmlyc3ROYW1lOiBkYXRhLmZpcnN0TmFtZSxcbiAgICAgICAgbGFzdE5hbWU6IGRhdGEubGFzdE5hbWUsXG4gICAgICAgIGFkZHJlc3M6IGRhdGEuYWRkcmVzcyxcbiAgICAgICAgY2l0eTogZGF0YS5jaXR5LFxuICAgICAgICBzdGF0ZTogZGF0YS5zdGF0ZSxcbiAgICAgICAgdG9rZW46IHRva2VuLnRva2VuLmlkLFxuICAgICAgfSksXG4gICAgfSk7XG4gICAgYWxlcnQoYFxuICAgIFRoYW5rIHlvdSBmb3IgeW91ciBvcmRlciAke2FwcENvbnRleHQudXNlci5hY3RpdmVVc2VyfSFcbiAgICB0cmFuc2FjdGlvbiBpZDogJHt0b2tlbi50b2tlbi5pZH1cbiAgICBZb3VyIG9yZGVyIHdpbGwgYmUgcmVhZHkgaW4gYXBwcm94aW1hdGVseTogJHtnZXRSYW5kb21BcmJpdHJhcnkoMTAsMzApfWApXG4gICAgcHVzaFRvSG9tZSgpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHNldEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYXBlclwiPlxuICAgICAgPGg1PkNhcmRob2xkZXIgaW5mb3JtYXRpb246PC9oNT5cbiAgICAgIDxzbWFsbCBzdHlsZT17e2NvbG9yOlwicmVkXCIsIGZvbnRXZWlnaHQ6XCJib2xkXCJ9fT57dmFsaWRhdGlvbkVycm9yfTwvc21hbGw+XG4gICAgICA8aHIgLz5cbiAgICAgIDxGb3JtR3JvdXAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogXCIwLjQwXCIsIG1hcmdpblJpZ2h0OiBcIjYlXCIgfX0+XG4gICAgICAgICAgPExhYmVsPkZpcnN0IE5hbWU8L0xhYmVsPlxuICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIkpvaG5cIiBuYW1lPVwiZmlyc3ROYW1lXCIgb25DaGFuZ2U9e29uQ2hhbmdlfSByZXF1aXJlZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiBcIjAuNDBcIiwgbWFyZ2luUmlnaHQ6IDAgfX0+XG4gICAgICAgICAgPExhYmVsPkxhc3QgTmFtZTwvTGFiZWw+XG4gICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiRG9lXCIgbmFtZT1cImxhc3ROYW1lXCIgb25DaGFuZ2U9e29uQ2hhbmdlfSByZXF1aXJlZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgPEZvcm1Hcm91cCBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiBcIjAuOTBcIiwgbWFyZ2luUmlnaHQ6IDEwIH19PlxuICAgICAgICAgIDxMYWJlbD5BZGRyZXNzPC9MYWJlbD5cbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCIxMjM0NTYgbWFpbiBzdFwiIG5hbWU9XCJhZGRyZXNzXCIgb25DaGFuZ2U9e29uQ2hhbmdlfSByZXF1aXJlZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgPEZvcm1Hcm91cCBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiBcIjAuNDVcIiwgbWFyZ2luUmlnaHQ6IFwiNiVcIiB9fT5cbiAgICAgICAgICA8TGFiZWw+Q2l0eTwvTGFiZWw+XG4gICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiTmV3IFlvcmtcIiBuYW1lPVwiY2l0eVwiIG9uQ2hhbmdlPXtvbkNoYW5nZX0gcmVxdWlyZWQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogXCIwLjI1XCIsIG1hcmdpblJpZ2h0OiAwIH19PlxuICAgICAgICAgIDxMYWJlbD5TdGF0ZTwvTGFiZWw+XG4gICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiTllcIiBuYW1lPVwic3RhdGVcIiBvbkNoYW5nZT17b25DaGFuZ2V9IHJlcXVpcmVkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgIDxoci8+XG4gICAgICA8Q2FyZFNlY3Rpb24gZGF0YT17ZGF0YX0gZGVhY3RpdmF0ZVN1Ym1pdEJ0bj17ZGVhY3RpdmF0ZVN1Ym1pdEJ0bn0gc3RyaXBlRXJyb3I9e2Vycm9yfSBzdWJtaXRPcmRlcj17c3VibWl0T3JkZXJ9IHJlcXVpcmVkIC8+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIC5wYXBlciB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgMHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgICAgICAgaGVpZ2h0OiA3MDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvcm0taGFsZiB7XG4gICAgICAgICAgICBmbGV4OiAwLjU7XG4gICAgICAgICAgfVxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSxcbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY5ZmM7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMzIzMjVkO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuQ2hlY2tvdXQge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogIzZiN2M5MztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE0cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSg1MCwgNTAsIDkzLCAwLjExKSxcbiAgICAgICAgICAgICAgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1ZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjc3MmU1O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2U2ZWJmMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc3OTVmODtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgN3B4IDE0cHggcmdiYSg1MCwgNTAsIDkzLCAwLjEpLFxuICAgICAgICAgICAgICAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgLlN0cmlwZUVsZW1lbnQge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMCAyMHB4IDA7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJTb3VyY2UgQ29kZSBQcm9cIiwgbW9ub3NwYWNlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjE0OTAyKSAwcHggMXB4IDNweCxcbiAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjAxOTYwNzgpIDBweCAxcHggMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgY29sb3I6ICNhYWI3YzQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0OmZvY3VzLFxuICAgICAgICAgIC5TdHJpcGVFbGVtZW50LS1mb2N1cyB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMTA5ODA0KSAwcHggNHB4IDZweCxcbiAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjA3ODQzMTQpIDBweCAxcHggM3B4O1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuU3RyaXBlRWxlbWVudC5JZGVhbEJhbmtFbGVtZW50LFxuICAgICAgICAgIC5TdHJpcGVFbGVtZW50LlBheW1lbnRSZXF1ZXN0QnV0dG9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0Rm9ybTtcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\amato\\\\OneDrive\\\\Desktop\\\\restaurant_capstone\\\\components\\\\checkoutForm.js */"));
}

_s(CheckoutForm, "6ehE+i0DAjB1/HJxoWbzZm4NaLw=", false, function () {
  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["useStripe"], _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["useElements"]];
});

_c = CheckoutForm;
/* harmony default export */ __webpack_exports__["default"] = (CheckoutForm);

var _c;

$RefreshReg$(_c, "CheckoutForm");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGVja291dEZvcm0uanMiXSwibmFtZXMiOlsiQ2hlY2tvdXRGb3JtIiwidXNlU3RhdGUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImFkZHJlc3MiLCJjaXR5Iiwic3RhdGUiLCJzdHJpcGVfaWQiLCJkYXRhIiwic2V0RGF0YSIsInB1c2hUb0hvbWUiLCJSb3V0ZXIiLCJwdXNoIiwiZXJyb3IiLCJzZXRFcnJvciIsInZhbGlkYXRpb25FcnJvciIsInNldFZhbGlkYXRpb25FcnJvciIsInN0cmlwZSIsInVzZVN0cmlwZSIsImVsZW1lbnRzIiwidXNlRWxlbWVudHMiLCJhcHBDb250ZXh0IiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJkZWFjdGl2YXRlU3VibWl0QnRuIiwidXNlciIsImFjdGl2ZVVzZXIiLCJjYXJ0IiwiaXRlbXMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZ2V0UmFuZG9tQXJiaXRyYXJ5IiwibWluIiwibWF4IiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwib25DaGFuZ2UiLCJlIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwidG9VcHBlckNhc2UiLCJKU09OIiwic3RyaW5naWZ5IiwidXBkYXRlSXRlbSIsInN1Ym1pdE9yZGVyIiwiY2FyZEVsZW1lbnQiLCJnZXRFbGVtZW50IiwiQ2FyZEVsZW1lbnQiLCJBUElfVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJjcmVhdGVUb2tlbiIsInRva2VuIiwidXNlclRva2VuIiwiQ29va2llcyIsImdldCIsImlkIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJhbW91bnQiLCJOdW1iZXIiLCJ0b3RhbCIsImRpc2hlcyIsInJlc3BvbnNlIiwiYWxlcnQiLCJvayIsInN0YXR1c1RleHQiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJkaXNwbGF5IiwiZmxleCIsIm1h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LGdEQUFEO0FBQU8sZUFBVyxFQUFDLElBQW5CO0FBQXdCLFFBQUksRUFBQyxPQUE3QjtBQUFxQyxZQUFRLEVBQUV4QyxRQUEvQztBQUF5RCxZQUFRLE1BQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQUxGLENBcEJGLEVBOEJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlCSixFQStCRSxNQUFDLG9EQUFEO0FBQWEsUUFBSSxFQUFFOUIsSUFBbkI7QUFBeUIsdUJBQW1CLEVBQUVnQixtQkFBOUM7QUFBbUUsZUFBVyxFQUFFWCxLQUFoRjtBQUF1RixlQUFXLEVBQUVrQyxXQUFwRztBQUFpSCxZQUFRLE1BQXpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvQkY7QUFBQTtBQUFBO0FBQUEsb3RkQURGO0FBbUpEOztHQXBPUS9DLFk7VUFnQlFrQixpRSxFQUNFRSxtRTs7O0tBakJWcEIsWTtBQXFPTUEsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQuNjgwMzc3NWVmYmViNTQ4MWM4ZDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcbmltcG9ydCB7IENhcmRFbGVtZW50LCB1c2VTdHJpcGUsIHVzZUVsZW1lbnRzIH0gZnJvbSBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCI7XG5pbXBvcnQgQ2FyZFNlY3Rpb24gZnJvbSBcIi4vY2FyZFNlY3Rpb25cIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmZ1bmN0aW9uIENoZWNrb3V0Rm9ybSgpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xuICAgIGZpcnN0TmFtZTogXCJcIixcbiAgICBsYXN0TmFtZTogXCJcIixcbiAgICBhZGRyZXNzOiBcIlwiLFxuICAgIGNpdHk6IFwiXCIsXG4gICAgc3RhdGU6IFwiXCIsXG4gICAgc3RyaXBlX2lkOiBcIlwiLFxuICB9KTtcblxuICBmdW5jdGlvbiBwdXNoVG9Ib21lKCkge1xuICAgIFJvdXRlci5wdXNoKCcvJylcbiAgfTtcblxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdmFsaWRhdGlvbkVycm9yLCBzZXRWYWxpZGF0aW9uRXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHN0cmlwZSA9IHVzZVN0cmlwZSgpO1xuICBjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKCk7XG4gIGNvbnN0IGFwcENvbnRleHQgPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICBsZXQgZGVhY3RpdmF0ZVN1Ym1pdEJ0biA9IHRydWU7XG4gIHthcHBDb250ZXh0LnVzZXIuYWN0aXZlVXNlciA/IGRlYWN0aXZhdGVTdWJtaXRCdG4gPSAhdHJ1ZSA6IGRlYWN0aXZhdGVTdWJtaXRCdG4gPSB0cnVlfTtcbiAge2FwcENvbnRleHQuY2FydC5pdGVtcy5sZW5ndGggPCAxID8gZGVhY3RpdmF0ZVN1Ym1pdEJ0biA9IHRydWUgOiBkZWFjdGl2YXRlU3VibWl0QnRuID0gIXRydWV9XG4gIGNvbnNvbGUubG9nKGFwcENvbnRleHQuY2FydC5pdGVtcy5sZW5ndGgpXG5cbiAgZnVuY3Rpb24gZ2V0UmFuZG9tQXJiaXRyYXJ5KG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKVxuICB9XG5cbiAgZnVuY3Rpb24gb25DaGFuZ2UoZSkge1xuICAgIC8vIHNldCB0aGUga2V5ID0gdG8gdGhlIG5hbWUgcHJvcGVydHkgZXF1YWwgdG8gdGhlIHZhbHVlIHR5cGVkXG4gICAgbGV0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xuICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGlmKG5hbWUgPT09ICdzdGF0ZScpdmFsdWUgPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnNvbGUubG9nKGAke0pTT04uc3RyaW5naWZ5KGRhdGEpfWApXG4gICAgY29uc3QgdXBkYXRlSXRlbSA9IChkYXRhW25hbWVdID0gdmFsdWUpO1xuICAgIC8vIHVwZGF0ZSB0aGUgc3RhdGUgZGF0YSBvYmplY3RcbiAgICBzZXREYXRhKHsgLi4uZGF0YSwgdXBkYXRlSXRlbSB9KTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdE9yZGVyKCkge1xuICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYoZGF0YS5maXJzdE5hbWUubGVuZ3RoIDwgMikgcmV0dXJuIHNldFZhbGlkYXRpb25FcnJvcihcIk5hbWUgY2Fubm90IGJlIGxlZnQgYmxhbmtcIik7XG4gICAgaWYoZGF0YS5sYXN0TmFtZS5sZW5ndGggPCAyKSByZXR1cm4gc2V0VmFsaWRhdGlvbkVycm9yKFwiTmFtZSBjYW5ub3QgYmUgbGVmdCBibGFua1wiKTtcbiAgICBpZihkYXRhLmFkZHJlc3MubGVuZ3RoIDwgMikgcmV0dXJuIHNldFZhbGlkYXRpb25FcnJvcihcIkFkZHJlc3MgY2Fubm90IGJlIGxlZnQgYmxhbmtcIik7XG4gICAgaWYoZGF0YS5jaXR5Lmxlbmd0aCA8IDIpIHJldHVybiBzZXRWYWxpZGF0aW9uRXJyb3IoXCJDaXR5IGNhbm5vdCBiZSBsZWZ0IGJsYW5rXCIpO1xuICAgIGlmKGRhdGEuc3RhdGUubGVuZ3RoIDwgMikgcmV0dXJuIHNldFZhbGlkYXRpb25FcnJvcihcIlN0YXRlIGNhbm5vdCBiZSBsZWZ0IGJsYW5rXCIpO1xuICAgIC8vIC8vIFVzZSBlbGVtZW50cy5nZXRFbGVtZW50IHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgbW91bnRlZCBFbGVtZW50LlxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudCk7XG5cbiAgICAvLyAvLyBQYXNzIHRoZSBFbGVtZW50IGRpcmVjdGx5IHRvIG90aGVyIFN0cmlwZS5qcyBtZXRob2RzOlxuICAgIC8vIC8vIGUuZy4gY3JlYXRlVG9rZW4gLSBodHRwczovL3N0cmlwZS5jb20vZG9jcy9qcy90b2tlbnNfc291cmNlcy9jcmVhdGVfdG9rZW4/dHlwZT1jYXJkRWxlbWVudFxuICAgIC8vIGdldCB0b2tlbiBiYWNrIGZyb20gc3RyaXBlIHRvIHByb2Nlc3MgY3JlZGl0IGNhcmRcbiAgICBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiO1xuXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBzdHJpcGUuY3JlYXRlVG9rZW4oY2FyZEVsZW1lbnQpO1xuICAgIGNvbnN0IHVzZXJUb2tlbiA9IENvb2tpZXMuZ2V0KFwidG9rZW5cIik7XG4gICAgY29uc29sZS5sb2codG9rZW4udG9rZW4uaWQpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9vcmRlcnNgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogdXNlclRva2VuICYmIHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3VzZXJUb2tlbn1gIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGFtb3VudDogTnVtYmVyKE1hdGgucm91bmQoYXBwQ29udGV4dC5jYXJ0LnRvdGFsICsgXCJlMlwiKSArIFwiZS0yXCIpLFxuICAgICAgICBkaXNoZXM6IGFwcENvbnRleHQuY2FydC5pdGVtcyxcbiAgICAgICAgZmlyc3ROYW1lOiBkYXRhLmZpcnN0TmFtZSxcbiAgICAgICAgbGFzdE5hbWU6IGRhdGEubGFzdE5hbWUsXG4gICAgICAgIGFkZHJlc3M6IGRhdGEuYWRkcmVzcyxcbiAgICAgICAgY2l0eTogZGF0YS5jaXR5LFxuICAgICAgICBzdGF0ZTogZGF0YS5zdGF0ZSxcbiAgICAgICAgdG9rZW46IHRva2VuLnRva2VuLmlkLFxuICAgICAgfSksXG4gICAgfSk7XG4gICAgYWxlcnQoYFxuICAgIFRoYW5rIHlvdSBmb3IgeW91ciBvcmRlciAke2FwcENvbnRleHQudXNlci5hY3RpdmVVc2VyfSFcbiAgICB0cmFuc2FjdGlvbiBpZDogJHt0b2tlbi50b2tlbi5pZH1cbiAgICBZb3VyIG9yZGVyIHdpbGwgYmUgcmVhZHkgaW4gYXBwcm94aW1hdGVseTogJHtnZXRSYW5kb21BcmJpdHJhcnkoMTAsMzApfWApXG4gICAgcHVzaFRvSG9tZSgpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHNldEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYXBlclwiPlxuICAgICAgPGg1PkNhcmRob2xkZXIgaW5mb3JtYXRpb246PC9oNT5cbiAgICAgIDxzbWFsbCBzdHlsZT17e2NvbG9yOlwicmVkXCIsIGZvbnRXZWlnaHQ6XCJib2xkXCJ9fT57dmFsaWRhdGlvbkVycm9yfTwvc21hbGw+XG4gICAgICA8aHIgLz5cbiAgICAgIDxGb3JtR3JvdXAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogXCIwLjQwXCIsIG1hcmdpblJpZ2h0OiBcIjYlXCIgfX0+XG4gICAgICAgICAgPExhYmVsPkZpcnN0IE5hbWU8L0xhYmVsPlxuICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIkpvaG5cIiBuYW1lPVwiZmlyc3ROYW1lXCIgb25DaGFuZ2U9e29uQ2hhbmdlfSByZXF1aXJlZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiBcIjAuNDBcIiwgbWFyZ2luUmlnaHQ6IDAgfX0+XG4gICAgICAgICAgPExhYmVsPkxhc3QgTmFtZTwvTGFiZWw+XG4gICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiRG9lXCIgbmFtZT1cImxhc3ROYW1lXCIgb25DaGFuZ2U9e29uQ2hhbmdlfSByZXF1aXJlZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgPEZvcm1Hcm91cCBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiBcIjAuOTBcIiwgbWFyZ2luUmlnaHQ6IDEwIH19PlxuICAgICAgICAgIDxMYWJlbD5BZGRyZXNzPC9MYWJlbD5cbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCIxMjM0NTYgbWFpbiBzdFwiIG5hbWU9XCJhZGRyZXNzXCIgb25DaGFuZ2U9e29uQ2hhbmdlfSByZXF1aXJlZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgPEZvcm1Hcm91cCBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiBcIjAuNDVcIiwgbWFyZ2luUmlnaHQ6IFwiNiVcIiB9fT5cbiAgICAgICAgICA8TGFiZWw+Q2l0eTwvTGFiZWw+XG4gICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiTmV3IFlvcmtcIiBuYW1lPVwiY2l0eVwiIG9uQ2hhbmdlPXtvbkNoYW5nZX0gcmVxdWlyZWQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogXCIwLjI1XCIsIG1hcmdpblJpZ2h0OiAwIH19PlxuICAgICAgICAgIDxMYWJlbD5TdGF0ZTwvTGFiZWw+XG4gICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiTllcIiBuYW1lPVwic3RhdGVcIiBvbkNoYW5nZT17b25DaGFuZ2V9IHJlcXVpcmVkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgIDxoci8+XG4gICAgICA8Q2FyZFNlY3Rpb24gZGF0YT17ZGF0YX0gZGVhY3RpdmF0ZVN1Ym1pdEJ0bj17ZGVhY3RpdmF0ZVN1Ym1pdEJ0bn0gc3RyaXBlRXJyb3I9e2Vycm9yfSBzdWJtaXRPcmRlcj17c3VibWl0T3JkZXJ9IHJlcXVpcmVkIC8+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIC5wYXBlciB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgMHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgICAgICAgaGVpZ2h0OiA3MDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvcm0taGFsZiB7XG4gICAgICAgICAgICBmbGV4OiAwLjU7XG4gICAgICAgICAgfVxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSxcbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY5ZmM7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMzIzMjVkO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuQ2hlY2tvdXQge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogIzZiN2M5MztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE0cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSg1MCwgNTAsIDkzLCAwLjExKSxcbiAgICAgICAgICAgICAgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1ZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjc3MmU1O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2U2ZWJmMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc3OTVmODtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgN3B4IDE0cHggcmdiYSg1MCwgNTAsIDkzLCAwLjEpLFxuICAgICAgICAgICAgICAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgLlN0cmlwZUVsZW1lbnQge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMCAyMHB4IDA7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJTb3VyY2UgQ29kZSBQcm9cIiwgbW9ub3NwYWNlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjE0OTAyKSAwcHggMXB4IDNweCxcbiAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjAxOTYwNzgpIDBweCAxcHggMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgY29sb3I6ICNhYWI3YzQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0OmZvY3VzLFxuICAgICAgICAgIC5TdHJpcGVFbGVtZW50LS1mb2N1cyB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMTA5ODA0KSAwcHggNHB4IDZweCxcbiAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjA3ODQzMTQpIDBweCAxcHggM3B4O1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuU3RyaXBlRWxlbWVudC5JZGVhbEJhbmtFbGVtZW50LFxuICAgICAgICAgIC5TdHJpcGVFbGVtZW50LlBheW1lbnRSZXF1ZXN0QnV0dG9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0Rm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=