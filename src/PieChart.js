import React from 'react';
import { PieChart as RePieChart, Pie, Tooltip }  from 'recharts'



const data = [
    {
        value: 10,
        name: 'bieg1',
        fill:'lime'

    },
    {
        value: 20,
        name: 'bieg2',
        fill:'yellow'
    },
    {
        value: 20,
        name: 'bieg3',
        fill:'green'
    },
    {
        value: 15,
        name: 'bieg4'
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
            />
            <Tooltip/>
        </RePieChart>
        </div>
    </div>
);

export default PieChart;