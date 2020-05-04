import React from "react";
import { Link } from "react-router-dom";
import "./BodyCream.css";
import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { connect } from "react-redux";
import { get_Number } from "../actions/shopping.actions";
import {Cart}from "./Cart";
import Badge from "@material-ui/core/Badge";



const useStyles = (theme) => ({
  root: {
    padding: "2px 2px",
    display: "flex",
    alignItems: "right",
    width: "250px",
    marginLeft: "50%",
    margin: "20px",
    border: "1.2px solid grey",
  },
  linkMainSearch: {
    display: "flex",
    alignItems: "right",
    width: "220px",
    border: "0.2px solid grey",
    height: "40px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: "grey",
    fontSize: "18px",
  },
  iconButton: {
    padding: 10,
  },
  linkMainHeader: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    width: "100%",
    borderBottom: "3px solid #f2f2f2",
    paddingBottom: "5px",
  },
  shoppingCart: {
    backgroundColor: "transparent",
    fontFamily: "Trade Gothic W01 Bold_2,Arial,sans-serif",
    fontSize: " .875rem",
    lineHeight: "18px",
    height: "36px",
    position: " absolute",
    right: "50px",
    textAlign: "center",
    top: "15px",
    width: "50px",
  },

  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
});

class PageHeader extends React.Component {
  render() {
    const { classes } = this.props;
    console.log("count final", this.props.count);

    return (
      <>
        <div className="linkMain">
          <div className={classes.linkMainHeader}>
            <div className="linkMainFirst">
              <Link to="/">HOME</Link>
              <Link to="/BodyCream">BODY CREAM</Link>
              <Link to="/ShowerGel">SHOWER GEL</Link>
              <Link to="/BodyMists">BODY MISTS</Link>
            </div>
            <div className={classes.linkMainSearch}>
              <InputBase
                className={classes.input}
                placeholder="Search.."
                inputProps={{ "aria-label": "search google maps" }}
                input
                type="text"
              />

              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </div>
            <Link to="/Cart">
            <div className={classes.shoppingCart}>
              <Badge badgeContent={this.props.count} color="primary">
               <ShoppingCartOutlinedIcon style={{ fontSize: "30px" }} 
                />
              </Badge>
            </div></Link>
          </div>
          <div className="pageTitle">
            <h1>
              <span className="pageTitleBodyCream">Select Body Cream</span>
            </h1>
            <span className="pageTitleBodyCreamNumber">21 Items</span>
          </div>
        </div>
      </>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    count: state.cart.count,
  };
};

export default connect(mapStateToProps, { get_Number })(
  withStyles(useStyles)(PageHeader)
);
