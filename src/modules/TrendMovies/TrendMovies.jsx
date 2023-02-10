import { useState, useEffect } from 'react';

import { getTrendingFilms } from '../../shared/api/api';
import ShowList from 'modules/ShowList';
import { Loader, Block } from 'shared/Loader/Loader';

const TrendMovies = () => {
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
  }, [setState]);

  const { items, loading, error } = state;

  return (
    <>
      {items.length > 0 && <ShowList items={items} />}
      {loading && (
        <Block>
          <Loader />
        </Block>
      )}
      {error && <p>...load failed</p>}
    </>
  );
};

export default TrendMovies;
