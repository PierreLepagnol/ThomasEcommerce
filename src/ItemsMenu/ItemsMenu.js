import React from "react";
export default function ItemsMenu({item}) {
  return (
    <div className="features-small-item margin-bottom">
    <h2>{item.name}</h2>
      {item.products.map((prod)=><Item {...prod} />)}
     </div>
  );
}

function Item({ Title, name, description, photoURL }) {
  return (
    <div className="card">
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
