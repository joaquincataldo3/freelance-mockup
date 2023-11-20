import { Route, Routes } from "react-router-dom";
import { Header } from "./shared-components/header/Header";
import { Home } from "./views/home/Home";
import './App.css'
import { Navbar } from "./shared-components/navbar/Navbar";
import { About } from "./views/about/About";
import { Services } from "./views/services/Services";
import { ContactUs } from "./views/contact-us/ContactUs";
import { Footer } from "./shared-components/footer/Footer";

function App() {

  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<ContactUs />}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
