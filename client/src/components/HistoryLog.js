import React from "react";
import { Flex, Box, Text, Button } from "rebass";

function Table(props) {
    return (
        <div>
        <Box
        sx={{
            mx: 100,
            mt: 10
        }}>
        <Flex flexWrap='wrap' mx={-2} > 
        <Box width={2/6}
        sx={{
            border: "1px solid #ccc"
        }}> 
        <Text fontSize={[ 3, 4, 2 ]} lineHeight={2} p={2} color='#999' bg='#eee'> {props.dateLogged} </Text> 
        </Box> 
        <Box width={3/6} 
        sx={{
            borderTop: "1px solid #ccc",
            borderRight: "1px solid #ccc",
            borderBottom: "1px solid #ccc"
        }}>
        <Text fontSize={[ 3, 4, 2 ]} lineHeight={2} p={2} color='#333' bg='#f9f9f9'> {props.symptom} </Text> 
        </Box>
        <Box width={1/6}>
            <Button sx={{
            backgroundColor: "blue",
            ml: 2,
            p: 15
        }}>Find Remedy!</Button>
        </Box> 
        </Flex>
        </Box>
        </div>
    )
}

export default Table;