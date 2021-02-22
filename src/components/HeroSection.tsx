import React from 'react';
import styled from '@emotion/styled';

import { CustomButton } from 'reusables/CustomButton';
import Elipse8p from 'assets/images/Ellipse 8@2x.png';

interface HeroSectionProps {
  bg: string;
  h1Text: string;
  pText: string;
  buttonText?: string;
  heroImg?: any;
  subText?: string;
}

const HeroSection = (props: HeroSectionProps) => {
  const { bg, h1Text, pText, buttonText, heroImg, subText } = props;
  return (
    <HeroSection.Wrapper style={{ background: `${bg}` }}>
      <img src={Elipse8p} alt="arc" className="left-arc" />
      <div className="text">
        <p className="subtext">{subText}</p>
        <h1>{h1Text}</h1>
        <p className="ptext">{pText}</p>
        {buttonText && <CustomButton>{buttonText}</CustomButton>}
      </div>
      {heroImg && <img src={heroImg} className="hero-bg" alt="" />}
    </HeroSection.Wrapper>
  );
};

export default HeroSection;

HeroSection.Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 4rem 0 0;
  justify-content: space-between;
  .left-arc {
    position: absolute;
    width: 40%;
    top: -20%;
  }
  .text {
    width: 50%;
    align-self: center;
    padding-left: 8rem;
    .subtext {
      font-weight: 800;
      font-size: 14px;
      line-height: 17px;
      color: rgba(0, 13, 54, 0.45);
    }
    h1 {
      width: 100%;
      font-size: 37px;
      line-height: 49px;
      color: #000d36;
      span {
        color: #a061ff;
      }
    }
    .ptext {
      font-size: 14px;
      line-height: 28px;
      color: rgba(0, 13, 54, 0.45);
      font-weight: bold;
      margin-top: 1rem;
    }
  }
  .hero-bg {
    /* height: 576px; */
    width: 56%;
  }
`;
