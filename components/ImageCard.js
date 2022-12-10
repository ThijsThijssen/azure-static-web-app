import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/system'
import { Collapse } from '@mui/material'

const StyledRoot = styled(Card)({
  maxWidth: 645,
  background: 'rgba(0,0,0,0.5)',
  margin: '2rem',
})

const StyledCardMedia = styled(CardMedia)({
  height: 440,
})

const StyledCardTitle = styled(Typography)({
  fontFamily: 'Nunito',
  fontWeight: 'bold',
  color: '#fff',
  fontSize: '2rem',
})

const StyledCardBody = styled(Typography)({
  fontFamily: 'Nunito',
  color: '#ddd',
  fontSize: '1.1rem',
})

export default function ImageCard({ place, checked }) {
  return (
    <Collapse in={checked} {...(checked ? { timeout: place.timeout } : {})}>
      <StyledRoot>
        <StyledCardMedia
          component="img"
          image={place.imageUrl}
          alt={place.title}
        />
        <CardContent>
          <StyledCardTitle gutterBottom variant="h3" component="div">
            {place.title}
          </StyledCardTitle>
          <StyledCardBody variant="body2">{place.body}</StyledCardBody>
        </CardContent>
      </StyledRoot>
    </Collapse>
  )
}
