// api.js
import axios from "axios";

export const fetchData = async () => {
  const response = await axios.get("https://api.example.com/data");
  return response.data;
};
