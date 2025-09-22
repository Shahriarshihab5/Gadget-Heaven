import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  
    children: [
      { path: "/Home", element: <Home></Home> }, 
      {
path:"/Dashboard",
element:<Dashboard></Dashboard>,
      } , 
      {
path:"/Statistics",
element:<Statistics></Statistics>
      } ,
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
