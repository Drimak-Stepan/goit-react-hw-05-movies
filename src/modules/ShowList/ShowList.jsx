import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { StylesLink } from './ShowList.styled';

const ShowList = ({ items }) => {
  const location = useLocation();
  const elements = items.map(({ id, title }) => (
    <li key={id}>
      <StylesLink state={{ from: location }} to={`/movies/${id}`}>
        {title}
      </StylesLink>
    </li>
  ));

  return <ol>{elements}</ol>;
};

export default ShowList;

ShowList.defaultProps = {
  items: [],
};

ShowList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
