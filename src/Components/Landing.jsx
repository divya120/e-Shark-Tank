import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";
import { Link } from "react-router-dom";

const LandingCardComponent = ({value}) => {
  const classes = useStyles();
  return (
    <Box margin={2}>
      <Box>
        <Card
          sx={{
            maxWidth: 300,
            padding: 3,
            backgroundColor: "#192734",
            color: "#fff",
          }}
        >
          <CardMedia
            component="img"
            image={value.url}
            alt="idea"
            height="200"
            width="350"
          ></CardMedia>
          <CardContent>
            <Box>
              <Typography variant="h5" >{value.idea}</Typography>
              <Typography variant="body1">by {value.name}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" className={classes.multiLineEllipsis}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi eveniet sequi nam quo deserunt adipisci ullam maxime
                ducimus tenetur voluptas, eaque, suscipit illum maiores et
                obcaecati eum unde possimus modi consequatur tempora,
                exercitationem dignissimos id! Eius expedita culpa harum
                suscipit accusamus dolores, aspernatur, sint sequi illum,
                delectus sunt perferendis id!
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Button
              sx={{ color: "#fff" }}
              variant="contained"
              endIcon={<ArrowForwardIosIcon />}
            >
              <Link to="about">Know More</Link>
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

const Landing = () => {
  const classes = useStyles();

  const dummyData = [
    {
      name: "Jay Prakash",
      idea: "Ice Popsicles",
      url: "https://cdn.shopify.com/s/files/1/0608/8805/5972/files/Skippi_logo.png?v=1646391995"
    },
    {
      name: "Sinki Sharma",
      idea: "CosIQ Skincare",
      url: "https://brandemic.in/wp-content/uploads/2022/02/Cosiq.webp"
    },
    {
      name: "Dolly Verma",
      idea: "Modular Utility Vehicles",
      url: "https://brandemic.in/wp-content/uploads/2022/02/Revamp-motors.webp"
    },
    {
      name: "Vikram Singh",
      idea: "Smart Helmets",
      url: "https://justtotaltech.com/wp-content/uploads/2021/03/Top-8-Smart-Helmets-of-2021.png"
    },
    {
      name: "Nihar Vira",
      idea: "Quick Fast Foods",
      url: "https://picsum.photos/350/200"
    }
  ];

  return (
    <Box className={classes.root}>
      <ImageList cols={3} container>
        {dummyData.map((value) => {
          return (
            <ImageListItem>
              <LandingCardComponent value={value}/>
            </ImageListItem>
          );
        })}
      </ImageList>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    margin: "0 10%",
  },
  multiLineEllipsis: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 5,
    "-webkit-box-orient": "vertical",
    minHeight: 100,
  },
}));

export default Landing;
