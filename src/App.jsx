import { Routes, Route } from "react-router-dom"
import NavbarComponent from "./components/NavbarComponent"
import FooterComponent from "./components/FooterComponent"
import HomePage from "./pages/HomePage"
import KelasPage from "./pages/KelasPage"
import SyaratKetentuanPage from "./pages/SyaratKetentuan"
import FaqComponent from "./components/FaqComponent"
import TestimonialPage from "./pages/TestimonialPage"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testimonial" Component={TestimonialPage} />
        <Route path="/faq" Component={FaqComponent} />
        <Route path="/syaratketentuan" Component={SyaratKetentuanPage} />
      </Routes>

      <FooterComponent />
    </div>
  )
}

export default App