import React from "react";
import { Flex, Box, Text } from "rebass";

function Table(props) {
    return (
        <div>
        <Box
        sx={{
            mx: 100,
            mt: 10
        }}>
        <Flex flexWrap='wrap' mx={-2} > 
        <Box width={2/6}> 
        <Text fontSize={[ 3, 4, 2 ]} lineHeight={2} p={2} color='#999' bg='#eee'> {props.symptom} </Text> 
        </Box> 
        <Box width={4/6}> 
        <Text fontSize={[ 3, 4, 2 ]} lineHeight={2} p={2} color='#333' bg='#f9f9f9'> {props.dateLogged} </Text> 
        </Box> 
        </Flex>
        </Box>
        </div>
    )
}

export default Table;