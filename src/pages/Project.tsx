import styled from '@emotion/styled';
import HeroSection from 'components/HeroSection';
import React from 'react';
import Elipse8p from 'assets/images/Ellipse 8@2x.png';
import backUpImg from 'assets/images/Group 48.png';
import EduImg from 'assets/images/Group 49.png';
import EstateImg from 'assets/images/Group 38.png';
import pmbImg from 'assets/images/Group 40 (1).png';
import Group1 from 'assets/images/Group 1 (3).png';
import Elipse1 from 'assets/images/Ellipse 1.png';
// import bg from "assets/images/Group 56.png"

const Projects = () => {
  return (
    <Projects.Wrapper>
      <div className="hero">
        <img src={Elipse8p} alt="arc" className="left-arc" />
        <h1>Projects</h1>
        <p>
        Take a look at our past projects.
        </p>
        <div className="pmb">
        <div className="text">
          <h1>PayMyBills</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            pellentesque facilisis
          </p>
        </div>
        <img src={pmbImg} alt="pmb" className="pmbImg" />
        <img src={Group1} alt="" className="Group1" />
      </div>
      </div>
      <div className="backup">
        <div className="text">
          <h1>Backup cash</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            pellentesque facilisis
          </p>
        </div>
        <img src={backUpImg} alt="pmb" className="pmbImg" />
        <img src={Group1} alt="" className="Group1" />
      </div>
      
      <div className="edu">
        <div className="text">
          <h1>Edusponsor</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            pellentesque facilisis
          </p>
        </div>
        <img src={EduImg} alt="pmb" className="pmbImg" />
        <img src={Group1} alt="" className="Group1" />
      </div>

      <div className="est">
        <div className="text">
          <h1>Estate Mgt</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            pellentesque facilisis
          </p>
        </div>
        <img src={EstateImg} alt="pmb" className="pmbImg" />
        <img src={Group1} alt="" className="Group1" />
        <img src={Elipse1} alt="" className="ellipse1" />
      </div>
      
    </Projects.Wrapper>
  );
};

export default Projects;

Projects.Wrapper = styled.div`
  position: relative;
  .left-arc {
    position: absolute;
    width: 40%;
    top: -20%;
    left: 0;
  }
  .hero {
    background: linear-gradient(
      178.13deg,
      #61d0ff 1.56%,
      rgba(240, 250, 255, 0) 100.8%
    );
    height: 420px;
    padding: 1.5rem 8rem;
    margin : 0 0 3rem 0;
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
    justify-content: center;
    align-items: center;
    position: relative;
   
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
      width: 50%;
    }

    /* .pmbImg {
      width: 518px;
      position: absolute;
      right: 10%;
    } */
    .Group1 {
      position: absolute;
      right: 38%;
      bottom: -5%;
      z-index: -1;
    }
  }
  .backup{
    margin-top:17rem;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    position: relative;
   
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
      width: 50%;
    }

    .pmbImg {
      width: 518px;
    }
    .Group1 {
      position: absolute;
      left: 38%;
      bottom: -5%;
      z-index: -1;
    }
  }
  .est{
    margin-top:-4rem;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    position: relative;
   margin-bottom: 8rem;
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
      width: 50%;
    }

    .pmbImg {
      width: 518px;
    }
    .Group1 {
      position: absolute;
      left: 38%;
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
  .edu{
    margin-top:-8rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
   
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
      width: 50%;
    }

    .pmbImg {
      width: 518px;
    }
    .Group1 {
      position: absolute;
      right: 38%;
      bottom: -5%;
      z-index: -1;
    }
  }
  @media(max-width : 760px){
  .est{
    padding : 2rem;
     margin-top: 2rem;
    flex-direction: column;
       p{
        width : 100%;
       }
       .Group1{
         display :  none;
       }
       .pmbImg{
         width : 100%;
         margin-top: 3rem;
       }
       .text{
         margin-left: 0;
         margin-top: 0;
       }
       .ellipse1{
         display : none;
       }
   } 
   .hero{
     padding : 2rem;
     & > p{
       width : 100%;
     }
     .pmb{
       flex-direction: column;
       p{
        width : 100%;
       }
       .Group1{
         display :  none;
       }
       .pmbImg{
         width : 100%;
       }
       .text{
         margin-left: 0;
       }
     }

   }
   .backup{
    padding : 2rem;
     margin-top: 30rem;
    flex-direction: column;
       p{
        width : 100%;
       }
       .Group1{
         display :  none;
       }
       .pmbImg{
         width : 100%;
       }
       .text{
         margin-left: 0;
       }
   }
   .edu{
    padding : 2rem;
     margin-top: 3rem;
    flex-direction: column;
       p{
        width : 100%;
       }
       .Group1{
         display :  none;
       }
       .pmbImg{
         width : 100%;
       }
       .text{
         margin-left: 0;
         margin-top: 0;
       }
   }
  }
`;
