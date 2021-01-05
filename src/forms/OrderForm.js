import React from "react";
import { useFormik } from "formik";
import { useCounter } from "../useCounter";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51I1BFoC0FThOiM88ibeVU68obGLS7Ccgf2SePqiTsVnV1ZJ7f6ZyVLJ3dtq2vuXuGWNBInqqCWiUUSvnSoyjWrbP001fGJgxXV"
);

export default function OrderForm({ product }) {
  return (
    <Elements stripe={stripePromise}>
      <MyCheckoutForm product={product} />
    </Elements>
  );
}

const MyCheckoutForm = ({ product }) => {
  const { count, addCountHandler, removeCountHandler } = useCounter(1);

  const stripe = useStripe();
  const elements = useElements();
  const formik = useFormik({
    initialValues: { name: "", phone: "", address: "", email: "", menu_id:0 },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      handleSubmitStripe(values);
    },
  });
  const handleSubmitStripe = async (values) => {
    // Block native form submission.
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    console.log(values);

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: values,
      amount: product.price,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };
  /* const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  }; */
  const inputs = [
    { id: "name", name: "name", placeholder: "Nom - Prenom", type: "text" },
    {
      id: "phone",
      name: "phone",
      placeholder: "Numero de telephone",
      type: "tel",
    },
    {
      id: "address",
      name: "address",
      placeholder: "Adresse de livraison",
      type: "text",
    },
    { id: "email", name: "email", placeholder: "Courriel", type: "email" },
    {
      id: "menu_id",
      name: "menu_id",
      type: "radio-button",
      values: [0, 1],
    },
  ];
  return (
    <form onSubmit={formik.handleSubmit}>
      {inputs.map((input) => (
        <InputField
          key={input.id}
          input={input}
          onChange={formik.handleChange}
          value={formik.values}
        />
      ))}

      <div>Picked: {formik.values.menu_id}</div>

      <div className="row" style={{ margin: 0 }}>
        <label>{count} personnes</label>
        <input
          type="button"
          name="increment"
          value="+1"
          onClick={() => {
            addCountHandler();
            console.log(count);
          }}
        />
        <input
          type="button"
          name="decrement"
          value="-1"
          onClick={() => {
            removeCountHandler();
            console.log(count);
          }}
        />
      </div>
      <p>Total : {product.price * count} €</p>
      {/* <CardElement options={CARD_ELEMENT_OPTIONS} /> */}
      <button type="submit" disabled={!stripe}>
        Commander
      </button>
    </form>
  );
};

const InputField = ({ input, onChange, value }) => {
  switch (input.type) {
    case "radio-button":
      return (
        <>
          <div id="my-radio-group">Picked</div>
          <div role="group">
            {input.values.map((v) => {
              return (
                <label>
                  <input
                    type="radio"
                    name={input.name}
                    value={v}
                    onChange={onChange}
                  />
                  {v}
                </label>
              );
            })}
          </div>
        </>
      );
    case "text-area":
      return <textarea name="Text1" cols="20" rows="5"></textarea>;
    default:
      return (
        <input
          id={input.id}
          name={input.name}
          placeholder={input.placeholder}
          type={input.type}
          onChange={onChange}
          value={value[input.name]}
        />
      );
  }
};