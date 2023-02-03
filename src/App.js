import {createBrowserRouter, BrowserRouter, Route, Routes, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import Register from './components/Register';
import Login from './components/Login';
import MainBlog from './components/MainBlog';
import Footer from './components/Footer';
import Blog from './components/Blog';

const Dashboard = () =>{
  return(
    <>
     <Navbar />
     <Outlet />
     <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element:<Dashboard />,
    children: [
      {
        path: "/",
        element:<Home />
      },
      {
        path: "/blog/:id",
        element:<MainBlog />
      },
      {
        path:"/draft",
        element: <Blog />
      }


    ]
  },

  {
    path: "/register",
    element:<Register />,
  },

  {
    path: "/login",
    element:<Login />,
  },
  {
    path: "/blogpage",
    element:<MainBlog />,
  },


])



function App() {
  return (
  <>
    
     <RouterProvider router={router} />
  </>
 
   
  );
}

export default App;
