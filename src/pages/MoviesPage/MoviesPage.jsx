import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import MovieSearch from 'modules/MoviesSearchForm/MoviesSearchForm';
import ShowList from 'modules/ShowList/ShowList';

import { searchMovie } from 'shared/api/api';

const MoviesPage = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
        }));

        const data = await searchMovie(search);
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

    if (search) {
      fetchMovie();
    }
  }, [search]);

  const changeSearch = ({ search }) => {
    setSearchParams({ search });
  };

  const { items } = state;

  return (
    <div>
      <MovieSearch onSubmit={changeSearch} />
      {items.length > 0 && <ShowList items={items} />}
    </div>
  );
};

export default MoviesPage;
