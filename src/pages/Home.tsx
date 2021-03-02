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
import uiux from 'assets/images/Group 48.svg';
import { Link, useHistory } from 'react-router-dom';
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
import { ABOUT, CONTACT } from './pagesPath';

const options = {
  loop: false,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    300: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
};

let allProjects = [
  {
    name: 'PayMyBills',
    desc: 'A Whatsapp payment platform.',
    link: 'https://paymybills.ng/',
    image: PMB,
    bgColor: '#74C372',
    addMargin: false,
  },
  {
    name: 'Backup Cash',
    desc: 'A financial savings application.',
    link: 'https://mybackupcash.com/',
    image: backup,
    bgColor: '#F5DD01',
    addMargin: false,
  },
  {
    name: 'Edusponsor',
    desc: 'An exam sponsoring platform.',
    link: 'https://myedusponsor.com/',
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
  const [hover, setHover] = useState('');
  const history = useHistory();

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
            We build custom applications, social applications, widgets, mobile
            apps and dynamic websites which enables businesses to push out their
            brand and interact with their client.
          </p>
          <CustomButton onClick={() => history.push(ABOUT)}>
            About Us
          </CustomButton>
        </div>
        <img src={heroBg} className="hero-bg" alt="" />
      </div>
      <section className="what-we-do">
        <h1>What we do</h1>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu sed
          vulputate tellus pellentesque tempor. Vitae leo cras eu vitae
          molestie.
        </p> */}
        <div className="details-container">
          <div
            className="details"
            onMouseEnter={() => setHover('first')}
            onMouseLeave={() => setHover('')}
            style={{ background: `${hover === 'first' ? 'white' : '#f5fcff'}` }}
          >
            <div className="first">
              <img src={Dev} alt="" />
            </div>
            <div className="text">
              <h1>Development</h1>
              <p>
                We develop custom-made solutions that meets the requirements of
                our clients.
              </p>
            </div>
          </div>
          <div
            className="details"
            onMouseEnter={() => setHover('second')}
            onMouseLeave={() => setHover('')}
            style={{
              background: `${hover === 'second' ? 'white' : '#f5fcff'}`,
            }}
          >
            <div className="first">
              {' '}
              <img src={Training} alt="" />
            </div>
            <div className="text">
              <h1>Training</h1>
              <p>
                We offer results-oriented IT courses for personal and career
                growth
              </p>
            </div>
          </div>
          <div
            className="details"
            onMouseEnter={() => setHover('third')}
            onMouseLeave={() => setHover('')}
            style={{ background: `${hover === 'third' ? 'white' : '#f5fcff'}` }}
          >
            <div className="first">
              {' '}
              <img src={Consulting} alt="" />
            </div>
            <div className="text">
              <h1>Consulting</h1>
              <p>
                Through our counselling administrations, we create activities,
                designs and solutions
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
            We build custom applications, social applications, widgets, mobile
            apps and dynamic websites which enables businesses to push out their
            brand
          </p>
          <CustomButton>Discover</CustomButton>
        </div>
        <div className="service">
          <div
            className="container"
            onMouseEnter={() => setHover('fourth')}
            onMouseLeave={() => setHover('')}
            style={{
              background: `${hover === 'fourth' ? 'white' : '#f5fcff'}`,
            }}
          >
            <div
              className="first"
              style={{
                background: `${hover !== 'fourth' ? 'white' : '#f5fcff'}`,
              }}
            >
              {' '}
              <img src={Dev} alt="" />
            </div>
            <h1>
              Web <br /> Development
            </h1>
          </div>
          <div
            className="container mobile"
            onMouseEnter={() => setHover('fifth')}
            onMouseLeave={() => setHover('')}
            style={{
              background: `${hover === 'fifth' ? 'white' : '#f5fcff'}`,
            }}
          >
            <div
              className="first"
              style={{
                background: `${hover !== 'fifth' ? 'white' : '#f5fcff'}`,
              }}
            >
              <img src={mobile} className="" alt="" />
            </div>
            <h1>
              Mobile <br /> Development
            </h1>
          </div>
          <div
            className="container"
            onMouseEnter={() => setHover('eight')}
            onMouseLeave={() => setHover('')}
            style={{
              background: `${hover === 'eight' ? 'white' : '#f5fcff'}`,
            }}
          >
            <div
              className="first"
              style={{
                background: `${hover !== 'eight' ? 'white' : '#f5fcff'}`,
              }}
            >
              {' '}
              <img src={Dev} alt="" />
            </div>
            <h1>
              Software <br /> Integration
            </h1>
          </div>

          <div
            className="container ui"
            onMouseEnter={() => setHover('sixth')}
            onMouseLeave={() => setHover('')}
            style={{
              background: `${hover === 'sixth' ? 'white' : '#f5fcff'}`,
            }}
          >
            <div
              className="first"
              style={{
                background: `${hover !== 'sixth' ? 'white' : '#f5fcff'}`,
              }}
            >
              {' '}
              <img src={uiux} alt="" />
            </div>
            <h1>
              UI/UX <br />
              Design
            </h1>
          </div>
          <div
            className="container"
            onMouseEnter={() => setHover('seven')}
            onMouseLeave={() => setHover('')}
            style={{
              background: `${hover === 'seven' ? 'white' : '#f5fcff'}`,
            }}
          >
            <div
              className="first"
              style={{
                background: `${hover !== 'seven' ? 'white' : '#f5fcff'}`,
              }}
            >
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
            <OwlCarousel {...options} key={data.length}>
              {data.map((proj) => (
                <section key={proj.name}>
                  <div
                    className={`bg`}
                    style={{ backgroundColor: `${proj.bgColor}` }}
                  >
                    <img
                      src={proj.image}
                      alt=""
                      className={`${proj.addMargin ? 'edu' : 'none'}`}
                    />
                  </div>
                  <h2>{proj.name}</h2>
                  <p>{proj.desc}</p>
                  <Link to={{ pathname: proj.link }} target="_blank">
                    View project {arrow}{' '}
                  </Link>
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
            <p className="read">Read more</p>
          </div>

          <div className="single-blog">
            <img src={blog2} alt="" />
            <p className="date">admin l 20 Dec 20</p>
            <h1>Comparison chart for Apps</h1>
            <p className="read">Read more</p>
          </div>

          <div className="single-blog">
            <img src={blog3} alt="" />
            <p className="date">admin l 20 Dec 20</p>
            <h1>Right time to join the Cloud?</h1>
            <p className="read">Read more</p>
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
        <OwlCarousel items={1} nav>
          <div className="container">
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                sed vulputate tellus pellentesque tempor. Vitae leo cras eu
                vitae molestie.
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

          <div className="container">
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                sed vulputate tellus pellentesque tempor. Vitae leo cras eu
                vitae molestie.
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
        </OwlCarousel>
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
          <p>Are you ready to start your next project, contact us below</p>
          <CustomButton onClick={() => history.push(CONTACT)}>
            Contact Us
          </CustomButton>
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

  .owl-nav {
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
    color: #61d0ff !important;
    span {
      font-size: 30px;
    }
  }
  .owl-prev {
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
      /* width: 45%; */
      align-self: center;
      padding-left: 8rem;
      h1 {
        width: 100%;
        font-size: 40px;
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
      height: 641px;
      width: 56%;
    }
  }
  .what-we-do {
    margin: 8rem 0 0;
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
        padding: 3rem 2rem;
        border-radius: 30px;
        .first {
          padding: 1.3rem 1.1rem;
          background: rgba(97, 208, 255, 0.25);
          border-radius: 35px;
          align-self: flex-start;
          text-align: center;
          margin-right: 1rem;
        }
        img {
          width: 90%;
        }
        .text {
          width: 78%;
          align-self: flex-start;
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
    padding: 5rem 8rem 8rem;
    position: relative;
    .dotted-box {
      position: absolute;
      left: 0;
      top: 0;
      /* width: 200px; */
      img {
        /* width: 70%; */
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
        margin: 2rem 2rem 2rem 0;
        width: 30%;
        border-radius: 30px;
        padding: 2rem 2rem 3rem;
        &.mobile {
          .first {
            padding: 2rem 3.5rem 2rem 2.5rem;
            img {
              width: 150%;
            }
          }
        }
        &.ui {
          .first {
            padding: 1.5rem;
            /* padding: 2rem 2rem 2rem 2rem; */
            img {
              width: 80%;
            }
          }
        }
        .first {
          padding: 1.9rem 1.9rem;
          background: white;
          border-radius: 35px;
          width: fit-content;
          text-align: center;
          margin-bottom: 2rem;
          padding: 2rem 2.7rem 2rem 2rem;
          img {
            width: 120%;
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
          .none {
            position: relative;
            left: 20px;
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
            padding: 0 1rem;
          }
          p {
            font-weight: bold;
            font-size: 13px;
            line-height: 17px;
            color: rgba(0, 13, 54, 0.45);
            margin: 1.5rem 0;
            padding: 0 1rem;
          }
          a {
            color: #61d0ff;
            text-decoration: none;
            font-weight: bold;
            font-size: 14px;
            line-height: 17px;
            padding: 0 1rem;
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

        .read {
          padding-bottom: 3rem;
        }
        img {
          width: 100%;
        }
        p,
        h1 {
          padding: 1rem 2rem;
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
      height: 350px;
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
          top: 50%;
          width: 164px;
        }
      }
    }
    .profile {
      width: 20%;
      display: flex;
      /* justify-content: space-around; */
      align-items: center;
      img {
        width: 64px;
      }
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
    .owl-nav {
      padding-right: 8rem;
      margin-top: 0;
    }
  }
  .partners {
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 1rem 0 4rem 0;
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
      z-index: -1;
    }
  }
  @media (max-width: 768px) {
    .hero {
      flex-direction: column;
      padding: 2rem 0;
      .hero-bg {
        display: none;
      }
      .text {
        width: 100%;
        padding-left: 1.5rem;
        padding-top: 2rem;
        h1 {
          font-size: 20px;
          line-height: 30px;
        }
      }
    }
    .what-we-do {
      padding: 2rem;
      margin: 4rem auto;
      & > h1 {
        font-size: 20px;
        line-height: 30px;
      }
      & > p {
        width: 100%;
      }
      .details-container {
        flex-direction: column;
        margin-top: 2rem;
        .details {
          width: 100%;
          margin: 2rem auto;
        }
      }
    }
    .services-container {
      padding: 2rem;
      flex-direction: column;
      .dotted-box {
        display: none;
      }
      .text {
        width: 100%;
      }
      .service {
        width: 100%;
        justify-content: space-between;
        .container {
          width: 35%;
          h1 {
            font-size: 15px;
          }
          &.mobile {
            margin-bottom: 2rem;
          }
        }
      }
    }
    .projects {
      padding: 2rem;
      flex-direction: column;
      .text {
        width: 100%;
        margin-bottom: 4rem;
      }
      .project {
        width: 100%;
        .container {
          width: 100%;
        }
      }
    }
    .blog {
      padding: 2rem;
      .header h1 {
        font-size: 20px;
      }
      .header p {
        width: 100%;
      }
      .blogs {
        padding: 0;
        flex-direction: column;
        .single-blog {
          width: 100%;
          margin: 2rem auto;
        }
      }
    }
    .testimonial {
      margin: 1rem 0 1rem;
      padding: 2rem;
      .owl-nav {
        padding-right: 0;
      }
      .header h1 {
        font-size: 20px;
      }
      .header p {
        width: 100%;
      }
      .container {
        flex-direction: column;
        .text {
          width: 100%;
          padding: 2rem;
          margin-left: 0;
          box-shadow: 5px 15px 20px rgb(64 64 64 / 5%);
          img {
            display: none;
          }
        }
        .profile {
          width: 100%;
        }
      }
    }
    .partners {
      padding: 2rem;
      .text h1 {
        font-size: 20px;
      }
      .text p {
        width: 100%;
      }
      .client1 {
        top: 0;
      }
      .client7 {
        right: 0;
      }
      .client2 {
        left: 40%;
        top: 10%;
      }
      .client6 {
        top: 32%;
        right: 2%;
      }
      .client3 {
        top: 20%;
        left: 0;
      }
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
  }
`;
