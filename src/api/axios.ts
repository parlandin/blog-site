import axios from "axios";

const url = "https://parlan-blog-backend.vercel.app";

const instance = axios.create({
  baseURL: url,
});

export default instance;
