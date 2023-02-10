import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const ShowList = ({ items }) => {
  const location = useLocation();
  const elements = items.map(({ id, title }) => (
    <li key={id}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        {title}
      </Link>
    </li>
  ));

  return <ul>{elements}</ul>;
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
