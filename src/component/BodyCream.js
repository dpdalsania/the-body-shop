import React from "react";
import { Link } from "react-router-dom";
import "./BodyCream.css";
import creamImage from "../Image/exportImages";
import Modal from "react-awesome-modal";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import { add_item } from "../actions/shopping.actions";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PageHeader from "./PageHeader";

const useStyles = (theme) => ({
  root: {
    marginLeft: 250,
    marginRight: 10,
  },
  button: {
    color: "white",
    backgroundColor: "#333",
    height: "40px",
    width: "120px",
    fontWeight: "400",
    fontSize: "12.5px",
    cursor: "pointer",
    marginTop: "10px",
    letterSpacing: "0.1em",
    borderRadius: "0",
    "&:hover": {
      color: "#333",
      backgroundColor: "white",
    },
  },
  Box: {
    display: "flex",
    flexDirection: "row",
  },
  mainImageText: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "70px",
  },

  mainBoxImage: {
    marginLeft: "0px",
    left: "auto",
    flexDirection: "row",
    color: "#333",
    position: "relative",
    textAlign: "center",
    display: "table-cell",
    verticalAlign: "top",
    lineHeight: "1.2",
  },
  mainImageTextBox: {
    margin: "0 0 2px",
    paddingBottom: "10px",
    color: "#666666",
    fontFamily: "BentonSansLight,Helvetica,Arial,sans-serif",
    fontSize: "28px",
    lineHeight: "28px",
    fontWeight: "100",
    position: "relative",
    letterSpacing: "0.25px",
  },
  mainImageTextPriceBox: {
    color: "#666666",
    fontWeight: "400",
    fontSize: "18px",
    paddingBottom: "10px",
    borderBottom: "1px solid #e5e5e5",
    width: "85%",
  },
  individualImageTop: {
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid #e5e5e5",
    position: "relative",
    padding: "1rem",
    paddingBottom: "5px",
    boxSizing: " border-box",
    fontSize: "22px",
    width: "100%",
  },
  individualImageTopClose: {
    float: "right",
    width: "10%",
    size: "5px",
    cursor: "pointer",
  },
  individualImageTopHeading: {
    width: "90%",
    fontFamily: "BentonSansLight,Helvetica,Arial,sans-serif",
    fontSize: "28px",
    lineHeight: "27px",
    letterSpacing: "0px",
    textTransform: "inherit",
    fontWeight: "100",
    padding: "10px",
    color: "#666666",
  },
  countItemButton: {
    display: "flex",
    flexDirection: "row",
    marginTop: "20px",
  },

  countIncrementItem: {
    height: "50px",
    width: "35px",
    fontWeight: "100",
    fontSize: "28px",
    cursor: "pointer",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    textAlign: "center",
    verticalAlign: " middle",
    borderRadius: "none",
    padding: "0px",
  },
  countClicks: {
    margin: " 0 .9rem",
    width: "38px",
    textAlign: "center",
    fontFamily: "BentonSansBook,Helvetica,Arial,sans-serif",
    fontSize: "15px",
    letterSpacing: ".04em",
    fontWeight: "400",
    marginRight: "0px",
  },
  countDecreaseItem: {
    height: "50px",
    width: "35px",
    padding: "0px",
    fontWeight: "100",
    fontSize: "28px",
    cursor: "pointer",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    textAlign: "center",
    verticalAlign: " middle",
    borderRadius: "none",
    border: " 1px solid #f2f2f2",
  },
  buttonBox: {
    color: "white",
    backgroundColor: "#333",
    height: "50px",
    width: "180px",
    fontWeight: "400",
    fontSize: "13.5px",
    cursor: "pointer",
    marginTop: "10px",
    letterSpacing: "0.2em",
    borderRadius: "0",
    "&:hover": {
      color: "#333",
      backgroundColor: "white",
    },
  },
  description: {
    color: "#666666",
    fontFamily: "BentonSansLight,Helvetica,Arial,sans-serif",
    marginTop: "15px",
    borderTop: "1px solid #e5e5e5",
    paddingBottom: "10px",
    paddingTop: "10px",
    width: "85%",
  },
  descriptionTitle: {
    paddingBottom: "10px",
  },
});

class BodyCream extends React.Component {

state = {
    urls: creamImage,
    selectedImage: {},
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

  openModal(imageUrl) {
    this.setState({
      visible: true,
      selectedImage: imageUrl,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
      selectedImage: {},
    });
  }

  renderImage(imageUrl) {
    const { classes } = this.props;

    return (
      <div className="individualImage">
        <img
          className={classes.individualImage}
          src={imageUrl.url}
          onClick={() => this.openModal(imageUrl)}
          alt={imageUrl.text}
          width="400"
          height="500"
        />
        <div className="imageText">{imageUrl.text} </div>
        <div className="imageTextPrice">{imageUrl.textPrice} </div>
        <Button variant="contained" className={classes.button}>
          ADD TO BAG
        </Button>
      </div>
    );
  }

  // addToBag = () => {
  //   this.props.dispatch(add_item(this.state.selectedImage));
  // };

  render() {
    console.log(this.state.urls);
    const { classes } = this.props;
    return (
      <React.Fragment>
        <>
          <PageHeader />
         <div className="imagesMain">
            <div className="imagesMainSecond">
              {this.state.urls.map((img) => this.renderImage(img))}
            </div>
          </div>
          <Modal
            visible={this.state.visible}
            width="700"
            height="600"
            effect="fadeInUp"
            onClickAway={() => this.closeModal()}
          >
            <div className={classes.individualImageTop}>
              <div className={classes.individualImageTopHeading}>
                {" "}
                Quick View{" "}
              </div>
              <div className={classes.individualImageTopClose}>
                <a href="javascript:void(0)" onClick={() => this.closeModal()}>
                  <CloseIcon style={{ fontSize: "30px" }} />
                </a>
              </div>
            </div>
            <div className={classes.Box}>
              <div className="mainBox">
                <img
                  className={classes.mainBoxImage}
                  src={this.state.selectedImage.url}
                  alt={this.state.selectedImage.text}
                  width="400"
                  height="500"
                />
              </div>
              <div className={classes.mainImageText}>
                <h1 className={classes.mainImageTextBox}>
                  {this.state.selectedImage.text}{" "}
                </h1>
                <div className={classes.mainImageTextPriceBox}>
                  {this.state.selectedImage.textPrice}{" "}
                </div>

                <div className={classes.countItemButton}>
                  <Button
                    className={classes.countIncrementItem}
                    onClick={this.IncrementItem}
                    // style={{ fontSize: "25px" }}
                  >
                    +
                  </Button>
                  <div className={classes.countClicks}>
                    {" "}
                    {this.state.show ? <h2>{this.state.clicks}</h2> : ""}
                  </div>
                  <Button
                    className={classes.countDecreaseItem}
                    onClick={this.DecreaseItem}
                  >
                    -
                  </Button>
                </div>

                <Button
                  // onClick={this.addToBag()}
                  variant="contained"
                  className={classes.buttonBox}
                >
                  ADD TO BAG
                </Button>
                <div className={classes.description}>
                  <div className={classes.descriptionTitle}>FRAGRANCE </div>
                  {this.state.selectedImage.description}
                </div>
              </div>
            </div>
          </Modal>
        </>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(BodyCream);
