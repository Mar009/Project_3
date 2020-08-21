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
        bg: '#faf9f9',
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
          color: "#555b6e"
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
      <HomePgBtn name="NEW SYMPTOM"/>
      <HomePgBtn name="YOUR HISTORY"/>

    </Box>
    </Box>
    
  </div>
  )
}

export default Members;
