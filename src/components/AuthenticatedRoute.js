import { Route, Routes } from "react-router-dom";
import Accounts from "containers/Accounts";
import SingleAccountPage from "containers/SingleAccountPage";
import Properties from "containers/Properties/Properties";
import Dashboard from "containers/Dashboard";


export default function AuthenticatedRoute() {
	return (
	<Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/singleaccount" element={<SingleAccountPage />} />
        <Route path="/properties" element={<Properties />} />      
  </Routes>
  );
}
