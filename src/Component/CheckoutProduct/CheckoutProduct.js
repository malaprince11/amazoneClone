import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../StateProvider";

function CheckoutProduct({ id, title, price, image, rating , hideButton }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

  return (
    <div className="checkoutProduct">
      <img className="checkoutImg" src={image} alt="" />
      <div className="checkoutProductInfo">
        <p className="checoutProductTitle">{title}</p>
        <p className="checkoutProductPrice">
          <strong>{price}</strong>
          <small>$</small>
        </p>
        <div className="checkoutProductRating">
            {Array(rating).fill().map((_, i) =>(
                <p>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Supprimer</button>
      
        )

        }
     </div>
    </div>
  );
}

export default CheckoutProduct;
