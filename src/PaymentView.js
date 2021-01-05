import React from "react";
import { Field, useFormik } from "formik";
import { useCounter } from "./useCounter";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51I1BFoC0FThOiM88ibeVU68obGLS7Ccgf2SePqiTsVnV1ZJ7f6ZyVLJ3dtq2vuXuGWNBInqqCWiUUSvnSoyjWrbP001fGJgxXV"
);

export default function PaymentView({ product }) {
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
    initialValues: {
      name: "",
      phone: "",
      address: "",
      email: "",
    },
    onSubmit: (values) => {
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
  const CARD_ELEMENT_OPTIONS = {
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
  };
  const inputs = [
    { id: "name", name: "name", placeholder: "ffdNom - Prenom", type: "text" },
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
    { id: "email", name: "email", placeholder: "", type: "email" },
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

      <div className="row" style={{ margin: 0 }}>
        <label>{count} personnes</label>
        <input
          type="button"
          name="increment"
          value="+1"
          onClick={() => {
            addCountHandler();
          }}
        />
        <input
          type="button"
          name="decrement"
          value="-1"
          onClick={() => {
            removeCountHandler();
          }}
        />
      </div>
      <Field type="radio" name="picked" value="One" />

      <p>
        Total : {product.price * count} € {formik.values.toggle}
      </p>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <button type="submit" disabled={!stripe}>
        Commander
      </button>
    </form>
  );
};

const InputField = ({ input, onChange, value }) => {
  console.log(input)
  return (
    <React.Fragment>
      <input
        id={input.id}
        name={input.name}
        placeholder={input.placeholder}
        type={input.type}
        onChange={onChange}
        value={value[input.name]}
      />
    </React.Fragment>
  );
};
