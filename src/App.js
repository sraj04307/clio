import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import Blog from "./Components/pages/Blog";
import BlogDetails from "./Components/pages/BlogDetails";
import Service from "./Components/pages/Service/Service";
import ServiceDetails from "./Components/pages/ServiceDetails";
import Layout2 from "./Components/Layout2";
import HappyClient from "./Components/pages/HappyClient";
import ClientTestimonial from "./Components/pages/ClientTestimonial";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Layout2/>}>
              <Route path="blogdetails" element={<BlogDetails/>}/>
              <Route index element={<Blog/>}/>
            </Route>
            <Route path="service" element={<Service />} />
            <Route path="servicedetails" element={<ServiceDetails />} />
            <Route path="happyclient" element={<HappyClient />} />
            <Route path="clienttestimonial" element={<ClientTestimonial />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
