import * as React from 'react'
import { styled } from '@mui/system'
import {
  AppBar,
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
  fontFamily: 'Nunito',
})

const StyledSortIcon = styled(SortIcon)({
  color: '#FFF',
  fontSize: '3rem',
})

const StyledAppBarTitle = styled(Typography)({
  flexGrow: '1',
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
})

const StyledContainer = styled('div')({
  textAlign: 'center',
})

const StyledExpandMoreIcon = styled(ExpandMoreIcon)({
  color: '#5AFF3D',
  fontSize: '5rem',
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
          <IconButton>
            <StyledSortIcon />
          </IconButton>
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
