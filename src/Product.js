import React from "react";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };
  return (
    <div className="product" key={id}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="product__star" key={i} />
          ))}
      </div>
      <img src={image} alt="product" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
