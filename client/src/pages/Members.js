import React from "react"
import { useStoreContext } from '../utils/GlobalStore';
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Wrapper from "../components/Wrapper/Wrapper";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MembersHome from "./MembersHome";
import MembersNew from "./MembersNew";
import MembersRemedy from "./MembersRemedy";
import MembersHistory from "./MembersHistory";

function Members(){
    const [state] = useStoreContext();
    const {nickname} = state;
    return (
      <>
        <Navbar />
        <Wrapper>
          <Switch>
            <Route exact path="/members">
              <Header h1="Welcome" />
              <MembersHome />
            </Route>
            <Route exact path="/members/new">
              <Header h1="Search Symptoms" />
              <MembersNew />
            </Route>
            <Route exact path="/members/remedy">
              <Header h1="Get Remedy" />
              <MembersRemedy />
            </Route>
            <Route exact path="/members/history">
              <Header h1="View History" />
              <MembersHistory />
            </Route>
          </Switch>
        </Wrapper>
        <Footer />
      </>
    );
  }

  {/* <div className="container">
  <div className="row">
    <div className="col-md-6 col-md-offset-3">
      <h2>Welcome {nickname}</h2>
    </div>
  </div>
</div> */}
export default Members;
=======
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
      link = "/symptoms" />
      <HomePgBtn name="YOUR HISTORY"
      link = "/history" />

    </Box>
    </Box>
    
  </div>
  )
}

export default Members;
