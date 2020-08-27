import React, { useState, useRef, useEffect } from "react";
import { Box } from "rebass";
import SymptomQ from "../components/SymptomQ";
import API from "../utils/API";
import Populate from "../components/symptomList";
import { Multiselect } from "multiselect-react-dropdown";
import StoreProvider from "../utils/GlobalStore";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";




function NewSymptomPg() {


    //logic for symptom list
    // const [options, setOptions] = useState([]);
   

    const dataToSend =
    {
        symptom: "symptom",
        problemId: "problemID",
        time: 3,
    };

    const newSymptoms = useRef(dataToSend);

    useEffect(() => {
       newSymptoms.current = dataToSend.symptom

    });

    const postData = async (e) => {
        console.log("testing")
        console.log(e)
        const response = await fetch(`/api/symptom_data`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(dataToSend)
        });
        const json = await response.text()
        console.log(json);
    }
    console.log("what is postdata", postData);

    return (
        <div>
                
            
            <Box
                sx={{
                    m: 70
                }}>
                <Populate 
               
                />
                <button
                onClick={(e) => postData(e)}>Add to Symptom History</button>
                {/* <button onClick = {(e) => console.log()}>button</button> */}

            </Box>


        </div>
    )
}

export default NewSymptomPg;