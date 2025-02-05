import axios from "axios";

const baseURL = "http://localhost:8000/MULTILAB/";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
