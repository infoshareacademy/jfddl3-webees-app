import React from 'react';
import {PieChart as RePieChart, Pie, Tooltip} from 'recharts'


const PieChart = props => (
    <div id="root">
        <div>
            <h2>Rodzaje tras biegowych</h2>
            <RePieChart width={450} height={450}>

                <Pie
                    data={props.data}
                    dataKey="value"
                    nameKey="name"
                    fill='blue'
                    label={({payload}) => `${payload.name}`}
                    labelLine={true}
                />
                <Tooltip/>
            </RePieChart>
        </div>
    </div>
);


export default PieChart;