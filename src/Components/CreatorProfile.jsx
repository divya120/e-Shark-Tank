import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';

const CreatorProfile = () => {
    const classes = useStyles();
  return (
    <Box>
        <Box className={classes.details}>
            <Avatar src="https://picsum.photos/350/200" sx={{width: 300, height: 300}} />
            <Typography margin="auto" variant='h4'>Creator Name</Typography>
        </Box>
    </Box>
  )
}

const useStyles = makeStyles (() => ({
    details: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 100,
        width: 'fit-content',
    },
}))

export default CreatorProfile