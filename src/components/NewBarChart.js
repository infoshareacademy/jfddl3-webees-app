import React from 'react';
import {render} from 'react-dom'
import {BarChart, CartesianGrid, XAxis, YAxis, Bar} from 'recharts';

const data = [
    {
        time: "MON",
        users: 1,
    },
    {
        time: "TUE",
        users: 2,
    },{
        time: "WED",
        users: 5,
    },
    {
        time: "THUR",
        users: 4,
    },
    {
        time: "FRI",
        users: 8,
    }
    ,
    {
        time: "SAT",
        users: 4,
    },
    {
        time: "SUN",
        users: 10,
    }
]

const NewBarChart = () => (
    <div>
        <h2>Ilość zalogowanych użytkowników</h2>
    <div style={{width: '100vw', height: '100vh'}}>
        <BarChart width={300} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Bar label={true} dataKey="users" fill="blue" />
        </BarChart>
    </div>
    </div>
);


export default NewBarChart;