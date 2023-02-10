import { useState } from 'react';
import PropTypes from 'prop-types';

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
    setState({ search: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="search"
        value={state.search}
        onChange={handleChange}
        placeholder="Enter name of movie"
        required
      />
      <button>Search</button>
    </form>
  );
};

export default MovieSearch;

MovieSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
