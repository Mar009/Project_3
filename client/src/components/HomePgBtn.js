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
          backgroundColor: "#bee3db",
          p: 30,
          px: 100,
          ':hover': {
            backgroundColor: '#ffd6ba',
          }
      }}>{props.name}</Button>
        </Link>
      <br />
      <br />
      </div>
    )
}
export default HomePgBtn;