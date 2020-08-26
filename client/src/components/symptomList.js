import React, { useState, useEffect, useReducer } from "react";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalStore";
import { SET_SYMPTOMS } from "../utils/actions";
import { Multiselect} from "multiselect-react-dropdown"



export default function Populate() {
    const [options, setOptions] = useState([]);


    useEffect(() => {
        API.getSymptoms().then(response => setOptions(response.data))

    }, [])


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
 
}