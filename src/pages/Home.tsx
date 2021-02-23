import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import heroBg from 'assets/images/00Asset 2@4x 1.png';
import Dev from 'assets/icons/Group 32.png';
import Training from 'assets/icons/Group.png';
import Consulting from 'assets/icons/Group 33.png';
import { CustomButton } from 'reusables/CustomButton';
import dottedBox from 'assets/icons/Group 3.png';
import mobile from 'assets/icons/Group 30.png';
import PMB from 'assets/images/PMB_Home 1.png';
import eduSpons from 'assets/images/eduspons.png';
import backup from 'assets/images/ios backup cash 1.png';
import { Link } from 'react-router-dom';
import blog1 from 'assets/images/Rectangle 495.png';
import blog2 from 'assets/images/Rectangle 496.png';
import blog3 from 'assets/images/Rectangle 497.png';
import Elipse8 from 'assets/images/Ellipse 8.png';
import Group4 from 'assets/images/Group 4.png';
import Elipse1 from 'assets/images/Ellipse 1.png';
import Elipse9 from 'assets/images/Ellipse 9.png';
import Elipse8p from 'assets/images/Ellipse 8@2x.png';
import client1 from 'assets/images/Group 40.png';
import client2 from 'assets/images/Group 41.png';
import client3 from 'assets/images/Group 42.png';
import client4 from 'assets/images/Group 43.png';
import client5 from 'assets/images/Group 44.png';
import client6 from 'assets/images/Group 45.png';
import client7 from 'assets/images/Group 46.png';
import client8 from 'assets/images/Group 47.png';
import RectangleWoman from 'assets/images/Rectangle 463.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import est from 'assets/images/Dashboard 1.png';
import { LeftArrow } from 'components/Arrow';

const options = {
  margin: 10,
  responsiveClass: true,
  nav: true,
  autoplay: false,
  // navText: ["<" , '>'],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    750: {
      items: 2,
    },
    1250: {
      items: 3,
    },
  },
};

let allProjects = [
  {
    name: 'PayMyBills',
    desc: 'A Whatsapp payment platform.',
    link: '',
    image: PMB,
    bgColor: '#74C372',
    addMargin: false,
  },
  {
    name: 'Backup Cash',
    desc: 'A financial savings application.',
    link: '',
    image: backup,
    bgColor: '#F5DD01',
    addMargin: false,
  },
  {
    name: 'Edusponsor',
    desc: 'An exam sponsoring platform.',
    link: '',
    image: eduSpons,
    bgColor: '#FF57A5',
    addMargin: true,
  },
  {
    name: 'Estate management',
    desc: 'A Whatsapp payment platform.',
    link: '',
    image: est,
    bgColor: '#002DCC',
    addMargin: true,
  },
];

let webProjects = [
  {
    name: 'Estate management',
    desc: 'A Whatsapp payment platform.',
    link: '',
    image: est,
    bgColor: '#002DCC',
    addMargin: true,
  },
  {
    name: 'Edusponsor',
    desc: 'An exam sponsoring platform.',
    link: '',
    image: eduSpons,
    bgColor: '#FF57A5',
    addMargin: true,
  },
];

let mobileProjects = [
  {
    name: 'Backup Cash',
    desc: 'A financial savings application.',
    link: '',
    image: backup,
    bgColor: '#F5DD01',
    addMargin: false,
  },
  {
    name: 'Edusponsor',
    desc: 'An exam sponsoring platform.',
    link: '',
    image: eduSpons,
    bgColor: '#FF57A5',
    addMargin: true,
  },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [data, setData] = useState(allProjects);

  const handleClick = (tab: any) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    switch (activeTab) {
      case 'web':
        setData(webProjects);
        break;
      case 'mobile':
        setData(mobileProjects);
        break;
      default:
        setData(allProjects);
        break;
    }
    console.log(activeTab, allProjects);
  }, [activeTab]);

  let arrow = '>';
  return (
    <Home.Wrapper>
      <div className="hero">
        <img src={Elipse8p} alt="arc" className="left-arc" />
        <div className="text">
          <h1>
            We help organizations <span>develop</span> technology-driven
            solutions
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            pellentesque facilisis porttitor in dui magna blandit lorem
            pellentesque. Orci sed enim egestas enim nulla enim accumsan.
          </p>
          <CustomButton>About Us</CustomButton>
        </div>
        <img src={heroBg} className="hero-bg" alt="" />
      </div>
      <section className="what-we-do">
        <h1>What we do</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu sed
          vulputate tellus pellentesque tempor. Vitae leo cras eu vitae
          molestie.
        </p>
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
              {' '}
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
              {' '}
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
      </section>
      <div className="services-container">
        <div className="dotted-box">
          <img src={dottedBox} alt="" />
        </div>
        <div className="text">
          <h1>Our Services</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu sed
            vulputate tellus pellentesque tempor. Vitae leo cras eu vitae
            molestie.
          </p>
          <CustomButton>Discover</CustomButton>
        </div>
        <div className="service">
          <div className="container">
            <div className="first">
              {' '}
              <img src={Dev} alt="" />
            </div>
            <h1>
              Web <br /> Development
            </h1>
          </div>
          <div className="container mobile">
            <div className="first">
              <img src={mobile} className="" alt="" />
            </div>
            <h1>
              Mobile <br /> Development
            </h1>
          </div>
          <div className="container">
            <div className="first">
              {' '}
              <img src={Dev} alt="" />
            </div>
            <h1>
              Software <br /> Integration
            </h1>
          </div>

          <div className="container">
            <div className="first">
              {' '}
              <img src={Training} alt="" />
            </div>
            <h1>
              UI/UX <br />
              Design
            </h1>
          </div>
          <div className="container">
            <div className="first">
              {' '}
              <img src={Consulting} alt="" />
            </div>
            <h1>
              IT <br /> Consulting
            </h1>
          </div>
        </div>
      </div>

      <div className="projects">
        <div className="text">
          <h1>Our Works</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu sed
            vulputate tellus pellentesque tempor. Vitae leo cras eu vitae
            molestie.
          </p>
          <CustomButton>Explore</CustomButton>
        </div>
        <div className="project">
          <div className="header">
            <p
              className={activeTab === 'all' ? 'isActive' : ''}
              onClick={() => handleClick('all')}
            >
              All
            </p>
            <p
              className={activeTab === 'web' ? 'isActive' : ''}
              onClick={() => handleClick('web')}
            >
              Web
            </p>
            <p
              className={activeTab === 'mobile' ? 'isActive' : ''}
              onClick={() => handleClick('mobile')}
            >
              Mobile
            </p>
          </div>
          <div className="container">
            <OwlCarousel
              className="slider-items owl-carousel"
              {...options}
              key={data.length}
            >
              {data.map((proj) => (
                <section key={proj.name}>
                  <div
                    className={`bg`}
                    style={{ backgroundColor: `${proj.bgColor}` }}
                  >
                    <img
                      src={proj.image}
                      alt=""
                      className={`${proj.addMargin && 'edu'}`}
                    />
                  </div>
                  <h2>{proj.name}</h2>
                  <p>{proj.desc}</p>
                  <Link to={proj.link}>View project {arrow} </Link>
                </section>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
      <div className="blog">
        <div className="header">
          <h1>Explore Our Blog</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu sed
            vulputate tellus pellentesque tempor. Vitae leo cras eu vitae
            molestie.
          </p>
        </div>
        <div className="blogs">
          <div className="single-blog">
            <img src={blog1} alt="" />
            <p className="date">admin l 20 Dec 20</p>
            <h1>Working in the tech sector</h1>
            <p>Read more</p>
          </div>

          <div className="single-blog">
            <img src={blog2} alt="" />
            <p className="date">admin l 20 Dec 20</p>
            <h1>Comparison chart for Apps</h1>
            <p>Read more</p>
          </div>

          <div className="single-blog">
            <img src={blog3} alt="" />
            <p className="date">admin l 20 Dec 20</p>
            <h1>Right time to join the Cloud?</h1>
            <p>Read more</p>
          </div>
        </div>
      </div>
      <div className="testimonial">
        <div className="header">
          <h1>Testimonials</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu sed
            vulputate
          </p>
        </div>
        <div className="container">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu sed
              vulputate tellus pellentesque tempor. Vitae leo cras eu vitae
              molestie.
            </p>
            <img src={Elipse8} alt="" />
          </div>
          <div className="profile">
            <img src={Elipse9} alt="" />
            <div>
              <h2>Jeremiah Fasasi</h2>
              <p>CEO Fas Media</p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="partners">
        <div className="text">
          <h1>Our Partners</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu sed
            vulputate tellus pellentesque tempor. Vitae leo cras eu vitae
            molestie.
          </p>
        </div>
        <img src={client1} alt="" className="client1" />
        <img src={client2} alt="" className="client2" />
        <img src={client3} alt="" className="client3" />
        <img src={client4} alt="" className="client5" />
        <img src={client5} alt="" className="client4" />
        <img src={client6} alt="" className="client6" />
        <img src={client7} alt="" className="client7" />
        <img src={client8} alt="" className="client8" />
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
    </Home.Wrapper>
  );
};

export default Home;

Home.Wrapper = styled.div`
  .isActive {
    border-bottom: 1px solid green;
  }

  .owl-stage {
    width: 200% !important;
  }
  .owl-nav{
    display: flex;
    justify-content: flex-end;
    margin-top: 4rem;
  }
  .owl-prev,
  .owl-next {
    width: 48px;
    height: 48px;
    background: rgba(97, 208, 255, 0.45) !important;
    border-radius: 10px;
    color : white !important;
    span{
      font-size: 30px;
    }
  }
  .owl-prev{
    margin-right: 2rem;
  }
  .hero {
    position: relative;
    .left-arc {
      position: absolute;
      width: 40%;
      top: -20%;
    }
    background: linear-gradient(
      180deg,
      #61d0ff 0%,
      rgba(240, 250, 255, 0) 151.33%
    );
    display: flex;
    justify-content: space-between;
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
      height: 576px;
      width: 56%;
    }
  }
  .what-we-do {
    margin: 8rem 0;
    padding: 1.5rem 8rem;
    & > h1 {
      font-weight: 800;
      font-size: 40px;
      line-height: 49px;
      color: #000d36;
      text-align: center;
    }
    & > p {
      font-weight: bold;
      font-size: 14px;
      line-height: 22px;
      text-align: center;
      color: rgba(0, 13, 54, 0.45);
      width: 489px;
      margin: 1rem auto;
    }
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
  .services-container {
    display: flex;
    justify-content: space-between;
    padding: 8rem;
    position: relative;
    .dotted-box {
      position: absolute;
      left: 0;
      top: 7%;
      width: 200px;
      img {
        width: 70%;
      }
    }
    .text {
      width: 30%;
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
      }
    }
    .service {
      width: 60%;
      display: flex;
      flex-wrap: wrap;
      .container {
        margin: 2rem 0;
        width: 33%;
        &.mobile {
          margin-bottom: 10rem;
          .first {
            padding: 1.9rem 2.5rem;
          }
        }
        .first {
          padding: 1.9rem 1.9rem;
          background: white;
          border-radius: 35px;
          width: fit-content;
          text-align: center;
          margin-bottom: 4rem;
          img {
            width: 90%;
          }
          img {
          }
        }
      }
    }
  }
  .projects {
    display: flex;
    justify-content: space-between;
    padding: 8rem;
    .text {
      width: 30%;
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
      }
    }
    .header {
      display: flex;
      margin-right: 1rem;
      /* justify-content: space-evenly; */
      p {
        font-weight: bold;
        font-size: 14px;
        line-height: 28px;
        color: #000d36;
        margin: 0 2rem;
        cursor: pointer;
      }
    }
    .project {
      width: 60%;
      .container {
        display: flex;
        /*  justify-content: space-center; */
        width: 100%;
        section {
          width: 100%;
          background: #fcfeff;
          /* box-shadow: 15.4749px 25.7915px 41.2663px rgba(64, 64, 64, 0.05); */
          border-radius: 30px;
          padding: 1rem 1rem 2rem;

          .edu {
            position: relative;
            left: 50px;
            top: 30px;
          }
          div {
            border-radius: 20.6332px;
            height: 175.38px;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
            }
          }
          h2 {
            font-size: 20px;
            line-height: 24px;
            color: #000d36;
            margin: 1.5rem 0;
          }
          p {
            font-weight: bold;
            font-size: 14px;
            line-height: 17px;
            color: rgba(0, 13, 54, 0.45);
            margin: 1.5rem 0;
          }
          a {
            color: #61d0ff;
            text-decoration: none;
            font-weight: bold;
            font-size: 14px;
            line-height: 17px;
          }
        }
      }
    }
  }
  .blog {
    .header {
      h1 {
        font-size: 40px;
        line-height: 49px;
        color: #000d36;
        text-align: center;
      }
      p {
        font-weight: bold;
        font-size: 14px;
        line-height: 22px;
        width: 489px;
        color: rgba(0, 13, 54, 0.45);
        margin: 2rem auto;
        text-align: center;
      }
    }

    .blogs {
      padding: 0 8rem;
      margin: 4rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > * {
        width: 30%;
        background: #fcfeff;
        box-shadow: 15px 25px 40px rgba(64, 64, 64, 0.05);
        border-radius: 30px;

        img {
          width: 100%;
        }
        p,
        h1 {
          padding: 1rem;
          font-weight: bold;
          font-size: 14px;
          line-height: 17px;
          color: #61d0ff;
        }
        .date {
          font-size: 14px;
          line-height: 17px;
          color: rgba(0, 13, 54, 0.45);
        }
        h1 {
          font-size: 24px;
          line-height: 29px;
          color: #000d36;
        }
      }
    }
  }

  .testimonial {
    position: relative;
    margin: 7rem 0;
    .header {
      & > * {
        text-align: center;
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
        text-align: center;
        color: rgba(0, 13, 54, 0.45);
      }
    }
    .container {
      margin: 3rem 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .text {
        width: 35%;
        background: #fcfeff;
        box-shadow: 15px 25px 40px rgba(64, 64, 64, 0.05);
        border-radius: 30px;
        padding: 4rem;
        margin-left: 4rem;

        p {
          font-weight: bold;
          font-size: 14px;
          line-height: 28px;
          color: rgba(0, 13, 54, 0.45);
        }
        img {
          position: absolute;
          z-index: -1;
          left: 42%;
          top: 60%;
        }
      }
    }
    .profile {
      width: 20%;
      display: flex;
      /* justify-content: space-around; */
      align-items: center;
      div {
        margin-left: 1rem;
      }
      h2 {
        font-size: 24px;
        line-height: 29px;
        color: #000d36;
      }
      p {
        font-weight: bold;
        font-size: 14px;
        line-height: 28px;
        color: rgba(0, 13, 54, 0.45);
      }
    }
  }
  .partners {
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 10rem 0 4rem 0;
    .text {
      text-align: center;
      h1 {
        font-size: 40px;
        line-height: 49px;
        color: #000d36;
      }
      p {
        font-weight: bold;
        font-size: 14px;
        line-height: 28px;
        text-align: center;
        color: rgba(0, 13, 54, 0.45);
        width: 442px;
        margin: 0 auto;
      }
    }
    img {
      position: absolute;
    }
    .client1 {
      top: 6%;
      left: 2%;
    }
    .client2 {
      top: 25%;
      left: 15%;
    }
    .client3 {
      top: 45%;
      left: 24%;
    }
    .client4 {
      top: 80%;
      right: 30%;
    }
    .client5 {
      top: 70%;
      left: 7%;
    }
    .client6 {
      top: 50%;
      right: 21%;
    }
    .client7 {
      top: 10%;
      right: 8%;
    }
    .client8 {
      top: 70%;
      right: 3%;
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
`;
