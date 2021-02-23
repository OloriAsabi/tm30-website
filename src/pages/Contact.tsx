import React from 'react';
import styled from '@emotion/styled';
import bg from 'assets/images/Group 56.png';
import { CustomButton } from 'reusables/CustomButton';

const Contact = () => {
  return (
    <Contact.Wrapper>
      <img src={bg} alt="" className="bg" />
      <div className="hero">
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          pellentesque facilisis porttitor in dui magna blandit lorem
          pellentesque.
        </p>
      </div>
      <form>
        <div className="inputs">
          <label>
            <p className="label"> Name</p> 
            <input type="text" placeholder="your name" />
          </label>

          <label>
          <p className="label">  Email </p>
            <input type="text" placeholder="youremail@email.com" />
          </label>
        </div>
        <label htmlFor="">
         <p className="label"> Message</p>
          <textarea
            name=""
            id=""
            placeholder="Describe your message for us and we’ll get in touch with you shortly."
          ></textarea>
        </label>
        <div className="button">
            <CustomButton>Submit</CustomButton>
        </div>
      </form>
    </Contact.Wrapper>
  );
};

export default Contact;

Contact.Wrapper = styled.div`
  position: relative;
  .bg {
    width: 100%;
  }
  .hero {
    position: absolute;
    top: 10%;
    width: 92%;
    right: 3%;
    & > h1 {
      text-align: center;
      font-size: 40px;
      line-height: 49px;
      color: #000d36;
      margin-top: 2rem;
    }
    & > p {
      width: 37%;
      margin: 2rem auto;
      font-weight: bold;
      font-size: 14px;
      line-height: 28px;
      text-align: center;
      color: rgba(0, 13, 54, 0.45);
    }
  }
  form {
    position: absolute;
    top: 45%;
    right: 29%;
    width: 38%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .inputs {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
      input {
        height: 44px;
      }
    }
    input,
    textarea {
      display: block;
      border: 2px solid rgba(0, 13, 54, 0.2);
      border-radius: 10px;
      padding: 1.2rem;
      &::placeholder {
        font-weight: bold;
        font-size: 14px;
        line-height: 28px;
        color: rgba(0, 13, 54, 0.2);
        font-family: Proxima Nova;
      }
      &:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        font-weight: bold;
        font-size: 14px;
        line-height: 28px;
        color: rgba(0, 13, 54, 0.2);
      }

      &::-ms-input-placeholder {
        /* Microsoft Edge */
        font-weight: bold;
        font-size: 14px;
        line-height: 28px;
        color: rgba(0, 13, 54, 0.2);
      }
      &:focus {
        outline: none;
        border: 2px solid #61d0ff;
      }
    }
    textarea {
      width: 100%;
      height: 141px;
    }
    .label {
      font-weight: bold;
      font-size: 14px;
      line-height: 28px;
      color: rgba(0, 13, 54, 0.65);
      margin-left:1.2rem;
    }
  }
  .button{
    margin-top: 2rem;
    text-align: center;
  }
`;
