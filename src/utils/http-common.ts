import axios from "axios";

export default axios.create({
  baseURL: "https://api.lendobox.com/op/health/rent-order",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
