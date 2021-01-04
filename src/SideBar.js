import React from "react";
import { Route, Switch } from "react-router-dom";
import ContactForm from "./forms/ContactForm";
import NavBar from "./NavBar";
import OrderForm from "./forms/OrderForm";

export default function SideBar({ product }) {
  return (
    <div className="sidebar features-small-item">
      <h2><Switch>
          <Route exact path="/">Au Menu !</Route>
          <Route exact path="/contact">Nous Contacter</Route>
        </Switch></h2>
      <NavBar />

      <div>
        <Switch>
          <Route exact path="/">
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
