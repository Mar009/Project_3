import React, { useState, useEffect, useReducer } from "react";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalStore";
import { SET_SYMPTOMS } from "../utils/actions";
import { Multiselect} from "multiselect-react-dropdown"



// const ACTIONS = {
//     historyToggled
// }

export default function Populate() {
    const [options, setOptions] = useState([]);

    // const [state, dispatch] = useStoreContext();

    // const [selected, setSelected] = useState();

    useEffect(() => {
        API.getSymptoms().then(response => setOptions(response.data))

    }, [])

   


    // const handleSelect = e => {
    //     e.preventDefault();
       
    // }
    // const [displaySymptom, setdisplaySymptom] = useState(true);
    // const [addedHistory, dispatch] = useReducer(reducer, []);

    // function useReducer(symptomHistory, action) {
    //     switch (action.type) {
    //         //case 1: history is updated with toggled symptoms
    //         case ACTIONS.historyToggled:
    //             return [...state,
    //             {
    //                 id: key,
    //                 name: action.name
    //             }, setdisplaySymptom(false)]
    //         //case 2: symptom is removed/ untoggled from history
    //         // case ACTIONS.historyRemoved:
    //         //     return
    //         //     {console.log("deselected")}
    //         default:
    //             return state;
    //     }

    // }

    // what happens when the add button is clicked
    // function handleAdd(e) {
    //     e.preventDefault();
    //     dispatch({
    //         type: ACTIONS.historyToggled,
    //         payload:
    //         {
    //             name: option.hcText,
    //             id: key
    //         }
    //     })
    // }

    // useEffect(() => {
    //     API.getSymptoms().then((response => {
    //         dispatch({
    //             type: SET_SYMPTOMS,
    //             data: {
    //                 //updating empty array
    //                 symptomLibrary: response.data
    //             }

    //         });
    //         //symptomLibrary is not defined here.. not sure what it does
    //         //this is for api data vv
    //         // console.log(response.data)
    //     }))
    // }, []);






    // const updateSymptomState = () => {
    //     console.log("I'm clicked");
    //     console.log(addedSymptom)
    // };
    //map through all of the data results to add to list
    //     return (
    //         <div>
    // <h3>select a symptom</h3>

    //       <pre>{JSON.stringify(selected)}</pre>
    //       <MultiSelect
    //         options={options}
    //         value={selected}
    //         onChange={setSelected}
    //         labelledBy={"Select"}
    //       />

    //         </div>



    return (
        <>
            <div class="md-col-3">
                <h3>Symptom Selection</h3>
                <div>
                    {/* {options.map(option => {
                        return <pre>{JSON.stringify(option.hcText)}
                            <button key={JSON.stringify(option.hcText)}>add to history</button></pre>
                    })} */}
                    <Multiselect
                    options={options}
                    selectedValues={options.selectedValue}
                    displayValue="hcText"
                    />
                    <button>Add to Symptom History</button>
                </div>
            </div>
        </>
    )
    // <ul>
    //     {
    //         state.symptoms.map(symptom => {
    //             return <li key={symptom.problemID}>{symptom.hcText}
    //                 <span style={{ color: "Tomato" }}>
    //                     <button onClick={handleAdd} >
    //                         added
    //                     </button>
    //                     <button onClick={() => setAddedSymptom({ type: ACTIONS.historyRemoved, index })}>
    //                         removed
    //                     </button>
    //                 </span>
    //             </li>
    //         }
    //         )
    //     }
    // </ul>
    // )
}