import React from "react";
import { Route, Switch } from "react-router-dom";
import ContactForm from "./forms/ContactForm";
import OrderForm from "./forms/OrderForm";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51I1BFoC0FThOiM88ibeVU68obGLS7Ccgf2SePqiTsVnV1ZJ7f6ZyVLJ3dtq2vuXuGWNBInqqCWiUUSvnSoyjWrbP001fGJgxXV"
);
export default function SideBar({ product }) {
  return (
    <div className="sidebar features-small-item">
      <h2>
        <Switch>
          <Route path="/Menu">La Carte Saint Valentin</Route>
          <Route exact path="/">Nous Contacter</Route>
        </Switch>
      </h2>
      <div>
        <Switch>
          <Route  path="/Menu">
          <Elements stripe={stripePromise}>
            <OrderForm product={product} />
          </Elements>
          </Route>
          <Route exact path="/">
            <ContactForm />
          </Route>
        </Switch>
      </div>
    </div>
  );
}


