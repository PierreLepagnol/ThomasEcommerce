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
    <div className="card  ">
      <div className="img-container">
       <img alt={"desc"} className="img_desc" src={photoURL} />

      </div>
      
      <div className="text-container">
        
      <h2 className="title-card">{Title}: <b>{name}</b></h2>
      <p>{description}</p>
        </div>
      
    </div>
  );
}
