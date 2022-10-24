import React from 'react'
import { Container, Stack } from "@mui/system";

import MainContent from "../components/content/MainInfo";
import SideInfo from "../components/content/SideInfo";
import SwiperMatches from "../components/content/SwiperMatches";
import ListPlayers from '../components/content/ListPlayers';


const MatchesPage = () => {
  return (
    <div>
      <Container>
        <SwiperMatches />
      </Container>

      <Container>
        <Stack direction="row" gap="0 10px">
          <SideInfo />
          <MainContent />
          <ListPlayers />
        </Stack>
      </Container>
    </div>
  )
}

export default MatchesPage