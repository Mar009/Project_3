import React, { Component } from 'react';
import {Box, Heading } from "rebass";
import HomePgBtn from "../components/HomePgBtn";
import { useStoreContext } from '../utils/GlobalStore';



const MembersHome = () => {

  const [state] = useStoreContext();
    const { nickname, email } = state;

    return (
      <div>
    <Box
      sx={{
        p: 4,
        color: 'black',
        bg: '#FAF9F9',
        fontFamily: 'body',
        fontWeight: 'body',
        lineHeight: 'body',
        mx: 100,
        my: 70,
        height: 400,
        // width: 400,
        borderRadius: 40,
        border: "1px solid #555B6E"
      }}>
      <Heading
        sx={{
          textAlign: "center",
          color: "#233d4d",
          fontSize: 40,
          fontFamily: "'Raleway', sans-serif"
        }}>
        <b>Welcome,&nbsp;{nickname}!</b>
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
      <HomePgBtn name="VIEW HISTORY&nbsp;&nbsp;&nbsp;"
      link = "/history" />

    </Box>
    </Box>
    
  </div>
  )
}
 
export default MembersHome;