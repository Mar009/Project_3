import React, { useEffect } from "react";
import API from "./utils/API";
import { useStoreContext } from "./utils/GlobalStore";
import { SET_SYMPTOMS } from "./utils/actions";

function Populate() {
const [state, dispatch] = useStoreContext();
useEffect(() => {
    API.checkSymptoms().then((response => {
        console.log(response.data)
        dispatch({
            type: SET_SYMPTOMS,
            data: {
                //updating empty array
                symptomLibrary: response.data
            }
        })
    }))
}, [])
//map through all of the data results to add to list
return (
<div>
<ul>
 { 
 state.symptoms.map(symptom => {
     return<li>{symptom.hcText}</li>
 }
    )  
    }
</ul>
</div>
)
}

export default Populate;