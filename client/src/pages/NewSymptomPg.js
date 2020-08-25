import React from "react";
import { Box } from "rebass";
import SymptomQ from "../components/SymptomQ";
// import useState from "react";

function NewSymptomPg() {
    //const [nameOfSymptom, setNameOfSymptom] = useState("");
    const dataToSend = {name: "pain",
    locale: "knee",
    UserId: 2,
    id: 1, time: 3}

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
            <SymptomQ question="Question 1?"
            postData={postData}
            //nameOfSymptom={nameOfSymptom}
            //setNameOfSymptom={setNameOfSymptom} 
            />
            {/* <SymptomQ question="Question 2?"/>
            <SymptomQ question="Question 3?"/>
            <SymptomQ question="Question 4?"/>
            <SymptomQ question="Question 5?"/> */}
            </Box>
        </div>
    )
}

export default NewSymptomPg;