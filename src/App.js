import "./App.css";
import ScrollToTop from "react-scroll-to-top";
import Home from "./Components/Pages/Home/Home";
import Shop from "./Components/Pages/Shop/Shop";
import Blogs from "./Components/Pages/Blogs/Blogs";
import Login from "./Components/Pages/Login/Login";
import About from "./Components/Pages/About/About";
import SignUp from "./Components/Pages/SignUp/SignUp";
import Header from "./Components/Shared/Navbar/Header";
import Footer from "./Components/Shared/Footer/Footer";
import Contact from "./Components/Pages/Contact/Contact";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Users from "./Components/Pages/Dashboard/Users/Users";
import AdminRoute from "./Components/PrivateRoute/AdminRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Summary from "./Components/Pages/Dashboard/Summary/Summary";
// import WishList from "./Components/Pages/CartAll/Wishlist/WishList";
import Overview from "./Components/Pages/Dashboard/Overview/Overview";
import Cart from "./Components/Pages/CartAll/CartOverview/CartOverview";
import CheckOut from "./Components/Pages/CartAll/CartOverview/CheckOut";
import Dashboard from "./Components/Pages/Dashboard/Dashboard/Dashboard";
import MakeAdmin from "./Components/Pages/Dashboard/MakeAdmin/MakeAdmin";
import OrderList from "./Components/Pages/Dashboard/OrderList/OrderList";
import AddProduct from "./Components/Pages/Dashboard/AddProduct/AddProduct";
import SuccessPage from "./Components/Pages/CartAll/SuccessPage/SuccessPage";
import AddCustomer from "./Components/Pages/Dashboard/AddCustomer/AddCustomer";
import AllProducts from "./Components/Pages/Dashboard/AllProducts/AllProducts";
import ManageOrders from "./Components/Pages/Dashboard/ManageOrders/ManageOrders";
import CustomerList from "./Components/Pages/Dashboard/CustomerList/CustomerList";
import ScrollToPageTop from "./Components/Shared/ScrollToPageTop/ScrollToPageTop";
import DashboardHome from "./Components/Pages/Dashboard/DashboardHome/DashboardHome";
import ProductDetails from "./Components/Pages/CartAll/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <div className="lg:block md:block hidden">
        <ScrollToTop smooth className="scroll-button" color="white" />
      </div>
      <BrowserRouter>
        <ScrollToPageTop />
        <Header />
        <Routes>
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <CheckOut />
              </PrivateRoute>
            }
          />

          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="summary" element={<Summary />} />
          {/* <Route path="/wishList" element={<WishList />} /> */}
          <Route path="/success" element={<SuccessPage />} />
          <Route path="products/:category" element={<Shop />} />
          <Route path="product/:productId" element={<ProductDetails />} />

          <Route
            path="/dashboard"
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          >
            <Route path="users" element={<Users />} />
            <Route path="" element={<DashboardHome />} />
            <Route path="overview" element={<Overview />} />
            <Route path="orderList" element={<OrderList />} />
            <Route path="makeAdmin" element={<MakeAdmin />} />
            <Route path="addProduct" element={<AddProduct />} />
            <Route path="allProducts" element={<AllProducts />} />
            <Route path="addCustomer" element={<AddCustomer />} />
            <Route path="manageOrders" element={<ManageOrders />} />
            <Route path="customerList" element={<CustomerList />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
