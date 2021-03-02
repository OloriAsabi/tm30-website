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
      <div className="menu-icon" onClick={() => setShow(true)}>
        <i className="fas fa-bars"></i>
      </div>

      <div className={`links ${show ? 'show' : 'hide'}`}>
        <div
          className="menu-icon close-icon"
          onClick={() => setShow(false)}
          style={{ textAlign: 'end' }}
        >
          <i className="fas fa-times"></i>
        </div>
        {Links.map((link) =>
          link.name === 'blog' ? (
            <Link
              to={{ pathname: 'https://medium.com/@tm30' }}
              target="_blank"
              key={link.name}
            >
              {link.name}
            </Link>
          ) : (
            <Link
              to={link.route}
              className={path.includes(link.name) ? `active` : ''}
              key={link.name}
              onClick={() => setShow(false)}
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
  .fas {
    display: none;
  }
  @media (max-width: 768px) {
    padding: 1.5rem;
    /* justify-content: space-between; */
    align-items: center;
    .hide {
      left: -400px;
    }
    .show {
      left: 0;
    }
    .fas {
      font-size: 25px;
      display: block;
      cursor: pointer;
    }
    .links {
      padding: 2rem;
      flex-direction: column;
      position: fixed;
      overflow: hidden;
      top: 0%;
      z-index: 5;
      background-color: white;
      width: 100%;
      height: 100vh;
      justify-content: normal;
      transition: all 0.5s ease-in-out;
      -webkit-transition: all 0.5s;
      a {
        margin: 2rem 0;
        width: fit-content;
      }
    }
  }
`;
