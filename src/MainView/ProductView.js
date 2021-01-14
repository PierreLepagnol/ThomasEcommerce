import React from "react";
import ItemsMenu from "../ItemsMenu/ItemsMenu";

const dessert = {
  id: 1,
  name: "Cheesecake à la framboise",
  price: 12,
  composition: [
    { name: "biscuits", qt: 16, unit: "ua", desc: "(type petit beurre)" },
    { name: "crème légère épaisse", qt: 1, unit: "pot", desc: "" },
    { name: "lait concentré", qt: 1, unit: "pot", desc: "sucré" },
    { name: "noix de coco rapée", qt: 4, unit: "cuillères à soupe", desc: "" },
    { name: "betterave cuite", qt: 1, unit: "paquet", desc: "" },
    { name: "citrons verts", qt: 4, unit: "ua", desc: "" },
    {
      name: "framboises surgelées",
      qt: 150,
      unit: "g",
      desc:
        "décongelées et égouttées (ou des framboises fraîches si c'est la saison)",
    },
    { name: "huile de coco vierge", qt: 1, unit: "cuillère à soupe", desc: "" },
  ],
  winelist: ["Gewurztraminer Vendanges Tardives", "Riesling"],
  photoURL:
    "https://assets.afcdn.com/recipe/20200210/107308_w1024h768c1cx1761cy3372.webp",
  description:
    "Un cabernet franc de Loire, comme un Saumur Champigny, est idéal sur un chapon farci aux marrons ou un chapon farci aux champignons.",
  createdAt: "2020-12-26T18:12:55.000Z",
  updatedAt: "2020-12-26T18:12:55.000Z",
};

const plat = {
  id: 1,
  name: "Chapon Farci aux marrons et foie gras",
  price: 10,
  shippingDate: "2020-12-26T18:12:55.000Z",
  composition: [
    { name: "Chapon", qt: 1, unit: "ua", desc: "" },
    { name: "Farces", qt: 150, unit: "g", desc: "" },
  ],
  winelist: ["Cabernet Sauvignon", "Vin Rouge"],
  photoURL:
    "https://assets.afcdn.com/recipe/20161017/24193_w1024h768c1cx2464cy1632.webp",
  description: "Un super Chapon farci",
  createdAt: "2020-12-26T18:12:55.000Z",
  updatedAt: "2020-12-26T18:12:55.000Z",
};

const entree = {
  name: "Saumon gravlax au baies roses",
  photoURL:
    "https://pourquoijegrossis.com/wp-content/uploads/2017/12/1-3-980x629.jpg",
  description:
    "Saumon gravlax  au baies roses, crème aigrelette,(Pain de suédois/ Tuile cranquante) mesclun de salade",
};

const entree2 = {
  id: 1,
  name: "Entree2",
  price: 8,
  shippingDate: "2020-12-26T18:12:55.000Z",
  composition: [],
  winelist: [],
  photoURL:
    "https://assets.afcdn.com/recipe/20190109/85760_w1024h768c1cx2514cy4785.webp",
  description: "",
  createdAt: "2020-12-26T18:12:55.000Z",
  updatedAt: "2020-12-26T18:12:55.000Z",
};

export default function ProductView({ product }) {
  const menu1 = {
    name:"Menu 25 €",
    products:[entree,plat,dessert],
    price: 25,
    winelist: [],
    shippingDate: "2020-12-26T18:12:55.000Z",
  };
  const menu2 = {
    name:"Menu 39 €",
    products:[entree2,plat,dessert],
    price: 39,
    winelist: [],
    shippingDate: "2020-12-26T18:12:55.000Z",
  };

  const appetizer = {
    name:"Amuses Bouches",
    products:[
      {name:"Maki de saint jacques citronné",description:"Delicieux met pour 2 personnes ( 4 pièces)",price:7,photoURL:"https://lh3.googleusercontent.com/proxy/uezbj2-5nMevdRKytocLI-zEPZFAVMdaRcLmNoSotBVGpO8j12PtuONWsIO7So5JbpZbedM7qhhoUtVnc25ifySJ213Kxn-aAdLhM6RLFaz-1Cq4j9azbiU7fSbT8F0iD9_IxiGB8BCzG8fRU0mVizQRJy_4fkz-421ijQ"}
      ,{name:"Focaccia",price:5,photoURL:"",description:"pour 2 personnes"}
    ],
    winelist: [],
    shippingDate: "2020-12-26T18:12:55.000Z",
  };
  ;

  const cheeses = [
    {
      name: "Saumon gravlax au baies roses",
      photoURL:
        "https://pourquoijegrossis.com/wp-content/uploads/2017/12/1-3-980x629.jpg",
      description:
        "Saumon gravlax  au baies roses, crème aigrelette,(Pain de suédois/ Tuile cranquante) mesclun de salade",
    },
  ];
  const cuteness = [
    {
      name: "Saumon gravlax au baies roses",
      photoURL:
        "https://pourquoijegrossis.com/wp-content/uploads/2017/12/1-3-980x629.jpg",
      description:
        "Saumon gravlax  au baies roses, crème aigrelette,(Pain de suédois/ Tuile cranquante) mesclun de salade",
    },
  ];

  return (
    <div className="main-view">
      <ItemsMenu item={menu1}/>
      <ItemsMenu item={menu2} />
      <ItemsMenu item={appetizer} />
      {/* <ItemsMenu item={cheeses} />
      <ItemsMenu item={cuteness} /> */}
    </div>
  );
}

/* <h2 className="title-card">{product.name}</h2>
      <div className="row ">
        <div className="col left">
          <h3 className="subtitle-card">{product.price} € / Personnes</h3>
          <p>Livraison Gratuite à partir de {freeShipping} €.</p>
          <p>
            Livraison prévue le{" "}
            <b>{moment(product["shipping-date"]).format("DD/MM/YYYY")}</b>.
          </p>
          {window.innerWidth >= 1000 && (
            <div className="col" style={{ textAlign: "center" }}></div>
          )}
        </div>

        <div className="col right">
          <img alt={"desc"} className="img_desc" src={product["photoURL"]} />
        </div>
      </div>
      {window.innerWidth >= 1000 && <p>{product.description}</p>} */
