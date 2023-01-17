import { useState } from "react";
import { useCart } from "react-use-cart";
import Cart from "./Cart";
import "./nav.css";

const Navbar = () => {
  const { totalItems } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="nav-left">E-commerce</div>
        <div className="nav-middle">
          <div className="input-wrapper">
            <input type="text" />
            <i style={{ cursor: "pointer" }} className="fas fa-search" />
          </div>
        </div>
        <div className="nav-right">
          <div className="cart-icon">
            <i
              style={{ cursor: "pointer" }}
              className="fa fa-shopping-cart"
              aria-hidden="true"
              onClick={() => {
                setCartOpen(true);
              }}
            />
            {totalItems > 0 && (
              <div className="items-count">
                <span>{totalItems}</span>
              </div>
            )}
          </div>
        </div>
      </nav>
      {cartOpen && <Cart setOpenCart={setCartOpen} />}
    </>
  );
};

export default Navbar;
