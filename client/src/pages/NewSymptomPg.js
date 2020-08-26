import React, {useState, useEffect} from "react";
import { Box } from "rebass";
import SymptomQ from "../components/SymptomQ";
import API from "../utils/API";
import Populate from "../components/symptomList";
import { Multiselect} from "multiselect-react-dropdown";



function NewSymptomPg() {
    //const [nameOfSymptom, setNameOfSymptom] = useState("");
    const dataToSend = {name: "soreness",
    locale: "throat",
    UserId: 2,
    id: 4, time: 3}

    //logic for symptom list
    const [options, setOptions] = useState([]);
    useEffect(() => {
        API.getSymptoms().then(response => setOptions(response.data))

    }, [])

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
            <Populate/>

            </Box>
        </div>
    )
}

export default NewSymptomPg;