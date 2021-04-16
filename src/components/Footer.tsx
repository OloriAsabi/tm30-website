import styled from '@emotion/styled';
import React from 'react';
import Logo from 'assets/images/00Asset 1@4x 1.png';
import { Link } from 'react-router-dom';
import IG from 'assets/icons/Instagram.png';
import FB from 'assets/icons/Vector (12).png';
import twitter from 'assets/icons/Vector (14).png';
import LinkedIn from 'assets/icons/Vector (13).png';

const Footer = () => {
  let date = new Date();
  let currentYear = date.getFullYear();
  return (
    <Footer.Wrapper>
      <div className="foo">
        <div className="first">
          <img src={Logo} alt="" />
          <p className="address">
            Address: 22 Berkley Street, off king george road, onikan Lagos  <br /> Lagos
          </p>
          <p>Phone: +234 803 467 8549</p>
          <p>Phone: +234 818 250 4430</p>
          <p>Email: info@tm30.net</p>
        </div>
        <div className="second">
          <div className="quick">
            <h3 className="heading">Quick links</h3>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Project</Link>
            <Link to={{ pathname: 'https://medium.com/@tm30' }} target="_blank">
              Blog
            </Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="social">
            <h3 className="heading">Social Links</h3>
            <div className="social-icons">
              <Link
                to={{ pathname: 'https://web.facebook.com/TM30Global' }}
                target="_blank"
              >
                <img src={FB} alt="fb" />
              </Link>
              <Link
                to={{ pathname: 'https://twitter.com/TM30Global' }}
                target="_blank"
              >
                <img src={twitter} alt="twitter" />
              </Link>
              <Link
                to={{ pathname: ' https://www.linkedin.com/company/tm30/' }}
                target="_blank"
              >
                <img src={LinkedIn} alt="linkedin" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="last-text">
        <p>Copyright {currentYear} @ TM30</p>
        <div className="other-link">
          <p>Terms of Use | Privacy Policy</p>
        </div>
      </div>
    </Footer.Wrapper>
  );
};

export default Footer;

Footer.Wrapper = styled.footer`
  padding: 4rem 0;
  background: #5cc5f2;
  position: relative;
  z-index: 2;
  color: white;
  height: 400px;
  .address{
    text-transform: capitalize;
  }
  .foo {
    padding: 0 8rem;
    margin: 0 0 2rem 0;
    display: flex;
    justify-content: space-between;
    .first {
      width: 60%;
      & > * {
        margin-bottom: 2rem;
        font-weight: bold;
        font-size: 14px;
        line-height: 24px;
      }
    }

    .second {
      display: flex;
      justify-content: space-between;
      width: 35%;
      .quick,
      .social {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        & > * {
          margin: 0.7rem 0;
          font-weight: bold;
          font-size: 14px;
          line-height: 24px;
          color: rgba(252, 254, 255, 0.9);
          &.heading {
            margin-bottom: 1.4rem;
          }
          img {
            margin-right: 2rem;
          }
        }
      }
    }
    a {
      text-decoration: none;
      color: white;
    }
  }
  .line {
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    margin: 2rem 0;
  }
  .last-text {
    display: flex;
    justify-content: space-between;
    padding: 0 8rem;
    p {
      font-weight: bold;
      font-size: 14px;
      line-height: 24px;
    }
  }
  @media (max-width: 768px) {
    height: auto;
    .foo {
      padding: 2rem;
      flex-wrap: wrap;
      .first {
        width: 100%;
      }
      .second {
        width: 100%;
      }
    }
    .last-text {
      padding: 2rem;
      flex-direction: column;
      align-items: center;
    }
    padding-bottom: 0;
  }
`;
