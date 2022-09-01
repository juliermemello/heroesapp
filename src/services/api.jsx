import axios from "axios";
import md5 from "md5";

const publickey = process.env.REACT_APP_PUBLICKEY;
const privateKey = process.env.REACT_APP_PRIVATEKEY;

const ts = Number(new Date());

const hash = md5(ts + privateKey + publickey);

export const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    ts,
    apikey: publickey,
    hash,
  },
});
