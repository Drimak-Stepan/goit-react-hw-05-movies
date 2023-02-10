import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getTrendingFilms } from './../../shared/api/api';

const TrendList = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: null,
        }));

        const result = await getTrendingFilms();
        setState(prevState => {
          return {
            ...prevState,
            items: [...prevState.items, ...result],
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

    fetchFilms();
  }, []);

  const { items, loading, error } = state;

  const elements = items.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  ));

  return (
    <div>
      <ul>{elements}</ul>
      {loading && <p>...load</p>}
      {error && <p>...load failed</p>}
    </div>
  );
};

export default TrendList;
