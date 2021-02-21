import React from 'react';
import styled from 'styled-components';
import Logo from 'assets/icons/image 2.png';
import { Link, useHistory } from 'react-router-dom';
import { HOME } from 'pages/pagesPath';

const NavBar = () => {
  const history = useHistory();
  return (
    <NavBar.Wrapper>
      <div className="logo" onClick={() => history.push(HOME)}>
        <img src={Logo} alt="tm30" />
      </div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/projects">Project</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </NavBar.Wrapper>
  );
};

export default NavBar;
NavBar.Wrapper = styled.nav`
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 8rem;
  background: #fcfeff;
  box-shadow: 0px 8px 16px rgba(64, 64, 64, 0.1);
  height: 65px;
  .logo {
    width: 50%;
    cursor: pointer;
  }
  .links {
    width: 50%;
    display: flex;
    justify-content: space-between;
    a {
      text-decoration: none;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      color: #000d36;
    }
  }
`;
