import About from './About';
import Home from './Home';
import { ABOUT, HOME } from './pagesPath';

// do a not found page
const routes = [
  {
    path: ABOUT,
    component: About,
    exact: false,
  },
  {
    path: HOME,
    component: Home,
    exact: false,
  },
];

export default routes;
