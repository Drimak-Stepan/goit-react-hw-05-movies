import { useState } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Input, Btn } from './MoviesSearchForm.styled';

const MovieSearch = ({ onSubmit }) => {
  const [state, setState] = useState({
    query: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Input
        name="query"
        value={state.query}
        onChange={handleChange}
        placeholder="Enter name of movie"
        required
      />
      <Btn>Search</Btn>
    </Wrapper>
  );
};

export default MovieSearch;

MovieSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
