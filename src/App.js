import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Shared/Navbar/Header";
import Footer from "./Components/Shared/Footer/Footer";
import Home from "./Components/Pages/Home/Home";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Blogs from "./Components/Pages/Blogs/Blogs";
import Contact from "./Components/Pages/Contact/Contact";
import Login from "./Components/Pages/Login/Login";
import SignUp from "./Components/Pages/SignUp/SignUp";
import About from "./Components/Pages/About/About";
import ProductDetails from "./Components/Pages/CartAll/ProductDetails/ProductDetails";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Cart from "./Components/Pages/CartAll/Cart/Cart";
import WishList from "./Components/Pages/CartAll/Wishlist/WishList";
import Dashboard from "./Components/Pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Components/Pages/Dashboard/DashboardHome/DashboardHome";
import MakeAdmin from "./Components/Pages/Dashboard/MakeAdmin/MakeAdmin";
import AllProducts from "./Components/Pages/Dashboard/AllProducts/AllProducts";
import AddProduct from "./Components/Pages/Dashboard/AddProduct/AddProduct";
import OrderList from "./Components/Pages/Dashboard/OrderList/OrderList";
import ManageOrders from "./Components/Pages/Dashboard/ManageOrders/ManageOrders";
import AddCustomer from "./Components/Pages/Dashboard/AddCustomer/AddCustomer";
import CustomerList from "./Components/Pages/Dashboard/CustomerList/CustomerList";
import Overview from "./Components/Pages/Dashboard/Overview/Overview";
import Summary from "./Components/Pages/Dashboard/Summary/Summary";
import Test from "./Components/Pages/Test/Test";
import Shop from "./Components/Pages/Shop/Shop";

function App() {
  return (
    <div className="App">
      {/* <AuthProvider> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route path="shopCategory/:category" element={<Shop />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route
            path="/cart"
            element={
              // <PrivateRoute>
              <Cart />
              // </PrivateRoute>
            }
          />
          <Route
            path="/wishList"
            element={
              // <PrivateRoute>
              <WishList />
              // </PrivateRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              // <PrivateRoute>
              <Dashboard />
              // </PrivateRoute>
            }
          >
            <Route path="" element={<DashboardHome />} />
            <Route path="allProducts" element={<AllProducts />} />
            <Route path="addProduct" element={<AddProduct />} />
            <Route path="orderList" element={<OrderList />} />
            <Route path="manageOrders" element={<ManageOrders />} />
            <Route path="customerList" element={<CustomerList />} />
            <Route path="addCustomer" element={<AddCustomer />} />
            <Route path="overview" element={<Overview />} />
            <Route path="summary" element={<Summary />} />
            <Route path="makeAdmin" element={<MakeAdmin />} />
          </Route>

          {/* <Route path="/students" element={<Students />} />
            <Route path="/foods" element={<Foods />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard/*" element={<Dashboard />} / */}
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
