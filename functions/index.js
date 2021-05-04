const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51I7NKYBFTo7BoeCg3fyNoak5kbBCWocIiFjrxAJjIqmlABzIYca9dPCb8HrxslP5YiAL4zenATNrd0b3YG41PL0O00a5xfgfjh"
);

// -API

// -app config
const app = express();

// -middleware

app.use(cors({ origin: true }));
app.use(express.json());

// -API Routes

app.get("/", (request, res) => res.status(200).send("hello world"));

app.get("/mala", (request, res) =>
  res.status(200).send("hello mala ton api marche ")
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request recive ****", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// -Listen commande

exports.api = functions.https.onRequest(app);

// http://localhost:5001/ecommerce-24d1f/us-central1/api
