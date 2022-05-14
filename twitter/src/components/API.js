import axios from "axios";

const API = axios.create({
  baseURL: "https://twitter-toy.herokuapp.com",
});

export default API;
