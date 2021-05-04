import React from "react";
import "./Checkout.css";
import SubTotal from "../Subtotal/SubTotal";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkoutLeft">
        <img
          className="checkoutAds"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ads"
        />
      

      <div>
        <h3>Hello ,{user?.email}</h3>
        <h2 className="checkoutTitle">Votre panier</h2>
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      </div>
      <div className="checkoutRight">
        <SubTotal />
      </div>
      </div>
    
  );
}

export default Checkout;
