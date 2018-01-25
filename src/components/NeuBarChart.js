
export default NeuBarChartimport React from 'react';
import {BarChart as ReBarChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar} from 'recharts';

const data = [
    {name: 'Dystans_1', uv: 1500},
    {name: 'Dystans_2', uv: 2000},
    {name: 'Dystans_3', uv: 2780},
    {name: 'Dystans_4', uv: 1890},
    {name: 'Dystans_5', uv: 1600},
];


const NeuBarChart = () => {
    return (
        <div>
            <ReBarChart width={600} height={300} data={data}>
                <XAxis dataKey="name" stroke="#8884d8"/>
                <YAxis/>
                <Tooltip wrapperStyle={{width: 100, backgroundColor: '#ccc'}}/>
                <Legend width={100} wrapperStyle={{
                    top: 40,
                    right: 20,
                    backgroundColor: '#f5f5f5',
                    border: '1px solid #d5d5d5',
                    borderRadius: 3,
                    lineHeight: '40px'
                }}/>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                <Bar type="monotone" dataKey="uv" fill="#8884d8" barSize={30}/>
            </ReBarChart>
        </div>

    )
}
