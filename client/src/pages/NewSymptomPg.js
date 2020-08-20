import React from "react";
import { Box } from "rebass";
import SymptomQ from "./SymptomQ";

function NewSymptomPg() {
    return (
        <div>
            <Box
            sx={{
                m: 70
            }}>
            <SymptomQ question="Question 1?"/>
            <SymptomQ question="Question 2?"/>
            <SymptomQ question="Question 3?"/>
            <SymptomQ question="Question 4?"/>
            <SymptomQ question="Question 5?"/>
            </Box>
        </div>
    )
}

export default NewSymptomPg;