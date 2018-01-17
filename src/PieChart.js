import React from 'react';
import { PieChart as RePieChart, Pie, Tooltip }  from 'recharts'

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

const PieChart = () => (
    <div id="root">
        <RePieChart width={500} height={500}>

            <Pie

                data={data}
                dataKey="value"
                nameKey="name"
                fill='blue'
            />
            <Tooltip/>
        </RePieChart>
    </div>
);

export default PieChart;