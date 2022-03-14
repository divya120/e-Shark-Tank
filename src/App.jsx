import './App.css';
import ResponsiveAppBar from './Components/AppBar';
import Box from '@mui/material/Box';
import { Button, Card, Grid, Rating, Typography } from '@mui/material';
import sharkTankBG from './images/sharkTankBG.jpg';
import start from './images/start.jpg';
import { useState } from 'react';
import IdeaDetail from './Components/IdeaDetail'
import Landing from './Components/Landing';
import CreatorProfile from './Components/CreatorProfile';


// Width of the card component 
// Caraousel 
// Styling of components - inline 
const App = () => {


  const [starValue, setStarValue] = useState(3);
  
  return (
    <div className="App" style={{
      backgroundColor: "#15202B",
      color: 'white',
    //  position: "fixed",
    top: 0, bottom: 0, right: 0, left: 0, zIndex: -1}}>
      <ResponsiveAppBar />
      {/* <img src={sharkTankBG} alt="Landing Background" style={{ justifyContent: "center", position: "fixed", top: 0, bottom: 0, right: 0, left: 0, zIndex: -1, maxWidth:"100%" }} /> */}
      {/* <Box> 
        <Typography align="center" variant="h4" sx={{ fontFamily: "Roboto", color: "#fff", marginTop: 10 }}>Come pitch in your ideas, business models and demonstrate your marketing skills</Typography> 
      </Box> */}
      {/* <IdeaDetail /> */}
      <Landing />
      {/* <CreatorProfile /> */}
      {/* <Box>
        <Grid container spacing={5}>
          {[0, 1, 2].map(() => {return (<Grid item xs={3} display="flex" margin="0 auto">
            <Card sx={{ padding: 2, backgroundColor: "#22303C", border: 'solid 1px #2F3336' }}>
              <Box display="flex" flexDirection="column">
                <img src={start} alt="startup" />
                <Typography variant="h5" sx={{color: "#fff"}}>Idea Title</Typography>
                <Typography sx={{color: "#fff"}}>by Owner Name</Typography>
              </Box>
              <Box>
                <Typography variant="body1" sx={{color: "#8899A6"}}> Event Description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio consequuntur deserunt ex voluptatum quasi tempora mollitia, optio doloremque illum veniam fugit in quaerat laborum, quos quibusdam, natus magnam consectetur atque.</Typography>
              </Box>
              <Button variant="contained">Invest</Button>
              <Rating name="simple-controlled"
                value={starValue}
                onChange={(event, newValue) => {
                  setStarValue(newValue);
                }}
              />
            </Card>
          </Grid>)})}
        </Grid>
      </Box> */}
    </div>
  );
}

export default App;
