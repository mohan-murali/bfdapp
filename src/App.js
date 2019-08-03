
import React from 'react';
import './App.css';
import StackedBar from './components/StackedBar';
import GroupedBar from './components/GroupedBar';

const App = () => {
  return (
    <div className="app-container">
      <table>
      <tr>
        <td colSpan="3"><h3><center>Digital Team</center></h3></td></tr>
      <tr>
        <td class="rwd-table">
          <h3><center>Business Finance Dashboard</center></h3>
          <div id ="stackedChart">
            <StackedBar/>
          </div>
        </td>
      <td class="emptybox">&nbsp;</td>
      <td class="rwd-table">
      <h3><center>Cashflow Dashboard</center></h3>
      <table>
        <tr>
          <th>Bank Name</th>
          <th>Account Number</th>
          <th>Balance</th>
        </tr>
      </table>
      <div id ="groupedChart">
        <GroupedBar/>
      </div>
      </td>
    </tr>
    </table>
    </div>
  )
}
export default App;

