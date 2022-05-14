import axios from "axios";

const API = axios.create({
  baseURL: "https://twitter-toy.herokuapp.com",
});

API.defaults.timeout = 2500;

export default API;
