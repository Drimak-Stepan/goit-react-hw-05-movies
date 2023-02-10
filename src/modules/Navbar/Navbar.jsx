import { StyledLink } from './Navbar.styled';
import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    text: 'Home',
    link: '/',
  },
  {
    id: nanoid(),
    text: 'Movies',
    link: '/Movies',
  },
];

const Navbar = () => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <StyledLink to={link}>{text}</StyledLink>
    </li>
  ));
  return <ul>{elements}</ul>;
};

export default Navbar;
