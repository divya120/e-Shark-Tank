import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const LandingCardComponent = () => {
  return (
    <Box margin={2}>
        <Box>
            <Card sx={{maxWidth: 300, padding: 3}}>
                <CardMedia component="img" image="https://picsum.photos/350/200" alt="idea-image" height="200" width="350"></CardMedia>
                <CardContent>
                    <Box>
                        <Typography variant='h5'>Card component</Typography>
                        <Typography variant='body1'>by creator name</Typography>
                    </Box>
                    <Box sx={{height: 100, textOverflow:'ellipsis', overflow: 'hidden', maxWidth: 200}}>
                        <Typography variant="body2" noWrap={true} sx={{textOverflow:'ellipsis', overflow: 'hidden',}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eveniet sequi nam quo deserunt adipisci ullam maxime ducimus tenetur voluptas, eaque, suscipit illum maiores et obcaecati eum unde possimus modi consequatur tempora, exercitationem dignissimos id! Eius expedita culpa harum suscipit accusamus dolores, aspernatur, sint sequi illum, delectus sunt perferendis id!</Typography>
                    </Box>
                </CardContent>
                <CardActions>
                    <Button>See more</Button>
                </CardActions>
            </Card>
        </Box>
    </Box>
  )
}

const Landing = () => {
    return (
        <Grid container margin='auto' maxWidth='1320px'>
            <Grid item display='flex'>
                {[0, 1, 2, 3, 4].map((value) => {
                    return <LandingCardComponent />
                })}
            </Grid>
        </Grid>
    )
}

const useStyles = makeStyles(() => ({
}))

export default Landing;