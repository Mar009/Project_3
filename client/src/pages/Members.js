import React from "react"
import { useStoreContext } from '../utils/GlobalStore';
import { Box, Heading } from "rebass";
import HomePgBtn from "../components/HomePgBtn"


function Members(){
    const [state] = useStoreContext();
    const { nickname } = state;

    return (
      <div>
    <Box
      sx={{
        p: 4,
        color: 'black',
        bg: '#89b0ae',
        fontFamily: 'body',
        fontWeight: 'body',
        lineHeight: 'body',
        mx: 100,
        my: 70,
        height: 400,
        // width: 400,
        borderRadius: 40
      }}>
      <Heading
        sx={{
          textAlign: "center",
          color: "whitesmoke",
          fontSize: 32
        }}>
        WELCOME, {nickname}!
      </Heading>
      <Box
        sx={{
          textAlign: "center",
          mt: 50,
          mx: 0,
          boxSizing: "border-box",
        }}>
      <HomePgBtn name="NEW SYMPTOM"
      link = "/symptoms" />
      <HomePgBtn name="YOUR HISTORY"
      link = "/history" />

    </Box>
    </Box>
    
  </div>
  )
}

export default Members;
