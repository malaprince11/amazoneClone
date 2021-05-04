import React from "react";
import CurrencyFormat from "react-currency-format";
import "./SubTotal.css";
import { useStateValue } from "../../StateProvider";
import {getBasketTotal } from '../../reducer'
import { Link} from "react-router-dom";

function SubTotal() {
    // const history = useHistory()
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Sous Total ({basket.length} produit): <strong>{value}</strong>
            </p>
            <small className="subtotalGift">
              <input type="checkbox" /> Cette commande contien un cadeau
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
      />
      <Link to='payment'>

      <button className="subtotalButton" >checkout</button>
      </Link>
    </div>
  );
}

export default SubTotal;
