import React from "react";
import ReactDOM from "react-dom";
import "./stylesheet/style.css";
import App from "./App";
import Error from "./Components/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Home from "./Components/Home";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/app" element={<App />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);
