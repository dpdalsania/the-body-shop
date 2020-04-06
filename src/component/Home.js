import React from "react";
import "./Home.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";

// import Card from "@material-ui/core/Card";

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />

        <div class="Container">
          <div class="linkContainer">
            <Link className="firstLinkContainer" to="/BodyCream">
              Body Cream
            </Link>
            <Link className="secondLinkContainer" to="/ShowerGel">
              Shower Gel
            </Link>
            <Link className="thirdLinkContainer" to="/BodyMists">
              Body Mists
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
export default Home;
