import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Navbar from "./components/Navbar";

function App() {

    return (

        <Router>
            <div>
                <Navbar />
            </div>
        </Router>
    );
}

export default App;
