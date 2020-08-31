import React from "react";
import { Heading } from "rebass";
import Table from "./HistoryLog";
import Header from "../components/Header/Header";


class TablePage extends React.Component {
    constructor () {
        super();
        this.state = {
            historyLogs: []
        }

    }
    
    componentDidMount() {
        fetch("/api/symptom_data")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    historyLogs: data
                })
            })
    }


    render() {
        console.log(this.state)
        const yourHistory = this.state.historyLogs.map(symptom => 
        <Table 
        symptom={symptom.symptom} 
        dateLogged={symptom.createdAt} 
        problemID={symptom.problemId}
        />)
        
        return (
            <div>
                <Header h1="HISTORY" />
                
                {yourHistory}
            </div>
        )
    }
    
}

export default TablePage;