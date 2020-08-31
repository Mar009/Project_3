import React from "react";
import { Heading } from "rebass";
import Table from "./HistoryLog";

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
                <Heading
                sx={{
                    m: 80,
                    textAlign: "center"
                }}>YOUR HISTORY!</Heading>
                
                {yourHistory}
            </div>
        )
    }
    
}

export default TablePage;