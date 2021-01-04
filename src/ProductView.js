import React from "react";
import ItemsMenu from "./ItemsMenu/ItemsMenu";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  id: 1,
  name: "velouté de la Saint Valentin",
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
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const menu1 = {
    entree: entree,
    plat: plat,
    dessert: dessert,
  };
  var settings = {
    adaptiveHeight: true,
    lazyLoad: "progressive",
    arrows: false,
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_, next) => setCurrentSlide(next),
  };
  return (
    <Slider {...settings}>
      <div>
        <ItemsMenu menu={menu1} />
      </div>
      <div>
        <ItemsMenu menu={menu1} />
      </div>
    </Slider>
  );
}

/* <p>{JSON.stringify(product)}</p> */
/* <Apero/> */
/* <Plat/> */
/* <Dessert/> */

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
