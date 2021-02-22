import React from 'react';
import styled from '@emotion/styled';
import heroBg from 'assets/images/1 1.png';
import { CustomButton } from 'reusables/CustomButton';
import Elipse8p from 'assets/images/Ellipse 8@2x.png';

interface HeroSectionProps {
  bg: string;
  h1Text: string;
  pText: string;
  buttonText?: string;
  heroImg: any;
  subText?: string;
}

const HeroSection = (props: HeroSectionProps) => {
  const { bg, h1Text, pText, buttonText, heroImg, subText } = props;
  return (
    <HeroSection.Wrapper style={{ background: `${bg}` }}>
         <img src={Elipse8p} alt="arc" className="left-arc" />
      <div className="text">
        <p>{subText}</p>
        <h1>{h1Text}</h1>
        <p>{pText}</p>
        {buttonText && <CustomButton>{buttonText}</CustomButton> }
      </div>
      <img src={heroImg} className="hero-bg" alt="" />
    </HeroSection.Wrapper>
  );
};

export default HeroSection;

HeroSection.Wrapper = styled.div`
position: relative;
 display: flex;
    justify-content: space-between;
    .left-arc {
      position: absolute;
      width : 40%;
      top: -20%;
      
    }
    .text {
      width: 50%;
      align-self: center;
      padding-left: 8rem;
      h1 {
        width: 100%;
        font-size: 37px;
        line-height: 49px;
        color: #000d36;
        span {
          color: #a061ff;
        }
      }
      p {
        font-size: 14px;
        line-height: 28px;
        color: rgba(0, 13, 54, 0.45);
        font-weight: bold;
        margin: 2rem 0;
      }
    }
    .hero-bg {
      /* height: 576px; */
      width: 56%;
    }
`;
