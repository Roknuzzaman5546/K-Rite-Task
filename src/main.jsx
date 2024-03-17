import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout/MainLayout.jsx';
import MarketingTeam from './Components/Page/MarketingTeam.jsx';
import Home from './Components/Page/Home.jsx';
import Design from './Components/Page/DesignPage.jsx';
import Development from './Components/Page/Development.jsx';
import ErrorPage from './Components/Page/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/marketingTeam",
        element: <MarketingTeam></MarketingTeam>
      },
      {
        path: "/design",
        element: <Design></Design>
      },
      {
        path: "/development",
        element: <Development></Development>
      },
      {
        path: "/product",
        element: <Home></Home>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
