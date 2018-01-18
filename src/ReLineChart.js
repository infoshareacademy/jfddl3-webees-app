import React from 'react'
import {LineChart, XAxis, Tooltip, CartesianGrid, Line} from 'recharts'



const data = [
    {name: '0km', uv: 0, pv: 0},
    {name: '5km', uv: 1000, pv: 500},
    {name: '10km', uv: 2780, pv: 1800},
    {name: '15km', uv: 1890, pv: 1000},
    {name: '20km', uv: 1890, pv: 2500},

];

const ReLineChart = () => (
    <div id="chart">
        <LineChart
            width={400}
            height={400}
            data={data}
            margin={{top: 5, right: 10, left: 60, bottom: 5}}
        >
            <XAxis dataKey="name"/>
            <Tooltip/>
            <CartesianGrid stroke="#f5f5f5"/>
            <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0}/>
            <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1}/>
        </LineChart>
    </div>
);

export default ReLineChart;