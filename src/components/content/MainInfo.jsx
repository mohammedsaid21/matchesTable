import { Box, List, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import AnalysisTeam from "./AnalysisTeam";
import MatchesTable from "./MatchesTable";
import TableArangeTeams from "./TableArangeTeams";


const MainInfo = ({ Player }) => {
  const matches = useMediaQuery("(max-width:450px)");
  const [value, setValue] = useState();

  useEffect(() => {
    if (matches) setValue("30px");
    else setValue("60px");
  }, [matches]);

  return (
    <Box flex="3.1">
      <Box className="player">
        <Stack color="#fff">
          <img src="https://via.placeholder.com/70" alt="" />
          <Typography variant="h5">الدوري الممتاز</Typography>
          <Stack
            width="96%"
            paddingTop={value}
            margin="0 auto"
            direction="row"
            position="relative"
            justifyContent="center"
          >

            <Box width="30%" display="flex" alignItems="center" justifyContent="center">
              <Typography variant="body2">المدرب: اولي جانر سولشاير</Typography>
            </Box>

          </Stack>
        </Stack>
      </Box>

      <MatchesTable />

      <TableArangeTeams />

      <AnalysisTeam />

    </Box>
  );
};

export default MainInfo;
