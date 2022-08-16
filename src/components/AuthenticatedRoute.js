// import React from "react";
import { Route, Routes } from "react-router-dom";
import Accounts from "containers/Accounts";
import SingleAccountPage from "containers/SingleAccountPage";


export default function AuthenticatedRoute() {
	return (
	<Routes>
        <Route path="/" element={<Accounts />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/singleaccount" element={<SingleAccountPage />} />
        {/*<R oute path="/accounts" element={<Accounts />} />
        <Route path="/inquiries" element={<Inquiries />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/singleuser" element={<SingleUser />} />
        <Route path="/singleproperty" element={<SingleProperty />} />
        <Route path="/singleportal" element={<SinglePortal />} />
        <Route path="/propertyinquiries" element={<PropertyInquiries />} />  */}
    </Routes>
	);
  }