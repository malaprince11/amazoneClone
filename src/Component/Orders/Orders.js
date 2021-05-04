import React, { useState, useEffect } from "react";
import "./Orders.css";
import Order from '../Order/Order'
import { useStateValue } from "../../StateProvider";
import { db } from "../../firebase";
function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
      if(user){
    db.collection("users")
    .doc(user?.uid)
    .collection('orders')
    .orderBy('created', 'desc')
    .onSnapshot(snapchot =>{
        setOrders(snapchot.docs.map(doc =>({
            id:doc.id,
            data: doc.data()
        })))
    })}
    else {
        setOrders([])
    }
  }, [user]);


  return (
    <div className="order">
      <h1>Vos Commandes</h1>
      <div className="ordersOrder">{orders?.map(order =>(
          <Order order={order} />
      ))}</div>
    </div>
  );
}

export default Orders;
