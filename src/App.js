import { useState } from "react";
import Context from "./context/context";
import Routes from "./routes";

function App() {
  const [cartList, setCartList] = useState([]);

  return (
    <div className="App">
      <Context.Provider value={ {cartList, setCartList} }>
        <Routes/>
      </Context.Provider>
    </div>
  );
}

export default App;
