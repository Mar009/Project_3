import React from "react";
import { Button } from "rebass";

function HomePgBtn(props) {
    return (
        <div>
        <Button
        sx={{
          backgroundColor: "#bee3db",
          p: 30,
          px: 100,
          ':hover': {
            backgroundColor: '#ffd6ba',
          }
      }}>{props.name}</Button>
      <br />
      <br />
      </div>
    )
}
export default HomePgBtn;