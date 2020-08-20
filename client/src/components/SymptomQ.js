import React from "react";
import { Text } from "rebass";
import { Textarea } from '@rebass/forms';

function SymptomQ(props) {
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
            />
            <br />
        </div>
    )
}

export default SymptomQ;