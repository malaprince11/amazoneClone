import React, { useEffect } from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Checkout from "./Component/Checkout/Checkout";
import Login from "./Component/Login/Login";
import Payment from "./Component/Payment/Payment";
import Orders from "./Component/Orders/Orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51I7NKYBFTo7BoeCgF9LViA7FdCRsLNk0mHwLoHRYqdJvlE8nbIAHpN8q8sqa8GClN5hnacSryKIOyTpz9k68Niin00Vwdu80d0"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("****user****", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
