import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://awdiz-10-backend.onrender.com/api/v1",
  withCredentials: true,
});

export default axiosInstance;
