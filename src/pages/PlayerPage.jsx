import React from "react";
import { Container, Stack } from "@mui/system";

import MainInfo from "../components/content/MainInfo";
import SideInfo from "../components/content/SideInfo";
import SwiperMatches from "../components/content/SwiperMatches";
import TransitionPlayer from "../components/content/TransitionPlayer";

import Player from "../img/player.png"

const PlayerPage = () => {
  return (
    <>
      <Container>
        <SwiperMatches />
      </Container>

      <Container>
        <Stack direction="row" gap="0 10px">
          <SideInfo />
          <MainInfo Image={Player} />
          <TransitionPlayer />
        </Stack>
      </Container>
    </>
  );
};

export default PlayerPage;
