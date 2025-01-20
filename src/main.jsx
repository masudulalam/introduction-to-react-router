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
import UserDetails from './components/userDetails/UserDetails';
import Posts from './components/posts/Posts';
import PostDetails from './components/postDetails/PostDetails';
import ErrorPage from './components/errorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Home />,
    errorElement: <ErrorPage />,
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
      },
      {
        path: "/user/:userId",
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails />
      },
      {
        path: "/posts",
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts />
      },
      {
        path: "/post/:postId",
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails />
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
