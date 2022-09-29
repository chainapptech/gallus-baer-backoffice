import { Route, Routes } from "react-router-dom";
import Accounts from "containers/Accounts";
import SingleAccountPage from "containers/Accounts/SingleAccountPage";
import Properties from "containers/Properties";
import Dashboard from "containers/Dashboard";
import SingleProperty from "containers/Properties/SinglePropertyPage";
import Inquiries from "containers/Inqueries/Inquiries";
import SingleInquiryPage from "containers/Inqueries/SingleInquiryPage";
import Invoices from "containers/Invoices";
import CreateNewInvoice from "containers/Invoices/CreateNewInvoice";

export default function AuthenticatedRoute() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/accounts/:id" element={<SingleAccountPage />} />
      <Route path="/inquiries" element={<Inquiries />} />
      <Route path="/single-inquiry" element={<SingleInquiryPage />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/properties/:id" element={<SingleProperty />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/create-new-invoice" element={<CreateNewInvoice />} />
    </Routes>
  );
}
