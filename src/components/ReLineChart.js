import React from 'react'
import {LineChart, XAxis, Tooltip, CartesianGrid, Line} from 'recharts'

const data = [
    {name: '0km', Miest: 0, Las: 0},
    {name: '5km', Miasto: 1000, Las: 500},
    {name: '10km', Miasto: 2780, Las: 1800},
    {name: '15km', Miasto: 1890, Las: 1000},
    {name: '20km', Miasto: 1890, Las: 2500},

];

const ReLineChart = () => (
    <div id="chart">
        <div>
            <h2>Moje trasy</h2>
        <LineChart
            width={400}
            height={400}
            data={data}
            margin={{top: 5, right: 10, left: 60, bottom: 5}}
        >
            <XAxis dataKey="name"/>
            <Tooltip/>
            <CartesianGrid stroke="#f5f5f5"/>
            <Line type="monotone" dataKey="Miasto" stroke="#ff7300" yAxisId={0}/>
            <Line type="monotone" dataKey="Las" stroke="#387908" yAxisId={1}/>
        </LineChart>
        </div>
    </div>
);

export default ReLineChart;