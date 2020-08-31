import React, { useState, useEffect, useRef } from "react";
import { useStoreContext } from "../utils/GlobalStore";
import { SET_SYMPTOMS } from "../utils/actions";
import { Multiselect} from "multiselect-react-dropdown"



export default function Populate(props) {

    const { options, selectedSymptoms, handleChange }= props;



    return (
        <>
            <div class="md-col-3">
               
                <div>
                
                    <Multiselect
                        options={options}
                        selectedValues={options.selectedValue}
                        displayValue="hcText"
                        id="problemID"
                        closeIcon="cancel"
                        ref={selectedSymptoms}
                        selectionLimit={1}
                        onSelect= {handleChange}

              
                 />

                    
                </div>
            </div>
        </>
    )
 
}