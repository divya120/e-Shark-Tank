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

const LandingCardComponent = () => {
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
            image="https://picsum.photos/350/200"
            alt="idea-image"
            height="200"
            width="350"
          ></CardMedia>
          <CardContent>
            <Box>
              <Typography variant="h5">Card component</Typography>
              <Typography variant="body1">by creator name</Typography>
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
  return (
    <Box className={classes.root}>
      <ImageList cols={3} container>
        {[0, 1, 2, 3, 4].map((value) => {
          return (
            <ImageListItem>
              <LandingCardComponent />
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
