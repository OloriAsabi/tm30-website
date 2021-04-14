import { css } from '@emotion/react';
import ProximaBold from 'assets/fonts/FontsFree-Net-Proxima-Nova-Xbold.otf';
import ProximaRegular from 'assets/fonts/FontsFree-Net-Proxima-Nova-Bold.otf';

export default css`
  @font-face {
    font-family: 'Proxima Nova';
    src: url(${ProximaRegular}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Proxima-Nova-Bold';
    src: url(${ProximaBold}) format('truetype');
    font-weight: bold;
    font-style: bold;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    // This defines what 1rem is
    font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%
    height: 100%;
  }

  body {
    font-family: 'Proxima Nova', 'Fira Sans', sans-serif;
    box-sizing: border-box;
    background: #f5fcff;
    height: 100%;
  }
  h1,
  h2 {
    font-weight: 900;
    font-family: 'Proxima-Nova-Bold';
  }
  #root {
    height: 100%;
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
  @media screen and (max-width: 960px) {
  }
`;
