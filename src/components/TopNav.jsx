import { Image } from '@mui/icons-material'
import { Button } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import MenuImage from "../img/Icon feather-menu.png"
import Sport from "../img/Sport.png"
import GroupI from "../img/Group 3794.png"
import styled from '@emotion/styled'

const StackTopBar = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 230px;
  padding: 10px 0;
`

const TopNav = () => {
  return (
    <Box paddingTop={3}>
      <StackTopBar>
        <img src={MenuImage} alt=""  />
        <img width={120} src={Sport} alt=""  />
        <img src={GroupI} width={40} alt="" />
      </StackTopBar>
      
    </Box>
  )
}

export default TopNav