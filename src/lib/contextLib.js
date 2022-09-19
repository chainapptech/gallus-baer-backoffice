import { useContext, createContext, useState } from "react";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <AppContext.Provider
      value={{
        authenticated,
        setAuthenticated,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
