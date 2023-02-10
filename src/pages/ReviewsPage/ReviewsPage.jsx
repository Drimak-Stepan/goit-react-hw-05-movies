import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'shared/api/api';

const ReviewsPag = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: null,
        }));

        const result = await getMovieReviews(movieId);
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

    fetchReviews();
  }, [movieId]);

  const { items } = state;
  console.log(items);
  const elements = items.map(({ id, author_details, content }) => (
    <li key={id}>
      <h3>Author: {author_details.username}</h3>
      <p>{content}</p>
    </li>
  ));

  return (
    <>
      {items.length > 0 ? (
        <>
          <h2>Reviews</h2>
          <ul>{elements}</ul>
        </>
      ) : (
        <h3>We don`t have any reviews for this movie</h3>
      )}
    </>
  );
};

export default ReviewsPag;
