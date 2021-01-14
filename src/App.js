import React from "react";
import "./App.css";
import "./stylemobile.css";
import "./style.css";
import ProductView from "./MainView/ProductView";
import TitleView, { PresentationView } from "./TitleView";
import SideBar from "./SideBar";

import { Switch, Route } from "react-router-dom";
import AboutView from "./AboutView";

export const SlideContext = React.createContext({});

function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [product, setProduct] = React.useState({});
  const [slideIndex, setCurrentSlide] = React.useState(0);

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
    <SlideContext.Provider value={{slideIndex,setCurrentSlide}}>
      <div className="App">
          <TitleView />
          <PresentationView/>
            <Switch>
              <Route path="/">
              <div className="main-container">
                <ProductView product={product} />
                <SideBar product={product} />
              </div>

              </Route>
              <Route exact path="/contact">
                <AboutView />
              </Route>
            </Switch>
      </div>
            </SlideContext.Provider>
    );
  }
}
export default App;
