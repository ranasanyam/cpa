// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Footer from './components/Footer';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: 'services',
    element: <Services />
  },
  {
    path: 'blogs',
    element: <Blogs />
  },
  {
    path: 'contact',
    element: <Contact />
  }
]);


function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className='font-roboto'>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div> 
  );
}

export default App;
