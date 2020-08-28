import React, { Component } from 'react';
import {Box, Heading } from "rebass";
import HomePgBtn from "../components/HomePgBtn";
import { useStoreContext } from '../utils/GlobalStore';



const MembersHome = () => {

  const [state] = useStoreContext();
  const {nickname} = state;

  return ( <>
  
 
  <Box
      sx={{
        p: 4,
        color: 'black',
        bg: '#eee',
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
      link = "/members/new" />
      <HomePgBtn name="YOUR HISTORY"
      link = "/members/history" />

    </Box>
    </Box>
  </>);
}
 
export default MembersHome;