import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../styles/home.scss";
import ProdutoItem from "../components/ProdutoItem";
import dataJSON from "../data/abaixo-10-reais.json";

export default function Home() {
    const [ data, setData ] = useState(null);
    useEffect(() => {
        console.log(dataJSON.items[0].name);
    }, []);
    return (
        <div className="home-container">
            <Header/>
            <h1 className="tittle">Conheça Nossos Produtos</h1>
            <div className="produto-grid-container">
                {
                    dataJSON.items.map((item, index) => (
                        <ProdutoItem
                            key={index}
                            imageUrl={item.imageUrl} 
                            nome={item.name}
                            price={`R$ ${item.price / 100}`}
                        />
                    ))
                }
                
            </div>
            
        </div>
    );
}