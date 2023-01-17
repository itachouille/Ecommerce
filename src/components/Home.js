import React from "react";
import ItemCard from "./ItemCard";
import Data from "../Data";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="products-wrapper">
        {Data.map((item, index) => {
          return (
            <ItemCard
              item={item}
              image={item.image}
              title={item.name}
              price={item.price}
              numReviews={item.numReviews}
              rating={item.rating}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
