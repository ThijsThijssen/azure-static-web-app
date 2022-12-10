import * as React from 'react'
import { styled } from '@mui/system'
import { CssBaseline } from '@mui/material'
import Header from '../components/Header.js'
import PlaceToVisit from '../components/PlaceToVisit.js'

const StyledApp = styled('div')({
  backgroundImage: `url("./bg.jpg")`,
  minHeight: '100vh',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
})

export default function App() {
  return (
    <StyledApp>
      <CssBaseline />
      <Header />
      <PlaceToVisit id="place-to-visit" />
      <PlaceToVisit id="contact" />
    </StyledApp>
  )
}
