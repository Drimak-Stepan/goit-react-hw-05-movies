import { useState, useEffect } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import { getMovieDetails } from '../../shared/api/api';

const MovieDetailsPage = () => {
  const [state, setState] = useState({
    item: {},
    loading: false,
    error: null,
  });

  const { movieId } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/movies';
  const goBack = () => navigate(from);

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
      <section>
        <button onClick={goBack}>Go Back</button>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w400/${backdrop_path}`}
            alt={title}
          />
        </div>
        <h1>{title}</h1>
        <p>GENRES: {gen}</p>
        <p>Release: {release_date}</p>
        <p>Vote: {vot}</p>
        <p>Overview: {overview}</p>
      </section>
      <section>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link state={{ from }} to={`/movies/${movieId}/cast`}>
              Cast
            </Link>
          </li>
          <li>
            <Link state={{ from }} to={`/movies/${movieId}/reviews`}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </section>
    </div>
  );
};

export default MovieDetailsPage;
