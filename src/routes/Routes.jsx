import { createBrowserRouter } from "react-router";
import MainLayOuts from "../layouts/MainLayOuts";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Favoriute from "../Pages/Favoriute";
import About from "../Pages/About";
import PhonDetails from "../Pages/PhonDetails";

const router = createBrowserRouter([
    {
      path: "/",
      Component:MainLayOuts,
      errorElement:ErrorPage,
      children:[
        {
            index:true,
            Component: Home,
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