import { Typography, Box, Avatar, Button } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PercentIcon from "@mui/icons-material/Percent";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import CopyrightIcon from "@mui/icons-material/Copyright";
import ForumIcon from "@mui/icons-material/Forum";
import Chat from "./Chat/Chat";

// https://blog.karenying.com/posts/50-shades-of-dark-mode-gray

const useStyles = makeStyles({
  parentContainer: {
    margin: "0 10%",
    // border: 'solid 2px white',
  },
  ideaDetails: {
    margin: "0 auto",
    padding: "20px 50px",
  },
  chatIcon: {
    float: "right",
    color: "white",
    borderColor: "white",
    "&:hover": {
      borderColor: "gray",
      color: "gray",
    },
  },
  imageContainer: {
    display: "flex",
    margin: "30px 50px",
  },
  expectations: {
    margin: "40px 50px",
  },
  horizontalRule: {
    margin: "0 0",
    border: "solid 1px",
    color: "white",
    width: "50%",
  },
});

const IdeaDetail = () => {
  const classes = useStyles();

  return (
    <Box className={classes.parentContainer}>
      <Box className={classes.imageContainer}>
        <Avatar
          variant="square"
          src="https://picsum.photos/200/300"
          sx={{ width: 300, height: 300 }}
        ></Avatar>
        <Avatar
          variant="square"
          src="https://picsum.photos/200/300"
          sx={{ width: 300, height: 300 }}
        ></Avatar>
      </Box>
      <Box className={classes.ideaDetails}>
        <Typography variant="h4" sx={{ color: "#fff" }}>
          Idea Title
        </Typography>
        <Typography variant="body1" sx={{ color: "#fff" }}>
          by Fr. Dr. John Rose SJ
        </Typography>
        <Box height={20} />
        <Typography
          variant="subtitle1"
          sx={{ color: "#fff" }}
          className={classes.ideaDescription}
        >
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
          minus laborum cum molestias consequatur neque error modi impedit,
          culpa tenetur quibusdam. Possimus ipsum tempore inventore doloremque
          obcaecati quaerat porro labore quia soluta! Eius est deleniti delectus
          excepturi. In nemo ab nulla quaerat officia omnis inventore cumque
          eius rem nesciunt voluptatem delectus, reprehenderit harum ducimus,
          qui nisi perferendis quam commodi. Error illum obcaecati molestiae
          provident animi blanditiis a reiciendis alias assumenda! Repellat
          obcaecati modi distinctio, possimus ad quibusdam aliquid id maiores
          natus ex molestiae dicta odit debitis eligendi, iusto laudantium
          corrupti. Blanditiis eligendi magnam culpa numquam rem, eos adipisci
          vitae ipsa?{" "}
        </Typography>
        <Button
          className={classes.chatIcon}
          variant="outlined"
          startIcon={<ForumIcon />}
          onClick={() => alert("Chat here")}
        >
          Chat
        </Button>
      </Box>
      <Box className={classes.expectations}>
        <hr className={classes.horizontalRule} />
        <Box display="flex">
          <MonetizationOnIcon sx={{ color: "white" }} />
          <Box>
            <Typography sx={{ color: "#fff" }}>Investment</Typography>
            <Typography sx={{ color: "#8899A6" }}>1 Crore</Typography>
          </Box>
        </Box>
        <Box display="flex">
          <PercentIcon sx={{ color: "white" }} />
          <Box>
            <Typography sx={{ color: "#fff" }}>Equity Offered</Typography>
            <Typography sx={{ color: "#8899A6" }}>
              1% in Company Stake
            </Typography>
          </Box>
        </Box>
        <Box display="flex">
          <ShowChartIcon sx={{ color: "white" }} />
          <Box>
            <Typography sx={{ color: "#fff" }}>Valuation</Typography>
            <Typography sx={{ color: "#8899A6" }}>100 Crore</Typography>
          </Box>
        </Box>
        <Box display="flex">
          <CopyrightIcon sx={{ color: "white" }} />
          <Box>
            <Typography sx={{ color: "#fff" }}>Patented Status</Typography>
            <Typography sx={{ color: "#8899A6" }}>Not Patented</Typography>
          </Box>
        </Box>
        <hr className={classes.horizontalRule} />
      </Box>
      <Chat />
    </Box>
  );
};

export default IdeaDetail;
