import React from "react";
import { Button } from "rebass";

function HomePgBtn(props) {
    return (
        <div>
        <Button
        sx={{
          backgroundColor: "blue",
          p: 30,
          px: 100,
          ':hover': {
            backgroundColor: 'tomato',
          }
      }}>{props.name}</Button>
      <br />
      <br />
      </div>
    )
}
export default HomePgBtn;