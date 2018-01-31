import React from 'react';
import { PieChart as RePieChart, Pie, Tooltip }  from 'recharts'
import {userData} from './Dashboard'

const data = [
    {
        value: 13,
        name: 'forest',
        fill:'lime'

    },
    {
        value: 3,
        name: 'city',
        fill:'red'

    }
    ]


const PieChart = () => (
    <div id="root">
        <div>
            <h2>Ilość tras biegowych</h2>
        <RePieChart width={400} height={400}>

            <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                fill='blue'
                label={({payload}) =>`${payload.name} - ${payload.value} km `}
                labelLine={true}
            />
            <Tooltip/>
        </RePieChart>
        </div>
    </div>
);



export default PieChart;