import React from "react";
import gql from 'graphql-tag';
import { BarChart } from "react-d3-components";
import { Query } from 'react-apollo';

const STACKED_QUERY = gql `
    query {
        accountBalance{
            bankName,
            balance,
            month,
            accountNumber
        }
    }
`;

const StackedBar = () => {

    const getContent = (banks) => {
      return ( 
        <tr>
            <td data-th="Bank Name">{banks.bankName}</td>
            <td data-th="Accoount Number">{banks.accountNumber}</td>
            <td data-th="Year">{banks.balance}</td>
        </tr>
      );
    }

    return (
        <Query query = { STACKED_QUERY}>
            {({loading, error, data}) => {
                if(loading) return <h4>Loading...</h4>;
                if(error) console.log(error);
                
                if(data){
                    let resData = [
                        {
                            label: "DBS",
                            values: data.accountBalance.filter(x=> x.bankName === "DBS").map( val=>{return { x: val.month, y: val.balance} })
                        },
                        {
                            label: "CBA",
                            values: data.accountBalance.filter(x=> x.bankName === "CBA").map( val=>{return { x: val.month, y: val.balance} })
                        },
                        {
                            label: "ING",
                            values: data.accountBalance.filter(x=> x.bankName === "ING").map( val=>{return { x: val.month, y: val.balance} })
                        },
                        {
                            label: "HDFC",
                            values: data.accountBalance.filter(x=> x.bankName === "HDFC").map( val=>{return { x: val.month, y: val.balance} })
                        }
                    ]

                    let tooltipData = function(x, y0, y, total) {
                        return y.toString();
                        };

                    return(
                        <React.Fragment>
                            <h3 className="heading-main"><center>Account Details</center></h3>
                            <div id ="stackedChart" className="display-container">
                                <div>
                                    <table>
                                        <tr>
                                            <th>Bank Name</th>
                                            <th>Account Number</th>
                                            <th>Balance</th>
                                        </tr>
                                        { data.accountBalance.map(x => getContent(x)) }
                                    </table>
                                </div>
                                <div>
                                    <BarChart data={resData} width={700} height={500} margin={{ top: 10, bottom: 50, left: 50, right: 10 }} tooltipHtml={tooltipData}
                                        tooltipMode={'mouse'}
                                        tooltipContained
                                        xAxis={{innerTickSize: 6, label: "Months"}}
                                        yAxis={{label: "Balance"}}
                                        shapeColor={"red"} />
                                </div>
                            </div>
                        </React.Fragment>
                    );
                }
            }}
        </Query>
    );
}

export default StackedBar;












