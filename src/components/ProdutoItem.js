import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import Context from "../context/context";
import "../styles/produto-item.scss";

export default function ProdutoItem(props) {
    const { setCartList } = useContext(Context);
    const handleAdd = () => {
        setCartList(prevList => [...prevList, props.item])
    }
    return (
        <div className="produto-grid-item">
            <div className="img-content">
                <img src={props.item.imageUrl}/>
            </div>
            <div className="desc-content">
                <h3>{props.item.name}</h3>
                <div className="price-content">
                    <p>{Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format(props.item.price / 100)}</p>
                    <button onClick={handleAdd}>
                        <FiShoppingCart size={24} color="#EE4266" />
                        Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>
    );
}