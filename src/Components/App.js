import React, { lazy,Suspense, useContext, useEffect, useState } from "react";
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
import UserContext from "../../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

const Grocery = lazy(() => import("./Grocery"));
  const App = () =>{
    //Authentication Validation
const [userName,setUserName]=useState()
//Make an API call and send user name and password
 useEffect(()=>{
  const data = {
    name :"@Surya Siva"
  }
  setUserName(data.name)
 },[])
  
    return(
      <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser : userName,setUserName}}>
      
        <div>
          
        <Header/>
        <Outlet />
        
        </div>
        </UserContext.Provider>
        </Provider>
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
  
  },
  {
    path : "/grocery",
  element: (
  <Suspense fallback={<h1>Loading...</h1>}>
    <Grocery />
  </Suspense>
  ),
  
  },

],
  errorElement : <Error />,
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
 