import React, { useState, useRef } from "react";
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
    // const [getSelectedItems] = useRef()

    // useEffect(() => {
    //     API.getSymptoms().then(response => setOptions(response.data))

    // }, [])

    const dataToSend =
    {
        name: "namehere",
        locale: "throat",
        UserId: 2,
        id: 4,
        time: 3
    }

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
        const json = await response.json()
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
                <button >Add to Symptom History</button>

            </Box>


        </div>
    )
}

export default NewSymptomPg;