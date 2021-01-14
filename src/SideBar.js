import React from "react";
import { Route, Switch } from "react-router-dom";
import ContactForm from "./forms/ContactForm";
import OrderForm from "./forms/OrderForm";

export default function SideBar({ product }) {
  return (
    <div className="sidebar features-small-item">
      <h2>
        <Switch>
          <Route path="/">La Carte Saint Valentin</Route>
          <Route exact path="/contact">Nous Contacter</Route>
        </Switch>
      </h2>
      <div>
        <Switch>
          <Route  path="/">
            <OrderForm product={product} />
          </Route>
          <Route exact path="/contact">
            <ContactForm />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
