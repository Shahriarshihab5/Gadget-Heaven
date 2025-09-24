import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import Details from './Components/Details/Details.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import About from './Components/About/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  
    errorElement:<ErrorPage></ErrorPage>,
    children: [
     
      { path: "", element: <Home></Home> }, 
      {
path:"/Dashboard",
element:<Dashboard></Dashboard>,
loader: () => fetch("/Device.json").then(res => res.json()),
      } , 
      {
path:"/Statistics",
element:<Statistics></Statistics>
      } ,
      {
        path:"/about",
        element:<About></About>
              } ,
      {
        path:"/Details/:product_id",
        element:<Details></Details>,
        loader:() =>fetch('/Device.json')
              } ,
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
