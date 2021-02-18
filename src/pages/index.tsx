import routes from "./routes";
import styled from 'styled-components'
import NavBar from 'components/NavBar';
import { convertRoutesToComponents } from "helpers";

const Pages = (): any => {
  return  (
      <Pages.Wrapper>
       <NavBar/>   
      { convertRoutesToComponents(routes)}
      </Pages.Wrapper>
  )
};

export default Pages;

Pages.Wrapper =  styled.div`


`

