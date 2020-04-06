import React from "react";
import { Link } from "react-router-dom";
import "./BodyCream.css";
import showergel from "../Image/exportshowergel";
import Modal from "react-awesome-modal";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const useStyles = theme => ({
  root: {
    marginLeft: 250,
    marginRight: 10
  },
  button: {
    color: "white",
    backgroundColor: "#333",
    height: "40px",
    width: "120px",
    fontWeight: "400",
    fontSize: "12.5px",
    cursor: "pointer",
    marginTop:"10px",
    letterSpacing: "0.1em",
    borderRadius: "0",
    "&:hover": {
      color: "#333",
      backgroundColor: "white"
  }
  },
 
});

class ShowerGel extends React.Component {
  state = {
    urls: showergel,
    selectedImage: {}
  };
  openModal(imageUrl) {
    this.setState({
      visible: true,
      selectedImage: imageUrl
    });
  }
  closeModal() {
    this.setState({
      visible: false,
      selectedImage: {}
    });
  }

  renderImage(imageUrl) {
    const { classes } = this.props;
    return (
      <div className="individualImage">
        <img src={imageUrl.url} 
        onClick={() => this.openModal(imageUrl)}
        alt={imageUrl.text} 
        width="400" 
        height="500" />
        <div className="imageText">{imageUrl.text}</div>
        <div className="imageTextPrice">{imageUrl.textPrice} </div>
        <Button variant="contained" className={classes.button} > 
          ADD TO BAG
        </Button>
      </div>
    );
  }
  render() {
    console.log(this.state.urls);
    return (
      <React.Fragment>
        <div className="linkMain">
          <div className="linkMainFirst">
            <Link to="/">HOME</Link>
            <Link to="/BodyCream">BODY CREAM</Link>
            <Link to="/ShowerGel">SHOWER GEL</Link>
            <Link to="/BodyMists">BODY MISTS</Link>
          </div>
          <div className="pageTitle">
            <h1>
              <span className="pageTitleBodyCream">Select Shower Gel</span>
              </h1>
            <span className="pageTitleBodyCreamNumber">21 Items</span>
          </div>
          <div className="imagesMain">
            <div className="imagesMainSecond">
              {this.state.urls.map(img => this.renderImage(img))}
            </div>
          </div>
        </div>
        <Modal
            visible={this.state.visible}
            width="600"
            height="600"
            effect="fadeInUp"
            onClickAway={() => this.closeModal()}
          >
            <div>
              {/* <h1>Body Cream</h1> */}
              <div className="boxImage">
                <img
                  src={this.state.selectedImage.url}
                  alt={this.state.selectedImage.text}
                  width="600"
                  height="600"
                />
                <div className="imageText">
                  {this.state.selectedImage.text}{" "}
                </div>
              </div>
              <a href="javascript:void(0)" onClick={() => this.closeModal()}>
                Close
              </a>
            </div>
          </Modal>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(ShowerGel);
