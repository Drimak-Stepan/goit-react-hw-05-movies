import { StyledLink, Header } from './Navbar.styled';
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
    <nav key={id}>
      <StyledLink to={link}>{text}</StyledLink>
    </nav>
  ));
  return <Header>{elements}</Header>;
};

export default Navbar;
