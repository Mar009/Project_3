import React from "react";
import { Button } from "rebass";
import { Link } from "react-router-dom";
import "./home.css"

function HomePgBtn(props) {
    return (
      <div>
        <Link to={props.link}>
        <Button
        sx={{
          backgroundColor: "#fec89a",
          p: 30,
          px: 100,
          border: "1px solid white",
          ':hover': {
            backgroundColor: '#ffd6ba',
            border: "1px solid black"
          }
      }}>{props.name}</Button>
        </Link>
      <br />
      <br />
      </div>
    )
}
export default HomePgBtn;