import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Error from "./Error";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Cart from "./Cart";
import RestaurantsMenu from "./RestaurantsMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import RestaurantsMenu from "./RestaurantsMenu";


  const App = () =>{
    return(
        <div className="app">
        <Header/>
        <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
  {
    path : "/",
  element: <App />,
  children: [
    {
      path : "/",
    element: <Body />,
    
    },
    {
    path : "/about",
  element: <About />,
  
  },
  {
    path : "/services",
  element: <Services />,
  
  },
  {
    path : "/contact",
  element: <Contact />,
  
  },
  {
    path : "/cart",
  element: <Cart />,
  
  },
  {
    path : "/Restaurant/:id",
  element: <RestaurantsMenu />,
  
  }

],
  errorElement : <Error />,
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
 