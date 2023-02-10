import Navbar from 'modules/Navbar/Navbar';
import UserRoutes from './UserRoutes';

import './shared/styles/style.css';
import { Container } from 'shared/styles/Container.styled';

const App = () => {
  return (
    <Container>
      <Navbar />
      <UserRoutes />
    </Container>
  );
};

export default App;
