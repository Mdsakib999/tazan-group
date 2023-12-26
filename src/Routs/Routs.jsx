import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home";
import About from "../components/About";
import ContactUs from "../components/ContactUs";
import Products from "../components/Products";
import SuccessStory from "../components/SuccessStory";
import Error from "../components/Error";
import Blog from "../components/Blog";
import ProductDetails from "../components/ProductDetails";
import Career from "../components/Career";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
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
          element:<Products></Products>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/success",
          element: <SuccessStory></SuccessStory>,
        },
        {
          path: "/productDetails/:id",
          element: <ProductDetails></ProductDetails>,
          // loader:({params} ) => fetch(`data.json/viewDetails/${params.id}`)
        },
        {
          path: "/career",
          element: <Career></Career>,
        },
        
      ],
    },
  ]);
  
  export default router;