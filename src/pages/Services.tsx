import styled from '@emotion/styled';
import HeroSection from 'components/HeroSection';
import React from 'react';
import BG from 'assets/images/Layer 2.png';
import Dev from 'assets/icons/Group 32.png';
import Training from 'assets/icons/Group.png';
import Consulting from 'assets/icons/Group 33.png';
import mobile from 'assets/icons/Group 30.png';
import Elipse1 from 'assets/images/Ellipse 1.png';
import { CustomButton } from 'reusables/CustomButton';
import Elipse8 from 'assets/images/Ellipse 8.png';
import Group4 from 'assets/images/Group 4.png';
import RectangleWoman from 'assets/images/Rectangle 463.png';

const Services = () => {
  return (
    <Services.Wrapper>
      <HeroSection
        bg="linear-gradient(178.13deg, #61D0FF 1.56%, rgba(240, 250, 255, 0) 100.8%)"
        h1Text="What we do"
        pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque facilisis porttitor in dui magna blandit lorem pellentesque. Orci sed enim egestas enim nulla enim accumsan."
        subText="Our Services"
        heroImg={BG}
      />
      <div className="what-we-do">
        <div className="details-container">
          <div className="details">
            <div className="first">
              <img src={Dev} alt="" />
            </div>
            <div className="text">
              <h1>Development</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit olsen.
              </p>
            </div>
          </div>
          <div className="details">
            <div className="first">
              <img src={Training} alt="" />
            </div>
            <div className="text">
              <h1>Training</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit olsen.
              </p>
            </div>
          </div>
          <div className="details">
            <div className="first">
              <img src={Consulting} alt="" />
            </div>
            <div className="text">
              <h1>Consulting</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit olsen.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="what-we">What we do</h1>
      <div className="services">
        <div className="container">
          <div className="first">
            <img src={Dev} alt="" />
          </div>
          <h1>Web Development</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            pellentesque facilisis porttitor in dui magna blandit lorem
            pellentesque.
          </p>
        </div>
        <div className="container mobile">
          <div className="first">
            <img src={mobile} className="" alt="" />
          </div>
          <h1>Mobile Development</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            pellentesque facilisis porttitor in dui magna blandit lorem
            pellentesque.
          </p>
        </div>
        <div className="container">
          <div className="first">
            <img src={Dev} alt="" />
          </div>
          <h1>Software Integration</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            pellentesque facilisis porttitor in dui magna blandit lorem
            pellentesque.
          </p>
        </div>

        <div className="container">
          <div className="first">
            <img src={Training} alt="" />
          </div>
          <h1>UI/UX Design</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            pellentesque facilisis porttitor in dui magna blandit lorem
            pellentesque.
          </p>
        </div>
        <div className="container">
          <div className="first">
            <img src={Consulting} alt="" />
          </div>
          <h1>IT Consulting</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            pellentesque facilisis porttitor in dui magna blandit lorem
            pellentesque.
          </p>
        </div>
      </div>
      <div className="contact">
        <div className="first">
          <img src={Group4} className="dottedBox" alt="" />
          <img src={RectangleWoman} alt="" className="lady" />
          <img src={Elipse8} alt="" className="Elipse8" />
        </div>
        <div className="text">
          <h1>Get In Touch With Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu sed
            vulputate tellus pellentesque tempor. Vitae leo cras eu vitae
            molestie.
          </p>
          <CustomButton>Contact</CustomButton>
        </div>
        <img src={Elipse1} alt="" className="ellipse1" />
      </div>
    </Services.Wrapper>
  );
};

export default Services;

Services.Wrapper = styled.div`
  .what-we-do {
    margin: 5rem 0;
    padding: 1.5rem 8rem;
    .details-container {
      margin: 6rem 0 0 auto;
      display: flex;
      justify-content: space-between;

      .details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 30%;
        .first {
          padding: 1.3rem 1.1rem;
          background: rgba(97, 208, 255, 0.25);
          border-radius: 35px;
          align-self: flex-start;
          text-align: center;
        }
        img {
          width: 90%;
        }
        .text {
          width: 78%;
          h1 {
            font-size: 24px;
            line-height: 29px;
            color: #000d36;
            margin: 0 0 1rem 0;
          }
          p {
            font-weight: bold;
            font-size: 14px;
            line-height: 26px;
            color: rgba(0, 13, 54, 0.45);
            width: 87%;
          }
        }
      }
    }
  }
  .what-we {
    font-size: 40px;
    line-height: 49px;
    color: #000d36;
    margin: 7rem 0 0;
    text-align: center;
  }

  .services {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 1.5rem 8rem;
    & > * {
      width: 31%;
      background: #fcfeff;
      box-shadow: 15px 25px 40px rgba(64, 64, 64, 0.05);
      border-radius: 30px;
      padding: 5rem;
      margin: 2rem 0.8rem;
      h1 {
        margin: 1rem auto;
      }
      p {
        font-weight: bold;
        font-size: 14px;
        line-height: 28px;
        color: rgba(0, 13, 54, 0.45);
        width: 90%;
      }
    }
  }
  .contact {
    padding: 10rem 10rem 10rem 15rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .first {
      position: relative;
      .Elipse8 {
        position: absolute;
        z-index: -2;
        bottom: -10%;
        right: -15%;
      }
      .dottedBox {
        position: absolute;
        z-index: -2;
        bottom: -10%;
        left: -15%;
      }
    }
    .text {
      width: 45%;
      align-self: center;
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
        margin: 1.5rem 0;
        width: 80%;
      }
    }
    .ellipse1 {
      position: absolute;
      right: 0;
      width: 40%;
      top: 0%;
      height: 911px;
    }
  }
  @media (max-width: 768px) {
    .what-we-do {
      padding: 2rem;
      margin: 3rem 0;
      .details-container {
        margin: 1rem 0;
        flex-direction: column;
        .details {
          width: 100%;
          margin: 2rem 0;
          .text {
            margin-left: 2rem;
          }
        }
      }
    }
    .what-we {
      margin: 1rem 0;
    }
    .contact {
      padding: 2rem;
      flex-direction: column;
      .first {
        .dottedBox {
          display: none;
        }
        .lady {
          width: 100%;
        }
        .Elipse8 {
          display: none;
        }
      }
      .text {
        width: 100%;
        h1 {
          font-size: 20px;
          margin-top: 3rem;
        }
        p {
          width: 100%;
        }
      }
      .ellipse1 {
        display: none;
      }
    }
    .services {
      padding: 2rem;
      flex-direction: column;
      & > * {
        width: 100%;
        padding: 2rem;
        margin: 2rem 0;
        h1 {
          margin: 2rem 0;
        }
        p {
          width: 100%;
        }
      }
    }
  }
`;
