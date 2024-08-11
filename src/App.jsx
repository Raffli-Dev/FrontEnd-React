import { Routes, Route, Outlet } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import SyaratKetentuanPage from "./pages/SyaratKetentuan";
import FaqComponent from "./components/FaqComponent";
import TestimonialPage from "./pages/TestimonialPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Regiter from "./pages/Register";

function App() {
  return (
    <div>
      <Routes>
        {/* Routes with Navbar and Footer */}
        <Route element={<NavbarAndFooterLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/kelas" element={<KelasPage />} />
          <Route path="/testimonial" element={<TestimonialPage />} />
          <Route path="/faq" element={<FaqComponent />} />
          <Route path="/syaratketentuan" element={<SyaratKetentuanPage />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Regiter />} />

        {/* Route without Navbar and Footer */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function NavbarAndFooterLayout() {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
}

export default App;
