import React from "react";
import { ProductContext } from "../App";
import SideBar from "../SideBar";

export default function ProductView() {
  const {
    entree,
    plat,
    dessert,
    entree2,
    plat2,
    dessert2,
    appetizer,
    cheeses,
    cuteness,
  } = React.useContext(ProductContext);
  const menu1 = {
    name: "Menu 25 €",
    products: [entree, plat, dessert],
    price: 25,
    winelist: [],
    shippingDate: "2020-12-26T18:12:55.000Z",
  };
  const menu2 = {
    name: "Menu 39 €",
    products: [entree2, plat2, dessert2],
    price: 39,
    winelist: [],
    shippingDate: "2020-12-26T18:12:55.000Z",
  };
  return (
      <div className="main-view">
        <div className="main-container">
          <ItemsMenu item={menu1} />
          <ItemsMenu item={menu2} />
          <ItemsMenu item={appetizer} />
          <ItemsMenu item={cheeses} />
          <ItemsMenu item={cuteness} />
        </div>
        <SideBar />
      </div>
  );
};

function ItemsMenu({item}) {
  return (
    <div className="features-small-item margin-bottom">
    <h2>{item.name}</h2>
      {item.products.map((prod)=><Item {...prod} />)}
     </div>
  );
}

function Item({ type, name, description, photoURL,price }) {
  return (
    <div className="card">
      {photoURL==="" ? null:(<div className="img-container"><img alt={"desc"} className="img_desc" src={photoURL} /></div>)}
      <div className="text-container">
      <h2 className="title-card">{type===undefined?null:`${type} : `}<b>{name}</b>{price===undefined?null:`- ${price} €`}</h2>
      <p>{description}</p>
    </div> 
    </div>
  );
}
