import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Users from './components/users/Users';
// import Header from './components/Header/header';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Home />,
    children: [
      {
        path: "/about",
        element: <About /> 
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users />
      }
    ]
  },
  // {
  //   path: "/header",
  //   element: <Header />
  // }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
