import * as React from 'react'
import { Container, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import MediaCard from './MediaCard'
import Image from 'next/image'

const Page = ({ blok }) => {
  return (
    <Container maxWidth="m">
      <Typography variant="h1" gutterBottom>
        {blok.title}
      </Typography>

      <Image src={blok.image.filename} width="500" height="300" alt="" />

      <Typography variant="body1" gutterBottom>
        {blok.description}
      </Typography>

      <Grid container spacing={3}>
        {blok.cards.map((mediaCard) => {
          return (
            <Grid item key={mediaCard.title}>
              <MediaCard blok={mediaCard} />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}

export default Page
