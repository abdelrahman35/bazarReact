import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// components
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/Footer";

// admin pages
import AdminPanel from "./pages/AdminPages/AdminPanel/AdminPanel";
import AdminProducts from "./pages/AdminPages/Products/AdminProducts/AdminProducts";
import CreateProduct from "./pages/AdminPages/Products/CreateProduct/CreateProduct";
import CreateCategory from "./pages/AdminPages/Categories/CreateCategory/CreateCategory";
import ListCateogries from "./pages/AdminPages/Categories/ListCategories/ListCateogries";
// main pages
import AboutUsPage from "./pages/MainPages/AboutUsPage/AboutUsPage";
import Home from "./pages/MainPages/HomePage/HomePage";
import NotFoundPage from "./pages/MainPages/NotFoundPage/NotFoundPage";
import Thanks from "./pages/MainPages/ThanksForm/Thanks";

// user pages
import SignUpPage from "./pages/UserPages/SignUpPage/SignUpPage";
import ResetPassword from "./pages/UserPages/ResetPassword/ResetPassword";
import LoginPage from "./pages/UserPages/LoginPage/LoginPage";
import ChangePassword from "./pages/UserPages/ChangePassword/ChangePassword";
import ProfilePage from "./pages/UserPages/ProfilePage/ProfilePage";
import ForgetPassword from "./pages/UserPages/ForgetPassword/ForgetPassword";

// product pages
import ProductDetails from "./pages/ProductPages/ProductDetails/ProductDetails";
import ProudctPage from "./pages/ProductPages/ProductsPage/ProductsPage";

// category pages
import CategoryDetails from "./pages/CategoryPages/CategoryDetails/CategoryDetails";
// order pages
import Order from "./pages/OrderPages/Order/Order";
import Payment from "./pages/OrderPages/Payment/Payment";
function App() {
  return (
    <>
      <Router>
        <Navbar />
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
          <Route path="/order" index element={<Order />} />
          <Route path="/payment" index element={<Payment />} />
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

          {/* categories routes */}
          <Route
            path="/category/:categoryId"
            index
            element={<CategoryDetails />}
          />
          <Route path="/admin/categories" index element={<ListCateogries />} />
          <Route
            path="/admin/categories/create"
            index
            element={<CreateCategory />}
          />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
