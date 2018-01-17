import React from 'react';
import { LineChart as ReLineChart, XAxis, Tooltip, CartesianGrid, Line }  from 'recharts'

const data = [
    {
        value: 10,
        name: 'bieg1'
    },
    {
        value: 20,
        name: 'bieg2'
    },
    {
        value: 20,
        name: 'bieg3'
    },
    {
        value: 15,
        name: 'bieg4'
    }
]


const LineChart = () => (
    <div>
        <ReLineChart
            width={400}
            height={400}
            data={data}
            margin={{top: 5, right: 20, left: 10, bottom: 5}}
        >
            <XAxis dataKey="name"/>
            <Tooltip/>
            <CartesianGrid stroke="#f5f5f5"/>
            <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0}/>
            <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1}/>
        </ReLineChart>
    </div>
);

export default LineChart;