import HeroSection from 'components/HeroSection';
import React from 'react';
import BG from 'assets/images/Group.png';
import styled from '@emotion/styled';
import solutions from 'assets/images/Group (1).png';
import possibilities from 'assets/images/Group 27.png';
import innovation from 'assets/images/Group 26.png';
import Excellence from 'assets/images/Group 28.png';
import Creativivty from 'assets/images/Group (2).png';
import dottedBox from 'assets/icons/Group 3.png';
import { CustomButton } from 'reusables/CustomButton';
import Albert from 'assets/images/Group 54.png';
import Placeholder from 'assets/images/Rectangle 524.png';
import dottedBox2 from 'assets/images/Group 1 (1).png';
import Elipse1 from 'assets/images/Ellipse 1.png';
import COO from 'assets/images/Group 95.png';
import CTO from 'assets/images/Group 88.png';
import funke from 'assets/images/Group 91.png';
import Peter from 'assets/images/Group 89.png';
import Segun from 'assets/images/Group 90.png';
import Josh from 'assets/images/Group 94.png';

const values = [
  {
    image: solutions,
    header: 'Solutions',
    text: 'We develop solutions for your business everyday needs',
  },
  {
    image: possibilities,
    header: 'Possibilities',
    text: 'Difficulty does not exist in our reality.',
  },
  {
    image: innovation,
    header: 'Innovation',
    text:
      'We are continually drawing out the best arrangements in the best innovative manner.',
  },
  {
    image: Creativivty,
    header: 'Creativity',
    text:
      'We are continually drawing out the best arrangements in the best innovative manner.',
  },
  {
    image: Excellence,
    header: 'Excellence',
    text: 'We do not settle for less. Excellence  is our norm.',
  },
];

const staffs = [
  {
    image: COO,
    title: 'COO & Partner',
    name: 'Albert Afolabi',
  },
  {
    image: CTO,
    title: 'CTO &  Partner',
    name: 'Albert Saheed',
  },
  {
    image: funke,
    title: 'Sales & Marketing Manager',
    name: 'Funke Obafemi',
  },
  {
    image: Josh,
    title: 'Software developer',
    name: 'Segun Ajisafe',
  },
  {
    image: Peter,
    title: 'Software developer',
    name: 'Peter Ndeke',
  },
  {
    image: Segun,
    title: 'Software developer',
    name: 'Joshua Olabiran',
  },
];

const About = () => {
  return (
    <About.Wrapper>
      <div>
        <HeroSection
          bg="linear-gradient(178.13deg, #61D0FF 1.56%, rgba(240, 250, 255, 0) 100.8%)"
          h1Text="Who we are"
          pText="We are a software company with strong technical expertise in developing innovative solutions that drive digital transformation in the IT industry. Leveraging our experience, we deliver our solutions with flexibility, responsiveness, efficiency and unmatched performance which has made us one of the most sought after technology company."
          subText="About us"
          heroImg={BG}
        />
      </div>
      <p className="heading">We embrace the S.P.I.C.E values</p>
      <h1 className="sub-heading">Our Core Values</h1>
      <div className="core_values">
        {values.map((val, idx) => (
          <div className="container" key={idx}>
            <img src={val.image} alt="" />
            <h1>{val.header}</h1>
            <p>{val.text}</p>
          </div>
        ))}
      </div>
      <div className="mission">
        <img src={dottedBox} className="dottedBox" alt="" />
        <div className="text">
          <h1>Our Mission & Vision</h1>
          <p>
            Our Mission is to deliver innovative technology solutions that are
            essential to the way people and businesses work. Our Vision is to be
            a leading software company in Africa.
          </p>
        </div>
      </div>
      <div className="team">
        <img src={dottedBox2} alt="" className="dottedBox2" />
        <div className="header">
          <h1>Meet the Team</h1>
          <CustomButton>Join us</CustomButton>
        </div>
        <div className="body">
          {staffs.map((staff) => (
            <div className="staff" key={staff.name}>
              <img src={staff.image} alt={staff.name} />
              <h1>{staff.name}</h1>
              <p>{staff.title}</p>
            </div>
          ))}
        </div>
        <img src={Elipse1} alt="" className="ellipse1" />
      </div>
    </About.Wrapper>
  );
};

export default About;

About.Wrapper = styled.div`
  .heading {
    margin-top: 10rem;
    font-weight: bold;
    font-size: 14px;
    line-height: 28px;
    color: rgba(0, 13, 54, 0.45);
    padding: 0 8rem;
  }
  .sub-heading {
    margin-bottom: 3rem;
    font-size: 40px;
    line-height: 49px;
    padding: 0 8rem;
    color: #000d36;
  }
  .core_values {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 80%;
    margin: 2rem auto;
    margin-left: 24rem;
    /* padding: 0 13rem; */
    & > * {
      width: 33%;
      margin: 2rem 0;
      &.container {
        h1 {
          margin: 2rem 0;
        }
        p {
          font-weight: bold;
          font-size: 14px;
          line-height: 16px;
          color: rgba(0, 13, 54, 0.45);
          width: 50%;
        }
      }
    }
  }
  .mission {
    margin: 10rem 0;
    position: relative;
    img {
      position: absolute;
      top: -15%;
    }
    .text {
      width: 40%;
      margin: 2rem auto;
      & > * {
        text-align: center;
        margin: 2rem auto;
      }
      p {
        font-weight: bold;
        font-size: 14px;
        line-height: 28px;
        color: rgba(0, 13, 54, 0.45);
      }
      h1 {
        font-size: 40px;
        line-height: 49px;
        color: #000d36;
      }
    }
  }
  .team {
    position: relative;
    padding: 0 8rem;
    margin: 15rem auto 5rem;
    .dottedBox2 {
      position: absolute;
      left: 0;
      width: 9.5%;
      top: 28%;
    }
    .header {
      h1 {
        font-weight: 800;
        font-size: 40px;
        line-height: 49px;
        color: #000d36;
        margin: 2rem 0;
      }
    }
    .body {
      width: 82%;
      margin-left: auto;
      margin-top: -50px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      & > * {
        width: 30%;
        margin: 2rem auto;
        h1 {
          font-weight: 800;
          font-size: 24px;
          line-height: 29px;
          color: #000d36;
          margin: 2rem auto;
        }
        p {
          font-size: 16px;
          line-height: 19px;
          color: #000d36;
        }
      }
    }
    .ellipse1 {
      position: absolute;
      right: 0;
      width: 40%;
      top: 40%;
      height: 911px;
      z-index: -1;
    }
  }
  @media (max-width: 768px) {
    .heading {
      padding: 0 2rem;
      margin-top: 2rem;
    }
    .sub-heading {
      font-size: 20px;
      padding: 0 2rem;
    }
    .core_values {
      flex-direction: column;
      margin: 0 2rem 16rem;
      & > * {
        width: 100%;
        &.container p {
          width: 100%;
        }
      }
    }
    .mission {
      margin: 3rem auto;
      img {
        top: -60%;
      }
      .text {
        width: 100%;
        h1 {
          font-size: 20px;
        }
      }
    }

    .team {
      margin: 0;
      padding: 2rem;
      .dottedBox2 {
        display: none;
      }
      .ellipse1 {
        display: none;
      }
      .header {
      }
      .body {
        margin-top: 4rem;
        width: 100%;
        flex-direction: column;
        & > * {
          width: 100%;
          margin: 2rem 0;
          text-align: center;
        }
      }
    }
  }
`;
