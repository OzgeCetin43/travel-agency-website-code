import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";

const Routers = () => {
    return (
        <Routes>
            <Route path="/travel-agency-website/" element={<Home />} />
        </Routes>
    );
}

export default Routers;