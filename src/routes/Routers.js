import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

const Routers = () => {
    return (
        <Routes>
            <Route path="/travel-agency-website/" element={<Home />} />
            <Route path="/travel-agency-website/login" element={<Login />} />
        </Routes>
    );
}

export default Routers;