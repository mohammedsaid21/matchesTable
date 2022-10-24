import { Stack, Typography, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import TopNav from "./components/TopNav";
import MatchesPage from "./pages/MatchesPage";
import PlayerPage from "./pages/PlayerPage";


function App() {
  const matches = useMediaQuery('(max-width:1000px)');
  const [mobileBar, setMobileBar] = useState(true);
  
  return (
    <>
      {
        matches ?
          <NavbarMobile mobileBar={mobileBar}  setMobileBar={setMobileBar} />
        :
        <>
          <Container>
            <TopNav />
            <Navbar />
          </Container>
        </>
      }

      {/* <PlayerPage /> */}

      <MatchesPage />

      <Footer />
      </>
  );
}

export default App;

