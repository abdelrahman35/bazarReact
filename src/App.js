import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/index";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import Home from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProudctPage from "./pages/ProductsPage/ProductsPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import LoginPage from "./pages/LoginPage/LoginPage";
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
          <Route
            path="/forgetPassword"
            index
            element={<ForgetPassword />}
          ></Route>
          <Route
            path="/resetPassword/:token"
            index
            element={<ResetPassword />}
          ></Route>
          <Route path={"*"} element={<NotFoundPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
