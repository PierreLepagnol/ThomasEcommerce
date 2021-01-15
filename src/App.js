import React from "react";
import "./App.css";
import "./stylemobile.css";
import "./style.css";
import ProductView from "./MainView/ProductView";
import TitleView, { PresentationView } from "./TitleView";

import { Switch, Route } from "react-router-dom";
import AboutView from "./AboutView";

const entree = {
  type: "Entrée",
  name: "Saumon gravlax  au baies roses",
  photoURL:
    "https://pourquoijegrossis.com/wp-content/uploads/2017/12/1-3-980x629.jpg",
  description:
    "crème aigrelette, (Pain de suédois/ Tuile cranquante) mesclun de salade",
};
const plat = {
  type: "Plat",
  name: "Suprême de volaille farcis",
  photoURL:
    "https://www.atelierdeschefs.com/media/recette-d10180-moelleux-de-volaille-farci-au-foie-gras-risotto-au-bouillon-fume-salade-de-champignons-crus.jpg",
  description: "Volaille farcis aux champignons, pomme macaire, sauce suprême",
};
const dessert = {
  type: "Dessert",
  name: "Panna cotta mangue et son crumble amandes",
  photoURL:
    "https://i.pinimg.com/originals/68/9a/3c/689a3cc24713119447793326bc20e82e.jpg",
  description: "",
};

const entree2 = {
  type: "Entrée",
  name: "Marbré de foie gras au banyuls, chutney de poire",
  shippingDate: "2020-12-26T18:12:55.000Z",
  composition: [],
  winelist: [],
  photoURL:
    "https://assets.afcdn.com/recipe/20190109/85760_w1024h768c1cx2514cy4785.webp",
  description: "",
  createdAt: "2020-12-26T18:12:55.000Z",
  updatedAt: "2020-12-26T18:12:55.000Z",
};

const plat2 = [
  {
    type: "Plat",
    name: "ST JACQUES, gnocchi, purée de cresson",
    photoURL:
      "https://assets.afcdn.com/recipe/20161017/24193_w1024h768c1cx2464cy1632.webp",
    description:
      "Volaille farcis aux champignons, pomme macaire, sauce suprême",
  },
  {
    type: "Plat",
    name:
      "Quasi de veau rôtie, fricassé de pommes grenailles et champignon, jus court perlé",
    photoURL:
      "https://assets.afcdn.com/recipe/20161017/24193_w1024h768c1cx2464cy1632.webp",
    description:
      "Volaille farcis aux champignons, pomme macaire, sauce suprême",
  },
];

const dessert2 = {
  type: "Dessert",
  name: "Un truc au chocolat",
  photoURL:
    "http://qccdn.ar-cdn.com/recipes/land960/1e270268-47d6-40f6-aa34-687c1c1953df.jpg",
  description: "Un truc au chocolat bon mais whallah flemme",
};

const appetizer = {
  name: "Amuses Bouches",
  products: [
    {
      name: "Maki de saint jacques citronné",
      description: "Delicieux met pour 2 personnes ( 4 pièces)",
      price: 7,
      formik_name:"qt_appetizer1",
      photoURL:
        "https://www.atelierdeschefs.com/media/recette-d10180-moelleux-de-volaille-farci-au-foie-gras-risotto-au-bouillon-fume-salade-de-champignons-crus.jpg",
    },
    {
      name: "Focaccia",
      price: 5,
      formik_name:"qt_appetizer2",
      photoURL:
        "https://www.atelierdeschefs.com/media/recette-d10180-moelleux-de-volaille-farci-au-foie-gras-risotto-au-bouillon-fume-salade-de-champignons-crus.jpg",
      description: "pour 2 personnes",
    },
  ],
  shippingDate: "2020-12-26T18:12:55.000Z",
};

const cheeses = {
  name: "Fromage",
  products: [
    {
      name: "Fromage de chèvre mendiants",
      photoURL: "",
      price: 5,
      formik_name:"qt_fromage",
      description: "Pour 2. Pignon pin & amande",
    },
  ],
};
const cuteness = {
  name: "Mignardise",
  products: [
    {
      name: "Brochettes d’ananas rôtis marinés",
      photoURL: "",
      price: 3,
      formik_name:"qt_cuteness1",
      description: "Miel &  Gingembre. Pour 2: 2 brochettes & 3 morceaux",
    },
    {
      name: "Choux pralinés",
      photoURL: "",
      price: 3,
      formik_name:"qt_cuteness2",
      description: "Pour 2 : 4 pièces",
    },
  ],
};

const wines = {
  name: "Vins",
  products: [
    { name: "Vin blanc", photoURL: "", price: 3, description: "" },
    { name: "Vin Rouge", photoURL: "", price: 3, description: "" },
  ],
};
export const ProductContext = React.createContext({});

function App() {
  return (
    <ProductContext.Provider
      value={{
        entree,
        plat,
        dessert,
        entree2,
        plat2,
        dessert2,
        appetizer,
        cheeses,
        cuteness,
        wines,
      }}
    >
      <div className="App">
        <TitleView />
        <PresentationView />
        <Switch>
          <Route exact path="/" component={AboutView} />
          <Route path="/Menu" component={ProductView} />
        </Switch>
      </div>
    </ProductContext.Provider>
  );
}
export default App;
