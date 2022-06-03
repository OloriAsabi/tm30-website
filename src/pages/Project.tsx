import styled from '@emotion/styled';
import HeroSection from 'components/HeroSection';
import React from 'react';
import backUpImg from 'assets/images/iPhone X Backup Cash 1.png';
import EduImg from 'assets/images/Web_Mobile Edusponsor 1.png';
import EstateImg from 'assets/images/estate mgt Web 1.png';
import pmbImg from 'assets/images/pngwave (3)_1 1.png';
import Group1 from 'assets/images/Group 1 (3).png';
import Elipse1 from 'assets/images/Ellipse 1.png';
import bg from 'assets/images/Group 56.png';
import rent from 'assets/images/Rent4Less Mockup 1.png';
import vas from 'assets/images/VAS Mockup 1.png';
import { Link } from 'react-router-dom';

const Projects = () => {
  let arrow = '>';
  return (
    <Projects.Wrapper>
      <div className="hero">
        <h1>Projects</h1>
        <p>Take a look at our past projects.</p>
      </div>

      <div className="pmb">
        <div className="text">
          <h1>PayMyBills</h1>
          <p>
            PayMyBills is an innovative digital service aggregation and
            micro-credit solution that leverages well known and proven instant
            messaging solutions such as WhatsApp to deliver easy, secure and
            convenient access to bills payment to its users.
          </p>
          <Link to={{ pathname: 'https://paymybills.ng/' }} target="_blank">
            View project {arrow}{' '}
          </Link>
        </div>
        <img src={pmbImg} alt="pmb" className="pmbImg" />
        <img src={Group1} alt="" className="Group1" />
      </div>

      <div className="backup">
        <div className="text">
          <h1>Backup cash</h1>
          <p>
            Backup Cash is a financial tool that allows individuals to save and
            earn upto 16% interest on their savings. The goal is to encourage a
            disciplined financial lifestyle using any of our savings options. It
            is easy to use, convenient and equally flexible.
          </p>
          <Link to={{ pathname: 'https://mybackupcash.com/' }} target="_blank">
            View project {arrow}{' '}
          </Link>
        </div>
        <img src={backUpImg} alt="pmb" className="pmbImg" />
        <img src={Group1} alt="" className="Group1" />
      </div>

      <div className="edu">
        <div className="text">
          <h1>Edusponsor</h1>
          <p>
            Edusponsor is a platform that enables candidates have access to
            examination scholarships as well as other gifts from organizations
            after participating in qualifying tests.
          </p>
          <Link to={{ pathname: 'https://myedusponsor.com/' }} target="_blank">
            View project {arrow}{' '}
          </Link>
        </div>
        <img src={EduImg} alt="pmb" className="pmbImg" />
        <img src={Group1} alt="" className="Group1" />
      </div>

      <div className="est">
        <div className="text">
          <h1>Residify</h1>
          <p>
            Residify is an all-round estate management solution that caters for
            all administrative needs of an estate and its residents.
          </p>
          <Link to={{ pathname: 'https://myedusponsor.com/' }} target="_blank">
            View project {arrow}{' '}
          </Link>
        </div>
        <img src={EstateImg} alt="pmb" className="pmbImg" />
        <img src={Group1} alt="" className="Group1" />
        <img src={Elipse1} alt="" className="ellipse1" />
      </div>

      <div className="edu">
        <div className="text">
          <h1>Rent4Less</h1>
          <p>
            Rent4Less by Alpha Mead is a rental scheme designed to provide a
            flexible and convenient option for middle income Nigerians to rent
            homes.
          </p>
          <Link to={{ pathname: 'https://myedusponsor.com/' }} target="_blank">
            View project {arrow}{' '}
          </Link>
        </div>
        <img src={rent} alt="pmb" className="pmbImg" />
        <img src={Group1} alt="" className="Group1" />
      </div>

      <div className="est mb">
        <div className="text">
          <h1>VAS Aggregator</h1>
          <p>
            TM30’s a proprietary VAS Service Delivery Platform (SDP) is
            specifically designed for VAS operators and media companies to
            launch services and gain competitive advantage
          </p>
          <Link to={{ pathname: 'https://myedusponsor.com/' }} target="_blank">
            View project {arrow}{' '}
          </Link>
        </div>
        <img src={vas} alt="vas" className="pmbImg" />
        <img src={Group1} alt="" className="Group1" />
        <img src={Elipse1} alt="" className="ellipse1" />
      </div>
    </Projects.Wrapper>
  );
};

export default Projects;

Projects.Wrapper = styled.div`
  .mb {
    margin-bottom: 18rem !important;
  }
  position: relative;
  a {
    color: #61d0ff;
    text-decoration: none;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    display: block;
    margin: 2rem 0;
  }
  .hero {
    background: linear-gradient(
      180deg,
      #61d0ff 0%,
      rgba(240, 250, 255, 0) 151.33%
    );
    height: 250px;
    padding: 1.5rem 8rem;
    margin: 0 0 3rem 0;
    & > h1 {
      text-align: center;
      font-size: 40px;
      line-height: 49px;
      color: #000d36;
      margin-top: 2rem;
    }
    & > p {
      width: 40%;
      margin: 2rem auto;
      font-weight: bold;
      font-size: 14px;
      line-height: 28px;
      text-align: center;
      color: rgba(0, 13, 54, 0.45);
    }
  }

  .pmb {
    display: flex;
    /* justify-content: space-evenly; */
    align-items: center;
    width: 100%;
    .text {
      align-self: center;
      margin-top: 8rem;
      margin-left: 16rem;
    }
    h1 {
      font-size: 40px;
      line-height: 49px;
      color: #000d36;
    }
    p {
      font-weight: bold;
      font-size: 14px;
      line-height: 28px;
      color: rgba(0, 13, 54, 0.45);
      width: 70%;
    }
    a {
      z-index: 5;
      position: relative;
    }

    .pmbImg {
      margin-right: 20rem;
    }
    .Group1 {
      position: absolute;
      right: 14%;
      top: 22%;
      z-index: -1;
    }
  }
  .backup {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    position: relative;

    .text {
      align-self: center;
      margin-top: 10rem;
      margin-left: 26rem;
    }
    h1 {
      font-size: 40px;
      line-height: 49px;
      color: #000d36;
    }
    p {
      font-weight: bold;
      font-size: 14px;
      line-height: 28px;
      color: rgba(0, 13, 54, 0.45);
      width: 75%;
    }

    .pmbImg {
      margin-left: 14.5rem;
    }
    .Group1 {
      position: absolute;
      left: 16.5%;
      bottom: 10%;
      z-index: -1;
    }
  }
  .est {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 3rem;
    .text {
      align-self: center;
      margin-top: 10rem;
      margin-left: 16rem;
    }
    h1 {
      font-size: 40px;
      line-height: 49px;
      color: #000d36;
    }
    p {
      font-weight: bold;
      font-size: 14px;
      line-height: 28px;
      color: rgba(0, 13, 54, 0.45);
      width: 70%;
    }

    .pmbImg {
      margin-left: 16rem;
    }
    .Group1 {
      position: absolute;
      left: 20%;
      bottom: -5%;
      z-index: -1;
    }
    .ellipse1 {
      position: absolute;
      right: 0;
      width: 40%;
      top: 20%;
      height: 911px;
    }
  }
  .edu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    .pmbImg {
      margin-right: 5rem;
    }

    .text {
      align-self: center;
      margin-top: 10rem;
      margin-left: 16rem;
    }
    h1 {
      font-size: 40px;
      line-height: 49px;
      color: #000d36;
    }
    p {
      font-weight: bold;
      font-size: 14px;
      line-height: 28px;
      color: rgba(0, 13, 54, 0.45);
      width: 70%;
    }
    .Group1 {
      position: absolute;
      bottom: 15%;
      right: 6%;
      z-index: -1;
    }
  }
  @media (max-width: 760px) {
    & > * {
      padding: 2rem;
    }
    .est {
      padding: 2rem;
      margin-top: 2rem;
      flex-direction: column;
      margin-bottom: 2rem;
      p {
        width: 100%;
      }
      .Group1 {
        display: none;
      }
      .pmbImg {
        width: 100%;
        margin-top: 3rem;
        margin-left: 0;
      }
      .text {
        margin-left: 0;
        margin-top: 0;
      }
      .ellipse1 {
        display: none;
      }
    }
    .hero {
      padding: 2rem;
      & > p {
        width: 100%;
      }
    }
    .pmb {
      flex-direction: column;
      top: 12%;
      p {
        width: 100%;
      }
      .Group1 {
        display: none;
      }
      .pmbImg {
        width: 100%;
        margin-right: 0;
      }
      .text {
        margin-left: 0;
        margin-top: 0;
      }
    }

    .mb {
      margin-bottom: 0 !important;
    }
    .backup {
      padding: 2rem;
      flex-direction: column;

      p {
        width: 100%;
      }
      .Group1 {
        display: none;
      }
      .pmbImg {
        margin-left: 0;
        width: 100%;
      }
      .text {
        margin-left: 0;
        margin-top: 1rem;
      }
    }
    .edu {
      padding: 2rem;
      margin-top: 3rem;
      flex-direction: column;

      p {
        width: 100%;
      }
      .Group1 {
        display: none;
      }
      .pmbImg {
        width: 100%;
        margin-right: 0;
      }
      .text {
        margin-left: 0;
        margin-top: 0;
      }
    }
  }
`;
