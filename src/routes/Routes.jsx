import { createBrowserRouter } from "react-router";
import MainLayOuts from "../layouts/MainLayOuts";
import Favoriute from "../Pages/Favoriute";
import About from "../Pages/About";
import PhonDetails from "../Pages/PhonDetails";
import ErrorHear from "../Pages/ErrorHear";
import Home from "../Pages/Home/Home";
 
 
 

const router = createBrowserRouter([
    {
      path: "/",
      Component:MainLayOuts,
     errorElement:<ErrorHear />,
      children:[
        {
            // index:true,
            path:'/',
            Component:Home ,
            hydrateFallbackElement:<p>Loading, please wait....</p>,
            loader:()=>fetch('phones.json'),
        },
        {
          path:'/favoriute',
          Component: Favoriute,
        },
        {
          path: '/about',
          Component:About
        },
        {
            path: '/phon-details',
            Component: PhonDetails,
        }
      ],
    },
  ]);
  export default router;