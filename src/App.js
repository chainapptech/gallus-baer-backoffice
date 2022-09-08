import { useState, useEffect } from "react";
import { AppContextProvider } from "lib/contextLib";
import { Auth } from "aws-amplify";
import GlobalWrapper from "components/GlobalWrapper";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
    <AppContextProvider>
      <GlobalWrapper />
    </AppContextProvider>
  );
}

export default App;
