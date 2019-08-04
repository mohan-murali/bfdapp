
import React, { useState } from "react";
import gql from 'graphql-tag';
import { BarChart } from "react-d3-components";
import { Query } from 'react-apollo';

const GROUPED_QUERY = gql `
    query {
        cashFlow{
        month,
        payable,
        receivable
        }
    }
`;

const GroupedBar =()=> {

    const getContent = (banks) => {
        return ( 
          <tr>
              <td data-th="Month">{banks.month}</td>
              <td data-th="Payable">{banks.payable}</td>
              <td data-th="Receivable">{banks.receivable}</td>
          </tr>
        );
      }
    return (
        <React.Fragment>
            <Query query = { GROUPED_QUERY}>
                {({loading, error, data}) => {
                    if(loading) return <h4>Loading...</h4>;
                    if(error) console.log(error);
                    
                    if(data){
                        let resData = [
                            {
                                label: "payable",
                                values: data.cashFlow.map( val=>{return { x: val.month, y: val.payable} })
                            },
                            {
                                label: "receivable",
                                values: data.cashFlow.map( val=>{return { x: val.month, y: val.receivable} })
                            }
                        ]
                        let tooltipData = function(x, y0, y, total) {
                            return y.toString();
                            };
                            
                        return(
                        <React.Fragment>
                            <h3 className="heading-main"><center>Cashflow</center></h3>
                            <div className="display-container">
                                <table>
                                    <tr>
                                        <th>Month</th>
                                        <th>Payable</th>
                                        <th>Receivable</th>
                                    </tr>
                                    { data.cashFlow.map(x => getContent(x)) }
                                </table>
                                <div id ="groupedChart" className="display-container">
                                <BarChart groupedBars data={resData} width={800} height={400} margin={{ top: 10, bottom: 50, left: 50, right: 10 }} 
                                        tooltipHtml={tooltipData}
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
        </React.Fragment>
    );
}

export default GroupedBar;












