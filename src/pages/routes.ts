import About from './About';
import Home from './Home';
import { ABOUT, HOME, PROJECTS, SERVICES } from './pagesPath';
import Projects from './Project';
import Services from './Services';

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
  {
    path: SERVICES,
    component: Services,
    exact: false,
  },
  {
    path: PROJECTS,
    component: Projects,
    exact: false,
  },
];

export default routes;
