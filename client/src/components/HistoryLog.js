import React from "react";
import { Link, useParams } from "react-router-dom";
import { Flex, Box, Text, Button } from "rebass";
import { useStoreContext } from '../utils/GlobalStore';


function Table(props) {
    const [, dispatch] = useStoreContext();

    return (
        <div>
            <Box
                sx={{
                    mx: 100,
                    mt: 10
                }}>
                <Flex flexWrap='wrap' mx={-2} >
                    <Box width={2 / 6}>
                        <Text fontSize={[3, 4, 2]} lineHeight={2} p={2} color='#999' bg='#eee'> {props.dateLogged} </Text>
                    </Box>
                    <Box width={3 / 6}>
                        <Text fontSize={[3, 4, 2]} lineHeight={2} p={2} color='#333' bg='#f9f9f9'> {props.symptom} </Text>
                    </Box>
                    <Box width={1 / 6}>
                        <Button
                            key={props.problemId}
                            sx={{ backgroundColor: "blue" }}
                            onClick={e => {
                                console.log(props.problemId)

                            }}
                        >
                            <Link to="/members/remedy/">
                                Find Remedy!
                            </Link>
                        </Button>
                    </Box>
                </Flex>
            </Box>
        </div>
    )
}

export default Table;