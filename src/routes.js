import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Carrinho from "./pages/Carrinho";
import Home from "./pages/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Carrinho} />
      </Switch>
    </BrowserRouter>
  );
}
