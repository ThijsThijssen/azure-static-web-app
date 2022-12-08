import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import CssBaseline from '@mui/material/CssBaseline'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'

function ScrollTop(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    )

    if (anchor) {
      anchor.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      })
    }
  }

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  )
}

export default function BackToTop(props) {
  const scrollToHome = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#home'
    )

    if (anchor) {
      anchor.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      })
    }
  }

  const scrollToAbout = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#about'
    )

    if (anchor) {
      anchor.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      })
    }
  }

  const scrollToContact = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#contact'
    )

    if (anchor) {
      anchor.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      })
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            LasMusicas
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button sx={{ color: '#fff' }} onClick={scrollToHome}>
              Home
            </Button>

            <Button sx={{ color: '#fff' }} onClick={scrollToAbout}>
              About
            </Button>

            <Button sx={{ color: '#fff' }} onClick={scrollToContact}>
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box sx={{ my: 2 }} id="home">
          <Typography variant="h1" component="div">
            Home
          </Typography>
        </Box>
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join('\n')}
        </Box>
        <Box sx={{ my: 2 }} id="about">
          <Typography variant="h1" component="div">
            About
          </Typography>
        </Box>
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join('\n')}
        </Box>
        <Box sx={{ my: 2 }} id="contact">
          <Typography variant="h1" component="div">
            Contact
          </Typography>
        </Box>
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join('\n')}
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  )
}
