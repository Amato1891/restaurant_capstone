
import React, { useState, useContext } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import fetch from "isomorphic-fetch";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CardSection from "./cardSection";
import AppContext from "./context";
import Cookies from "js-cookie";
import Router from "next/router";

function CheckoutForm() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    stripe_id: "",
  });

  function pushToHome() {
    Router.push('/')
  };

  const [error, setError] = useState("");
  const [validationError, setValidationError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const appContext = useContext(AppContext);
  let deactivateSubmitBtn = true;
  {appContext.user.activeUser ? deactivateSubmitBtn = !true : deactivateSubmitBtn = true};
  {appContext.cart.items.length < 1 ? deactivateSubmitBtn = true : deactivateSubmitBtn = !true}
  console.log(appContext.cart.items.length)

  function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min)
  };

  function onChange(e) {
    // set the key = to the name property equal to the value typed
    let name = e.target.name;
    let value = e.target.value;
    if(name === 'state')value = value.toUpperCase();
    console.log(`${JSON.stringify(data)}`)
    const updateItem = (data[name] = value);
    // update the state data object
    setData({ ...data, updateItem });
  };

  async function submitOrder() {
    // event.preventDefault();
    if(data.firstName.length < 2) return setValidationError("Name cannot be left blank");
    if(data.lastName.length < 2) return setValidationError("Name cannot be left blank");
    if(data.address.length < 2) return setValidationError("Address cannot be left blank");
    if(data.city.length < 2) return setValidationError("City cannot be left blank");
    if(data.state.length < 2) return setValidationError("State cannot be left blank");
    // // Use elements.getElement to get a reference to the mounted Element.
    const cardElement = elements.getElement(CardElement);

    // // Pass the Element directly to other Stripe.js methods:
    // // e.g. createToken - https://stripe.com/docs/js/tokens_sources/create_token?type=cardElement
    // get token back from stripe to process credit card
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

    const token = await stripe.createToken(cardElement);
    const userToken = Cookies.get("token");
    console.log(token.token.id)
    const response = await fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: userToken && { Authorization: `Bearer ${userToken}` },
      body: JSON.stringify({
        amount: Number(Math.round(appContext.cart.total + "e2") + "e-2"),
        dishes: appContext.cart.items,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        city: data.city,
        state: data.state,
        token: token.token.id,
      }),
    });
    let custOrderId = token.token.id.slice(4);
    alert(`Thank you for your order ${appContext.user.activeUser}!
    Your order will be ready in approximately: ${getRandomArbitrary(10,30)} minutes
    Transaction id: ${custOrderId}`)
    pushToHome();
    if (!response.ok) {
      setError(response.statusText);
    }
  }

  return (
    <div className="paper">
      <h5>Cardholder information:</h5>
      <small style={{color:"red", fontWeight:"bold"}}>{validationError}</small>
      <hr />
      <FormGroup style={{ display: "flex" }}>
        <div style={{ flex: "0.40", marginRight: "6%" }}>
          <Label>First Name</Label>
          <Input placeholder="John" name="firstName" onChange={onChange} required />
        </div>
        <div style={{ flex: "0.40", marginRight: 0 }}>
          <Label>Last Name</Label>
          <Input placeholder="Doe" name="lastName" onChange={onChange} required />
        </div>
      </FormGroup>
      <FormGroup style={{ display: "flex" }}>
        <div style={{ flex: "0.90", marginRight: 10 }}>
          <Label>Address</Label>
          <Input placeholder="123456 main st" name="address" onChange={onChange} required />
        </div>
      </FormGroup>
      <FormGroup style={{ display: "flex" }}>
        <div style={{ flex: "0.45", marginRight: "6%" }}>
          <Label>City</Label>
          <Input placeholder="New York" name="city" onChange={onChange} required />
        </div>
        <div style={{ flex: "0.25", marginRight: 0 }}>
          <Label>State</Label>
          <Input placeholder="NY" name="state" onChange={onChange} required />
        </div>
      </FormGroup>
        <hr/>
      <CardSection data={data} deactivateSubmitBtn={deactivateSubmitBtn} stripeError={error} submitOrder={submitOrder} required />

      <style jsx global>
        {`
          .paper {
            border: 1px solid lightgray;
            box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
              0px 1px 1px 0px rgba(0, 0, 0, 0.14),
              0px 2px 1px -1px rgba(0, 0, 0, 0.12);
            height: 700px;
            padding: 30px;
            background: #fff;
            border-radius: 6px;
            margin-top: 90px;
          }
          .form-half {
            flex: 0.5;
          }
          * {
            box-sizing: border-box;
          }
          body,
          html {
            background-color: #f6f9fc;
            font-size: 18px;
            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
          }
          h1 {
            color: #32325d;
            font-weight: 400;
            line-height: 50px;
            font-size: 40px;
            margin: 20px 0;
            padding: 0;
          }
          .Checkout {
            margin: 0 auto;
            max-width: 800px;
            box-sizing: border-box;
            padding: 0 5px;
          }
          label {
            color: #6b7c93;
            font-weight: 300;
            letter-spacing: 0.025em;
          }
          button {
            white-space: nowrap;
            border: 0;
            outline: 0;
            display: inline-block;
            height: 40px;
            line-height: 40px;
            padding: 0 14px;
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.08);
            color: #fff;
            border-radius: 4px;
            font-size: 15px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.025em;
            background-color: #6772e5;
            text-decoration: none;
            -webkit-transition: all 150ms ease;
            transition: all 150ms ease;
            margin-top: 10px;
          }
          form {
            margin-bottom: 40px;
            padding-bottom: 40px;
            border-bottom: 3px solid #e6ebf1;
          }
          button:hover {
            color: #fff;
            cursor: pointer;
            background-color: #7795f8;
            transform: translateY(-1px);
            box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1),
              0 3px 6px rgba(0, 0, 0, 0.08);
          }
          input,
          .StripeElement {
            display: block;
            background-color: #f8f9fa !important;
            margin: 10px 0 20px 0;
            max-width: 500px;
            padding: 10px 14px;
            font-size: 1em;
            font-family: "Source Code Pro", monospace;
            box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
              rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
            border: 0;
            outline: 0;
            border-radius: 4px;
            background: white;
          }
          input::placeholder {
            color: #aab7c4;
          }
          input:focus,
          .StripeElement--focus {
            box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px,
              rgba(0, 0, 0, 0.0784314) 0px 1px 3px;
            -webkit-transition: all 150ms ease;
            transition: all 150ms ease;
          }
          .StripeElement.IdealBankElement,
          .StripeElement.PaymentRequestButton {
            padding: 0;
          }
        `}
      </style>
    </div>
  );
}
export default CheckoutForm;
