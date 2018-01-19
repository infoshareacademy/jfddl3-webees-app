import React from 'react';
import {BarChart, Bar} from 'recharts';

const data = [
      {name: 'Dystans_1', uv: 1500, pv: 2400, amt: 2400},
      {name: 'Dystans_2', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Dystans_3', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Dystans_4', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Dystans_5', uv: 1600  , pv: 4000, amt: 2300},
];

const NewBarChart = () => {
    return (
        <BarChart width={450} height={400} data={data}>
            <Bar dataKey='uv' fill='#8884d8'/>
            <Bar dataKey='pv' fill='red'/>
        </BarChart>
    )
};



export default NewBarChart;