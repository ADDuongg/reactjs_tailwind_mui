import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home1 from './page/home1';
import Home2 from './page/home2';
import About from './page/about';
import Service from './page/service';
import Gallery from './page/gallery';
import Team from './page/team';
import Blog from './page/blog';
import Contact from './page/contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home1/>,
  },
  {
    path: "/home",
    element: <Home1/>,
  },
  {
    path: "/home2",
    element: <Home2/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/service",
    element: <Service/>,
  },
  {
    path: "/gallery",
    element: <Gallery/>,
  },
  {
    path: "/team",
    element: <Team/>,
  },
  {
    path: "/blog",
    element: <Blog/>,
  },
  {
    path: "/contract",
    element: <Contact/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Home1 />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
