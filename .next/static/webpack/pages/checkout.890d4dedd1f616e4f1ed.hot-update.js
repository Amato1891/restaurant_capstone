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
              alert("\n    Thank you for your order ".concat(appContext.user.activeUser, "!\n    transaction id: ").concat(token.token.id, "\n    Your order will be ready in approximately: ").concat(Math.floor(Math.random() * 20), " minutes\n    "));
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
      lineNumber: 90,
      columnNumber: 5
    }
  }, __jsx("h5", {
    className: "jsx-1349334467",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
      lineNumber: 92,
      columnNumber: 7
    }
  }, validationError), __jsx("hr", {
    className: "jsx-1349334467",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    style: {
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
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
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
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
      lineNumber: 97,
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
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
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
      lineNumber: 101,
      columnNumber: 11
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    style: {
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
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
      lineNumber: 105,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
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
      lineNumber: 107,
      columnNumber: 11
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    style: {
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
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
      lineNumber: 111,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
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
      lineNumber: 113,
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
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
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
      lineNumber: 117,
      columnNumber: 11
    }
  }))), __jsx("hr", {
    className: "jsx-1349334467",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
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
      lineNumber: 121,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1349334467",
    __self: this
  }, ".paper{border:1px solid lightgray;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);height:700px;padding:30px;background:#fff;border-radius:6px;margin-top:90px;}.form-half{-webkit-flex:0.5;-ms-flex:0.5;flex:0.5;}*{box-sizing:border-box;}body,html{background-color:#f6f9fc;font-size:18px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;}h1{color:#32325d;font-weight:400;line-height:50px;font-size:40px;margin:20px 0;padding:0;}.Checkout{margin:0 auto;max-width:800px;box-sizing:border-box;padding:0 5px;}label{color:#6b7c93;font-weight:300;-webkit-letter-spacing:0.025em;-moz-letter-spacing:0.025em;-ms-letter-spacing:0.025em;letter-spacing:0.025em;}button{white-space:nowrap;border:0;outline:0;display:inline-block;height:40px;line-height:40px;padding:0 14px;box-shadow:0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08);color:#fff;border-radius:4px;font-size:15px;font-weight:600;text-transform:uppercase;-webkit-letter-spacing:0.025em;-moz-letter-spacing:0.025em;-ms-letter-spacing:0.025em;letter-spacing:0.025em;background-color:#6772e5;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 150ms ease;-webkit-transition:all 150ms ease;transition:all 150ms ease;margin-top:10px;}form{margin-bottom:40px;padding-bottom:40px;border-bottom:3px solid #e6ebf1;}button:hover{color:#fff;cursor:pointer;background-color:#7795f8;-webkit-transform:translateY(-1px);-ms-transform:translateY(-1px);transform:translateY(-1px);box-shadow:0 7px 14px rgba(50,50,93,0.1), 0 3px 6px rgba(0,0,0,0.08);}input,.StripeElement{display:block;background-color:#f8f9fa !important;margin:10px 0 20px 0;max-width:500px;padding:10px 14px;font-size:1em;font-family:\"Source Code Pro\",monospace;box-shadow:rgba(50,50,93,0.14902) 0px 1px 3px, rgba(0,0,0,0.0196078) 0px 1px 0px;border:0;outline:0;border-radius:4px;background:white;}input::-webkit-input-placeholder{color:#aab7c4;}input::-moz-placeholder{color:#aab7c4;}input:-ms-input-placeholder{color:#aab7c4;}input::placeholder{color:#aab7c4;}input:focus,.StripeElement--focus{box-shadow:rgba(50,50,93,0.109804) 0px 4px 6px, rgba(0,0,0,0.0784314) 0px 1px 3px;-webkit-transition:all 150ms ease;-webkit-transition:all 150ms ease;transition:all 150ms ease;}.StripeElement.IdealBankElement,.StripeElement.PaymentRequestButton{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYW1hdG9cXE9uZURyaXZlXFxEZXNrdG9wXFxyZXN0YXVyYW50X2NhcHN0b25lXFxjb21wb25lbnRzXFxjaGVja291dEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkhTLEFBR3dDLEFBV2xCLEFBR2EsQUFJRyxBQUtYLEFBUUEsQUFNQSxBQUtLLEFBc0JBLEFBS1IsQUFTRyxBQWVBLEFBS3dCLEFBTTVCLFVBQ1osQ0FuQ2lCLEdBOUNDLEFBUUEsQUFNQSxBQXlDb0IsQUFldEMsS0FuRFcsQUFzQlcsR0FsRHRCLEdBSWlCLENBb0RVLENBcEVhLENBeUM1QixFQW5CTyxBQVFLLEFBTUMsUUFNRixDQWpDdkIsQUFzRGtDLENBOUN5QixPQU0xQyxHQXNETSxDQVJNLENBdENiLE9BWUYsR0FuQkUsSUFRaEIsS0FZbUIsQUFvQm5CLEFBY2tCLEtBckROLE1BdUV3QixJQXRFcEMsQ0FxRG9CLENBbENILE1BM0JqQixTQTZCaUMsRUFpQ2pCLFdBaUJZLEdBaEJlLG9CQWhGNUIsQUFvQ2YsS0FrQ2lDLFFBckVsQixPQWlGeUIsTUFoRnRCLE9BNkNMLElBa0RiLEtBOUZvQixFQTZDQSxnQkE1Q0YsRUE2Q0QsWUFzQmpCLEVBbEVBLENBNkNrQixnQkFDUyxRQWdDaEIsU0FDQyxRQWhDYSxFQWlDTCxrQkFDRCxpQkFDbkIsd0VBbEMyQix5QkFDSixrREFDYSxrQ0FDUiw0REFDVixnQkFDbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxhbWF0b1xcT25lRHJpdmVcXERlc2t0b3BcXHJlc3RhdXJhbnRfY2Fwc3RvbmVcXGNvbXBvbmVudHNcXGNoZWNrb3V0Rm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcbmltcG9ydCB7IENhcmRFbGVtZW50LCB1c2VTdHJpcGUsIHVzZUVsZW1lbnRzIH0gZnJvbSBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCI7XG5pbXBvcnQgQ2FyZFNlY3Rpb24gZnJvbSBcIi4vY2FyZFNlY3Rpb25cIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmZ1bmN0aW9uIENoZWNrb3V0Rm9ybSgpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xuICAgIGZpcnN0TmFtZTogXCJcIixcbiAgICBsYXN0TmFtZTogXCJcIixcbiAgICBhZGRyZXNzOiBcIlwiLFxuICAgIGNpdHk6IFwiXCIsXG4gICAgc3RhdGU6IFwiXCIsXG4gICAgc3RyaXBlX2lkOiBcIlwiLFxuICB9KTtcblxuICBmdW5jdGlvbiBwdXNoVG9Ib21lKCkge1xuICAgIFJvdXRlci5wdXNoKCcvJylcbiAgfTtcblxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdmFsaWRhdGlvbkVycm9yLCBzZXRWYWxpZGF0aW9uRXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHN0cmlwZSA9IHVzZVN0cmlwZSgpO1xuICBjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKCk7XG4gIGNvbnN0IGFwcENvbnRleHQgPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICBsZXQgZGVhY3RpdmF0ZVN1Ym1pdEJ0biA9IHRydWU7XG4gIHthcHBDb250ZXh0LnVzZXIuYWN0aXZlVXNlciA/IGRlYWN0aXZhdGVTdWJtaXRCdG4gPSAhdHJ1ZSA6IGRlYWN0aXZhdGVTdWJtaXRCdG4gPSB0cnVlfTtcbiAge2FwcENvbnRleHQuY2FydC5pdGVtcy5sZW5ndGggPCAxID8gZGVhY3RpdmF0ZVN1Ym1pdEJ0biA9IHRydWUgOiBkZWFjdGl2YXRlU3VibWl0QnRuID0gIXRydWV9XG4gIGNvbnNvbGUubG9nKGFwcENvbnRleHQuY2FydC5pdGVtcy5sZW5ndGgpXG5cbiAgZnVuY3Rpb24gb25DaGFuZ2UoZSkge1xuICAgIC8vIHNldCB0aGUga2V5ID0gdG8gdGhlIG5hbWUgcHJvcGVydHkgZXF1YWwgdG8gdGhlIHZhbHVlIHR5cGVkXG4gICAgbGV0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xuICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGlmKG5hbWUgPT09ICdzdGF0ZScpdmFsdWUgPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnNvbGUubG9nKGAke0pTT04uc3RyaW5naWZ5KGRhdGEpfWApXG4gICAgY29uc3QgdXBkYXRlSXRlbSA9IChkYXRhW25hbWVdID0gdmFsdWUpO1xuICAgIC8vIHVwZGF0ZSB0aGUgc3RhdGUgZGF0YSBvYmplY3RcbiAgICBzZXREYXRhKHsgLi4uZGF0YSwgdXBkYXRlSXRlbSB9KTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdE9yZGVyKCkge1xuICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYoZGF0YS5maXJzdE5hbWUubGVuZ3RoIDwgMikgcmV0dXJuIHNldFZhbGlkYXRpb25FcnJvcihcIk5hbWUgY2Fubm90IGJlIGxlZnQgYmxhbmtcIik7XG4gICAgaWYoZGF0YS5sYXN0TmFtZS5sZW5ndGggPCAyKSByZXR1cm4gc2V0VmFsaWRhdGlvbkVycm9yKFwiTmFtZSBjYW5ub3QgYmUgbGVmdCBibGFua1wiKTtcbiAgICBpZihkYXRhLmFkZHJlc3MubGVuZ3RoIDwgMikgcmV0dXJuIHNldFZhbGlkYXRpb25FcnJvcihcIkFkZHJlc3MgY2Fubm90IGJlIGxlZnQgYmxhbmtcIik7XG4gICAgaWYoZGF0YS5jaXR5Lmxlbmd0aCA8IDIpIHJldHVybiBzZXRWYWxpZGF0aW9uRXJyb3IoXCJDaXR5IGNhbm5vdCBiZSBsZWZ0IGJsYW5rXCIpO1xuICAgIGlmKGRhdGEuc3RhdGUubGVuZ3RoIDwgMikgcmV0dXJuIHNldFZhbGlkYXRpb25FcnJvcihcIlN0YXRlIGNhbm5vdCBiZSBsZWZ0IGJsYW5rXCIpO1xuICAgIC8vIC8vIFVzZSBlbGVtZW50cy5nZXRFbGVtZW50IHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgbW91bnRlZCBFbGVtZW50LlxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudCk7XG5cbiAgICAvLyAvLyBQYXNzIHRoZSBFbGVtZW50IGRpcmVjdGx5IHRvIG90aGVyIFN0cmlwZS5qcyBtZXRob2RzOlxuICAgIC8vIC8vIGUuZy4gY3JlYXRlVG9rZW4gLSBodHRwczovL3N0cmlwZS5jb20vZG9jcy9qcy90b2tlbnNfc291cmNlcy9jcmVhdGVfdG9rZW4/dHlwZT1jYXJkRWxlbWVudFxuICAgIC8vIGdldCB0b2tlbiBiYWNrIGZyb20gc3RyaXBlIHRvIHByb2Nlc3MgY3JlZGl0IGNhcmRcbiAgICBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiO1xuXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBzdHJpcGUuY3JlYXRlVG9rZW4oY2FyZEVsZW1lbnQpO1xuICAgIGNvbnN0IHVzZXJUb2tlbiA9IENvb2tpZXMuZ2V0KFwidG9rZW5cIik7XG4gICAgY29uc29sZS5sb2codG9rZW4udG9rZW4uaWQpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9vcmRlcnNgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogdXNlclRva2VuICYmIHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3VzZXJUb2tlbn1gIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGFtb3VudDogTnVtYmVyKE1hdGgucm91bmQoYXBwQ29udGV4dC5jYXJ0LnRvdGFsICsgXCJlMlwiKSArIFwiZS0yXCIpLFxuICAgICAgICBkaXNoZXM6IGFwcENvbnRleHQuY2FydC5pdGVtcyxcbiAgICAgICAgZmlyc3ROYW1lOiBkYXRhLmZpcnN0TmFtZSxcbiAgICAgICAgbGFzdE5hbWU6IGRhdGEubGFzdE5hbWUsXG4gICAgICAgIGFkZHJlc3M6IGRhdGEuYWRkcmVzcyxcbiAgICAgICAgY2l0eTogZGF0YS5jaXR5LFxuICAgICAgICBzdGF0ZTogZGF0YS5zdGF0ZSxcbiAgICAgICAgdG9rZW46IHRva2VuLnRva2VuLmlkLFxuICAgICAgfSksXG4gICAgfSk7XG4gICAgYWxlcnQoYFxuICAgIFRoYW5rIHlvdSBmb3IgeW91ciBvcmRlciAke2FwcENvbnRleHQudXNlci5hY3RpdmVVc2VyfSFcbiAgICB0cmFuc2FjdGlvbiBpZDogJHt0b2tlbi50b2tlbi5pZH1cbiAgICBZb3VyIG9yZGVyIHdpbGwgYmUgcmVhZHkgaW4gYXBwcm94aW1hdGVseTogJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMjApfSBtaW51dGVzXG4gICAgYClcbiAgICBwdXNoVG9Ib21lKCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgc2V0RXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcGVyXCI+XG4gICAgICA8aDU+Q2FyZGhvbGRlciBpbmZvcm1hdGlvbjo8L2g1PlxuICAgICAgPHNtYWxsIHN0eWxlPXt7Y29sb3I6XCJyZWRcIiwgZm9udFdlaWdodDpcImJvbGRcIn19Pnt2YWxpZGF0aW9uRXJyb3J9PC9zbWFsbD5cbiAgICAgIDxociAvPlxuICAgICAgPEZvcm1Hcm91cCBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiBcIjAuNDBcIiwgbWFyZ2luUmlnaHQ6IFwiNiVcIiB9fT5cbiAgICAgICAgICA8TGFiZWw+Rmlyc3QgTmFtZTwvTGFiZWw+XG4gICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiSm9oblwiIG5hbWU9XCJmaXJzdE5hbWVcIiBvbkNoYW5nZT17b25DaGFuZ2V9IHJlcXVpcmVkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IFwiMC40MFwiLCBtYXJnaW5SaWdodDogMCB9fT5cbiAgICAgICAgICA8TGFiZWw+TGFzdCBOYW1lPC9MYWJlbD5cbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJEb2VcIiBuYW1lPVwibGFzdE5hbWVcIiBvbkNoYW5nZT17b25DaGFuZ2V9IHJlcXVpcmVkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8Rm9ybUdyb3VwIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IFwiMC45MFwiLCBtYXJnaW5SaWdodDogMTAgfX0+XG4gICAgICAgICAgPExhYmVsPkFkZHJlc3M8L0xhYmVsPlxuICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIjEyMzQ1NiBtYWluIHN0XCIgbmFtZT1cImFkZHJlc3NcIiBvbkNoYW5nZT17b25DaGFuZ2V9IHJlcXVpcmVkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8Rm9ybUdyb3VwIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IFwiMC40NVwiLCBtYXJnaW5SaWdodDogXCI2JVwiIH19PlxuICAgICAgICAgIDxMYWJlbD5DaXR5PC9MYWJlbD5cbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJOZXcgWW9ya1wiIG5hbWU9XCJjaXR5XCIgb25DaGFuZ2U9e29uQ2hhbmdlfSByZXF1aXJlZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiBcIjAuMjVcIiwgbWFyZ2luUmlnaHQ6IDAgfX0+XG4gICAgICAgICAgPExhYmVsPlN0YXRlPC9MYWJlbD5cbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJOWVwiIG5hbWU9XCJzdGF0ZVwiIG9uQ2hhbmdlPXtvbkNoYW5nZX0gcmVxdWlyZWQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgPGhyLz5cbiAgICAgIDxDYXJkU2VjdGlvbiBkYXRhPXtkYXRhfSBkZWFjdGl2YXRlU3VibWl0QnRuPXtkZWFjdGl2YXRlU3VibWl0QnRufSBzdHJpcGVFcnJvcj17ZXJyb3J9IHN1Ym1pdE9yZGVyPXtzdWJtaXRPcmRlcn0gcmVxdWlyZWQgLz5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgLnBhcGVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICAgICAgICBoZWlnaHQ6IDcwMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA5MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9ybS1oYWxmIHtcbiAgICAgICAgICAgIGZsZXg6IDAuNTtcbiAgICAgICAgICB9XG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5LFxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjlmYztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgY29sb3I6ICMzMjMyNWQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5DaGVja291dCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNmI3YzkzO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTRweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDUwLCA1MCwgOTMsIDAuMTEpLFxuICAgICAgICAgICAgICAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzcyZTU7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZTZlYmYxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc5NWY4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA3cHggMTRweCByZ2JhKDUwLCA1MCwgOTMsIDAuMSksXG4gICAgICAgICAgICAgIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAuU3RyaXBlRWxlbWVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmEgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDIwcHggMDtcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBDb2RlIFByb1wiLCBtb25vc3BhY2U7XG4gICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMTQ5MDIpIDBweCAxcHggM3B4LFxuICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMDE5NjA3OCkgMHB4IDFweCAwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogI2FhYjdjNDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5wdXQ6Zm9jdXMsXG4gICAgICAgICAgLlN0cmlwZUVsZW1lbnQtLWZvY3VzIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4xMDk4MDQpIDBweCA0cHggNnB4LFxuICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMDc4NDMxNCkgMHB4IDFweCAzcHg7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5TdHJpcGVFbGVtZW50LklkZWFsQmFua0VsZW1lbnQsXG4gICAgICAgICAgLlN0cmlwZUVsZW1lbnQuUGF5bWVudFJlcXVlc3RCdXR0b24ge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXRGb3JtO1xuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\amato\\\\OneDrive\\\\Desktop\\\\restaurant_capstone\\\\components\\\\checkoutForm.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGVja291dEZvcm0uanMiXSwibmFtZXMiOlsiQ2hlY2tvdXRGb3JtIiwidXNlU3RhdGUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImFkZHJlc3MiLCJjaXR5Iiwic3RhdGUiLCJzdHJpcGVfaWQiLCJkYXRhIiwic2V0RGF0YSIsInB1c2hUb0hvbWUiLCJSb3V0ZXIiLCJwdXNoIiwiZXJyb3IiLCJzZXRFcnJvciIsInZhbGlkYXRpb25FcnJvciIsInNldFZhbGlkYXRpb25FcnJvciIsInN0cmlwZSIsInVzZVN0cmlwZSIsImVsZW1lbnRzIiwidXNlRWxlbWVudHMiLCJhcHBDb250ZXh0IiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJkZWFjdGl2YXRlU3VibWl0QnRuIiwidXNlciIsImFjdGl2ZVVzZXIiLCJjYXJ0IiwiaXRlbXMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwib25DaGFuZ2UiLCJlIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwidG9VcHBlckNhc2UiLCJKU09OIiwic3RyaW5naWZ5IiwidXBkYXRlSXRlbSIsInN1Ym1pdE9yZGVyIiwiY2FyZEVsZW1lbnQiLCJnZXRFbGVtZW50IiwiQ2FyZEVsZW1lbnQiLCJBUElfVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJjcmVhdGVUb2tlbiIsInRva2VuIiwidXNlclRva2VuIiwiQ29va2llcyIsImdldCIsImlkIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJhbW91bnQiLCJOdW1iZXIiLCJNYXRoIiwicm91bmQiLCJ0b3RhbCIsImRpc2hlcyIsInJlc3BvbnNlIiwiYWxlcnQiLCJmbG9vciIsInJhbmRvbSIsIm9rIiwic3RhdHVzVGV4dCIsImNvbG9yIiwiZm9udFdlaWdodCIsImRpc3BsYXkiLCJmbGV4IiwibWFyZ2luUmlnaHQiXSwibWFwcGluZ3MiOiI7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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlCSixFQStCRSxNQUFDLG9EQUFEO0FBQWEsUUFBSSxFQUFFeEIsSUFBbkI7QUFBeUIsdUJBQW1CLEVBQUVnQixtQkFBOUM7QUFBbUUsZUFBVyxFQUFFWCxLQUFoRjtBQUF1RixlQUFXLEVBQUU0QixXQUFwRztBQUFpSCxZQUFRLE1BQXpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvQkY7QUFBQTtBQUFBO0FBQUEsd2xkQURGO0FBbUpEOztHQWpPUXpDLFk7VUFnQlFrQixpRSxFQUNFRSxtRTs7O0tBakJWcEIsWTtBQWtPTUEsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQuODkwZDRkZWRkMWY2MTZlNGYxZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcbmltcG9ydCB7IENhcmRFbGVtZW50LCB1c2VTdHJpcGUsIHVzZUVsZW1lbnRzIH0gZnJvbSBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCI7XG5pbXBvcnQgQ2FyZFNlY3Rpb24gZnJvbSBcIi4vY2FyZFNlY3Rpb25cIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmZ1bmN0aW9uIENoZWNrb3V0Rm9ybSgpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xuICAgIGZpcnN0TmFtZTogXCJcIixcbiAgICBsYXN0TmFtZTogXCJcIixcbiAgICBhZGRyZXNzOiBcIlwiLFxuICAgIGNpdHk6IFwiXCIsXG4gICAgc3RhdGU6IFwiXCIsXG4gICAgc3RyaXBlX2lkOiBcIlwiLFxuICB9KTtcblxuICBmdW5jdGlvbiBwdXNoVG9Ib21lKCkge1xuICAgIFJvdXRlci5wdXNoKCcvJylcbiAgfTtcblxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdmFsaWRhdGlvbkVycm9yLCBzZXRWYWxpZGF0aW9uRXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHN0cmlwZSA9IHVzZVN0cmlwZSgpO1xuICBjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKCk7XG4gIGNvbnN0IGFwcENvbnRleHQgPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICBsZXQgZGVhY3RpdmF0ZVN1Ym1pdEJ0biA9IHRydWU7XG4gIHthcHBDb250ZXh0LnVzZXIuYWN0aXZlVXNlciA/IGRlYWN0aXZhdGVTdWJtaXRCdG4gPSAhdHJ1ZSA6IGRlYWN0aXZhdGVTdWJtaXRCdG4gPSB0cnVlfTtcbiAge2FwcENvbnRleHQuY2FydC5pdGVtcy5sZW5ndGggPCAxID8gZGVhY3RpdmF0ZVN1Ym1pdEJ0biA9IHRydWUgOiBkZWFjdGl2YXRlU3VibWl0QnRuID0gIXRydWV9XG4gIGNvbnNvbGUubG9nKGFwcENvbnRleHQuY2FydC5pdGVtcy5sZW5ndGgpXG5cbiAgZnVuY3Rpb24gb25DaGFuZ2UoZSkge1xuICAgIC8vIHNldCB0aGUga2V5ID0gdG8gdGhlIG5hbWUgcHJvcGVydHkgZXF1YWwgdG8gdGhlIHZhbHVlIHR5cGVkXG4gICAgbGV0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xuICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGlmKG5hbWUgPT09ICdzdGF0ZScpdmFsdWUgPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnNvbGUubG9nKGAke0pTT04uc3RyaW5naWZ5KGRhdGEpfWApXG4gICAgY29uc3QgdXBkYXRlSXRlbSA9IChkYXRhW25hbWVdID0gdmFsdWUpO1xuICAgIC8vIHVwZGF0ZSB0aGUgc3RhdGUgZGF0YSBvYmplY3RcbiAgICBzZXREYXRhKHsgLi4uZGF0YSwgdXBkYXRlSXRlbSB9KTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdE9yZGVyKCkge1xuICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYoZGF0YS5maXJzdE5hbWUubGVuZ3RoIDwgMikgcmV0dXJuIHNldFZhbGlkYXRpb25FcnJvcihcIk5hbWUgY2Fubm90IGJlIGxlZnQgYmxhbmtcIik7XG4gICAgaWYoZGF0YS5sYXN0TmFtZS5sZW5ndGggPCAyKSByZXR1cm4gc2V0VmFsaWRhdGlvbkVycm9yKFwiTmFtZSBjYW5ub3QgYmUgbGVmdCBibGFua1wiKTtcbiAgICBpZihkYXRhLmFkZHJlc3MubGVuZ3RoIDwgMikgcmV0dXJuIHNldFZhbGlkYXRpb25FcnJvcihcIkFkZHJlc3MgY2Fubm90IGJlIGxlZnQgYmxhbmtcIik7XG4gICAgaWYoZGF0YS5jaXR5Lmxlbmd0aCA8IDIpIHJldHVybiBzZXRWYWxpZGF0aW9uRXJyb3IoXCJDaXR5IGNhbm5vdCBiZSBsZWZ0IGJsYW5rXCIpO1xuICAgIGlmKGRhdGEuc3RhdGUubGVuZ3RoIDwgMikgcmV0dXJuIHNldFZhbGlkYXRpb25FcnJvcihcIlN0YXRlIGNhbm5vdCBiZSBsZWZ0IGJsYW5rXCIpO1xuICAgIC8vIC8vIFVzZSBlbGVtZW50cy5nZXRFbGVtZW50IHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgbW91bnRlZCBFbGVtZW50LlxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudCk7XG5cbiAgICAvLyAvLyBQYXNzIHRoZSBFbGVtZW50IGRpcmVjdGx5IHRvIG90aGVyIFN0cmlwZS5qcyBtZXRob2RzOlxuICAgIC8vIC8vIGUuZy4gY3JlYXRlVG9rZW4gLSBodHRwczovL3N0cmlwZS5jb20vZG9jcy9qcy90b2tlbnNfc291cmNlcy9jcmVhdGVfdG9rZW4/dHlwZT1jYXJkRWxlbWVudFxuICAgIC8vIGdldCB0b2tlbiBiYWNrIGZyb20gc3RyaXBlIHRvIHByb2Nlc3MgY3JlZGl0IGNhcmRcbiAgICBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiO1xuXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBzdHJpcGUuY3JlYXRlVG9rZW4oY2FyZEVsZW1lbnQpO1xuICAgIGNvbnN0IHVzZXJUb2tlbiA9IENvb2tpZXMuZ2V0KFwidG9rZW5cIik7XG4gICAgY29uc29sZS5sb2codG9rZW4udG9rZW4uaWQpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9vcmRlcnNgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogdXNlclRva2VuICYmIHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3VzZXJUb2tlbn1gIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGFtb3VudDogTnVtYmVyKE1hdGgucm91bmQoYXBwQ29udGV4dC5jYXJ0LnRvdGFsICsgXCJlMlwiKSArIFwiZS0yXCIpLFxuICAgICAgICBkaXNoZXM6IGFwcENvbnRleHQuY2FydC5pdGVtcyxcbiAgICAgICAgZmlyc3ROYW1lOiBkYXRhLmZpcnN0TmFtZSxcbiAgICAgICAgbGFzdE5hbWU6IGRhdGEubGFzdE5hbWUsXG4gICAgICAgIGFkZHJlc3M6IGRhdGEuYWRkcmVzcyxcbiAgICAgICAgY2l0eTogZGF0YS5jaXR5LFxuICAgICAgICBzdGF0ZTogZGF0YS5zdGF0ZSxcbiAgICAgICAgdG9rZW46IHRva2VuLnRva2VuLmlkLFxuICAgICAgfSksXG4gICAgfSk7XG4gICAgYWxlcnQoYFxuICAgIFRoYW5rIHlvdSBmb3IgeW91ciBvcmRlciAke2FwcENvbnRleHQudXNlci5hY3RpdmVVc2VyfSFcbiAgICB0cmFuc2FjdGlvbiBpZDogJHt0b2tlbi50b2tlbi5pZH1cbiAgICBZb3VyIG9yZGVyIHdpbGwgYmUgcmVhZHkgaW4gYXBwcm94aW1hdGVseTogJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMjApfSBtaW51dGVzXG4gICAgYClcbiAgICBwdXNoVG9Ib21lKCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgc2V0RXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcGVyXCI+XG4gICAgICA8aDU+Q2FyZGhvbGRlciBpbmZvcm1hdGlvbjo8L2g1PlxuICAgICAgPHNtYWxsIHN0eWxlPXt7Y29sb3I6XCJyZWRcIiwgZm9udFdlaWdodDpcImJvbGRcIn19Pnt2YWxpZGF0aW9uRXJyb3J9PC9zbWFsbD5cbiAgICAgIDxociAvPlxuICAgICAgPEZvcm1Hcm91cCBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiBcIjAuNDBcIiwgbWFyZ2luUmlnaHQ6IFwiNiVcIiB9fT5cbiAgICAgICAgICA8TGFiZWw+Rmlyc3QgTmFtZTwvTGFiZWw+XG4gICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiSm9oblwiIG5hbWU9XCJmaXJzdE5hbWVcIiBvbkNoYW5nZT17b25DaGFuZ2V9IHJlcXVpcmVkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IFwiMC40MFwiLCBtYXJnaW5SaWdodDogMCB9fT5cbiAgICAgICAgICA8TGFiZWw+TGFzdCBOYW1lPC9MYWJlbD5cbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJEb2VcIiBuYW1lPVwibGFzdE5hbWVcIiBvbkNoYW5nZT17b25DaGFuZ2V9IHJlcXVpcmVkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8Rm9ybUdyb3VwIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IFwiMC45MFwiLCBtYXJnaW5SaWdodDogMTAgfX0+XG4gICAgICAgICAgPExhYmVsPkFkZHJlc3M8L0xhYmVsPlxuICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIjEyMzQ1NiBtYWluIHN0XCIgbmFtZT1cImFkZHJlc3NcIiBvbkNoYW5nZT17b25DaGFuZ2V9IHJlcXVpcmVkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8Rm9ybUdyb3VwIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IFwiMC40NVwiLCBtYXJnaW5SaWdodDogXCI2JVwiIH19PlxuICAgICAgICAgIDxMYWJlbD5DaXR5PC9MYWJlbD5cbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJOZXcgWW9ya1wiIG5hbWU9XCJjaXR5XCIgb25DaGFuZ2U9e29uQ2hhbmdlfSByZXF1aXJlZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiBcIjAuMjVcIiwgbWFyZ2luUmlnaHQ6IDAgfX0+XG4gICAgICAgICAgPExhYmVsPlN0YXRlPC9MYWJlbD5cbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJOWVwiIG5hbWU9XCJzdGF0ZVwiIG9uQ2hhbmdlPXtvbkNoYW5nZX0gcmVxdWlyZWQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgPGhyLz5cbiAgICAgIDxDYXJkU2VjdGlvbiBkYXRhPXtkYXRhfSBkZWFjdGl2YXRlU3VibWl0QnRuPXtkZWFjdGl2YXRlU3VibWl0QnRufSBzdHJpcGVFcnJvcj17ZXJyb3J9IHN1Ym1pdE9yZGVyPXtzdWJtaXRPcmRlcn0gcmVxdWlyZWQgLz5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgLnBhcGVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICAgICAgICBoZWlnaHQ6IDcwMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA5MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9ybS1oYWxmIHtcbiAgICAgICAgICAgIGZsZXg6IDAuNTtcbiAgICAgICAgICB9XG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5LFxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjlmYztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgY29sb3I6ICMzMjMyNWQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5DaGVja291dCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNmI3YzkzO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTRweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDUwLCA1MCwgOTMsIDAuMTEpLFxuICAgICAgICAgICAgICAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzcyZTU7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZTZlYmYxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc5NWY4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA3cHggMTRweCByZ2JhKDUwLCA1MCwgOTMsIDAuMSksXG4gICAgICAgICAgICAgIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAuU3RyaXBlRWxlbWVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmEgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDIwcHggMDtcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBDb2RlIFByb1wiLCBtb25vc3BhY2U7XG4gICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMTQ5MDIpIDBweCAxcHggM3B4LFxuICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMDE5NjA3OCkgMHB4IDFweCAwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogI2FhYjdjNDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5wdXQ6Zm9jdXMsXG4gICAgICAgICAgLlN0cmlwZUVsZW1lbnQtLWZvY3VzIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4xMDk4MDQpIDBweCA0cHggNnB4LFxuICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMDc4NDMxNCkgMHB4IDFweCAzcHg7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5TdHJpcGVFbGVtZW50LklkZWFsQmFua0VsZW1lbnQsXG4gICAgICAgICAgLlN0cmlwZUVsZW1lbnQuUGF5bWVudFJlcXVlc3RCdXR0b24ge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXRGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==