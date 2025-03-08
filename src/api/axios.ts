import axios from "axios";

const defaultPath = "http://localhost:3000";

const url = process.env.GATSBY_BACKEND_URL || defaultPath;

const instance = axios.create({
  baseURL: url,
  withCredentials: false,
});

export default instance;
