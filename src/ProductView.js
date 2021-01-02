import React,{useContext} from 'react'
import moment from 'moment';
import Card from './Card';

import  {ModalContext} from "./App"

export default function ProductView({product}) {
    const {toggle}=useContext(ModalContext);
    const freeShipping=50
    console.log(product)   
    return (
    <Card onClickEvent={toggle}>
            <h2 className="title-card">{product.name}</h2>
        <div className="row ">
        <div className="col left">
            <h3 className="subtitle-card">{product.price} € / Personnes</h3>
            <p>Livraison Gratuite à partir de {freeShipping} €.</p>
            <p>Livraison prévue le <b>{moment(product['shipping-date']).format('DD/MM/YYYY')}</b>.</p>
            {(window.innerWidth>=1000)&&(<div className="col" style={{textAlign:'center'}}>
                </div>)}
        </div>
        
        <div className="col right">
        
            <img alt={"desc"} className="img_desc"  src={product['photoURL']} />
            
        </div>
        </div>
        {(window.innerWidth>=1000)&&(<p>{product.description}</p>)}

        </Card>

    )
}