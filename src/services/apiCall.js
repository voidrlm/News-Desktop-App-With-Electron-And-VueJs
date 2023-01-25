import axios from "axios";
const baseUrl = "https://newsapi.org/v2/";
const apiKey = "&apiKey=" + process.env.VUE_APP_API_KEY;

export const fetchNewsData = async (query) => {
  const response = await axios.get(baseUrl + query + apiKey);
  return response;
};
