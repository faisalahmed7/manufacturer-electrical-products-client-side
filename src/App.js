import { Routes, Route } from "react-router-dom";
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Blogs from "./Pages/Blogs/Blogs";
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import Products from "./Pages/Home/Products";
import SingleProductId from "./Pages/Home/SingleProductId";

function App() {
  return (
    <div className="max-w-7xl mx-auto ">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/purchase/:id" element={<RequireAuth><SingleProductId></SingleProductId></RequireAuth>}></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>



      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
