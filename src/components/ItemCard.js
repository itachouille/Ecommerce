import React from "react";
import { useCart } from "react-use-cart";
import "./itemCard.css";
import Rating from "./Rating";

const ItemCard = (props) => {
  const { addItem } = useCart();

  return (
    <div className="itemCard-wrapper">
      <img className="itemCard-img" src={props.image} alt="" />
      <h5>{props.title}</h5>
      <h5 className="itemCard-price">{props.price} €</h5>
      <div className="itemCard-rating">
        <Rating
          value={props.rating}
          text={`   ${props.numReviews} Évaluation(s)`}
        />
      </div>
      <button onClick={() => addItem(props.item)}>Ajouter au panier</button>
    </div>
  );
};

export default ItemCard;
