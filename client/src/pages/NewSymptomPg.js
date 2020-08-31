import React, { useState, useRef, useEffect } from "react";
import { Box } from "rebass";
import Populate from "../components/symptomList";
import API from "../utils/API";
import { Button, Alert } from 'react-bootstrap';
import Header from "../components/Header/Header";







function NewSymptomPg() {

    const [options, setOptions] = useState([]);
    const selectedSymptoms = useRef(options.selectedValue);
    // const updateDBVars = useRef();
    const [symptomToDB, setSymptomToDB] = useState("symptom")
    const [probIdToDB, setProbIdToDB] = useState("problemId")
    const today = new Date()
    const time = today.getHours() + ":" + today.getMinutes()
    const [showMsg, setShowMsg] = useState(false)



    useEffect(() => {
        API.getSymptoms().then(response => setOptions(response.data))

    }, [])

    function handleChange() {
        setSymptomToDB(selectedSymptoms.current.state.selectedValues[0].hcText);
        setProbIdToDB(selectedSymptoms.current.state.selectedValues[0].problemID);


    }

    const dataToSend =
    {
        symptom: symptomToDB,
        problemId: probIdToDB,
        time: today
    };






    const postData = async (e) => {


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



    return (
        <div>

        <Header h1="NEW SYMPTOM" />

            <Box
                sx={{
                    m: 70
                }}>
                <Populate
                    options={options}
                    selectedSymptoms={selectedSymptoms}
                    handleChange={handleChange}

                />
                <button
                    onClick={(e) => {
                        postData(e)
                    
                    }}>
                    Add to Symptom History
                </button>

                {/* <Alert showMsg={showMsg} variant="success">
                    <Alert.Heading>Symptom Successfully Added</Alert.Heading>
              
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => setShowMsg(false)} variant="outline-success">
                            Close me y'all!
          </Button>
                    </div>
                </Alert>

                {!showMsg && <Button onClick={() => setShowMsg(true)}>Show Alert</Button>} */}


            </Box>


        </div>
    )
}

export default NewSymptomPg;