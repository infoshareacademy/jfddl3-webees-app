import React from 'react';
import { render } from 'react-dom';
import { PieChart, Pie, Tooltip }  from 'recharts'

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