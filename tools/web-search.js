import axios from "axios";

export async function webSearch(query) {

  const url = `https://api.duckduckgo.com/?q=${query}&format=json`;

  const res = await axios.get(url);

  return res.data.Abstract;
}