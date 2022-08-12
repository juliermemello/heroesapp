import axios from "axios";

export const api = axios.create({
  baseURL: "https://akabab.github.io/superhero-api/api",
});
