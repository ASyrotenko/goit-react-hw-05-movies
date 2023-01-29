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
