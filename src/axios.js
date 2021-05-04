import axios from "axios";

const instance = axios.create({
  // api url (cloud function) connexion avec le serveur
  baseURL: "https://us-central1-ecommerce-24d1f.cloudfunctions.net/api",
});

export default instance;
// http://localhost:5001/ecommerce-24d1f/us-central1/api
