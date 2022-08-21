// general imports
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "react-notifications/lib/notifications.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
import UpdateProduct from "./pages/AdminPages/Products/UpdateProduct/UpdateProduct";
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
import UpdateInfo from "./pages/UserPages/UpdateInfo/UpdateInfo";
// product pages
import ProductDetails from "./pages/ProductPages/ProductDetails/ProductDetails";
import ProudctPage from "./pages/ProductPages/ProductsPage/ProductsPage";

// category pages
import CategoryDetails from "./pages/CategoryPages/CategoryDetails/CategoryDetails";
// order pages
import PlaceOrder from "./pages/PlaceOrderPages/PlaceOrder/PlaceOrder";
import Payment from "./pages/PlaceOrderPages/Payment/Payment";
import ListOrders from "./pages/AdminPages/Orders/ListOrders/ListOrders";
import OrderDetailsForAdmin from "./pages/AdminPages/Orders/OrderDetailsForAdmin/OrderDetailsForAdmin";
import CartPage from "./pages/PlaceOrderPages/CartPage/Cart";
import Success from "./pages/PlaceOrderPages/Success/Success";
import ViewOrderDetails from "./pages/OrderPages/ViewOrderDetails/ViewOrderDetails";
import AddNewAddress from "./pages/UserPages/AddNewAddress/AddNewAddress";
import FavouritePage from "./pages/UserPages/FavouritePage/FavouritePage";
import { NotificationContainer } from "react-notifications";
import ShippingDetails from "./pages/PlaceOrderPages/ShippingDetails/ShippingDetails";
import SelectPaymentMethod from "./pages/PlaceOrderPages/SelectPaymantMethod/SelectPaymentMethod";
import ListUsers from "./pages/AdminPages/Users/ListUsers/ListUsers";
import UserDetails from "./pages/AdminPages/Users/UserDetails/UserDetails";
import UpdateAddress from "./pages/UserPages/UpdateExistingAddress/UpdateAddress";

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
          <Route path="/profile" index element={<ProfilePage />} />
          <Route path="/updateinfo" index element={<UpdateInfo />} />
          <Route path="/cart" index element={<CartPage />} />
          <Route path="/favourites" index element={<FavouritePage />} />
          <Route path="/address/add" index element={<AddNewAddress />} />
          {/* order routes for user */}
          <Route path="/order/:orderId" index element={<ViewOrderDetails />} />
          {/*  */}
          <Route
            path="/resetPassword/:token"
            index
            element={<ResetPassword />}
          />
          <Route
            path="/address/edit/:addressId"
            index
            element={<UpdateAddress />}
          />
          <Route path="/adminpanel" index element={<AdminPanel />} />
          {/* admin routes for products */}
          <Route path="/admin/products" index element={<AdminProducts />} />
          <Route
            path="/admin/products/create"
            index
            element={<CreateProduct />}
          />
          <Route
            path="/admin/updateproduct/:productId"
            index
            element={<UpdateProduct />}
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
          {/* orders Routes For Admin */}
          <Route path="/admin/order" index element={<ListOrders />} />
          <Route
            path="/admin/order/:id"
            index
            element={<OrderDetailsForAdmin />}
          />
          {/* admin routes for users */}
          <Route path="/admin/users" index element={<ListUsers />} />
          <Route
            path="/admin/user/details/:userId"
            index
            element={<UserDetails />}
          />
          <Route path={"*"} element={<NotFoundPage />} />
          {/* placing order routes */}
          <Route path="/shippingDetails" index element={<ShippingDetails />} />

          <Route
            path="/paymentmethod"
            index
            element={<SelectPaymentMethod />}
          />
          <Route path="/placeorder" index element={<PlaceOrder />} />
          <Route path="/success" index element={<Success />} />
          <Route path="/payment" index element={<Payment />} />
        </Routes>

        <Footer />
        <NotificationContainer />
      </Router>
    </>
  );
}

export default App;
