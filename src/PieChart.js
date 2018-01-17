import React from 'react';
import { render } from 'react-dom';
import { PieChart, Pie, Tooltip }  from 'recharts'

const data = [
    {
        value: 30,
        name: 'biegi'
    },
    {
        value: 40,
        name: 'inne biegi'
    }
]

const App = () => (
    <div id="root">
        <PieChart width={500} height={500}>

            <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                fill="#8884d8"
            />
            <Tooltip/>
        </PieChart>
    </div>
);


render(<App />, document.getElementById('root'));

export default PieChart;