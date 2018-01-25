import React from 'react';
import { PieChart as RePieChart, Pie, Tooltip }  from 'recharts'



const data = [
    {
        value: 10,
        name: 'Felin',
        fill:'lime'

    },
    {
        value: 20,
        name: 'Stare Miasto',
        fill:'yellow'
    },
    {
        value: 20,
        name: 'Park Ludowy',
        fill:'green'
    },
    {
        value: 15,
        name: 'Ogród Saski'
    }

]

const PieChart = () => (
    <div id="root">
        <div>
            <h2>Najpopularniejsze trasy</h2>
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