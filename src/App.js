import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import AboutUsPage from "./pages/aboutUs";
import Home from "./pages/home";
import LoginPage from "./pages/LoginPage";
import ProudctPage from "./pages/productsPage";
import SignUpPage from "./pages/signup";

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
          {/* <Route path={"*"} element={<NotFound />}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
