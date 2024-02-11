import React from "react";
import Smallinfo from "./components/Smallinfo";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Discoversloans from "./components/Discoversloans";
import Discoverpage from "./components/Discoverpage";
import Servicespage from "./components/Servicespage";
import Testimonial from "./components/Testimonial";
import Carusel from "./components/Carusel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aboutpage from "./components/Aboutpage";
import Contactus from "./components/Contactus";
import Blog from "./components/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Smallinfo />
        <Navbar />
        <Home />
        <About />
        <Discoversloans />
        <Discoverpage />
        <Servicespage />
        <Testimonial />
        <Carusel />
        <Contact />
        <Footer />
      </div>
    ),
  },
  {
    path: "/services",
    element: (
      <div>
        <Smallinfo />
        <Navbar />
        <Services />
        <Footer />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Smallinfo />
        <Navbar />
        <Aboutpage />
        <Footer />
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <Smallinfo />
        <Navbar />
        <Contactus />
        <Footer />
      </div>
    ),
  },
  {
    path: "/blog",
    element: (
      <div>
        <Smallinfo />
        <Navbar />
        <Blog />
        <Footer />
      </div>
    ),
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
