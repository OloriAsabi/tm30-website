import routes from './routes';
import styled from 'styled-components';
import NavBar from 'components/NavBar';
import { convertRoutesToComponents } from 'helpers';
import Footer from 'components/Footer';

const Pages = (): any => {
  return (
    <Pages.Wrapper>
      <NavBar />
      {convertRoutesToComponents(routes)}
      <Footer />
    </Pages.Wrapper>
  );
};

export default Pages;

Pages.Wrapper = styled.div`
  display: grid;
  grid-auto-rows : auto auto 300px;
  height: 100%;
`;
