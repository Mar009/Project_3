import React from "react";
import { Heading } from "rebass";
import Table from "../components/HistoryLog";


class TablePage extends React.Component {
    constructor () {
        super();
        this.state = {
            isLoading: false, 
            historyLogs: []
        }

    }
    
    componentDidMount() {
        this.setState({isLoading: true})
        fetch("/api/symptom_data")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    isLoading: false,
                    historyLogs: data
                })
            })
    }


    render() {
        console.log(this.state)
        const yourHistory = this.state.historyLogs.map(symptom => <Table symptom={symptom.name} dateLogged={symptom.createdAt} />)
  

        return (
            <div>
                {this.state.isLoading
                ? "LOADING..."
                : 
                <Heading
                sx={{
                    m: 80,
                    textAlign: "center",
                    color: "#233d4d",
                    fontSize: 25
                }}><em>YOUR HISTORY!</em></Heading>
            }
                {yourHistory}
                
            </div>
        )
    }
    
}

export default TablePage;