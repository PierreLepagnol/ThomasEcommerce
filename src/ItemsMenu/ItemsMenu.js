import React from "react";
export default function ItemsMenu({ menu }) {
  return (
    <>
      <Item Title="Entree" {...menu.entree} />
      <Item Title="Plat" {...menu.plat} />
      <Item Title="Dessert" {...menu.dessert} />
    </>
  );
}

function Item({ Title, name, description, photoURL }) {
  return (
    <div className="card">
      <h2 className="title-card">{Title}</h2><h3 className="item-header">{name}</h3>
      <p>{description}</p>
      
      <img alt={"desc"} className="img_desc" src={photoURL} />
    </div>
  );
}
