import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About/About";
import DestinationsDetail from "../pages/DestinationsDetail/DestinationsDetail";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

const Routers = () => {
    return (
        <Routes>
            <Route path="/travel-agency-website/" element={<Home />} />
            <Route path="/travel-agency-website/destinations-detail" element={<DestinationsDetail />} />
            <Route path="/travel-agency-website/about" element={<About />} />
            <Route path="/travel-agency-website/login" element={<Login />} />
        </Routes>
    );
}

export default Routers;