import axios from "axios";
const baseUrl = "https://newsapi.org/v2/";
const apiKey = "&apiKey=" + "a25d005bfaba46caade2c9ad228c260d";

export const fetchNewsData = async (query) => {
  const response = await axios.get(baseUrl + query + apiKey);
  return response;
};
