import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieActors } from 'shared/api/api';

const CastPage = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: null,
        }));

        const result = await getMovieActors(movieId);
        setState(prevState => {
          return {
            ...prevState,
            items: result,
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

    fetchCast();
  }, [movieId]);

  const { items } = state;
  const elements = items.map(({ id, name, character, profile_path }) => (
    <li key={id}>
      <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt={name} />
      <h3>Name: {name}</h3>
      <p>Character: {character}</p>
    </li>
  ));

  return (
    <div className="container">
      <h2>Actors</h2>
      <ul>{elements}</ul>
    </div>
  );
};

export default CastPage;
