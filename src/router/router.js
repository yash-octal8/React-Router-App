
import Home from '../Pages/Home'
import About from '../Pages/About';
import Pricing from '../Pages/Pricing';
import Services from '../Pages/Services';
import Contact from '../Pages/Contact';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {
          path: "",
          element: <Home/>,
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path: "/service",
          element: <Services/>,
        },
        {
          path: "/pricing",
          element: <Pricing/>,
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
    ]
  },
  {
      path: "/login",
      element: <Login/>,
  },

  {
    path: "/dashboard",
    element: <Dashboard/>,
  },

]);

export default router;
