import { useState } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Input, Btn } from './MoviesSearchForm.styled';

const MovieSearch = ({ onSubmit }) => {
  const [state, setState] = useState({
    search: '',
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
    //setState({ search: '' });
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Input
        name="search"
        value={state.search}
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
