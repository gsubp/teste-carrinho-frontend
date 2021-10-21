import React, { useContext, useEffect, useState } from "react";
import { FiShoppingCart, FiTrash, FiTrash2 } from "react-icons/fi";
import CartList from "../components/CartList";
import CartListItem from "../components/CartListItem";
import Context from "../context/context";
import "../styles/cart.scss";

export default function Carrinho() {
    const { cartList, setCartList } = useContext(Context);
    

    return (
        <div className="cart-container">
            <div className="cart-content">
                <div className="cart-title-content">
                    <FiShoppingCart size={32} color="#531cb3"/>
                    <h1 className="tittle">Meu Carrinho</h1>
                </div>
                {
                    (cartList.length == 0) ?
                        <div className="empty-cart-content">
                            <h2>Carrinho Vázio</h2>
                        </div>
                        :
                        <CartList/>
                }
            </div>
        </div>
    );
}