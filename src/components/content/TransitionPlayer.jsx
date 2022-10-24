import { Box, Divider, List, Typography, useMediaQuery } from "@mui/material";
import Madrid from "../../img/madrid.png";
import React, { useEffect, useState } from "react";

import Tab from "@mui/material/Tab";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";


const TransitionPlayer = () => {
  const matches = useMediaQuery("(max-width:1000px)");

  const [valueDisplay, setValueDisplay] = useState();

  useEffect(() => {
    if (matches) setValueDisplay("none")
    else setValueDisplay("flex")
  }, [matches]);

  const [value, setValue] = React.useState("2");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <Box flex="1.3" display={valueDisplay} flexDirection="column">
      <List
        sx={{ background: "#F8F8F8", padding: "5px 10px" }}
        direction="column"
      >
        <Typography>حراسة المرمى</Typography>
        {[0, 1, 2, 3, 4, 5].map((el) => (
          <li
            key={el}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 5px",
              width: "96%",
              borderBottom: "1px solid rgb(225 225 225)",
            }}
          >
            <img
              src={Madrid}
              alt=""
              width="28px"
              height="28px"
              style={{ objectFit: "contain" }}
            />
            <Typography marginLeft="2px" variant="caption">
              مانشستر يونايتد
            </Typography>
            <Typography variant="caption" color="red">
              انتقال
            </Typography>
            <Typography variant="caption">2021-08-28</Typography>
          </li>
        ))}
      </List>

      
    </Box>
  );
};

export default TransitionPlayer;
