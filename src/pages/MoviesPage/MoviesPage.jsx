import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import MovieSearch from 'modules/MoviesSearchForm';
import ShowList from 'modules/ShowList';

import { searchMovie } from 'shared/api/api';

const MoviesPage = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
        }));

        const data = await searchMovie(query);
        setState(prevState => ({
          ...prevState,
          items: data,
        }));
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          error,
        }));
      } finally {
        setState(prevState => ({
          ...prevState,
          loading: false,
        }));
      }
    };

    if (query) {
      fetchMovie();
    }
  }, [query]);

  const changeSearch = query => {
    setSearchParams(query);
  };

  const { items } = state;

  return (
    <div>
      <MovieSearch value={query} onSubmit={changeSearch} />
      {items.length > 0 && <ShowList items={items} />}
    </div>
  );
};

export default MoviesPage;
