import axios from "axios";

const url = process.env.GATSBY_BACKEND_URL;

const instance = axios.create({
  baseURL: url,
});

export default instance;
