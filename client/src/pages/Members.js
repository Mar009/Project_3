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
// import MembersHistory from "./MembersHistory";
function Members(){
    const [state] = useStoreContext();
    const {nickname} = state;
    return (
      <>
        <Router>
          <Navbar />
          <Header />
          <Wrapper>
            <Switch>
              <Route exact path="/members" component={MembersHome} />
              <Route exact path="/members/new" component={MembersNew} />
              <Route exact path="/members/remedy" component={MembersRemedy} />
              {/* <Route exact path="/members/history" component={MembersHistory} /> */}
            </Switch>
          </Wrapper>
          <Footer />
        </Router>
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