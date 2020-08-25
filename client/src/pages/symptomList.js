import React, { useState, useEffect, useReducer } from "react";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalStore";
import { SET_SYMPTOMS } from "../utils/actions";
import SearchBox from "../components/searchBox";
import MultiSelect from "react-multi-select-component";

const ACTIONS = {
    historyAdded: "added",
    historyRemoved: "removed"
}

function Populate() {

    const [state, dispatch] = useStoreContext();
    const [selected, setSelected] = useState([]);
    // const [displaySymptom, setdisplaySymptom] = useState(true);
    // function useReducer(symptomHistory, action) {
    //     switch (action.type) {
    //         //case 1: history is updated with symptoms
    //         case ACTIONS.historyAdded:
    //             return [...state,
    //             {
    //                 id: key,
    //                 name: action.name
    //             }, setdisplaySymptom(false)]
    //         //case 2: symptom is removed/ untoggled from history
    //         case ACTIONS.historyRemoved:
    //             return
    //             {console.log("deselected")}
    //         default:
    //             return state;
    //     }

    // }

    //what happens when the add button is clicked
    // function handleAdd(e) {
    //     e.preventDefault();
    //     dispatch({
    //         type: ACTIONS.historyAdded,
    //         payload:
    //         {
    //             name: name,
    //             id: key
    //         }
    //     })
    // }
    const [search, setSearch] = useState("");

    useEffect(() => {
        API.getSymptoms(search).then((response => {
            dispatch({
                type: SET_SYMPTOMS,
                data: {
                    //updating empty array
                    symptomLibrary: response.data
                }
            });
            //symptomLibrary is not defined here.. not sure what it does
            //this is for api data vv
            // console.log(response.data)
        }))
    }, []);
    const handleInputChange = event => {
        setSearch(event.target.value);
    };

    

    // const updateSymptomState = () => {
    //     console.log("I'm clicked");
    //     console.log(addedSymptom)
    // };
    //map through all of the data results to add to list
    return (
        <div>
          
            {console.log(state.symptom.hcText)}
            <h1>Select Symptoms to add to history</h1>
            <pre>{JSON.stringify(selected)}</pre>
            <MultiSelect
                options = {state.symptoms}
                value = {selected}
                onChange = {setSelected}
                labelledBy = {"Select Symptoms"}
                />
            </div>






            // <ul>
            //     {
            //         state.symptoms.map(symptom => {
            //             return <li key={symptom.problemID}>{symptom.hcText}
            //                 <span style={{ color: "Tomato" }}>
            //                     <button onClick={handleAdd} >
            //                         added
            //                     </button>
            //                     <button onClick={() => setAddedSymptom({ type: "removed", index })}>
            //                         removed
            //                     </button>
            //                 </span>
            //             </li>
            //         }
            //         )
            //     }
            // </ul>
    )
}

export default Populate;