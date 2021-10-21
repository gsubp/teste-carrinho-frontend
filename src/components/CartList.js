import React, { useContext, useState, useEffect } from "react";
import { FiTrash2 } from "react-icons/fi";
import Context from "../context/context";
import CartListItem from "./CartListItem";

export default function CartList() {
    const { cartList, setCartList } = useContext(Context);
    const [produtos, setProdutos] = useState(0)

    const handleClear = () => {
        setCartList([])
    }

    useEffect(() => {
        function calcProdutos() {
            let valor = 0;

            cartList.map(item => { 
                valor = valor + (item.price/100)
            })
            setProdutos(valor)
        }
        calcProdutos();
    }, [cartList]);
    return (
        <div className="cart-list-container">
                        <ul className="cart-list-content">
                            {cartList.map((item, index) => (
                                <CartListItem key={index} item={item} />
                            ))}
                        </ul>
                        <div className="cart-desc-container">
                            <div className="cart-price-content">
                                <h3>Totais e Pagamentos</h3>
                                <ul>
                                    <li>
                                        <span>Produtos</span>
                                        <span>{Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format(produtos)}</span>
                                    </li>
                                    <li>
                                        <span>Frete</span>
                                        {
                                        (produtos > 10) ?
                                            <span className="gratis-label">Grátis</span>
                                            :
                                            "R$4,00"
                                        }                                        
                                    </li>
                                    <li>
                                        <span>Total</span>
                                        <span>
                                            {   
                                                (produtos > 10) ?
                                                    Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(produtos)
                                                    :
                                                    Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(produtos + 4)
                                            }
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="cart-button-container">
                                <button className="shop-button">Comprar</button>
                                <button className="clear-button" onClick={handleClear}>
                                    <FiTrash2 size={24} color="#ee4266"/>
                                    Esvaziar o Carrinho
                                </button>
                            </div>
                        </div>
                    </div>
    );
}