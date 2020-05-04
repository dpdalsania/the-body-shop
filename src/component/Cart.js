import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import creamImage from "../Image/exportImages";
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
    textTransform:"uppercase",
   
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
    color: "#737373",
  },
  tableRowItem: {
    paddingLeft: "14.5px",
    boxSizing: "border-box",
    width: " 400.5px",
    fontWeight:"600",
  },
  tablePrice: {
    paddingLeft: "14.5px",
    boxSizing: "border-box",
    width: "86px",
    fontWeight:"600",
  },
  tableQty: {
    paddingLeft: "14.5px",
    boxSizing: "border-box",
    width: " 242px",
    fontWeight:"600",
  },
  tableTotal: {
    paddingLeft: "14.5px",
    boxSizing: "border-box",
    width: " 167.5px",
    textAlign: "right",
    paddingRight: "20px",
    marginRight: "auto",
    fontWeight:"600",
 
  },
  rowgroup:{
    border: "1px solid green",
    display:"flex",
    flexDirection:"row",
  },

  itemImage: {
    border: "1px solid blue",
   width:"154px",
    height: "154px",
    marginTop:"20px",
  },
  rowgroupImageWithDetails:{
    borderTop: "none",
    paddingTop: "20px",
    paddingBottom: "30px",
    minHeight: "192px",
    boxSizing: "border-box",
    borderBottom: "1px solid #666",
    border:"1px solid red",
   
  },

});

class Cart extends React.Component {
  renderImage(imageUrl) {
    const { classes } = this.props;
    return (
      <div className={classes.rowgroup}>
        <div className={classes.rowgroupImageWithDetails}>
        <img
          className={classes.itemImage}
          src={imageUrl.url}
          onClick={() => this.openModal(imageUrl)}
          alt={imageUrl.text}
        
        />
        <div className="imageText">{imageUrl.text} </div>
        <div className="imageTextPrice">{imageUrl.textPrice} </div>
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
            {this.props.cart.map((img) => this.renderImage(img))}
           
          </div>
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
