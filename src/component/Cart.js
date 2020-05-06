import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { add_item } from "../actions/shopping.actions";
import { withStyles } from "@material-ui/core/styles";


const useStyles = (theme) => ({
  table: {
    border: " 0 none",
    width: " 100%",
    maxWidth: " 955px",
    float: "none",
    margin: "0 auto",
  },
  tableTitle: {
    marginTop: "39px",
    marginBottom: "18px",
    color: "#333",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "18px",
    textTransform: "uppercase",
  },
  tableRow: {
    display: "flex",
    backgroundColor: "#f2f2f2",
    fontFamily: "TradeGothicLTW05-BoldNo.2,Arial,sans-serif",
    fontSize: "17px",
    borderTop: "1px solid #666",
    lineHeight: "16px",
    padding: "10px 0",
    whiteSpace: "nowrap",
    textDecoration: "none",
    letterSpacing: " 0.25px",
    verticalAlign: "bottom",
    justifyContent: "space-between",
    color: "#333333",
  },
  tableRowItem: {
    paddingLeft: "64.5px",
    boxSizing: "border-box",
    width: " 400.5px",
    fontWeight: "600",
  },
  tablePrice: {
    paddingLeft: "14.5px",
    boxSizing: "border-box",
    width: "86px",
    fontWeight: "600",
  },
  tableQty: {
    paddingLeft: "14.5px",
    boxSizing: "border-box",
    width: " 242px",
    fontWeight: "600",
  },
  tableTotal: {
    paddingLeft: "14.5px",
    boxSizing: "border-box",
    width: " 167.5px",
    textAlign: "right",
    paddingRight: "20px",
    marginRight: "auto",
    fontWeight: "600",
  },
  rowgroup: {
    borderBottom: "1px solid #666",
    display: "flex",
    flexDirection: "row",
    paddingTop: "20px",
  },

  rowgroupItemImage: {
    width: "180px",
    height: "180px",
    marginTop: "10px",
    textAlign: "center",
    float: "none",
    display: "block",
  },
  rowgroupImageWithDetails: {
    borderTop: "none",
    paddingTop: "18px",
    paddingBottom: "30px",
    minHeight: "192px",
    boxSizing: "border-box",
    borderBottom: "1px solid #666",
    display: "contents",
  },
  rowgroupItemDetails: {
    display: "flex",
    textAlign: "center",
    marginTop: "70px",
    width: " 225.5px",
    fontSize: "20px",
    color:"#666",
  },
  rowgroupItemPrice: {
    textAlign: "center",
    marginTop: "70px",
    fontSize: "20px",
    color:"#666",
  },
  countItemButton: {
    display: "flex",
    flexDirection: "row",
    marginTop: "60px",
    marginLeft: "25px",
  },
  countIncrementItem: {
    height: "40px",
    width: "40px",
    fontSize: "20px",
    cursor: "pointer",
    backgroundColor: "#f2f2f2",
    textAlign: "center",
    borderRadius: "0",
    padding: "0px",
    display: "block",
    float: " left",
    lineHeight: "33px",
    boxSizing: " border-box",
    border: "1px solid #f2f2f2",

    margin: " 0 1px",
  },
  countClicks: {
    height: "40px",
    width: "40px",
    fontSize: "15px",
    backgroundColor: "#f2f2f2",
    borderRadius: "0",
    padding: "0px",
    display: "block",
    float: " left",
    lineHeight: "35px",
    boxSizing: " border-box",
    border: "1px solid #f2f2f2",
    justifyContent: "center",
    margin: " 0 1px",
  },
  countNumber: {
    fontSize: "15px",
    textAlign: "center",
  },
  countDecreaseItem: {
    height: "40px",
    width: "40px",
    fontSize: "25px",
    cursor: "pointer",
    backgroundColor: "#f2f2f2",
    textAlign: "center",
    borderRadius: "0",
    padding: "0px",
    display: "block",
    float: " left",
    lineHeight: "31px",
    boxSizing: " border-box",
    border: "1px solid #f2f2f2",
    margin: " 0 1px",
  },
});

class Cart extends React.Component {
  state = {
    clicks: 1,
    show: true,
  };

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  DecreaseItem = () => {
    this.setState({
      clicks: this.state.clicks > 1 ? this.state.clicks - 1 : this.state.clicks,
    });
  };
  renderImage(imageUrl) {
    const { classes } = this.props;
    console.log("this.state.clicks*imageUrl.textPrice",this.state.clicks*imageUrl.textPrice)
    return (
      <div className={classes.rowgroup}>
        <div className={classes.rowgroupImageWithDetails}>
          <img
            className={classes.rowgroupItemImage}
            src={imageUrl.url}
            alt={imageUrl.text}
          />
          <div className={classes.rowgroupItemDetails}>{imageUrl.text} </div>

          <div className={classes.rowgroupItemPrice}>{imageUrl.textPrice} </div>
          <div className={classes.countItemButton}>
            <div
              className={classes.countDecreaseItem}
              onClick={this.DecreaseItem}
              // style={{ fontSize: "25px" }}
            >
              -
            </div>
            <div className={classes.countClicks}>
              {" "}
              {this.state.show ? (
                <div className={classes.countNumber}>{this.state.clicks}</div>
              ) : (
                ""
              )}
            </div>
            <div
              className={classes.countIncrementItem}
              onClick={this.IncrementItem}
            >
              +
            </div>
          </div>
              <div className={classes.rowgroupItemTotal}>{this.state.clicks*imageUrl.textPrice}</div>
        </div>
      </div>
    );
  }

  render() {
    const { classes } = this.props;
    console.log(this.props.cart);
    return (
      <>
        <div className={classes.table}>
          <div className={classes.tableTitle}>items in shopping bag</div>
          <div className={classes.tableRow}>
            <div className={classes.tableRowItem}>ITEM</div>
            <div className={classes.tablePrice}>PRICE</div>
            <div className={classes.tableQty}>QTY</div>
            <div className={classes.tableTotal}>TOTAL</div>
          </div>
          {this.props.cart.map((img) => this.renderImage(img))}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("cart", state.cart.cart);
  return {
    cart: state.cart.cart,
    count: state.cart.count,
  };
};

export default connect(mapStateToProps)(withStyles(useStyles)(Cart));
