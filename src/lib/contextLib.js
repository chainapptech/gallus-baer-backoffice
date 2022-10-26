import { useContext, createContext, useState } from "react";
const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [selectedTabProperties, setSelectedTabProperties] = useState(
    "approved-properties"
  );
  const [selectedTabInquiries, setSelectedTabInquiries] =
    useState("new-inquiries");
  const [selectedTabInvoices, setSelectedTabInvoices] =
    useState("new-properties");

  return (
    <AppContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        selectedTabProperties,
        setSelectedTabProperties,
        selectedTabInquiries,
        setSelectedTabInquiries,
        selectedTabInvoices,
        setSelectedTabInvoices,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
