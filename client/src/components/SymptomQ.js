import React from "react";
import { Text, Button } from "rebass";
import { Textarea } from '@rebass/forms';

function SymptomQ(props) {
    console.log(props.postData)
    console.log("what is props", props)
    return (
        <div>
            <Text
            sx={{
                textAlign: "center"
            }}>{props.question}</Text>
            <br />
            <Textarea
            sx={{
                maxWidth: 500,
                display: "block",
                mx: "auto"
            }}
                id='comment'
                name='comment'
                //value={props.nameOfSymptom}
                //onChange={props.setNameOfSymptom}
            />
            <button
                onClick={(e) => props.postData(e)}>post!</button>
            <br />
        </div>
    )
}

export default SymptomQ;