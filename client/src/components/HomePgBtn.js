import React from "react";
import { Button } from "rebass";
import { Link } from "react-router-dom";

function HomePgBtn(props) {
    return (
      <div>
        <Link to={props.link}>
        <Button
        sx={{
          backgroundColor: "blue",
          p: 30,
          px: 100,
          ':hover': {
            backgroundColor: 'tomato',
          }
      }}>{props.name}</Button>
        </Link>
      <br />
      <br />
      </div>
    )
}
export default HomePgBtn;