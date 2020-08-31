import React, { Component } from 'react';
import {Box, Heading } from "rebass";
import HomePgBtn from "../components/HomePgBtn";
import { useStoreContext } from '../utils/GlobalStore';
import Header from "../components/Header/Header";
import "./mhcss.css";

const MembersHome = () => {

  const [state] = useStoreContext();
    const { nickname, email } = state;
    // const greeting = `Welcome, ${nickname}!`;
    const styles = {
      fontSize: 25,
      mt: 20
    }
    return (
      <div>
    <Header h1="NATURE RX"/>
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
          color: "#233d4d",
          fontSize: 32,
          fontFamily: "'Raleway', sans-serif"
        }}>
        <b>Welcome,&nbsp;{nickname}!</b>
        <br />
        {/* <p style={styles} id="spacing"><em>Select from the following to begin.</em></p> */}
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
      <HomePgBtn name="VIEW HISTORY&nbsp;&nbsp;&nbsp;"

      link = "/members/history" />

    </Box>
    </Box>
  </>);
}
 
export default MembersHome;