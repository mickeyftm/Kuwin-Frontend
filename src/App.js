import React, { createRef, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { changa, changaOne } from "./Theme";
import Header from "./components/Header/Header";
import Home from "./Pages/Home";
import Footer from "./components/Footer/Footer";

const mytheme = createTheme({
  overrides: {
    typography: {
      fontFamily: ["Changa, ChangaOne"].join(","),
    },
    MuiCssBaseline: {
      "@global": {
        "@font-face": [changa, changaOne],
        "*": {
          "scrollbar-width": "thin",
        },
        "*::-webkit-scrollbar": {
          width: "4px",
          height: "4px",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "transparent",
        },
      },
    },
  },
});

const App = () => {
  const [refs, setRefs] = useState({
    Tokenomics: createRef(),
    HowTo: createRef(),
    About: createRef(),
    Lotteryboard: createRef(),
  });

  const [userWallet, setUserWallet] = useState(0);
  const [userBalance, setUserBalance] = useState(0);

  return (
    <ThemeProvider theme={mytheme}>
      <CssBaseline>
        <div
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #FFFFFF 0.01%, #FFC700 97.92%)",
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <Header
            {...{
              userWallet,
              setUserWallet,
              userBalance,
              setUserBalance,
              refs,
            }}
          />
          <Home
            {...{
              userWallet,
              setUserWallet,
              userBalance,
              setUserBalance,
              refs,
            }}
          />
          <Footer />
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
