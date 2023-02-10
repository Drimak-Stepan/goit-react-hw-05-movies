import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'a3e9617806211f5c17cdc3e47a9d3960',
  },
});

export const getTrendingFilms = async (page = 1) => {
  const { data } = await instance.get('/trending/movie/day', {
    params: {
      page,
    },
  });

  return data.results;
};

export const getMovieDetails = async id => {
  const { data } = await instance.get(`/movie/${id}`);

  return data;
};
