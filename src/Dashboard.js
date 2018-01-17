import React from 'react';
import {render} from 'react-dom';
import {LineChart}  from 'recharts'


const Dashboard = () => (
        <div>
            Dashboard
        </div>
    )
<LineChart
width={400}
height={400}
data={data}
margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
>
<XAxis dataKey="name" />
    <Tooltip />
    <CartesianGrid stroke="#f5f5f5" />
    <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
<Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
</LineChart>

export default Dashboard;