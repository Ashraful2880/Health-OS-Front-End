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
