import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { getMovieDetails } from '../../shared/api/api';

const MovieDetailsPage = () => {
  const [state, setState] = useState({
    item: {},
    loading: false,
    error: null,
  });
  const { movieId } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: null,
        }));

        const result = await getMovieDetails(movieId);
        setState(prevState => {
          return {
            ...prevState,
            item: result,
          };
        });
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          error,
        }));
      } finally {
        setState(prevState => {
          return {
            ...prevState,
            loading: false,
          };
        });
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const {
    title,
    genres = [],
    backdrop_path,
    release_date,
    vote_average = 0,
    overview,
  } = state.item;

  const gen = genres
    .map(item => {
      return item.name;
    })
    .join(', ');
  const vot = vote_average.toFixed();

  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      <img
        src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
        alt={title}
        width={300}
        height={400}
      />
      <h2>{title}</h2>
      <p>GENRES: {gen}</p>
      <p>Release: {release_date}</p>
      <p>Vote: {vot}</p>
      <p>Overview: {overview}</p>
    </div>
  );
};

export default MovieDetailsPage;
