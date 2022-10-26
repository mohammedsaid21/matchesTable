import { Box, List, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import PersonPinCircleOutlinedIcon from "@mui/icons-material/PersonPinCircleOutlined";

import TableData from '../content/TableDate';


const MainContent = ({ Player }) => {
  const matches = useMediaQuery("(max-width:768px)");

  const [valueDisplay, setValueDisplay] = useState();

  useEffect(() => {
    if (matches) setValueDisplay(`50%`)
    else setValueDisplay(`20%`)
  }, [matches]);

  return (
    <Box flex="2.7">
      <Box className="player">
      <Stack color="#fff">
        <img src="https://via.placeholder.com/70" width={valueDisplay === '20%' ? "70px" : "40px" } alt="" />
        <Typography variant="h5" fontSize={valueDisplay === '20%' ? "1.5rem" : "1rem" }>كريستيانو رونالدو</Typography>
        <Stack
          width="96%"
          paddingTop={valueDisplay === '20%' ? "60px" : "5px" }
          margin="0 auto"
          direction="row"
          position="relative"
          flexWrap={valueDisplay === '20%' ? "nowrap" : "wrap" }
          justifyContent="space-between"
          fontSize={valueDisplay === '20%' ? "1.1rem" : ".75rem" }
        >
          <Box width={valueDisplay} display="flex" alignItems="center">
            <EmojiFlagsIcon fontSize="20px" style={{ margin:"-10px 0 0 6px", color:"#d2d2d2"  }} />
            <Typography variant="p">مانشستر يونايتد</Typography>
          </Box>

          <Box width={valueDisplay} display="flex" alignItems="center">
            <LanguageOutlinedIcon fontSize="20px" style={{ margin:"-10px 0 0 6px", color:"#d2d2d2"  }} />
            <Typography variant="p">البرتغال</Typography>
          </Box>

          <Box width={valueDisplay} display="flex" alignItems="center">
            <ArrowUpwardOutlinedIcon fontSize="20px" style={{ margin:"-10px 0 0 6px", color:"#d2d2d2"  }} />
            <Typography variant="p"> العمر:37 سنة </Typography>
          </Box>

          <Box width={valueDisplay} display="flex" alignItems="center">
            <PersonPinCircleOutlinedIcon fontSize="20px" style={{ margin:"-10px 0 0 6px", color:"#d2d2d2"  }} />
            <Typography variant="p">المركز: مهاجم</Typography>
          </Box>
        </Stack>
      </Stack>
      </Box>

      <TableData  />
      
    </Box>
  );
};

export default MainContent;
