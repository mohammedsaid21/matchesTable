import { Box, List, Typography, useMediaQuery } from '@mui/material'
import { Stack, width } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Lego from "../../img/lego.png"

const SideInfo = () => {
  const matches = useMediaQuery('(max-width:1000px)');
  const [value, setValue] = useState()

  useEffect(() => {
    if(matches) setValue("none")
    else setValue("flex")
  }, [matches])
  
  return (
    <Box flex="1" display={value} flexDirection="column">
      <List sx={{ background: "#F8F8F8", padding: "2px 2px" }} direction="column">
        {[0,1,2,3,4,5].map((el) => 
            <li key={el} style={{ display: 'flex', alignItems: "center", justifyContent: "start", padding: "8px 5px", width:'80%', borderBottom:"1px solid rgb(225 225 225)" }}>
              <img src={Lego} alt="" width="28px" height="28px" style={{ marginLeft: "10px" }} />
              <Typography variant='h6' style={{fontSize: "15px"}}>الدوري الإنجليزي لكرة القدم</Typography>
            </li>
        )}
      </List>
      <img style={{ marginTop: "25px", objectFit: "contain", width: "300px", height: "600px" }} src="https://via.placeholder.com/300X600/#DFE6FA" alt="" />
    </Box>
  )
}
export default SideInfo