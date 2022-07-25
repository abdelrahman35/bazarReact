import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/index";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import Home from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProudctPage from "./pages/ProductsPage/ProductsPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/login" index element={<LoginPage />}></Route>
          <Route path="/signup" index element={<SignUpPage />}></Route>
          <Route path="/products" index element={<ProudctPage />}></Route>
          <Route path="/aboutus" index element={<AboutUsPage />}></Route>
          <Route path={"*"} element={<NotFoundPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
