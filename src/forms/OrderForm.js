import React from "react";
import { useFormik } from "formik";
import { useCounter } from "../useCounter";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { SlideContext } from "../App";
import axios from 'axios'
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51I1BFoC0FThOiM88ibeVU68obGLS7Ccgf2SePqiTsVnV1ZJ7f6ZyVLJ3dtq2vuXuGWNBInqqCWiUUSvnSoyjWrbP001fGJgxXV");

export default function OrderForm({ product }) {
  return (
    <Elements stripe={stripePromise}>
      <OrderCreator product={product}/>
      <MyCheckoutForm product={product}/>
    </Elements>
  );
}

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
const entree2= {
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
const menu1 = {
  entree: entree,
  plat: plat,
  dessert: dessert,
  price:25
};
const menu2= {
  entree: entree2,
  plat: plat,
  dessert: dessert,
  price:39
};

const MyCheckoutForm = (/* { product } */) => {
  const product=[menu1,menu2]
  const { count, addCountHandler, removeCountHandler } = useCounter(1);
  const {slideIndex,setCurrentSlide}=React.useContext(SlideContext);
  const stripe = useStripe();
  const elements = useElements();
  const formik = useFormik({
    initialValues: { name: "", phone: "", line1:"",city: "",postal_code:"", email: "", menu_id: 0},
    onSubmit: (values) => {
      handleSubmitStripe(values,product[slideIndex].price * count);
    },
  });
  const [isProcessing,setProcessing]=React.useState(false)
  const handleSubmitStripe = async (values,price) => {
    // Block native form submission.
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    setProcessing(true)
    console.log(values);

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const billingDetails={name: values.name, phone: values.phone, address:{line1:values.line1,city:values.city,postal_code:values.postal_code}, email:values.email};
    const {data:clientSecret}=await axios.post("http://localhost:3001/payment_intents",{amount:price*100});
    console.log(clientSecret)
    
    const cardElement = elements.getElement(CardElement);
    
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: billingDetails
    });

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method:   paymentMethod.id,
      });
      console.log(result)

    // Use your card Element with other Stripe.js APIs
    
    
    /* const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {name, phone, address, email},
      metadata:{menu_id:values.menu_id},
      amount: product.price,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }*/
  }; 


  
  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
    hidePostalCode:true
  };
  const inputs = [
    { id: "name", name: "name", placeholder: "Nom - Prenom", type: "text" },
    { id: "phone",name: "phone",placeholder: "Numero de telephone",type: "tel"},
    { id: "line1",name: "line1",placeholder: "Adresse de livraison",type: "text"},
    { id: "postal_code",name: "postal_code",placeholder: "Code Postal",type: "text"},
    { id: "city",name: "city",placeholder: "Ville",type: "text"},
    { id: "email", name: "email", placeholder: "Courriel", type: "email" },
  ];
  return (
    <form className="col" onSubmit={formik.handleSubmit}>
      {inputs.map((input) => (
        <InputField
          key={input.id}
          input={input}
          onChange={formik.handleChange}
          value={formik.values}
        />
      ))}
      <div id="my-radio-group">Menu n°{Number(formik.values.menu_id)+1}</div>
      <div className="row center" role="group">
          <input type="radio" name="menu_id" defaultChecked  value={0} onChange={(e)=>{setCurrentSlide(e.target.value); formik.setFieldValue("menu_id",e.target.value);}}/>
          <label className="label-radio">1</label>
          <input type="radio" name="menu_id" value={1} onChange={(e)=>{setCurrentSlide(e.target.value); formik.setFieldValue("menu_id",e.target.value);}}/>
          <label className="label-radio">2</label>
      </div>

     <p>Total : {product[slideIndex].price} x {count}={product[slideIndex].price * count} €</p>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <div className="row">
        <button type="submit" disabled={isProcessing || count===0}>
          {isProcessing? "Commande en cours..":"Commander Immediatement"}
        </button>
      </div>
      <p>Les livraisons sont assurées <b>uniquement</b> en Ile de France (77, 78, 91, 92, 93, 95).<br/> L'envoi par coli vous sera facturé différement selon l'adresse de livraison</p>
    </form>
  );
};

const InputField = ({ input, onChange, value }) => {
  switch (input.type) {
    case "text-area":
      return <textarea name="Text1" cols="20" rows="5"></textarea>;
    default:
      return (
        <input
          id={input.id}
          name={input.name}
          placeholder={input.placeholder}
          type={input.type}
          onChange={onChange}
          value={value[input.name]}
        />
      );
  }
};


const OrderCreator=({product})=>{
  const products=[{name:"Menus",items:["fr","fr"]},{name:"Amuses Bouches",items:["fr","fr"]},{name:"Fromage",items:[""]},{name:"Mignardise",items:[""]}]
  let { path, url } = useRouteMatch();

  return(
    <div>
      <nav>
        <ul  className="center nav-item">
          {products.map((item)=>{ return(
          <li><Link to={`${path}${item.name}`}>{item.name}</Link></li>
          )})}
        </ul>
      </nav>
      
      <Switch>
        {products.map((item)=>{
        return(
          <Route path={`${path}${item.name}`}>
            <Composer item={item}/>
          </Route>)
        })}
      </Switch>

      
      {/* 
      
      Pour 
      <Composer item={item}/>

      
      Nav Choix entre les produits
        Selecteur de qt
      Recapitulatif de la commande
      Livraison : 10 EUR ? Offert  
      Total
      */}
    </div>

  )

}

const Composer=({item})=>{
  return(
  <>
  <label>{item.name}</label>
  <div className="row ">
    {item.items.map((itm)=>{return(
    <div className= "col">
    <label>{itm}</label>
    <input type="number" id={itm} name={itm} min="0" max="100"></input>
    </div>
    )})}  
  </div>
  </>
  )
}