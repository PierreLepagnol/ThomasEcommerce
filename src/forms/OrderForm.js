import React from "react";
import { useFormik } from "formik";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { ProductContext } from "../App";
import axios from "axios";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

/* 
function ComputeTotal() {
    product.price * count
   
} */

export default function OrderForm() {
  const { entree, plat, dessert, entree2, plat2, dessert2,appetizer,cheeses,cuteness} = React.useContext(
    ProductContext
  );

  const product = [
    { entree: entree,  plat: plat,  dessert: dessert,  price: 25 },
    { entree: entree2, plat: plat2, dessert: dessert2, price: 39 },
    appetizer,
    cheeses,
    cuteness
  ];

  const stripe = useStripe();
  const elements = useElements();

  const [isProcessing, setProcessing] = React.useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      line1: "",
      city: "",
      postal_code: "",
      email: "",
      qt_menu1: 0,
      qt_menu2: 0,
      qt_appetizer1: 0,
      qt_appetizer2: 0,
      qt_fromage: 0,
      qt_cuteness1: 0,
      qt_cuteness2: 0,
    },
    onSubmit: (values) => {
      handleSubmitStripe(values);
    },
  });
  const handleSubmitStripe = async (values, price) => {
    // Block native form submission.
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    setProcessing(true);
    console.log(values);

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const billingDetails = {
      name: values.name,
      phone: values.phone,
      address: {
        line1: values.line1,
        city: values.city,
        postal_code: values.postal_code,
      },
      email: values.email,
    };
    const { data: clientSecret } = await axios.post(
      "http://localhost:3001/payment_intents",
      {
        amount: price * 100,
      }
    );
    console.log(clientSecret);

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: billingDetails,
    });

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethod.id,
    });
    console.log(result);

    // Use your card Element with other Stripe.js APIs

    /* const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {name, phone, address, email},
      metadata:{menu_id:values.menu_id},
      amount: product.price,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }*/
  };

  return (
    <>
      <OrderCreator formik={formik} product={product} />
      <MyCheckoutForm
        isProcessing={isProcessing}
        formik={formik}
        product={product}
      />
      <h3>Ma carte</h3>
      <ul className="food_sumup">
        {formik.values.qt_menu1===0?null:<li>Menu 1 X {formik.values.qt_menu1} ({product[0].price*formik.values.qt_menu1} €)</li>}
        {formik.values.qt_menu2===0?null:<li>Menu 2 X {formik.values.qt_menu2} ({product[1].price*formik.values.qt_menu2} €)</li>}
        {formik.values.qt_appetizer1===0?null:<li> {appetizer.products[0].name}X {formik.values.qt_appetizer1} ({appetizer.products[0].price*formik.values.qt_appetizer1} €)</li>}
        {formik.values.qt_appetizer2===0?null:<li> {appetizer.products[1].name}X {formik.values.qt_appetizer1} ({appetizer.products[1].price*formik.values.qt_appetizer2} €)</li>}
        {formik.values.qt_fromage===0?null:<li> {cheeses.products[0].name}X {formik.values.qt_fromage} ({cheeses.products[0].price*formik.values.qt_fromage} €)</li>}
        {formik.values.qt_cuteness1===0?null:<li> {cuteness.products[0].name}X {formik.values.qt_cuteness1} ({cuteness.products[0].price*formik.values.qt_cuteness1} €)</li>}
        {formik.values.qt_cuteness2===0?null:<li> {cuteness.products[1].name}X {formik.values.qt_cuteness2} ({cuteness.products[1].price*formik.values.qt_cuteness2} €)</li>}
        
      </ul>
      <p>
        Total : {product.price} x {1}={product.price * 1} €
      </p>
      <p>
        Les livraisons sont assurées <b>uniquement</b> en Ile de France (77, 78,
        91, 92, 93, 95).
        <br /> L'envoi par coli vous sera facturé différement selon l'adresse de
        livraison
      </p>
    </>
  );
}

const MyCheckoutForm = ({ formik, isProcessing, product }) => {
  
  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "1em",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
    hidePostalCode: true,
  };

  const inputs = [
    [
      { id: "name", name: "name", placeholder: "Nom - Prenom", type: "text" },
      {
        id: "line1",
        name: "line1",
        placeholder: "Adresse de livraison",
        type: "text",
      },
    ],
    [
      { id: "email", name: "email", placeholder: "Courriel", type: "email" },
      {
        id: "postal_code",
        name: "postal_code",
        placeholder: "Code Postal",
        type: "text",
      },
    ],
    [
      {
        id: "phone",
        name: "phone",
        placeholder: "Numero de telephone",
        type: "tel",
      },
      { id: "city", name: "city", placeholder: "Ville", type: "text" },
    ],
  ];
  return (
      <form className="col margin-bottom" onSubmit={formik.handleSubmit}>
        {inputs.map((row) => (
          <div className="row">
            {row.map((input) => (
              <InputField
                key={input.id}
                input={input}
                onChange={formik.handleChange}
                value={formik.values}
              />
            ))}
          </div>
        ))}
        <CardElement options={CARD_ELEMENT_OPTIONS} />
        <button type="submit" disabled={isProcessing}>
          {isProcessing ? "Commande en cours.." : "Commander Immediatement"}
        </button>
      </form>
  );
};

const InputField = ({ input, onChange, value }) => {
  switch (input.type) {
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

const OrderCreator = ({formik}) => {
  const {
    appetizer,
    cheeses,
    cuteness,
  } = React.useContext(ProductContext);

  const prods = [
    { name: "Menus", items: [{name:"Menu 1",formik_name:"qt_menu1"},{name:"Menu 2",formik_name:"qt_menu2"}] },
    { name: "Amuses Bouches", items: appetizer.products },
    { name: "Fromage", items: cheeses.products },
    { name: "Mignardise", items: cuteness.products },
  ];
  const { path, url } = useRouteMatch();
  return (
    <div className="margin-bottom">
      <nav>
        <ul className="center nav-item">
          {prods.map((item) => {
            return (
              <li>
                <Link to={`${url}/${item.name}`}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <Switch>
        {prods.map((item) => {
          return (
            <Route path={`${path}/${item.name}`}>
              <Composer item={item} onChange={formik.handleChange} value={formik.values}/>
            </Route>
          );
        })}
      </Switch>
    </div>
  );
};

const Composer = ({ item ,onChange,value}) => {
  let { product } = useParams();
  /* 
      Pour 
      <Composer item={item}/>
      Nav Choix entre les produits
        Selecteur de qt
      Recapitulatif de la commande
      Livraison : 10 EUR ? Offert  
      Total
      */
  return (
    <>
      <label>{product}</label>
      <div className="row">
        {item.items.map((itm) => {
          return (
            <div className="col">
              <label>{itm.name}</label>
              <input
                type="number"
                id={itm.formik_name}
                name={itm.formik_name}
                min="0"
                max="100"
                onChange={onChange}
                value={value[itm.formik_name]}
                />
            </div>
          );
        })}
      </div>
    </>
  );
};
