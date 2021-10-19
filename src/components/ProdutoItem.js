import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import "../styles/produto-item.scss";


export default function ProdutoItem(props) {
    return (
        <div className="produto-grid-item">
            <div className="img-content">
                <img src={props.imageUrl}/>
            </div>
            <div className="desc-content">
                <h3>{props.nome}</h3>
                <div className="price-content">
                    <p>{props.price}</p>
                    <FiShoppingCart size={24} color="#EE4266"/>
                </div>
            </div>
        </div>
    );
}