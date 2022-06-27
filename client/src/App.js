import React from "react";
import {
  Route,
  Routes,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Singup from "./pages/Auth/Signup";
import Singin from "./pages/Auth/Signin";
import Products from "./pages/Products";
import { Divider } from '@chakra-ui/react'





export default function BasicExample() {
  return (
    <BrowserRouter>
      <div>

        <Navbar />

        

        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/register" element={<Singin />} />
          <Route exact path="/login" element={<Singup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


