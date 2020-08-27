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
               
                <div>
                
                    <Multiselect
                        options={options}
                        selectedValues={options.selectedValue}
                        displayValue="hcText"
                        id="problemID"
                        closeIcon="cancel"
                    
                 />
                    
                </div>
            </div>
        </>
    )
 
}