import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Multimedia from "./Multimedia/Multimedia";

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Footer/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/multimedia" element={<Multimedia/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
