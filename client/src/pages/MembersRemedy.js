import React, { useRef, useState } from "react";
import Remedies from "../components/remedyList";

import API from "../utils/API"
import { Link, useParams } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import { Box } from "rebass";


import {Link, useParams} from "react-router-dom";


function MembersRemedy(props) {
  const {problemID} = useParams();


function MembersRemedy(...props) {
  const { problemId, symptom } = useParams(props);
  const [results, setResults] = useState([]);
  const selectedRemedy = useRef();

  const getRemedies = async (e) => {

    console.log(problemId)
    API.getRemedies().then(response => setResults(response.data))


  }





  return (<>

    <div>
      {/* Selected Symptom:{symptom} ID:{problemId} */}
    </div>
    <Remedies


   <Header h1="REMEDIES"/>
   {/* <Remedies/>
   </>)
 }; */}

<Box
                sx={{
                    m: 70
                }}>
  <div>
   
  </div>
      <Remedies 

    />
    <button
      onClick={(e) => {
        // console.log(selectedRemedy.current.state.selectedValues[0].foodGroupID)
        getRemedies(e)
        console.log(results)

      }}
    >
      Find Natural Remedy
                </button>
                </Box>



    <div>

      {results.length ? (
    <ul>
    { 
   results.map(remedy => {
   return <li key={remedy.fiDisplay}>{remedy.fiDisplay}</li>
    }
       )  
       }
   </ul> 
            ) : (
              <h3>No Results</h3>
            )}
  

    </div>



  </>)
};

                



export default MembersRemedy;
