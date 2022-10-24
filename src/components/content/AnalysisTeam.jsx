import { List, Stack, Typography, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState, useEffect } from 'react'

const AnalysisTeam = () => {
  const matches = useMediaQuery('(max-width: 768px)');
  const [value, setValue] = useState()
  const [widthCol, setWidthCol] = useState()

  useEffect(() => {
    if(matches) {
      setValue("column")
      setWidthCol("100%")
    }
    else {
      setValue("row")
      setWidthCol("30%")
    }
  }, [matches])
  return (
    <Box paddingBottom="60px">
      <Typography variant='h5' fontWeight="600" padding="50px 0 0px">جدول الترتيب</Typography>

<Stack display="flex" flexDirection={value}  flexWrap="wrap" justifyContent="space-evenly" alignItems="center">

{/* 1 */}
      <Stack width={widthCol} display="flex" justifyContent="space-between">
        <Typography variant='body1' color="#5D6279" fontWeight="600" padding="40px 0 10px" textAlign="center">الأكثر تسجيل للأهداف</Typography>

        <List style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "rgb(240 240 240)", borderRadius:"7px", width: "100%" }}>
          
          <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "85%",  padding: "7px 20px", borderBottom: "1px solid #E0E0E0" }}>
            <Typography variant='h6'>مانشستر سيتي</Typography>
            <Typography color="#234EC4">20</Typography>
          </li>

          <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "85%",  padding: "7px 20px", borderBottom: "1px solid #E0E0E0" }}>
            <Typography variant='h6'>مانشستر سيتي</Typography>
            <Typography color="#234EC4">20</Typography>
          </li>

          <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "85%",  padding: "7px 20px", borderBottom: "1px solid #E0E0E0" }}>
            <Typography variant='h6'>مانشستر سيتي</Typography>
            <Typography color="#234EC4">20</Typography>
          </li>

          <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "85%",  padding: "7px 20px", borderBottom: "1px solid #E0E0E0" }}>
            <Typography variant='h6'>مانشستر سيتي</Typography>
            <Typography color="#234EC4">20</Typography>
          </li>

          <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "85%",  padding: "7px 20px", borderBottom: "1px solid #E0E0E0" }}>
            <Typography variant='h6'>مانشستر سيتي</Typography>
            <Typography color="#234EC4">20</Typography>
          </li>
          
        </List>
      </Stack>

{/* 2 الأكثر استقبالاً للأهداف */}
      <Stack width={widthCol} display="flex" justifyContent="space-between">
        <Typography variant='body1' color="#5D6279" fontWeight="600" padding="40px 0 10px" textAlign="center">الأكثر استقبالاً للأهداف</Typography>

        <List style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "rgb(240 240 240)", borderRadius:"7px", width: "100%" }}>
          
          <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "85%",  padding: "7px 20px", borderBottom: "1px solid #E0E0E0" }}>
            <Typography variant='h6'>مانشستر سيتي</Typography>
            <Typography color="#234EC4">20</Typography>
          </li>

          <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "85%",  padding: "7px 20px", borderBottom: "1px solid #E0E0E0" }}>
            <Typography variant='h6'>مانشستر سيتي</Typography>
            <Typography color="#234EC4">20</Typography>
          </li>

          <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "85%",  padding: "7px 20px", borderBottom: "1px solid #E0E0E0" }}>
            <Typography variant='h6'>مانشستر سيتي</Typography>
            <Typography color="#234EC4">20</Typography>
          </li>

          <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "85%",  padding: "7px 20px", borderBottom: "1px solid #E0E0E0" }}>
            <Typography variant='h6'>مانشستر سيتي</Typography>
            <Typography color="#234EC4">20</Typography>
          </li>

          <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "85%",  padding: "7px 20px", borderBottom: "1px solid #E0E0E0" }}>
            <Typography variant='h6'>مانشستر سيتي</Typography>
            <Typography color="#234EC4">20</Typography>
          </li>
          
        </List>
      </Stack>

{/* 3 الأكثر تسديدا علي المرمى */}
      <Stack width={widthCol} display="flex" justifyContent="space-between">
        <Typography variant='body1' color="#5D6279" fontWeight="600" padding="40px 0 10px" textAlign="center">الأكثر تسديدا علي المرمى</Typography>

        <List style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "rgb(240 240 240)", borderRadius:"7px", width: "100%" }}>
          
          <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "85%",  padding: "7px 20px", borderBottom: "1px solid #E0E0E0" }}>
            <Typography variant='h6'>مانشستر سيتي</Typography>
            <Typography color="#234EC4">20</Typography>
          </li>

          <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "85%",  padding: "7px 20px", borderBottom: "1px solid #E0E0E0" }}>
            <Typography variant='h6'>مانشستر سيتي</Typography>
            <Typography color="#234EC4">20</Typography>
          </li>

          <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "85%",  padding: "7px 20px", borderBottom: "1px solid #E0E0E0" }}>
            <Typography variant='h6'>مانشستر سيتي</Typography>
            <Typography color="#234EC4">20</Typography>
          </li>

          <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "85%",  padding: "7px 20px", borderBottom: "1px solid #E0E0E0" }}>
            <Typography variant='h6'>مانشستر سيتي</Typography>
            <Typography color="#234EC4">20</Typography>
          </li>

          <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "85%",  padding: "7px 20px", borderBottom: "1px solid #E0E0E0" }}>
            <Typography variant='h6'>مانشستر سيتي</Typography>
            <Typography color="#234EC4">20</Typography>
          </li>
          
        </List>
      </Stack>

{/* 4 الكروت الصفراء */}
      <Stack width={widthCol} display="flex" justifyContent="space-between">
        <Typography variant='body1' color="#5D6279" fontWeight="600" padding="40px 0 10px" textAlign="center">الكروت الصفراء</Typography>

        <List style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "rgb(240 240 240)", borderRadius:"7px", width: "100%" }}>
          
          <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "85%",  padding: "7px 20px", borderBottom: "1px solid #E0E0E0" }}>
            <Typography variant='h6'>مانشستر سيتي</Typography>
            <Typography color="#234EC4">20</Typography>
          </li>

          <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "85%",  padding: "7px 20px", borderBottom: "1px solid #E0E0E0" }}>
            <Typography variant='h6'>مانشستر سيتي</Typography>
            <Typography color="#234EC4">20</Typography>
          </li>

          <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "85%",  padding: "7px 20px", borderBottom: "1px solid #E0E0E0" }}>
            <Typography variant='h6'>مانشستر سيتي</Typography>
            <Typography color="#234EC4">20</Typography>
          </li>

          <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "85%",  padding: "7px 20px", borderBottom: "1px solid #E0E0E0" }}>
            <Typography variant='h6'>مانشستر سيتي</Typography>
            <Typography color="#234EC4">20</Typography>
          </li>

          <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "85%",  padding: "7px 20px", borderBottom: "1px solid #E0E0E0" }}>
            <Typography variant='h6'>مانشستر سيتي</Typography>
            <Typography color="#234EC4">20</Typography>
          </li>
          
        </List>
      </Stack>

{/* 5 الكروت الحمراء */}
      <Stack width={widthCol} display="flex" justifyContent="space-between">
        <Typography variant='body1' color="#5D6279" fontWeight="600" padding="40px 0 10px" textAlign="center">الكروت الحمراء</Typography>

        <List style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "rgb(240 240 240)", borderRadius:"7px", width: "100%" }}>
          
          <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "85%",  padding: "7px 20px", borderBottom: "1px solid #E0E0E0" }}>
            <Typography variant='h6'>مانشستر سيتي</Typography>
            <Typography color="#234EC4">20</Typography>
          </li>

          <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "85%",  padding: "7px 20px", borderBottom: "1px solid #E0E0E0" }}>
            <Typography variant='h6'>مانشستر سيتي</Typography>
            <Typography color="#234EC4">20</Typography>
          </li>

          <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "85%",  padding: "7px 20px", borderBottom: "1px solid #E0E0E0" }}>
            <Typography variant='h6'>مانشستر سيتي</Typography>
            <Typography color="#234EC4">20</Typography>
          </li>

          <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "85%",  padding: "7px 20px", borderBottom: "1px solid #E0E0E0" }}>
            <Typography variant='h6'>مانشستر سيتي</Typography>
            <Typography color="#234EC4">20</Typography>
          </li>

          <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "85%",  padding: "7px 20px", borderBottom: "1px solid #E0E0E0" }}>
            <Typography variant='h6'>مانشستر سيتي</Typography>
            <Typography color="#234EC4">20</Typography>
          </li>
          
        </List>
      </Stack>

    </Stack>

    </Box>
  )
}

export default AnalysisTeam
// #FAFAFA
// background: #234EC4;
