import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieActors } from 'shared/api/api';

import { Wrapper, Author, CardWrapper } from './CastPage.styled';
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
    <CardWrapper key={id}>
      <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt={name} />
      <Author>Name: {name}</Author>
      <p>Character: {character}</p>
    </CardWrapper>
  ));

  return (
    <>
      <h2>Actors</h2>
      <Wrapper>{elements}</Wrapper>
    </>
  );
};

export default CastPage;
