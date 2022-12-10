import * as React from 'react'
import { styled } from '@mui/system'
import ImageCard from './ImageCard'
import places from '../static/places'
import useWindowPosition from '../hooks/useWindowPosition'

const StyledRoot = styled('div')({
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export default function PlaceToVisit() {
  const checked = useWindowPosition('header')
  return (
    <StyledRoot id="place-to-visit">
      <ImageCard place={places[0]} checked={checked} />
      <ImageCard place={places[1]} checked={checked} />
    </StyledRoot>
  )
}
