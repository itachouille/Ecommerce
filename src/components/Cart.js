import React from "react";
import { useCart } from "react-use-cart";
import "./cart.css";

const Cart = ({ setOpenCart }) => {
  const {
    items,
    updateItemQuantity,
    emptyCart,
    removeItem,
    cartTotal,
    totalItems
  } = useCart();

  return (
    <div className="cart-background ">
      <div className="cart-container">
        <div className="cart-header">
          <h2>Votre panier</h2>
          <i
            style={{ cursor: "pointer" }}
            className="fa fa-times"
            aria-hidden="true"
            onClick={() => {
              setOpenCart(false);
            }}
          ></i>
        </div>
        <table>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img src={item.image} style={{ height: "4rem" }} alt="" />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price} €</td>

                  <td>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      &minus;
                    </button>
                    <span> {item.quantity} </span>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      &#43;
                    </button>
                  </td>
                  <td>
                    <i
                      style={{ cursor: "pointer" }}
                      className="fa fa-trash"
                      aria-hidden="true"
                      onClick={() => removeItem(item.id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="cart-footer">
          <div className="footer-up">
            <p>Nombre d'article(s) : {totalItems}</p>
            <p>Total : {cartTotal} €</p>
          </div>
          <div className="footer-down">
            <button onClick={() => emptyCart()}>Vider le panier</button>
            <button>Finaliser commande</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
