import { useContext, createContext, useState } from "react";
const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [selectedTabProperties, setSelectedTabProperties] =
    useState("approved");

  return (
    <AppContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        selectedTabProperties,
        setSelectedTabProperties,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
