import axios from "axios";

const api = axios.create({
  baseURL: process.env.FRONTEND_URL
});


api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  //console.log("token sent!");
  //console.log(token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;