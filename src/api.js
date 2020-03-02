import axios from 'axios';
import giphy from './giphy';

//get a GIF that matches the phrase entered
export const fetchMatchingGIF = (matchPhrase) => {
  return axios.get(
    `https://api.giphy.com/v1/gifs/translate?api_key=${giphy.APIKey}&s=${matchPhrase}`
  ).then(resp => resp.data.data);
};


