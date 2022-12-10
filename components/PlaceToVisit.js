import * as React from 'react'
import { styled } from '@mui/system'
import ImageCard from './ImageCard'
import places from '../static/places'
import useWindowPosition from '../hooks/useWindowPosition'

const StyledCardWrapper = styled('div')({
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  minHeight: '100vh',
})

export default function PlaceToVisit({ id }) {
  const checked = useWindowPosition('header')
  return (
    <StyledCardWrapper id={id}>
      <ImageCard place={places[0]} checked={checked} />
      <ImageCard place={places[1]} checked={checked} />
    </StyledCardWrapper>
  )
}
