import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './Chart'
import Data from './Data.json' // import Json data 
import Table from './Table';



// small helping method to change the Date/Time format 
// Date/Time in millisecond to Month/day
let changeTimeFormat = (Data) => {
  let res = [] 
  
  Data.map(obj => {
      var d = new Date(obj.dateTime)
      var day = d.getDay()+1;
      var month = d.getMonth()+1;
      obj.dateTime = month+'/'+day
      res.push(obj)
  })
  return res;
}

function App() {

  return (
    <>
      <h1 className='heading' >WelCome To Citrix</h1>
      <div className='chart' >
        <h3 className='chartHeading' >Citrix Report</h3>
        <Chart data = {changeTimeFormat(Data.defaultReport.items)}/>
      </div>
      <div className="table">
        <Table data = {Data.defaultReport.aggregated.items}/>
      </div>
    </>

  );
}

export default App;
