import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiSearch, FiShoppingCart } from "react-icons/fi"
import "../styles/header.scss";
import Context from "../context/context";

export default function Header() {
    const { cartList } = useContext(Context);
    
    return (
        <header className="header-container">
            <div className="header-content">
            <Link to="/" className="logo-content">Logo</Link>
            <nav className="nav-content">
                <Link to="/cart">
                    <FiShoppingCart size={24} color="#fcfcfc" />
                    <span>Carrinho</span>
                    <div className="label-content">{ cartList.length }</div>
                </Link>
            </nav>
            </div>
        </header>
    );
}