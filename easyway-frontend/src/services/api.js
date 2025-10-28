import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api", // adjust if your backend path differs
});

export default API;
