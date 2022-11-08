import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '68dd2d07f1b8d9799366e4d9411e689b';

export async function getTrendingMovies() {
  const searchParams = `/trending/movie/day?api_key=${API_KEY}`;
  const response = await axios.get(searchParams);
  return response.data;
}

export async function getMoviesInfo(movie_id) {
  const searchParams = `/movie/${movie_id}?api_key=${API_KEY}`;
  const response = await axios.get(searchParams);
  return response.data;
}
export async function getRewiews(movie_id) {
  const searchParams = `/movie/${movie_id}/reviews?api_key=${API_KEY}`;
  const response = await axios.get(searchParams);
  return response.data;
}

export async function getCast(movie_id) {
  const searchParams = `/movie/${movie_id}/credits?api_key=${API_KEY}`;
  const response = await axios.get(searchParams);
  return response.data;
}

export async function getSubmit(query) {
  const searchParams = `/search/movie?api_key=${API_KEY}&query=${query}`;
  const response = await axios.get(searchParams);
  return response.data.results;
}
