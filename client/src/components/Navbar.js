import React, { useEffect }from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { useStoreContext } from '../utils/GlobalStore';
import API from '../utils/API';
import { AUTH_SET_LOGGED_IN, AUTH_SET_LOGGED_OUT } from "../utils/actions";
import NewSymptomPg from "../pages/NewSymptomPg";
import HistoryPg from "../pages/HistoryPg";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Members from "../pages/Members";
import { Box } from "rebass";

function Navbar() {
    const [state, dispatch] = useStoreContext();
    useEffect(() => {
        // Try getting our user-data, if the user is logged in, we will update our GlobalStore to refelct that
        API.checkUserInfo().then(response => {
            const { nickname, email } = response.data;
            dispatch({
                type: AUTH_SET_LOGGED_IN,
                data: {
                    nickname, email
                }
            })
        }).catch(err => {
            // Not able to be logged in, leave us logged out
            console.log("error", err);
            dispatch({
                type: AUTH_SET_LOGGED_OUT
            })
        })
    }, []);

    const logout = () => {
        API.logout().then(() => {
            dispatch({
                type: AUTH_SET_LOGGED_OUT
            })
        })
    }

    return (
        <div>
        <Box
        sx={{
            backgroundColor: "#ccc",
            border: "1px solid black"
        }}>
        <div>
            {!state.userLoggedIn ? (
                // if the user is Logged out
                    <>
                        <b>&nbsp;&nbsp;Welcome Guest!</b> &nbsp;&nbsp;&nbsp;
                        <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
                    </>
                ) : (
                // If the user is Logged In
                    <>
                        <b>&nbsp;&nbsp;Welcome {state.email}!</b> &nbsp;&nbsp;&nbsp;
                        <Link to="/members">Home</Link> | <Link to="/symptoms">New Symptom</Link> | <Link to="/history">Your History</Link> | <a onClick={() => logout() }href="#">Logout</a> |
                        </>
                    )
                }
            </div>
            </Box>
            <Switch>
            {
                
                !state.userLoggedIn ? (
                    // These routes are only avaialable to LOGGED OUT users
                    <>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={Signup} />
                    </>
                ) : (
                    // These routes are only available to LOGGED IN users
                    <>
                        <Route exact path={["/login","/signup"]}>
                            {/* If you are logged in, going to the login/signup page will take you to the members page */}
                            <Redirect to="/members" />
                        </Route>
                        <Route exact path="/members" component={Members} />
                        <Route exact path="/symptoms" component={NewSymptomPg} />
                        <Route exact path="/history" component={HistoryPg} />

                    </>
                    )
            }
            {
                /* These routes are ALWAYS available */
            }
            <Route>
                { /*If none of the other pages match, redirect them to the main page */}
                <Redirect to="/" />
            </Route>
        </Switch>
        </div>
    )
}

export default Navbar;