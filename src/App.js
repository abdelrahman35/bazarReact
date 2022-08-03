import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
// import "@fortawesome/fontawesome-free/css/all.css";
// import "@fortawesome/fontawesome-free/js/font-pro";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/index";
import CategoryNavbar from "./components/CategoryNavbar/CategoryNavbar";
import Footer from "./components/Footer/Footer";
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
import Thanks from "./pages/ThanksForm/Thanks";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import AdminPanel from "./pages/AdminPages/AdminPanel/AdminPanel";
import AdminProducts from "./pages/AdminPages/AdminProducts/AdminProducts";
import CreateProduct from "./pages/AdminPages/CreateProduct/CreateProduct";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <CategoryNavbar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/login" index element={<LoginPage />} />
          <Route
            path="/product-details/:id"
            iNdex
            element={<ProductDetails />}
          />
          <Route path="/signup" index element={<SignUpPage />} />
          <Route path="/thanks" index element={<Thanks />} />
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
          <Route path="/adminpanel" index element={<AdminPanel />} />
          <Route path="/admin/products" index element={<AdminProducts />} />
          <Route
            path="/admin/products/create"
            index
            element={<CreateProduct />}
          />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
