import React from 'react'
import {render} from 'react-dom'
import {BarChart, CartesianGrid, XAxis, YAxis, Bar} from 'recharts'

const NewBarChart = props => (
    <div>
        <h1>Ilość użytkowników</h1>
        <div style={{width: '100vw', height: '100vh'}}>
            <BarChart width={400} height={400} data={props.data}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="time"/>
                <YAxis/>
                <Bar label={true} dataKey="users" fill="blue"/>
            </BarChart>
        </div>
    </div>
)

export default NewBarChart