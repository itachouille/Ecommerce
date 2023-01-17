import Home from "./components/Home";
import Nav from "./components/Nav";
import { CartProvider } from "react-use-cart";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <CartProvider>
        <Nav />
        <Home />
      </CartProvider>
    </div>
  );
}
