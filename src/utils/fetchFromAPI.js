/** @format */

import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  //   url: BASE_URL,
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "f16eeebb43mshf5555c860d338b9p171761jsn0feca2cf81d6",
    // process.env.REACT_APP_RAPID_API_KEY
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  //   const { data, ...other } = response;

  return data;
};
