import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Multiselect } from "multiselect-react-dropdown";


export default function Remedies(props) {
    const [remedies, setRemedies] = useState([]);
    const {selectedRemedy} = props;

    useEffect(() => {
        API.getFoodGroups().then(response => 
            // const remedies = response;
            setRemedies(response.data))
    }, [])
    //map through all of the data results to add to list
    return (
        <>
        <div>
 
            <Multiselect
                options={remedies}
                selectedValues={remedies.selectedValue}
                displayValue="fgDescription"
                id="foodGroupID"
                closeIcon="cancel"
                singleSelect={true}
                // onSelect = {handleChange}
                ref={selectedRemedy}

            />
          
        </div>
        </>
    )
}
           {/* <ul>
 { 
remedies.map(remedy => {
return<li key={remedy.foodGroupID}>{remedy.fgDescription}</li>
 }
    )  
    }
</ul> */}