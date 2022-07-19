import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://bazaar-shop-api.herokuapp.com",
});

export default axiosInstance;
