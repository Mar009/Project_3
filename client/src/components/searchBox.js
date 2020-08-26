import React, { createContext, useReducer, useContext } from "react";



function SearchBox(props) {
    return (
        <form>
            <div>
                <label htmlFor="search">Find Symptom</label>

                <input
                    name="search"
                    type="text"
                    value={props.search}
                    onChange={props.handleInputChange}
                    placeholder="Search for sypmtom here"
                    id="search-box"
                />
            </div>
        </form>
    );
}

export default SearchBox;