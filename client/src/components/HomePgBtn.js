import React from "react";
import { Button } from "rebass";
import { Link } from "react-router-dom";

function HomePgBtn(props) {
    return (
      <div>
        <Link to={props.link}>
        <Button
        sx={{
          backgroundColor: "#BEE3DB",
          fontFamily: "'Raleway', sans-serif",
          p: 30,
          px: 100,
          border: "1px solid whitesmoke",
          ':hover': {
            backgroundColor: '#ffd6ba',
            border: "1px solid #335c67",
            color: "black",
            
          }
      }}>{props.name}</Button>
        </Link>
      <br />
      <br />
      </div>
    )
}
export default HomePgBtn;