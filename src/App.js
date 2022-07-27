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
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/login" index element={<LoginPage />} />
          <Route path="/signup" index element={<SignUpPage />} />
          <Route path="/products" element={<ProudctPage />} />
          <Route path="/aboutus" index element={<AboutUsPage />} />
          <Route path="/forgetPassword" index element={<ForgetPassword />} />
          <Route path="/changePassword" index element={<ChangePassword />} />
          <Route path="/profile" index element={<ProfilePage />} />
          <Route
            path="/resetPassword/:token"
            index
            element={<ResetPassword />}
          />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
