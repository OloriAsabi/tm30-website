import About from './About';
import Home from './Home';
import { ABOUT, HOME, PROJECTS, SERVICES, CONTACT } from './pagesPath';
import Projects from './Project';
import Services from './Services';
import Contact from './Contact';

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
  {
    path: CONTACT,
    component: Contact,
    exact: false,
  },
];

export default routes;
