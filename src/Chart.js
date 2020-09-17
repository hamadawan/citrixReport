import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default function Chart (props){

    return (
      <BarChart
        width={1200}
        height={400}
        data={props.data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dateTime" />
        <YAxis unit={'K'}/>
        <Tooltip />
        <Legend />
        <Bar dataKey="category1" stackId="a" fill="#C9CBCF" />
        <Bar dataKey="category2" stackId="a" fill="#36A2EB" />
        <Bar dataKey="category3" stackId="a" fill="#FF6384" />
        <Bar dataKey="category4" stackId="a" fill="#4BC0C0" />
      </BarChart>
    );  
}
