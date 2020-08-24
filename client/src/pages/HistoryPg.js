import React from "react";
import { Heading } from "rebass";
import Table from "../components/HistoryLog"

function TablePage() {
    return (
        <div>
            <Heading
            sx={{
                m: 80,
                textAlign: "center"
            }}>YOUR HISTORY!</Heading>
            <Table 
            symptom = "placeholder symptom"
            dateLogged = "placeholder date"
            />
            <Table 
            symptom = "placeholder symptom2"
            dateLogged = "placeholder date2"
            />
        </div>
    )
}

export default TablePage;