import routes from './routes';
import styled from 'styled-components';
import NavBar from 'components/NavBar';
import { convertRoutesToComponents } from 'helpers';
import Footer from 'components/Footer';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Pages = (): any => {
  const { pathname } = useLocation();

  console.log(pathname);
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
  /* display: grid;
   /*grid-auto-rows : 65px auto 300px;
  height: 100%; */ 
`;
