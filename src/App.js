import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Shared/Navbar/Header";
import Footer from "./Components/Shared/Footer/Footer";
import Home from "./Components/Pages/Home/Home";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Blogs from "./Components/Pages/Blogs/Blogs";
import Contact from "./Components/Pages/Contact/Contact";

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
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
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
