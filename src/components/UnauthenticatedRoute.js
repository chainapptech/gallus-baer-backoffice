// import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "containers/Login/Login";

export default function UnathenticatedRoute() {
	return (
	<Routes>
        <Route path="/login" element={<Login />} />
    </Routes>
	);
    }