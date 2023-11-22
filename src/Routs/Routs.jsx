import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home";
import About from "../components/About";
import ContactUs from "../components/ContactUs";
import Products from "../components/Products";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    //   errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/contact",
          element: <ContactUs></ContactUs>,
        },
        {
          path: "/products",
          element:<Products></Products>
        },
        
      ],
    },
  ]);
  
  export default router;