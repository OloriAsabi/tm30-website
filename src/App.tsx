import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Global } from '@emotion/react';
import __globalCss from 'styles/__global.css';
import Pages from './pages';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();
  return (
    <Router>
      <Global styles={__globalCss} />
      <Pages />
    </Router>
  );
}

export default App;
