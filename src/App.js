import { useState, useEffect } from "react";
import { AppContext } from "./lib/contextLib";
import { Auth } from "aws-amplify";
import GlobalWrapper from "components/GlobalWrapper";

function App() {
  // const [isAuthenticating, setIsAuthenticating] = useState(true);
  // const [isAuthenticated, userHasAuthenticated] = useState(false);
  // useEffect(() => {
  //   onLoad();
  // }, []);

  // async function onLoad() {
  //   try {
  //     await Auth.currentSession();
  //     userHasAuthenticated(true);
  //   } catch (e) {
  //     if (e !== "No current user") {
  //       alert(e);
  //     }
  //   }

  //   //setIsAuthenticating(false);
  // }
  return (
    <AppContext.Provider value={{}}>
      <GlobalWrapper />
    </AppContext.Provider>
  );
}

export default App;
