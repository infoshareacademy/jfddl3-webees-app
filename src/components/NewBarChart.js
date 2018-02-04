import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts'
import styles, { webeesColors } from '../styles'

const NewBarChart = props => (
    <div>
        <div style={styles.flexCenter}>
            <h2 style={styles.webeesFont}>Ilość użytkowników</h2>
            <BarChart width={580} height={400} data={props.data}>
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey="time" />
                <YAxis />
                <Bar
                    label={true}
                    dataKey="users"
                    fill={webeesColors.green}
                />
            </BarChart>
        </div>
    </div>
)

export default NewBarChart