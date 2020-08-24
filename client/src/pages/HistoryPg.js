import React from "react";
import { Heading } from "rebass";
import Table from "../components/HistoryLog";
import axios from "axios";


// var db = require("../../../models/symptoms");

function TablePage() {
    // axios.get("/api/symptom_data", function(req, res) {db.Symptoms.findAll({ where: {name: "fever"}}).then(dbSymptoms => {
    //     console.log(res.JSON({dbSymptoms})
    //     )})})

        // dbSymptoms.symptom.map(symptom =>
        //     <Table symptom={symptom.name} dateLogged={symptom.data} />
        // )
    

    return (
        <div>
            <Heading
            sx={{
                m: 80,
                textAlign: "center"
            }}>YOUR HISTORY!</Heading>
            {/* <Table 
            symptom = "placeholder symptom"
            dateLogged = "placeholder date"
            />
            <Table 
            symptom = "placeholder symptom2"
            dateLogged = "placeholder date2"
            /> */}
            {/* {symptomLog} */}
        </div>
    )
}

export default TablePage;