import { useContext, createContext } from "react";

// interface ContextType {
//   state?: any;
//   dispatch?: any;
// }

export const AppContext = createContext(null);

export function useAppContext() {
  return useContext(AppContext);
}