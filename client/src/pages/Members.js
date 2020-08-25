import React from "react"
import { useStoreContext } from '../utils/GlobalStore';
import { Box, Heading } from "rebass";
import HomePgBtn from "../components/HomePgBtn";
import "../components/home.css";



function Members(){
    const [state] = useStoreContext();
    const { nickname, email } = state;

    return (
      <div>
    <Box
      sx={{
        p: 4,
        color: 'black',
        bg: '#98c1d9',
        fontFamily: 'body',
        fontWeight: 'body',
        lineHeight: 'body',
        mx: 100,
        my: 70,
        height: 400,
        // width: 400,
        borderRadius: 40,
        border: "1px solid #335c67"
      }}>
      <Heading
        sx={{
          textAlign: "center",
          color: "#233d4d",
          fontSize: 32
        }}>
        <b>WELCOME,&nbsp;{nickname}!</b>
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
