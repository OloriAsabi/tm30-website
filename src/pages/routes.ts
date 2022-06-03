import About from './About';
import Home from './Home';
import { ABOUT, PROJECTS, SERVICES, CONTACT, HOME, CAREERS } from './pagesPath';
import Services from './Services';
import Contact from './Contact';
import Projects from './Project';
import Careers from './Careers';

// do a not found page
const routes = [
  {
    path: ABOUT,
    component: About,
    exact: true,
  },
  {
    path: HOME,
    component: Home,
    exact: true,
  },
  {
    path: SERVICES,
    component: Services,
    exact: true,
  },
  {
    path: PROJECTS,
    component: Projects,
    exact: true,
  },
  {
    path: CAREERS,
    component: Careers,
    exact: true,
  },
  {
    path: CONTACT,
    component: Contact,
    exact: true,
  },
];

export default routes;
