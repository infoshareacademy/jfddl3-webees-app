import React from 'react';
import ReactDOM from 'react-dom'


render()
{
    return (

        <div>
            <LineChart width={730} height={250} data={data}
                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Line type="monotone" dataKey="pv" stroke="#8884d8"/>
                <Line type="monotone" dataKey="uv" stroke="#82ca9d"/>
            </LineChart>
        </div>
    );
}


/*const lineChart = (props.LineChart)

const chart = (props) => (
    render()
)
*/

ReactDOM.render(LineChart)

export default PieChart;
