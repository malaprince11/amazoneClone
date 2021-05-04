import React ,{useState} from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link }from 'react-router-dom'
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

function Header() {
const [ { basket , user }, dispatch] = useStateValue();
const handleAuth = () => {
    if(user){
        auth.signOut();
    }

}

  return (
    <div className="header">
    <Link to="/">
      <img
        className="headerLogo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
        alt="amazon logo"
      />

    </Link>
      <div className="headerSearch">
        <input className="headerSearchInput" type="text"
         /><SearchIcon  className="searchIcon"/>
      </div>

      <div className="headerNav">
          <Link to={!user && "/login"}>
        <div  onClick={handleAuth} className="headerOption">
          <span className="optionLine1">{ user ? `Bonjour ${user.email}` :"Bonjour invité"}</span>

          <span className="optionLine2">{ user ? 'Deconnecter' :'Connecter'}</span>
        </div>
          </Link>
          <Link to='/orders'>
        <div className="headerOption">
          <span className="optionLine1">retour</span>
          <span className="optionLine2">commande</span>
        </div>
        </Link>
        <div className="headerOption">
            <span className="optionLine1">votre</span>
            <span className="optionLine2">prime</span>
          
        </div>
        <Link to="/checkout">
        <div className="basket">
            <ShoppingBasketIcon />
        <span  className="optionLine2 shoppingBasketCount">{basket.length}</span>

        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
