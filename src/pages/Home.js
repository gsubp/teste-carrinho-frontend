import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../styles/home.scss";
import ProdutoItem from "../components/ProdutoItem";
import api from "../services/api";


export default function Home() {
    const [ data, setData ] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await api.get("produtos");
            console.log(response.data)
            setData(response.data);
        }
        fetchData();
    }, []);
    return (
        <div className="home-container">
            <h1 className="tittle">Conheça Nossos Produtos</h1>
            <div className="produto-grid-container">
                {
                    data.map((item, index) => (
                        <ProdutoItem
                            item = {item}
                            key={index}
                        />
                    ))
                }
                
            </div>
            
        </div>
    );
}