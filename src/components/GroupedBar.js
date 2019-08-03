
import React from "react";

import { BarChart } from "react-d3-components";

import axios from 'axios';

class GroupedBar extends React.Component {
    state = {
        data: ""
    }

    componentDidMount () {
        const url =
        'https://jsonplaceholder.typicode.com/users';
        // in axios access data with .data
        axios.get(url).then(response => {
            console.log(response.data);
            let resData = [
            {
                label: "payable",
                values:[{x:'jan',y:2100},{x:'feb',y:4500},{x:'mar',y:3100},{x:'apr',y:1500}]
            },
            {
                label: "receivable",
                values:[{x:'jan',y:1200},{x:'feb',y:5040},{x:'mar',y:1030},{x:'apr',y:5000}]
            }
            ];
            this.setState({
                data: resData,
                loading: 
                false
            });
        }).catch(error=> { console.log(error);});
    }

    render(){
    return (
    <React.Fragment>
        {this.state.data &&
            <BarChart groupedBars data={this.state.data} width={400} height={400} margin={{ top: 10, bottom: 50, left: 50, right: 10 }} />
        }
    </React.Fragment>
    );}

}

export default GroupedBar;












