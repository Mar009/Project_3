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
        const yourHistory = this.state.historyLogs.map(symptom => <Table symptom={symptom.name} dateLogged={symptom.createdAt} />)
        
        return (
            <div>
                <Heading
                sx={{
                    m: 80,
                    textAlign: "center",
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: 40
                }}>YOUR HISTORY!</Heading>
                
                {yourHistory}
            </div>
        )
    }
    
}

export default TablePage;