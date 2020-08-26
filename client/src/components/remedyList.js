import React, { useState, useEffect } from "react";
import API from "../utils/API";


function Remedies() {
const [remedies, setRemedies] = useState([]);
useEffect(() => {
    API.getFoodGroups().then((response => {
        // const remedies = response;
        setRemedies(response.data)
    }))
}, []);
//map through all of the data results to add to list
return (
<div>
<ul>
 { 
remedies.map(remedy => {
return<li key={remedy.foodGroupID}>{remedy.fgDescription}</li>
 }
    )  
    }
</ul>
</div>
)
}

export default Remedies;