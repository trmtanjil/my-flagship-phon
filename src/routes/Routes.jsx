import { createBrowserRouter } from "react-router";
import MainLayOuts from "../layouts/MainLayOuts";
import Favoriute from "../Pages/Favoriute";
import About from "../Pages/About";
import PhonDetails from "../Pages/PhonDetails";
import ErrorHear from "../Pages/ErrorHear";
import Hero from "../components/Hero/Hero";
 

const router = createBrowserRouter([
    {
      path: "/",
      Component:MainLayOuts,
     errorElement:<ErrorHear />,
      children:[
        {
            index:true,
            Component: Hero,
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