import React from "react";
import "./App.css";
import "./stylemobile.css";
import "./style.css";
import ProductView from "./ProductView";
import TitleView from "./TitleView";
import SideBar from "./SideBar";

import { Switch, Route } from "react-router-dom";
import AboutView from "./AboutView";

export const ModalContext = React.createContext({});

function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [product, setProduct] = React.useState({});

  React.useEffect(() => {
    fetch("http://192.168.1.56:3001/menu")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProduct(result[0]);
        },
        // Remarque : il faut gérer les erreurs ici plutôt que dans
        // un bloc catch() afin que nous n’avalions pas les exceptions
        // dues à de véritables bugs dans les composants.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [product]);

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <div className="App">
          <TitleView />
        <div className="main-container">
          <div className="features-small-item main-view">
            <Switch>
              <Route exact path="/">
                <ProductView product={product} />
              </Route>
              <Route exact path="/contact">
                <AboutView />
              </Route>
            </Switch>
          </div>
          <SideBar product={product} />
        </div>
      </div>
    );
  }
}
export default App;
