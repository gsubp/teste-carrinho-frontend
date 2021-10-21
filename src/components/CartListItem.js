import React from "react";
import "../styles/cart-list-item.scss";

export default function CartListItem(props) { 
    
    return (
        <li className="cart-list-item-container">
            <div className="item-img-content">
                <img src={props.item.imageUrl} alt="" />
            </div>
            <div className="desc-item-content">
                <p>{props.item.name }</p>
                <span>{Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format(props.item.price / 100)}</span>
            </div>
        </li>
    );

}
