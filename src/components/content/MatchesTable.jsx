import React, { useEffect, useState } from "react";
import { Typography, useMediaQuery } from "@mui/material";
import { Box, Stack } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";

import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import Madrid from "../../img/madrid.png";

const MatchesTable = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const matches = useMediaQuery("(max-width:450px)");
  // const [value, setValue] = useState();

  // useEffect(() => {
  //   if (matches) setValue(true);
  //   else setValue(false);
  // }, [matches]);


  return (
    <>
      <Stack style={{ padding: "40px 30px 15px" }} direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">مباريات</Typography>
        <Box sx={{ width: '120px' }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">كل المباريات</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>كل المباريات</MenuItem>
            </Select>
          </FormControl>
        </Box>
    </Stack>
    {/*  */}

    {
      [0,1,2,3,4,5,6,7].map((el) => (
      <Stack style={{ borderBottom: "1px solid #eee", height: "80px" }} direction="row" justifyContent="space-between" alignItems="center" padding={matches ? "5px 10px" : "15px 30px" } key={el}>
        <Typography variant="body2" fontSize={matches ? "0.5rem" : "0.875rem"}>2022/08/30</Typography>

        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between"  height={matches ? "auto" : "90%" }>
          <img width="34px" height="34px" src={Madrid} style={{ objectFit: "contain" }} alt="" />
          <Typography fontSize={matches ? "0.75rem" : "0.1rem"}>ريال مدريد</Typography>
        </Box>

        <Stack direction="column" justifyContent="space-between"  height={matches ? "auto" : "90%" }>
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="baseline"  width={matches ? "50px" : "100px" }>
            <Typography variant="h4" fontWeight="500">3</Typography>
            <Typography variant="h4" fontWeight="500">:</Typography>
            <Typography variant="h4" fontWeight="500">1</Typography>
          </Box>
          <Typography textAlign="center">21:00</Typography>
        </Stack>

        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between"  height={matches ? "auto" : "90%" }>
          <img width={matches ? "28px" : "34px" } height="34px" src={Madrid} style={{ objectFit: "contain" }} alt="" />
          <Typography fontSize={matches ? "0.75rem" : "0.1rem"}>ريال مدريد</Typography>
        </Box>

        <Link href="#" color="inherit" style={{ display:"flex", alignItems:"center" }} className="link-">
          صفحة المباراة
          <ArrowBackIosOutlinedIcon fontSize="small" style={{ marginRight: "10px" }}  />
        </Link>
      </Stack>
      ))
    }

    </>
  );
};

export default MatchesTable;
