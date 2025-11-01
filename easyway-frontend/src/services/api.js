import axios from "axios";

const API = axios.create({
  baseURL: "https://easyway-raoz.onrender.com", // adjust if your backend path differs
});

export default API;


