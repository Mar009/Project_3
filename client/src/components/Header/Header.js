import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="jumbotron jumbotron-fluid" id="headerWrapper">
      <div className="container">
        {/* Display headings(1-4) to make heading stand out */}
        <h1 className="display-4 headerFont" id="headerFont">
          {props.h1}
        </h1>
        {/* Make a paragraph stand out by adding .lead */}
        <p className="lead headerFont" id="headerPFont">
          {props.p}
        </p>
      </div>
    </div>
  );
}

export default Header;
