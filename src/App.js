import { Routes, Route } from "react-router-dom";
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Blogs from "./Pages/Blogs/Blogs";
import SignUp from "./Pages/Login/SignUp";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>



      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
