import React from "react";
import "./Home.css";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import InputBase from "@material-ui/core/InputBase";
// import IconButton from "@material-ui/core/IconButton";
// import SearchIcon from "@material-ui/icons/Search";
// import BackgroundImage from "../Image/BackgroundImage.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 2px",
    display: "flex",
    alignItems: "right",
    width: "250px",
    marginLeft: "50%",
    margin: "20px",
    border: "1.2px solid grey"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: "grey",
    fontSize: "18px"

  },
  iconButton: {
    padding: 10
  },
  headerWrapper: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    width: "100%"
  },
  headerTextWrapper: {
    color: "#005699",
    fontSize: "50px",
    fontFamily: "Playfair Display, serif",
    width: "60%",
    margin: "20px",
    textAlign: "right",
  },
  headerSearchWrapper: {
    margin: "5px",
    width: "40%"
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.headerWrapper}>
        <div className={classes.headerTextWrapper}>The Body Shop</div>
        {/* <div className={classes.headerSearchWrapper}> */}
          {/* <Paper component="form" className={classes.root}>
            <InputBase
              className={classes.input}
              placeholder="Search.."
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper> */}
        {/* </div> */}
      </div>
    </>
  );
}
