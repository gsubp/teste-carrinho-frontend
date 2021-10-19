import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiSearch, FiShoppingCart } from "react-icons/fi"
import "../styles/header.scss"

export default function Header() {
    return (
        <header className="header-container">
            <div className="header-content">
            <Link className="logo-content">Logo</Link>
            <nav className="nav-content">
                <Link>
                    <FiSearch size={24} color="#fcfcfc"/>
                    Produtos
                </Link>
                <Link>
                    <FiShoppingCart size={24} color="#fcfcfc"/>
                    Carrinho
                </Link>
            </nav>
            </div>
        </header>
    );
}