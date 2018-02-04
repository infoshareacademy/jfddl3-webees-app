import React from 'react'
import { render } from 'react-dom'
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts'
import styles, { webeesColors } from '../styles'

// const example = [
//     {
//         'time': 'today',
//         'users': 15,
//     },
//     {
//         'time': 1,
//         'users': 20,
//     }
// ]

const NewBarChart = props => (
    <div>
        <h2 style={styles.font}>Ilość użytkowników</h2>
        <div>
            <BarChart width={400} height={400} data={props.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Bar
                    label={true}
                    dataKey="users"
                    fill={webeesColors.darkGreen}
                />
            </BarChart>
        </div>
    </div>
)

export default NewBarChart