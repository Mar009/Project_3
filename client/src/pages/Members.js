import React from "react"
import { useStoreContext } from '../utils/GlobalStore';
import { Box, Heading } from "rebass";
import HomePgBtn from "../components/HomePgBtn"


function Members(){
    const [state] = useStoreContext();
    const {email} = state;
    return (
      <div>
    <Box
      sx={{
        p: 4,
        color: 'black',
        // bg: '#eee',
        fontFamily: 'body',
        fontWeight: 'body',
        lineHeight: 'body',
        mx: 100,
        my: 70,
        height: 300
      }}>
      <Heading
        sx={{
          textAlign: "center",
        }}>
        WELCOME, {email}!
      </Heading>
      <Box
        sx={{
          textAlign: "center",
          mt: 50
        }}>
      <HomePgBtn name="NEW SYMPTOM"/>
      <HomePgBtn name="YOUR HISTORY"/>

    </Box>
    </Box>
    {/* const {nickname} = state;
    return <div className="container">
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <h2>Welcome {nickname}</h2>
      </div>
    </div> */}
  </div>
  )
  //   <div>
  //     <div className="container">
  //     <div className="row">
  //       <div className="col-md-6 col-md-offset-3">
  //         <h2>Welcome {email}</h2>
  //       </div>
  //     </div>
  //   </div>
  // </div>
}

export default Members;
