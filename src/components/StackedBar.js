
import React from "react";
import { BarChart } from "react-d3-components";
import axios from 'axios';

class StackedBar extends React.Component {
    state = {
        data: ""
    }

    componentDidMount () {
        const url = 'https://jsonplaceholder.typicode.com/users';
        axios.get(url).then(response => {
            console.log(response.data);
            let resData = [
            {
                label: "hdfc",
                values:[{x:'jan',y:2100},{x:'feb',y:4500},{x:'mar',y:3100},{x:'apr',y:1500}]

            },
            {
                label: "sbi",
                values:[{x:'jan',y:1200},{x:'feb',y:5040},{x:'mar',y:1030},{x:'apr',y:5000}]

            },
            {
                label: "indian",
                values:[{x:'jan',y:3100},{x:'feb',y:2300},{x:'mar',y:1600},{x:'apr',y:5000}]
            },
            ];
            this.setState({
                data: resData,
                loading: 
                false
            });

        }).catch(error => {
            console.log(error);
        });
    }

    getContent = (banks) => {
      return ( 
        <tr>
            <td data-th="Bank Name">{banks.bankName}</td>
            <td data-th="Accoount Number">{banks.accountNumber}</td>
            <td data-th="Year">{banks.balance}</td>
        </tr>
      );
    }
    render(){
        return (
        <React.Fragment>
            <table>
                <tr>
                    <th>Bank Name</th>
                    <th>Account Number</th>
                    <th>Balance</th>
                </tr>
                {this.state.data &&
                    this.state.data.map(x => this.getContent(x))
                }
            </table>
            {this.state.data &&
                <BarChart data={this.state.data} width={400} height={400} margin={{
                    top: 10,
                    bottom: 50,
                    left: 50,
                    right: 10 
                    }}
                />
            }
        </React.Fragment>
        );
    }
}

export default StackedBar;












