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

const values = [
  {
    image: solutions,
    header: 'Solutions',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit olsen.',
  },
  {
    image: possibilities,
    header: 'Possibilities',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit olsen.',
  },
  {
    image: innovation,
    header: 'Innovation',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit olsen.',
  },
  {
    image: Creativivty,
    header: 'Creativity',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit olsen.',
  },
  {
    image: Excellence,
    header: 'Excellence',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit olsen.',
  },
];

const About = () => {
  return (
    <About.Wrapper>
      <HeroSection
        bg="linear-gradient(178.13deg, #61D0FF 1.56%, rgba(240, 250, 255, 0) 100.8%)"
        h1Text="Who we are"
        pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque facilisis porttitor in dui magna blandit lorem pellentesque. Orci sed enim egestas enim nulla enim accumsan. Sed tellus vivamus massa proin nascetur et. Vestibulum vel semper sed curabitur sed integer. Risus amet, ac tellus egestas eu mi viverra."
        subText="About us"
        heroImg={BG}
      />
      <p className="heading">We embrace the S.P.I.C.E values</p>
      <h1 className="sub-heading">Our Core Values</h1>
      <div className="core_values">
        {values.map((val) => (
          <div className="container">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            pellentesque facilisis porttitor in dui magna blandit lorem
            pellentesque. Orci sed enim egestas enim nulla enim accumsan. Sed
            tellus vivamus massa proin nascetur et
          </p>
        </div>
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
`;
