import axios from "axios";

export function makeAPICall(query) {
  const baseUrl = "https://newsapi.org/v2/";
  const apiKey = "&apiKey=" + process.env.VUE_APP_API_KEY;
  axios.get(baseUrl + query + apiKey).then(function (r1) {
    console.log(r1);
  });
}
