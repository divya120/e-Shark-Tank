import './App.css';
import ResponsiveAppBar from './Components/AppBar';
import Box from '@mui/material/Box';
import { Button, Card, Grid, Rating, Typography } from '@mui/material';
import sharkTankBG from './images/sharkTankBG.jpg';
import start from './images/start.jpg';
import { useState } from 'react';


// Width of the card component 
// Caraousel 
// Styling of components - inline 
const App = () => {


  const [starValue, setStarValue] = useState(3);
  
  return (
    <div className="App">
      <ResponsiveAppBar />
      <img src={sharkTankBG} alt="Landing Background" style={{ justifyContent: "center", position: "fixed", top: 0, bottom: 0, right: 0, left: 0, zIndex: -1, }} />
      <Box> <Typography align="center" variant="h4" sx={{ fontFamily: "Roboto", color: "#483492", marginTop: 10 }}>Come pitch in your ideas, business models and demonstrate your marketing skills</Typography> </Box>
      <Box>
        <Grid container spacing={5}>
          <Grid item xs={3}>
            <Card raised={true} sx={{ padding: 2 }}>
              <Box display="flex" flexDirection="column">
                <img src={start} alt="Startup Image" />
                <Typography variant="h5">Idea Title</Typography>
                <Typography>by Owner Name</Typography>
              </Box>
              <Box>
                <Typography variant="body1"> Event Description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio consequuntur deserunt ex voluptatum quasi tempora mollitia, optio doloremque illum veniam fugit in quaerat laborum, quos quibusdam, natus magnam consectetur atque.</Typography>
              </Box>
              <Button variant="contained">Invest</Button>
              <Rating name="simple-controlled"
                value={starValue}
                // onChange={(event, newValue) => {
                //   setValue(newValue);
                // }}
              />
            </Card>
          </Grid>
        </Grid>

      </Box>

    </div>
  );
}

export default App;
