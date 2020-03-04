import axios from 'axios';
import giphy from './giphy';

//get a GIF that matches the phrase entered
export const fetchMatchingGIF = (matchPhrase) => {
  return axios.get(
    `https://api.giphy.com/v1/gifs/translate?api_key=${giphy.APIKey}&s=${matchPhrase}`
  ).then(resp => resp.data.data);
};

export const fetchCount = () => {
  return axios.get(
    'https://gif-match.azurewebsites.net/api/count'
  ).then(resp => resp.data);
};

export const incrementCount = () => {
  return axios.get(
    'https://gif-match.azurewebsites.net/api/increment'
  ).then(resp => resp.data);
};


