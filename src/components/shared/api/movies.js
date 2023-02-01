import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '3c291d17985a5640676e8849c9a91fc7',
  },
});

export const getTrendingMovies = async page => {
  const { data } = await instance.get('/trending/movie/week', {
    params: {
      page,
    },
  });

  return data;
};

export const getSingleMovie = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const getSingleMovieCredits = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data;
};

export const getSingleMovieReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data;
};

export const getSearchMovie = async query => {
  const { data } = await instance.get(`/search/movie`, {
    params: {
      query,
    },
  });
  return data;
};
