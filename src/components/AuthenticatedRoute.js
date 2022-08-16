import { Route, Routes } from "react-router-dom";

import Dashboard from "containers/Dashboard/Dashboard";
import Properties from "containers/Properties/Properties";

export default function AuthenticatedRoute() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/properties" element={<Properties />} />
      {/* <Route path="/accounts" element={<Accounts />} />
        <Route path="/inquiries" element={<Inquiries />} />        
        <Route path="/singleuser" element={<SingleUser />} />
        <Route path="/singleproperty" element={<SingleProperty />} />
        <Route path="/singleportal" element={<SinglePortal />} />
        <Route path="/propertyinquiries" element={<PropertyInquiries />} />  */}
    </Routes>
  );
}
