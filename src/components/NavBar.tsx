import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from 'assets/icons/image 2.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import {
  HOME,
  ABOUT,
  SERVICES,
  BLOG,
  PROJECTS,
  CONTACT,
} from 'pages/pagesPath';

const NavBar = () => {
  const history = useHistory();
  const path = useLocation().pathname;
  const [show, setShow] = useState(false);
  const Links = [
    {
      route: HOME,
      name: 'home',
    },
    {
      route: ABOUT,
      name: 'about',
    },
    {
      route: SERVICES,
      name: 'services',
    },
    {
      route: PROJECTS,
      name: 'projects',
    },
    {
      route: BLOG,
      name: 'blog',
    },
    {
      route: CONTACT,
      name: 'contact',
    },
  ];

  return (
    <NavBar.Wrapper>
      <div className="logo" onClick={() => history.push(HOME)}>
        <img src={Logo} alt="tm30" />
      </div>
      <div className="menu-icon" onClick={() => setShow(!show)}>
        <i className={show ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <div className={`links ${show ? 'show' : 'hide'}`}>
        {Links.map((link) =>
          link.name === 'blog' ? (
            <Link to={{ pathname: 'https://medium.com/@tm30' }} target="_blank" key={link.name}>
              {link.name}
            </Link>
          ) : (
            <Link
              to={link.route}
              className={path.includes(link.name) ? `active` : ''}
              key={link.name}
            >
              {link.name}
            </Link>
          )
        )}
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
      text-transform: capitalize;
    }
  }
  .active {
    border-bottom: 2px solid #61d0ff;
  }
  .fas{
    display : none;
  }
  @media (max-width: 768px) {
    padding : 1.5rem;
    justify-content: space-between;
    align-items: center;
    .hide {
      display: none;
    }
    .fas{
      font-size: 25px;
      display:  block;
      cursor: pointer;
    }
    .links {
      flex-direction: column;
      position: absolute;
      top: 120%;
      a{
        margin :  1rem 0;
        width: fit-content;
      }
      /* padding: 2rem;
      padding-top: 5rem; */
      /* position: absolute;
      top: -120%; */
      /* left: 0;
      width: 100%;
      z-index: 20;
      height: 100vh; */
      /* background: white;
      display: block; */
    }
  }
`;
