import React, { createContext, useReducer, useContext } from "react";
import { AUTH_SET_LOGGED_OUT, AUTH_SET_LOGGED_IN } from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

// This is a PURE function that takes in an action and creates the next state
// whenever a new action is "dispatched", the GlobalStore will update and the whole application will re-render.
const reducer = (state, action) => {
    switch(action.type){
        case AUTH_SET_LOGGED_IN:
            return {
                ...state,
                userLoggedIn: true,
                email: action.data.email
            }
        case AUTH_SET_LOGGED_OUT:
            return {
                ...state,
                userLoggedIn: false,
                email: ""
            }
        default:
            return state;
    }
}

// Setup the provider component for our apps store
const StoreProvider = ({value, ...props}) => {
    // What the react app view model starts as
    const initialState = value || {
        userLoggedIn: false,
        email: ""
    };
    const [state, dispatch] = useReducer(reducer, initialState)
    window.dispatch = dispatch;
    return <Provider value={[state, dispatch]} {...props} />
}

// Create a custom hook for using our GlobalStore so the components don't have to hand implement theme
const useStoreContext = () => {
    return useContext(StoreContext);
}

export { StoreProvider, useStoreContext };