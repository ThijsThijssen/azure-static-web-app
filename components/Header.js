import * as React from 'react'
import { styled } from '@mui/system'
import {
  AppBar,
  Button,
  Collapse,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import SortIcon from '@mui/icons-material/Sort'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link as Scroll } from 'react-scroll'

const StyledAppBar = styled(AppBar)({
  background: 'none',
})

const StyledSortIcon = styled(SortIcon)({
  color: '#FFF',
  fontSize: '3rem',
})

const StyledAppBarTitle = styled(Typography)({
  flexGrow: '1',
  fontFamily: 'Nunito',
})

const StyledAppBarWrapper = styled(Toolbar)({
  width: '80%',
  margin: '0 auto',
})

const StyledColorText = styled('span')({
  color: '#5AFF3D',
})

const StyledRoot = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
})

const StyledCenterText = styled(Typography)({
  color: '#FFF',
  fontSize: '5rem',
  fontFamily: 'Nunito',
})

const StyledContainer = styled('div')({
  textAlign: 'center',
})

export const StyledExpandMoreIcon = styled(ExpandMoreIcon)({
  color: '#5AFF3D',
  fontSize: '5rem',
})

const StyledMenuButton = styled(Button)({
  color: '#fff',
  fontSize: '2rem',
  marginLeft: '20px',
  fontFamily: 'Nunito',
})

export default function Header() {
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setChecked(true)
  }, [setChecked])
  return (
    <StyledRoot id="header">
      <StyledAppBar elevation={0}>
        <StyledAppBarWrapper>
          <StyledAppBarTitle variant="h2">
            My<StyledColorText>Island.</StyledColorText>
          </StyledAppBarTitle>
          <Scroll to="header" smooth={true}>
            <StyledMenuButton>Home</StyledMenuButton>
          </Scroll>
          <Scroll to="place-to-visit" smooth={true}>
            <StyledMenuButton>About</StyledMenuButton>
          </Scroll>
          <Scroll to="contact" smooth={true}>
            <StyledMenuButton>Contact</StyledMenuButton>
          </Scroll>
        </StyledAppBarWrapper>
      </StyledAppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedSize={15}
      >
        <StyledContainer>
          <StyledCenterText>
            Welcome to <br /> My <StyledColorText>Island.</StyledColorText>
          </StyledCenterText>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <StyledExpandMoreIcon />
            </IconButton>
          </Scroll>
        </StyledContainer>
      </Collapse>
    </StyledRoot>
  )
}
